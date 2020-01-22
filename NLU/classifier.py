#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import os
from app import Flask
from flask import request, jsonify
from flask_cors import CORS
from flask_api import status
import tensorflow as tf
from pathlib import Path

from bert.finetuning.predict import Bert
import config

app = Flask(__name__, static_url_path='')
app.static_folder = 'static'
CORS(app)

classifiers = dict()


@app.route('/', methods=['GET'])
def classifier_server():
    return "This is classifier server", status.HTTP_200_OK


@app.route('/get_prediction', methods=['GET'])
def prediction():
    print("Prediction ----- Begin")
    question = request.values.get('question', '')
    device = request.values.get('device', 'chitchat')

    if not question:
        print("there is no question")
        return jsonify({'status': 'error'}), status.HTTP_200_OK

    res = classifiers[device][0].predict(question)[0]
    bert_output = list()
    bert_output.append({
        'qid': str(res['class']),
        'score': str(res['probability']),
    })

    app.logger.info("predictions: %s", res)
    prediction_logging_to_db(question, device, bert_output)

    return jsonify(
        {'predictions': bert_output, 'model_probs': res}), status.HTTP_200_OK


def prediction_logging_to_db(question, device, output):
    insert_query = 'INSERT INTO tbl_prediction_log (question, mecab_result, device, prediction_qid, prediction_score)' \
                   'VALUES ('+question+', %s, %s, %s);'
    insert_value = (device, output[0]['qid'], output[0]['score'])


def init_model(device):
    checkpoint_dir_list = list()
    classifiers[device] = list()

    config_path = os.path.join(config.ROOT, 'checkpoint', device, 'bert_config.json')

    if os.path.exists(config_path):
        config_file = open(config_path)
        bert_config = json.load(config_file)
        if 'model_path' in bert_config:
            for checkpoint_dir in bert_config['model_path']:
                print("load %s" % checkpoint_dir)
                checkpoint_dir_list.append(checkpoint_dir)

    for checkpoint_dir in checkpoint_dir_list:
        bert_base_dir = Path(checkpoint_dir).resolve
        init_config = {
            'max_seq_length': 128,
            'func_model_dir': bert_base_dir
        }
        with tf.Graph().as_default():
            bert = Bert(init_config)
        classifiers[device].append(bert)

    print(device + " classifiers loaded : %d" % len(classifiers[device]))


def initialize():
    init_model("baby")


if __name__ == '__main__':
    initialize()
    app.run(host='0.0.0.0', port=config.CLASSIFY_BERT_SERVER_PORT, debug=config.SERVER_DEBUG_MODE)

'''
if __name__ != '__main__':
    initialize()
    gunicorn_logger = logging.getLogger('gunicorn.error')
    app.logger.handlers = gunicorn_logger.handlers
'''
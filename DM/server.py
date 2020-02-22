#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from app import Flask
from flask import request, jsonify
from flask_cors import CORS
from flask_api import status
import requests
import json

import config

app = Flask(__name__, static_url_path='')
app.static_folder = 'static'
CORS(app, resources={r'*': {'origins': '*'}})

contents_obj = dict()


@app.route('/', methods=['GET'])
def classifier_server():
    return "This is DM server", status.HTTP_200_OK


@app.route('/get_content', methods=['GET'])
def get_content():
    question = request.values.get('question', '')
    print(question)
    if question is '':
        class_id = request.values.get('classID', '0')
        chip = request.values.get('chip', '0')
    else:
        class_id, confidence = get_prediction(question)
        chip = '0';

    content = get_content(class_id, chip)

    return jsonify(
        {'content': content}), status.HTTP_200_OK


def get_prediction(question):
    str_header = {"content-type": "application/x-www-form-urlencoded; charset=UTF-8"}
    dic_param = dict(question=question, device="baby")

    str_url = config.CLASSIFY_SERVER_URL

    n_timeout_sec = 5
    try:
        str_result = requests.request("GET", url=str_url, params=dic_param, headers=str_header, timeout=n_timeout_sec,
                                      verify=False)
        str_result.raise_for_status()
    except Exception as err:
        print("- Exception: {0}".format(err))

    if str_result is None:
        return '0', '0'

    print(str_result.content)
    str_result = str_result.content
    dic_result = json.loads(str_result.decode('utf-8'))
    if len(dic_result["predictions"]) == 0:
        return '0', '0'
    dic_prediction = dic_result["predictions"][0]
    n_class_id = dic_prediction["qid"]
    f_confidence = dic_prediction["score"]

    return n_class_id, f_confidence


def get_content(class_id, chip):
    print(contents_obj["contents"][class_id][chip])
    return contents_obj["contents"][class_id][chip]


def load_contents():
    global contents_obj
    with open('contents/contents.json') as json_file:
        contents_obj = json.load(json_file)


def initialize():
    load_contents()


if __name__ == '__main__':
    initialize()
    app.run(host='0.0.0.0', port=config.SERVER_PORT, debug=config.SERVER_DEBUG_MODE)
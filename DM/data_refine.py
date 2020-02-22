import csv

f = open('./data/boy_tall.tsv', 'r', encoding='utf-8')
rdr = csv.reader(f, delimiter='\t')
boy_tall = list(rdr)

f = open('./data/boy_weight.tsv', 'r', encoding='utf-8')
rdr = csv.reader(f, delimiter='\t')
boy_weight = list(rdr)

f = open('./data/boy_head.tsv', 'r', encoding='utf-8')
rdr = csv.reader(f, delimiter='\t')
boy_head = list(rdr)

f = open('./data/girl_tall.tsv', 'r', encoding='utf-8')
rdr = csv.reader(f, delimiter='\t')
girl_tall = list(rdr)

f = open('./data/girl_weight.tsv', 'r', encoding='utf-8')
rdr = csv.reader(f, delimiter='\t')
girl_weight = list(rdr)

f = open('./data/girl_head.tsv', 'r', encoding='utf-8')
rdr = csv.reader(f, delimiter='\t')
girl_head = list(rdr)

str_percent = ['1', '3', '5', '10', '15', '25', '50', '75', '85', '90', '95', '97', '99']

boy_data = list()
for i in range(13):
    str_temp = '## 신체 성장 표준치 \\n ### 남아 ' + str(i) + '개월 \\n |백분위수|몸무게(kg)|키(cm)|머리둘레(cm)| \\n |:-:|:-:|:-:|:-:| \\n '
    for j in range(13):
        str_temp += str_percent[j] + '|' + boy_weight[i][j] + '|' + boy_tall[i][j] + '|' + boy_head[i][j] + '| \\n '
    boy_data.append(str_temp)

girl_data = list()
for i in range(13):
    str_temp = '## 신체 성장 표준치 \\n ### 여아 ' + str(i) + '개월 \\n |백분위수|몸무게(kg)|키(cm)|머리둘레(cm)| \\n |:-:|:-:|:-:|:-:| \\n '
    for j in range(13):
        str_temp += str_percent[j] + '|' + girl_weight[i][j] + '|' + girl_tall[i][j] + '|' + girl_head[i][j] + '| \\n '
    girl_data.append(str_temp)

print(boy_data)
print(girl_data)


f = open('./data/data.txt', 'a', encoding='utf-8')
for str in boy_data:
    f.write(str)
    print(str)
    f.write('\n')
for str in girl_data:
    f.write(str)
    print(str)
    f.write('\n')


f.close()
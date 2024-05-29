from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=['http://localhost:5173'])

@app.route('/', methods=['GET'])
def hello():
  return jsonify({"message": 'it works'})

@app.route('/segitiga', methods=['POST'])
def generateSegitiga():
  angkaReq = request.json['angka']
  segitiga = []
  angkaStr = str(angkaReq)
  count = '0';
  for i in angkaStr:
    segitiga.append(i+count)
    count+='0'
  return jsonify({"message": segitiga})

@app.route('/ganjil', methods=['POST'])
def generateGanjil():
  angka = request.json['angka']
  ganjil = []
  for i in range(1, angka):
    if i % 2 != 0:
      ganjil.append(i)
  return jsonify({"message": ganjil})

@app.route('/prima', methods=['POST'])
def generatePrima():
  angka = request.json['angka']
  prima = []
  for i in range(1, angka):
    count = 0
    for j in range(1, i):
      if i % j == 0:
        count+= 1
    if count == 1:
      prima.append(i)
  return jsonify({"message": prima})
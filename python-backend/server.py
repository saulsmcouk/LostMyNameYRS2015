from flask import Flask, request

import database

app = Flask(__name__)

@app.route('/')
def index():
    return "LocationServer"

@app.route('/login')
def login():
    return False

@app.route('/offer/add', methods=['POST'])
def offer_add():

    if (request.form['title'] and request.form['username'] and request.form['description'] and request.form['coords']):
        error = 'none'
    else:
        error = 'Bad api call'

    return "offer add"

@app.route('/offer/get/id')
def offer_get_id():
    return False

@app.route('/offer/get/near_me/<coords>')
def offer_near_me(coords):

    coords = coords.split(',')

    lat = coords[0]
    lng = coords[1]

    return "get near me"

@app.route('/message/send', methods=['POST'])
def message_send():
    return False

@app.route('/message/inbox')
def message_inbox():
    return False

@app.route('/message/read', methods=['POST'])
def message_read():
    return False

if __name__ == '__main__':
    app.run(host='192.168.56.102',port=5000,debug=True)

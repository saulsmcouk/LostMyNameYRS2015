from flask import Flask, request

import sys_modules.database as db

import api_modules.offer
import api_modules.message
import api_modules.login

app = Flask(__name__)

@app.route('/')
def index():
    return "LocationServer"

@app.route('/login')
def login():
    return False

@app.route('/offer/add', methods=['POST'])
def offer_add():

    return api_modules.offer.offer_add(request)

@app.route('/offer/get/id')
def offer_get_id():

    return api_modules.offer.offer_get_id(request)

@app.route('/offer/done')
def offer_get_id():
    
    return api_modules.offer.offer_mark_as_done(request)

@app.route('/offer/get/near_me/<coords>')
def offer_near_me(coords):

    return api_modules.offer.offer_get_near_me(request, coords)

@app.route('/message/send', methods=['POST'])
def message_send():

    return api_modules.message.message_send(request)

@app.route('/message/inbox')
def message_inbox():

    return api_modules.message.message_inbox(request)

@app.route('/message/read', methods=['POST'])
def message_read():

    return api_modules.message.read(request)

ipting = open('ip.txt','r')
ipforserver = ipting.readline()
if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000,debug=True)

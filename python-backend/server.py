from flask import Flask, request

import sys_modules.database as db

import api_modules.offer

app = Flask(__name__)

@app.route('/')
def index():
    return "LocationServer"

@app.route('/login')
def login():
    return False

@app.route('/offer/add', methods=['POST'])
def offer_add():

    return api_modules.offer.offer_add()

@app.route('/offer/get/id')
def offer_get_id():

    return api_modules.offer.offer_get_id()

@app.route('/offer/get/near_me/<coords>')
def offer_near_me(coords):

    return api_modules.offer.offer_get_near_me()

@app.route('/message/send', methods=['POST'])
def message_send():

    return api_modules.message.message_send()

@app.route('/message/inbox')
def message_inbox():

    return api_modules.message.inbox()

@app.route('/message/read', methods=['POST'])
def message_read():

    return api_modules.message.read()

ipting = open('ip.txt','r')
ipforserver = ipting.readline()
if __name__ == '__main__':
    app.run(host=ipforserver,port=5000,debug=True)

from flask import Flask

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
    return False

@app.route('/offer/get/id')
def offer_get_id():
    return False

@app.route('/offer/get/near_me/<coords>')
def offer_near_me(coords):
    return False

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
    app.run(debug=True)

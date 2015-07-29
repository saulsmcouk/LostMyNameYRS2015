import flask
from flask.ext.cors import CORS

import os
import sys_modules.database as db

import api_modules.offer
import api_modules.message
import api_modules.login

app = flask.Flask(__name__, static_folder='files')
cors = CORS(app);

@app.route('/')
def index():
    return flask.render_template('index.html')

@app.route('/files/<path:filename>')
def send_js(filename):
    return flask.send_from_directory(app.static_folder, filename)

@app.route('/login')
def login():
    return False

@app.route('/offer/add', methods=['POST'])
def offer_add():

    return api_modules.offer.offer_add(flask.request)

@app.route('/offer/get/id')
def offer_get_id():

    return api_modules.offer.offer_get_id(flask.request)

@app.route('/offer/done', methods=['POST'])
def offer_done():

    return api_modules.offer.offer_done(flask.request)

@app.route('/offer/get/near_me/<coords>')
def offer_near_me(coords):

    return api_modules.offer.offer_get_near_me(flask.request, coords)

@app.route('/message/send', methods=['POST'])
def message_send():

    return api_modules.message.message_send(flask.request)

@app.route('/message/inbox')
def message_inbox():

    return api_modules.message.message_inbox(flask.request)

@app.route('/message/read', methods=['POST'])
def message_read():

    return api_modules.message.message_read(flask.request)

if __name__ == '__main__':
   # Bind to PORT if defined, otherwise default to 5000.
   port = int(os.environ.get('PORT', 5000))
   app.run(host='0.0.0.0', port=port)

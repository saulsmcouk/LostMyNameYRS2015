import json
import sys_modules.database as db

def message_send(request):
    message_stuff = request.form#.getlist('l')[0]
    message = {
        'to':  message_stuff.getlist('to'),
        'from': message_stuff.getlist('from'),
        'content': message_stuff.getlist('content')
    }
    db.db_insert("messages",message)
    return "Message Sent"

def message_inbox(request):
    """Request needs a username, returns an array of messages"""
    username = request.form.getlist('username')[0]
    #The messages to a, the person requesting. The request should be in hte username header.
    all_messages = db.db_find("messages",{'to':username})
    
    for message in all_messages:
        message['_id'] = str(message['_id'])
    
    return json.dumps(all_messages)

def message_read(request):
    """Requires you to pass the message _id"""
    message_id = request.form.getlist('id')[0]
    
    db_update(messages, message_id, ["read","true"])
    return "done"
    
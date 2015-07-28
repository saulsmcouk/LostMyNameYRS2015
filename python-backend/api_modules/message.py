import sys_modules.database as db

def message_send(request):
    message_stuff = request.form#.getlist('l')[0]
    message = {
                            'to':  message_stuff.getlist('to'),
                            'from': message_stuff.getlist('from'),
                            'content': message_stuff.getlist('content')}
    db.db_insert("messages",message)
    return "Message Sent"
def message_inbox(request):
    """Request needs a username, returns an array of messages"""
    stuff = []
    all_messages = db.db_find("messages",{'to':'a'})
    for slug,title in all_messages.items():
        stuff.append(str(slug+" "+title))
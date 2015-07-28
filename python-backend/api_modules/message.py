import sys_modules.database as db

def message_send(request):
    message_stuff = request.args#.getlist('l')[0]
    message = {
                            'to':  message_stuff.getlist('to'),
                            'from': message_stuff.getlist('from'),
                            'content': message_stuff.getlist('content')}
    db.db_insert("messages",message)
    return str(message)

from clockwork import clockwork
from pprint import pprint

api = clockwork.API('4d377b576ea0eff6f4a0be8248e57c5e12b27798')

def send_sms(number, msg):
    message = clockwork.SMS(
    to = number,
    message = msg)

    response = api.send(message)

    if response.success:
        print (response.id)
    else:
        print ("there was an error")
        print (response.error_code)
        pprint (dir(response))

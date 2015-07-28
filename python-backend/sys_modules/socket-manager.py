import socket
#import the modules
s = socket.socket()
host = socket.gethostname() #For now
port = 9001
s.bind((host, port))
s.listen(5)
while True:
   c, addr = s.accept()
   #print 'Got connection from', addr
   #Process
   c.send('bobicon')
   phrase = c.recv(1024)
   if(phrase == "login"):
      #recv some login stuff
   if(phrase == "add")
      #recv+work some add stuff

   print phrase
   c.close()

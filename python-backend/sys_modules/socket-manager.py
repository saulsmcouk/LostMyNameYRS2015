import socket
#import the modules
the_socket = socket.socket()
host = socket.gethostname() #For now
port = 9001
the_socket.bind((host, port))
the_socket.listen(5)
while True:
   connection, addr = the_socket.accept()
   #print 'Got connection from', addr
   #Process
   connection.send('bobicon')
   phrase = connection.recv(1024)
   if(phrase == "login"):
      #recv some login stuff
   if(phrase == "add")
      #recv+work some add stuff

   print phrase
   connection.close()

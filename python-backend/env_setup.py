import sys_modules.database as database

from pymongo import MongoClient

if database.uri:
  print "skip destroying db"
else:
  print "destroying db"
  c = MongoClient()
  c.drop_database('community')

# Insert admin user
database.db_insert( 'users', {'username': 'admin'} )

database.db_insert( 'offers', {'title': 'Loads of spare curries', 'description': "Come and get them", 'location': [51.60, 0.112], 'username': 'admin'});

database.db_insert( 'offers', {'title': 'Fresh fruit and veg from greengrocer', 'description': "Come and get them", 'location': [51.40, 0.22], 'username': 'admin'});

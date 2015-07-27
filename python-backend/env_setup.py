import database

from pymongo import MongoClient

c = MongoClient()
c.drop_database('community')

# Insert admin user
database.db_insert( 'users', {'username': 'admin'} )


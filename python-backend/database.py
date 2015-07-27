from pymongo import MongoClient

client = MongoClient()

client = MongoClient('localhost', 27017)

# `community` database
db = client.community;

# Database find wrapper

def db_find( db_collection, db_query, find_one = False ):

  # Get collection
  collection = db[db_collection]

  if (find_one):
    result = collection.find(db_query)
  else:
    result = collection.find_one(db_query)

  return result;

# Database insert wrapper

def db_insert( db_collection, db_object ):

  # Get collection
  collection = db[db_collection]

  insert_id = collection.insert_one(db_object)

  return insert_id;

# Database update wrapper

# @todo

# Database remove wrapper

# @todo

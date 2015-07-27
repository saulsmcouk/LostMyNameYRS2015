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

# Database update wrapper

# Database remove wrapper

print db_find('test', {'name': 'test'})

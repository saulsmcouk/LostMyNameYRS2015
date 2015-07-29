import os
from pymongo import MongoClient

client = MongoClient()

uri = os.environ.get('MONGOLAB_URI')
if (uri):
    client = MongoClient(uri)
else:
    client = MongoClient('localhost', 27017)

# `community` database
db = client.community;

# Database find wrapper

def db_find( db_collection, db_query, find_one = False ):

    # Get collection
    collection = db[db_collection]

    result = []

    if (find_one == True):
        result[0] = collection.find_one(db_query)
    else:
        cur = collection.find(db_query)

        for doc in cur:
            result.append(doc)

    return result;

# Database insert wrapper

def db_insert( db_collection, db_object ):

    # Get collection
    collection = db[db_collection]

    insert_id = collection.insert_one(db_object).inserted_id

    return insert_id;

# Database update wrapper
def db_update( db_collection, db_query, db_update ):
    collection = db[db_collection]

    update = collection.update(db_query, db_update);

    return update;

# Database remove wrapper

def db_remove(db_collection, doc_identifier, just_one = False):

    collection = db[db_collection]
    if not just_one:
        collection.remove(doc_identifier)

    else:
        collection.remove(doc_identifier,1)

    return "ok"

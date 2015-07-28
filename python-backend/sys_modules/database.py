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

    insert_id = collection.insert_one(db_object).inserted_id

    return insert_id;

# Database update wrapper
def db_update( db_collection, doc_identifier, doc_tbc ):
    collection = db[db_collection]
    """Update doc_identifier[{0:1}]'s doc_tbc[0] with doc_tbc[1]"""
    collection = db[db_collection]
    collection.update_one(
        {doc_identifier[0]:doc_identifier[1]},
        {
        "$set":{
                doc_tbc[0]:doc_tbc[1]
            },
        "$currentDate": {"lastModified": True}
        }
    )

# @todo

# Database remove wrapper

# @todo

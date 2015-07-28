import json
import pymongo
import sys_modules.database as db
from bson.objectid import ObjectId

def offer_add(request):
    coords = request.form.getlist('location')[0].split(',')
    coords_array=[coords[0],coords[1]]
    offer= {
        'title': request.form.getlist('title')[0],
        'description': request.form.getlist('description')[0],
        'username': request.form.getlist('username')[0],
        'ttl': request.form.getlist('ttl')[0],
        'location': coords_array
    }
    
    return db.db_insert('offers',offer)

def offer_get_id(request):
    returns = db.db_find('offers', {
        '_id': ObjectId(request.args.getlist('id')[0])
    })
    
    for item in returns:
        item['_id'] = str(item['_id'])
    
    return json.dumps(returns)

def offer_get_near_me(request, coords):
    coords = coords.split(',')
    
    lat = coords[0]
    lng = coords[1]

    return "get near me"

def offer_done(request):
    """Deletes the passed offer. Requires the offer id to be passed."""
    db.db_remove('offers', request.form.getlist("id")[0], True)
    return "did it"
    
    
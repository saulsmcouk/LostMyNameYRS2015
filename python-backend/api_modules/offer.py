def offer_add(request):
    print request.form
    return "offer add"

def offer_get_id(request):
    return "offer get id"

def offer_get_near_me(request, coords):
    coords = coords.split(',')

    lat = coords[0]
    lng = coords[1]

    return "get near me"
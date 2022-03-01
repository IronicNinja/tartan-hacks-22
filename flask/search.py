import requests

def searchAttractions(query):
    r = requests.get(f"https://maps.googleapis.com/maps/api/place/textsearch/json?query={query}" +
                        "&key=API_KEY")

    x = r.json()
    y = x['results']
    addressList = []
    namesList = []
    for d in y:
        addressList.append(d['formatted_address'])
        namesList.append(d['name'])
    return {"addressList": addressList, "namesList": namesList}
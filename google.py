import requests

query = input("Search query: ")
r = requests.get(f"https://maps.googleapis.com/maps/api/place/textsearch/json?query={query}" +
                    "&key=AIzaSyDS8EO2kPJRyO53obnUXT7UjS4GjcX8dI0")

x = r.json()
y = x['results']
for d in y:
    print(d['name'], d['formatted_address'])

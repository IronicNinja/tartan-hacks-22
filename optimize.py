import googlemaps

gmaps = googlemaps.Client(key='AIzaSyDS8EO2kPJRyO53obnUXT7UjS4GjcX8dI0')

waypoints = ["500 Sampsonia Way, Pittsburgh, PA 15212, United States",
"4400 Forbes Ave, Pittsburgh, PA 15213, United States"]

results = gmaps.directions(
        origin="5032 Forbes Ave, Pittsburgh, PA 15213, United States",
        destination="1 Allegheny Ave, Pittsburgh, PA 15212, United States",                                     
        waypoints=waypoints,
        optimize_waypoints = True
    )

optimizedRoute = ""
for i, leg in enumerate(results[0]["legs"]):
    l = len(results[0]["legs"])
    if(i != 0 and i != l - 1):
        optimizedRoute += (leg['start_address'] + ("|" if i != l - 2 else ""))
print(optimizedRoute)

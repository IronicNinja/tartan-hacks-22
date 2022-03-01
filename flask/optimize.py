import googlemaps

gmaps = googlemaps.Client(key='API_KEY')

def optimizeWaypoints(waypointsList, origin, destination):
    waypointsString = "|".join(waypointsList)
    results = gmaps.directions(
            origin=origin,
            destination=destination,                                     
            waypoints=waypointsString,
            optimize_waypoints = True
        )

    optimizedRoute = ""
    for i, leg in enumerate(results[0]["legs"]):
        l = len(results[0]["legs"])
        if(i != 0 and i != l - 1):
            optimizedRoute += (leg['start_address'] + ("|" if i != l - 2 else ""))
    return optimizedRoute

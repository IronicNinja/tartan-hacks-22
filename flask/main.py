from flask import Flask, render_template, request
from optimize import optimizeWaypoints
from search import searchAttractions

app = Flask(__name__)
origin="5032 Forbes Ave, Pittsburgh, PA 15213, United States"
destination="1 Allegheny Ave, Pittsburgh, PA 15212, United States"

@app.route('/', methods=['GET', 'POST'])
def main():
    addressList = []
    namesList = []
    if request.method == 'POST':
        form_data = request.form
        attractionList = searchAttractions(form_data['query'])
        addressList = attractionList['addressList']
        namesList = attractionList['namesList']
    optimizedRoute = optimizeWaypoints(addressList, origin, destination)
    print(namesList)
    return render_template('home.html', waypoints=optimizedRoute, names=namesList)
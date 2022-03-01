import fetch from "node-fetch";
globalThis.fetch = fetch


let url = `https://maps.googleapis.com/maps/api/directions/json?
&origin=5032 Forbes Ave, Pittsburgh, PA 15213, United States
&destination=1 Allegheny Ave, Pittsburgh, PA 15212, United States
&waypoints=optimize:true|500 Sampsonia Way, Pittsburgh, PA 15212, United States|4400 Forbes Ave, Pittsburgh, PA 15213, United States"
&key=API_KEY`

fetch(url).then(
    data=>console.log(data))
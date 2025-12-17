import json

# iwr -UseBasicParsing "https://www.wikiart.org/en/App/Painting/MostViewedPaintings?offset=0&quantity=1000&limit=1000&json=2"

with open('artwork1.json') as f:
    a = json.load(f)

a = list(map(lambda x: [x["title"], x["artistName"], x["completitionYear"], x["image"]], a))

with open('artwork2.json', 'w') as f:
    json.dump(a, f)
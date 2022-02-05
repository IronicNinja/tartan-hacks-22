from bs4 import BeautifulSoup as soup
from urllib.request import Request, urlopen

fname = f'https://www.getyourguide.com/en-US/s/?q=New%20York%20City&lc=l59&searchSource=6&collectionId=357523fd-8501-4415-81c1-b2df5280408b'
req = Request(fname, headers={'User-Agent': 'Mozilla/5.0'})
webpage = urlopen(req)
page_soup = soup(webpage, "html.parser")
containers = page_soup.findAll("div", {"class": "activity-card__details"})
for i in range(20):
    print(containers[i].h2.text.strip().replace("\n", ""))
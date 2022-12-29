import json
import pymongo
import requests
from dotenv import load_dotenv


load_dotenv()


myclient = pymongo.MongoClient(
    "mongodb+srv://test:test@cluster0.jzrsc.mongodb.net/?retryWrites=true&w=majority")
mydb = myclient["euh"]
mycol = mydb["api_categories"]


r = requests.get('https://world.openfoodfacts.org/categories.json').json()
tags = r['tags']

for i in tags:
    mydict = {"id_catego": i["id"], "name": i["name"],
              "products": i["products"], "url": i['url'], "sameAs": ''}
    x = mycol.insert_one(mydict)

print('done brothers !!!')
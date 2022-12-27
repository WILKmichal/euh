import requests
import pymongo

myclient = pymongo.MongoClient("mongodb+srv://test:test@cluster0.jzrsc.mongodb.net/?retryWrites=true&w=majority")
mydb = myclient["euh"]
mycol = mydb["api_users"]


r = requests.get('https://world.openfoodfacts.org/categories.json').json()
tags = r['tags']
mydict = { "name": "John", "address": "Highway 37" }
x = mycol.insert_one(mydict)
print(r['tags'][0])



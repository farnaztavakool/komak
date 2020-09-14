#!/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
import requests
from bs4 import BeautifulSoup
import json 

url = "https://www.9news.com.au/covid-19"
page = requests.get(url)
json_file = open("../client/src/data.json","w+")

soup = BeautifulSoup(page.content,'html.parser')
content = soup.find_all("div",class_="story__wrapper")
li = []
for i in content:

    new_data = {}

    data = i.find('span', class_="story__headline__text") 
    new_data['title'] = data.text

    data = i.find('div',class_="story__abstract" )
    new_data['body'] = data.text

# searching withing a tage 
# https://stackoverflow.com/questions/57395509/get-item-from-bs4-element-tag
    data = i.find('img')
    new_data['image_url'] = data['src']

# difference between dump and dumps
# https://stackoverflow.com/questions/36059194/what-is-the-difference-between-json-dump-and-json-dumps-in-python
    li.append(new_data)

json.dump(li, json_file)

json_file.close()
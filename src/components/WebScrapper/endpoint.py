# import requests
# from bs4 import BeautifulSoup
# url = 'https://pk.indeed.com/jobs?q=reactjs+developer&l=lahore&from=searchOnHP&vjk=93f28d2bdecad8ac'
# # url = 'https://www.ebay.com/itm/134638042371?_trkparms=pageci%3A09603ec5-6439-11ee-8e2b-46d9acd753a9%7Cparentrq%3A04af0bfe18b0ad88617f390dffff6dca%7Ciid%3A1&var=434175605789'
# def find_data(URL):
#     r = requests.get(URL, headers=headers)
#     if r.status_code == 200:
#         soup = BeautifulSoup(r.content, "html.parser")
#         # title_element = soup.find('h1', class_='lh-copy dark-gray mv1 f3 mh0-l mh3 b')
#         title_element = soup.find(class_='jobsearch-JobInfoHeader-title css-161nklr e1tiznh50')
#         print("Title:", title_element)
#         # price_element = soup.find('span', class_='inline-flex flex-column')

#         if title_element:
#             title_text = title_element.text.strip()
#             print("Title:", title_text)
#         else:
#             print("Title element with class 'B_NuCI' not found on the page.")

#         # if price_element:
#         #     price_text = price_element.text.strip()
#         #     print("Price:", price_text)
#         # else:
#         #     print("Price element with class '_30jeq3 _16Jk6d' not found on the page.")
#     else:
#         print("Failed to retrieve the page. Status code:", r.status_code)

# find_data(url)



import requests
from bs4 import BeautifulSoup

url = 'https://www.aliexpress.com/item/4000351427601.html?spm=a2g0o.home.moretolove.3.b9af2145pjJUR1&gps-id=pcJustForYou&scm=1007.13562.357122.0&scm_id=1007.13562.357122.0&scm-url=1007.13562.357122.0&pvid=d3e0e9a3-d1d8-4554-815c-b312dd8db281&_t=gps-id:pcJustForYou,scm-url:1007.13562.357122.0,pvid:d3e0e9a3-d1d8-4554-815c-b312dd8db281,tpp_buckets:668%232846%238112%231997&pdp_npi=4%40dis%21PKR%213287.11%212071.45%21%21%2111.60%21%21%40210324e516965900009746686eff1a%2112000023685325750%21rec%21PK%212805706967%21AB'
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')
print(soup.prettify());


# title_element = soup.find('h1', class_='lh-copy dark-gray mv1 f3 mh0-l mh3 b')  # Corrected the tag and class
# if title_element:
#     title_text = title_element.text.strip()
#     print("Title:", title_text)
# else:
#     print("Title element not found on the page.")

# headlines = soup.find('body').find_all('lh-copy dark-gray mv1 f3 mh0-l mh3 b') 



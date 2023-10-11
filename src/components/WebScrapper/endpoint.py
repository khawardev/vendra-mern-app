import requests
from bs4 import BeautifulSoup
# url = 'https://www.ebay.com/b/iPhone-11/9355/bn_'
url = 'https://www.ebay.com/itm/134638042371?_trkparms=pageci%3A09603ec5-6439-11ee-8e2b-46d9acd753a9%7Cparentrq%3A04af0bfe18b0ad88617f390dffff6dca%7Ciid%3A1&var=434175605789'
def find_data(URL):
    r = requests.get(URL, headers=headers)
    if r.status_code == 200:
        soup = BeautifulSoup(r.content, "html.parser")
        # title_element = soup.find('h1', class_='lh-copy dark-gray mv1 f3 mh0-l mh3 b')
        title_element = soup.find(class_='bhp__title')
        print("Title:", title_element)
        # price_element = soup.find('span', class_='inline-flex flex-column')

        if title_element:
            title_text = title_element.text.strip()
            print("Title:", title_text)
        else:
            print("Title element with class 'B_NuCI' not found on the page.")

        # if price_element:
        #     price_text = price_element.text.strip()
        #     print("Price:", price_text)
        # else:
        #     print("Price element with class '_30jeq3 _16Jk6d' not found on the page.")
    else:
        print("Failed to retrieve the page. Status code:", r.status_code)

find_data(url)



# import requests
# from bs4 import BeautifulSoup

# url = 'https://www.ebay.com/b/iPhone-11/9355/bn_'
# response = requests.get(url)
# soup = BeautifulSoup(response.content, 'html.parser')
# print(soup.prettify());


# title_element = soup.find('h1', class_='lh-copy dark-gray mv1 f3 mh0-l mh3 b')  # Corrected the tag and class
# if title_element:
#     title_text = title_element.text.strip()
#     print("Title:", title_text)
# else:
#     print("Title element not found on the page.")

# headlines = soup.find('body').find_all('lh-copy dark-gray mv1 f3 mh0-l mh3 b') 



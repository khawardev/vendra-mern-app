import requests
from bs4 import BeautifulSoup
# response = requests.get(url)
# soup = BeautifulSoup(response.content, 'html.parser')
# print(soup.prettify());

url = 'https://www.alibaba.com/product-detail/P8668i-DP4801e-walkie-talkie-long-range_1600740718350.html?spm=a2700.galleryofferlist.p_offer.d_image.5c262bccU4RWml&s=p'
# title_element = soup.find( class_='product-title')

# url = 'https://www.ebay.com/b/Jordan-1-Retro-OG-High-UNC-Toe/15709/bn_7119139207'
# title_element = soup.find('h1', class_='bhp__title')

def find_data(URL):
    headers = {"User-Agent": "Defined"}
    r = requests.get(URL, headers = headers)

    if r.status_code == 200:
        soup = BeautifulSoup(r.content, "html.parser")
        title_element = soup.find( class_='price')


        # price_element = soup.find('div', class_='x-price-primary')
        # Refurbished_element = soup.find( class_='ux-icon-text__text')

       

        if title_element:
            title_text = title_element.text.strip()
            print("Title:", title_text)
        else:
            print("Title element with class 'B_NuCI' not found on the page.")

        # if Refurbished_element:
        #     Refurbished_text = Refurbished_element.text.strip()
        #     print("Refurbished_text:", Refurbished_text)
        # else:
        #     print("Title element with class 'B_NuCI' not found on the page.")

        # if price_element:
        #     price_text = price_element.text.strip()
        #     print("Price:", price_text)
        # else:
        #     print("Price element with class '_30jeq3 _16Jk6d' not found on the page.")
    else:
        print("Failed to retrieve the page. Status code:", r.status_code)

find_data(url)

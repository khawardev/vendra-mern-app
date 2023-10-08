import requests
from bs4 import BeautifulSoup
url = 'https://www.flipkart.com/samsung-24-inch-full-hd-led-backlit-ips-panel-3-sided-borderless-display-game-free-sync-mode-eye-saver-mode-flicker-monitor-ls24c310eawxxl/p/itm0d866ef2b889d?pid=MONFYGGACKSJX4MS&lid=LSTMONFYGGACKSJX4MSSUIOO3&marketplace=FLIPKART&store=6bo%2Fg0i%2F9no&srno=b_1_1&otracker=browse&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&fm=organic&iid=en_kr3HTet-ei5plb3oQOksulXzNqllmAXCsBkXzZgMOO7A1Hh9T0oJ-4W0np3NpABprqvMNimkIbuEKibxOUMvsQ%3D%3D&ppt=hp&ppn=homepage&ssid=tkcnwyyhl9305zpc1696588834178'
response = requests.get(url)
if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    price_element = soup.find('div', class_='_30jeq3 _16Jk6d')
    if price_element:
        price_text = price_element.text
        print("price:", price_text)
    else:
        print("price element with class 'yhB1nd' not found on the page.")
else:
    print("Failed to retrieve the page. Status code:", response.status_code)

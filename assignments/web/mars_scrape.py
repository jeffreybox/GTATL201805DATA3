# THE MARS PYTHON SCRAPER
    # Jeff Box: 2018
    # This code creates a method that runs 5 unique web scrapes to gain urls and information that will be passed into a Flask webapp
    # https://splinter.readthedocs.io/en/latest/drivers/chrome.html

# Dependencies
from bs4 import BeautifulSoup
import requests
import pandas as pd
from splinter import Browser
from splinter.exceptions import ElementDoesNotExist
import time

print("Standby: scraping takes about 60 seconds")

def init_browser():
    #!which chromedriver
    executable_path = {'executable_path': '/usr/local/bin/chromedriver'}
    return Browser('chrome', **executable_path, headless=False)

def scrape():
    # Scrape 1: Getting the headlines
    browser = init_browser()
    url = 'https://mars.nasa.gov/news/'
    browser.visit(url)
    time.sleep(3)
    soup = BeautifulSoup(browser.html, 'lxml')
    # scrape
    title = soup.find('li', {'class':'slide'}).find('div', {'class':'content_title'}).text
    headline = soup.find('li', {'class':'slide'}).find('div', {'class':'article_teaser_body'}).text

    # Scrape 2: Featured image... beware the sleepers!
    browser = init_browser()
    url = 'https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars'
    browser.visit(url)
    html = browser.html
    soup = BeautifulSoup(html, 'lxml')
    browser.click_link_by_partial_text('FULL IMAGE')
    # Re-soup required the code to sleep for the HTML to populate
    time.sleep(3)
    html = browser.html
    soup = BeautifulSoup(html, 'lxml')
    featured_image = soup.find('div', {'class':'fancybox-inner'}).find('img',{'class':'fancybox-image'})
    partial_url = (featured_image['src'])
    featured_image_url = 'https://www.jpl.nasa.gov'+partial_url

    # Scrape 3: Twitter weather
    url = 'https://twitter.com/marswxreport?lang=en'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'lxml')
    mars_weather = soup.find('p',class_='TweetTextSize--normal').text

    # Scrape 4: Mars Factoids 
    url = 'http://space-facts.com/mars/'
    tables = pd.read_html(url)
    df = tables[0]
    df = df.rename(columns={0:'Profile',1:'Value'})
    # mars_df = df.set_index('Profile')
    # convert into a dictionary for the master dictionary
    mars_facts = df.to_dict('records')

    # Scrape 5: Mars Hemisphere Loop
    browser = init_browser()
    url = 'https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars'
    browser.visit(url)
    html = browser.html
    soup = BeautifulSoup(html, 'lxml')
    spheres = ['Cerberus Hemisphere Enhanced','Schiaparelli Hemisphere Enhanced','Syrtis Major Hemisphere Enhanced','Valles Marineris Hemisphere Enhanced']
    hemisphere_list = []

    # Looping through the hemispheres
    for sphere in spheres:
        html = browser.html
        soup = BeautifulSoup(html, 'lxml')
        browser.click_link_by_partial_text(sphere)
        time.sleep(1)
        browser.click_link_by_partial_text('Open')
        time.sleep(1)
        html = browser.html
        soup = BeautifulSoup(html, 'lxml')
        partial_url = soup.find('img', {'class':'wide-image'})['src']
        content = soup.find('div',{'class':'content'}).find('h2',{'class':'title'})
        title = content.text
        image_url = 'https://astrogeology.usgs.gov/'+partial_url

        entry = {
            'img_url': image_url,
            'title': title 
        }
        
        hemisphere_list.append(entry)
        time.sleep(1)
        browser.click_link_by_partial_text('Close')
        time.sleep(1)
        browser.click_link_by_partial_text('Back')

    # Master Dictionary:

    mars = {
    'news_title': title,
    'news_headline': headline,
    'featured_image': featured_image_url,
    'weather': mars_weather,
    'stats': mars_facts,
    'hemispheres': hemisphere_list
    }

    return mars

# #Test Method Output
# test = scrape()
# print(test)
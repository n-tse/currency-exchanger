# Currency Exchanger

#### By: Nick Tse

#### This is a web application that uses an Exchange Rate API to convert the value of USD to another currency

## Technologies Used

* HTML
* CSS 
* Jquery
* Bootstrap
* Java Script
* Exchange Rate API


## Description 

This is a currency exchange application that allows the user to type in an amount in USD and then choose which currency it should be coverted to among the following currencies:
* Ethiopian Birr
* Hong Kong Dollar
* Indonesian Rupiah
* Malysian Ringgit
* Kazakhstani Tenge
This application makes API calls to Exchange Rate API to determine the most recent exchange rates.

## Setup/Installation Requirements

* You will need to get your own API key to run this application. To do this, visit [ExchangeRate-API](https://www.exchangerate-api.com/) and create a free account by entering your email and clicking the "Get Free Key" button. Follow the prompts to create your account, after which you will be able to view your unique API key.
* Next, you will need to clone the repository from GitHub. You can do this by:
  * Open your terminal and run the command $ git clone https://github.com/n-tse/currency-exchanger
  * Run the command $ npm install to install necessary packages to run the project
  * Add .env to your .gitignore folder
  * Create a .env file by typing the following command in the terminal: $ touch .env
  * Add your API key to the .env file. Eg: API_KEY=xxxxxxxxxx , where xxxxxxxxxx represents where you should paste your unique API Key.
  * Run the command $ npm run build
  * Run the command $ npm run start 
  * The application should now show up in your browser

## Known Bugs

* The code/wiring is not linked up correctly, so the application actually does not work at this time. Work in progress.

## License

_MIT_

Copyright (c) _2022_ _Nick Tse_

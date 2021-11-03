# About the project and usage

This is my final project of the [CS50](https://cs50.harvard.edu/x/2021/project/).

The extension helps quickly jump into all the major websites that are used to analyse a company.

For eg want to learn about a new company let say `ITC` you will need the financial from a website (screener.com, trendlyne.com) and see the technical's from another website(tradingview.com) also you might find the wikipedia usefull also maybe throw in the NSE and BSE websites.

You get the point google and opening all this different sites will take time.

![](https://github.com/rabeeh-ta/dallalstreet-extension/blob/master/scrnsht-extsn.jpg)

Now after getting this extension just type the Company name, hit search. Get all the needed sites in one click.

## How to install ⚙️

clone the repo, go the extension settings of your Chromium based browser turn on extensions-developer then press load unpacked extension and open the `/extension` folder from the repo.

### Project Structure 🗂

- `/extension` directory

  Is where all the files for the frontend/extension resides if you want to change the UI or anything here look here

- `/server` directory

  There is a REST api the extension talks to when someone installs the extension this is to get all the listed companies, the data is stored in chromes local storage.

  When the user types a name of the company or its ticker symbol in the search filed the autocomplete feature uses this data.

- `/resources` directory

  All the source of the data used in this project. and miscellaneous other things.

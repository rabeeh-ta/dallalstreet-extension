var redirectLinks = {};
var dallalDB = [];
const refreshBtn = document.getElementById('refresh-btn');
const searchBtn = document.getElementById('search-button');
const allRedirectBtns = document.getElementsByClassName('redirect-link'); // get all the button's id to query for
const searchField = document.getElementById('search-field'); // form input field
const autoSearchResult = document.getElementById('auto-search');
var searchComp = ' ';

//? search filed autocomplete form DB.
searchField.addEventListener('input', (e) => {
  searchString = e.target.value;
  //* if nothing is typed in the filed dont check the db
  if (searchString == '') {
    searchComp = null;
  } else {
    searchComp = dallalDB.find(
      (item) =>
        item.name.includes(searchString) ||
        item.symbol.includes(searchString.toUpperCase())
    );
  }

  //* autocomplete section updating in dom && mr.metha's payload
  if (searchComp != undefined || searchComp != null) {
    autoSearchResult.innerHTML = searchComp.name; // DOM update
    searchComp = searchComp.name; // mr.metha's parameter
  } else {
    autoSearchResult.innerHTML = ' '; // render nothing in DOM
    searchComp = searchString; // mr.metha's parameter is what ever is typed in the input field
  }

  //* update the search button's state if nothing is typed should be disabled.
  if (searchString == '') {
    // enable button
    searchBtn.disabled = true;
    searchBtn.style.cursor = 'not-allowed';
  } else {
    // disable button
    searchBtn.disabled = false;
    searchBtn.style.cursor = 'pointer';
  }
});

//? search button click function
searchBtn.addEventListener('click', () => {
  console.log('search button pressed');
  console.log('search of ' + searchComp);

  //clear the previous query
  redirectLinks = new Object();

  // query all the search and get the links
  // for (var item of allRedirectBtns) {
  //   mrMehta('irctc', item.id);
  // }

  // mrMehta('irctc', 'screener');

  // query google and get the links
  /*
  mrMehta('hcl tech', 'trendlyne');
  mrMehta('hcl tech', 'tickertape');
  
  mrMehta('hcl tech', 'wikipedia');
  */
});

//? query google and scrape and return the first link from the result
function mrMehta(compName, sourceName) {
  fetch(`https://www.google.com/search?q=${compName}+${sourceName}`).then(
    (res) => {
      res.text().then((text) => {
        const doc = new DOMParser().parseFromString(text, 'text/html');
        const classElements = doc.getElementsByClassName('yuRUbf');
        const sourceLink = classElements[0].firstChild.getAttribute('href');
        redirectLinks[sourceName] = sourceLink;
        console.log(sourceLink);
      });
    }
  );
}

//? load the saved dallalDB from the local storage to currentJSstate
window.addEventListener('load', () => {
  console.log('page is fully loaded');
  chrome.storage.local.get('dallalDB', (data) => {
    // load the dallaldb
    dallalDB = data.dallalDB;
  });

  //* there will be nothing typed in the search field so button should not be clickable
  searchBtn.disabled = true;
  searchBtn.style.cursor = 'not-allowed';
});

console.log('after function');

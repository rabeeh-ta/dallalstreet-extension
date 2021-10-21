var redirectLinks = {};
var dallalDB = [];
const refreshBtn = document.getElementById('refresh-btn');
const allRedirectBtns = document.getElementsByClassName('redirect-link'); // get all the button's id to query for

refreshBtn.addEventListener('click', () => {
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

// query google and scrape and return the first link from the result
function mrMehta(compName, sourceName) {
  fetch(`https://www.google.com/search?q=${compName}+${sourceName}`).then(
    (res) => {
      res.text().then((text) => {
        const doc = new DOMParser().parseFromString(text, 'text/html');
        const classElements = doc.getElementsByClassName('yuRUbf');
        const sourceLink = classElements[0].firstChild.getAttribute('href');
        redirectLinks[sourceName] = sourceLink;
        //console.log(sourceLink);
      });
    }
  );
}

// load the saved dallalDB from the local storage to currentJSstate
window.addEventListener('load', () => {
  console.log('page is fully loaded');
  chrome.storage.local.get('dallalDB', (data) => {
    dallalDB = data;
    //console.log(dallalDB);
    //console.log(data);
  });
});

console.log('after function');

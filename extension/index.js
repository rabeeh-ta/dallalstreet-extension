var redirectLinks = {};
const refreshBtn = document.getElementById('refresh-btn');
const allRedirectBtns = document.getElementsByClassName('redirect-link'); // get all the button's id to query for

refreshBtn.addEventListener('click', () => {
  //clear the previous query
  redirectLinks = new Object();
  allRedirectSource = [];

  // query all the search and get the links
  for (var item of allRedirectBtns) {
    mrMehta('zomato', item.id);
  }

  // query google and get the links
  /*
  mrMehta('hcl tech', 'trendlyne');
  mrMehta('hcl tech', 'tickertape');
  mrMehta('hcl tech', 'screener');
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
        // console.log(sourceLink);
      });
    }
  );
}

console.log('after function');

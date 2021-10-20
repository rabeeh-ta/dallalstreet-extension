var redirectLinks = {};
const refreshBtn = document.getElementById('refresh-btn');

refreshBtn.addEventListener('click', () => {
  //clear the previous query
  redirectLinks = new Object();
  console.log('click event');
  mrMehta('hcl tech', 'trendlyne');
  mrMehta('hcl tech', 'tickertape');
  mrMehta('hcl tech', 'screener');
  mrMehta('hcl tech', 'wikipedia');
});

// query google and scrape and return the first link from the result
function mrMehta(compName, sourceName) {
  fetch(`https://www.google.com/search?q=${compName}+${sourceName}`).then(
    (res) => {
      res.text().then((text) => {
        console.log(typeof text);
        const doc = new DOMParser().parseFromString(text, 'text/html');
        const classElements = doc.getElementsByClassName('yuRUbf');
        const sourceLink = classElements[0].firstChild.getAttribute('href');
        redirectLinks[sourceName] = sourceLink;
        console.log(sourceLink);
      });
    }
  );
}

console.log('after function');

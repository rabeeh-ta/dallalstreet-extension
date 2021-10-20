var db = [];

chrome.runtime.onInstalled.addListener(() => {
  fetch('https://dallalstreet-api.herokuapp.com/companies')
    .then((response) => response.json())
    .then((data) => {
      db = data;
      chrome.storage.local.set(db);
    })
    .catch((err) => console.log(err));
});

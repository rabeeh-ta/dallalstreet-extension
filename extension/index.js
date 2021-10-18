const refreshBtn = document.getElementById('refresh-btn');

refreshBtn.addEventListener('click', () => {
  console.log('click event');
  fetch('https://www.google.com/search?q=itc+screener')
    .then((res) => {
      console.log(res.text());
    })
    .then((HtmlWebpage) => {
      var parser = new DOMParser();
      var doc = parser.parseFromString(HtmlWebpage, 'text/html');
      console.log(doc);
    });
});

console.log('after function');

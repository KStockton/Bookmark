document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark() {
  event.preventDefault()

  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  var bookmark = {
    name: siteName,
    url: siteUrl
  }

localStorage.setItem('test', 'Hello World')
console.log(localStorage.getItem('test'));

 

}

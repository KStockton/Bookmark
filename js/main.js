document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark() {
  event.preventDefault()

  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  var bookmark = {name: siteName, url: siteUrl}

// localStorage.setItem('test', 'Hello World')
// console.log(localStorage.getItem('test'))
// localStorage.removeItem('test');
// console.log(localStorage.getItem('test'))


// test if bookmarks is null //
if (localStorage.getItem('bookmark') === null) {
  // init array
  var bookmarksArray = [];
  // add to array
  bookmarksArray.push(bookmark);
  // set to localStroage
  localStorage.setItem('bookmark', JSON.stringify(bookmarksArray))
  } else {
    // get bookmarks from local storage
    var bookmarksArray = JSON.parse(localStorage.getItem('bookmark'));
    // add bookmarks to array
    bookmarksArray.push(bookmark);
    // Re-set back to localStorage
      localStorage.setItem('bookmark', JSON.stringify(bookmarksArray))
  }
}

//Delete Bookmark
function deleteBookmark(url) {
  //Get bookmarks from localstorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  for(var i = 0; i < bookmarks.length; i++){
    if (bookmarks[i].url == url){
      // Remove from array
      bookmarks.splaice(i, 1)
    }
  }
}

function fetchBookmarks() {
    var bookmarksArray = JSON.parse(localStorage.getItem('bookmark'));

    // get output id
    var bookmarksResults = document.getElementById('bookmarksResults');
    // Build output
    bookmarksResults.innerHTML = 'Hello';

    for (var i = 0; i < bookmarksArray.length; i++) {
      var name = bookmarksArray[i].name;
      var url = bookmarksArray[i].url;
      bookmarksResults.innerHTML += '<div class = "well">' +  
                                    '<h3>' + name +
                                    ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                                    ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="'+url+'">Delete</a> ' +
                                    '</h3> ' +
                                    '</div>';
    }
 }
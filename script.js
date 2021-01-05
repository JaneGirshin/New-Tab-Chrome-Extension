const links = document.querySelector('.visited-links');

chrome.history.search({text: '', maxResults: 5}, (data) => {
    data.forEach((page) => {
        // Display url on screen, if url is more than 32 chars add 3 dots at the end for aesthetic purposes 
        links.innerHTML += '<li><a href="'+ page.url +'">'+ ((page.url.length > 32) ? (page.url.substring(0, 32) + '...') : page.url) +'</a></li>';
    });
});
function RateSite() {
    var ratingReturn=document.getElementById('ask_rating');
    var rating= prompt('What would you rate this skill? (0-10)')
    if (rating=='') {
        alert('bruh')
    } else {
        ratingReturn.innerHTML = 'Wow! A rating of '+rating+'/10 is interesting!';
    }
}

function RateWebSite() {
    var ratbingReturn=document.getElementById('ask_ratbing');
    var ratbing= prompt('What would you rate this site? (0-10)')
    if (ratbing=='') {
        alert('bruh')
    } else {
        ratbingReturn.innerHTML = 'Wow! A rating of '+ratbing+'/10 is at least different from my own!';
    }
}
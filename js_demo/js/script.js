alert('hello chat')

function askQuestion() {
    var p = prompt('do you think you are safe?');
    if (p=='yes') {
        document.getElementById('question').innerHTML= 'You are wrong';
    }
    else if (p=='no') {
        document.getElementById('question').innerHTML= 'You are right.';
    }
    }
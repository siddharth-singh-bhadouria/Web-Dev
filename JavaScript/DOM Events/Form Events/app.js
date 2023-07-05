
const tweetForm = document.querySelector('#tweetForm')
const tweetsContainer = document.querySelector('#tweets')
tweetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // const usernameInput = document.querySelectorAll('input')[0].value;
    // const tweetInput = document.querySelectorAll('input')[1].value;
    const username = tweetForm.elements.username
    const tweet = tweetForm.elements.tweet

    addTweets(username.value, tweet.value);
    username.value = ''
    tweet.value = ''
})


function addTweets(username, tweet) {
    const newTweet = document.createElement('li')
    const bTag = document.createElement('b')
    bTag.append(username)
    newTweet.append(bTag)
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet)
}  



let tweetBtn = document.querySelector('.btn');
let feedDivs = document.getElementById('newFeeds');
let tweetNum = -1;
let userNum  = -1;
let tweets   = [];

     console.log(tweets);
     tweetBtn.addEventListener('click',createTweet);

function createTweet() {

let   userInfo     = document.getElementById('userInfo').value;
let   tweetContent = document.getElementById('tweetContent').value;

if(userInfo == ''){alert('Please enter your username');}
else if(tweetContent == ''){alert('Please enter your tweet')}     
else{

let   newDiv    = document.createElement('div');
let   newUser   = document.createElement('p');
let   newTweet  = document.createElement('p');
let   likeBtn   = document.createElement('button');
let   reBtn     = document.createElement('button');
let   newHr     = document.createElement('hr');

      newDiv.classList.add('new-div');
      likeBtn.classList.add('like');
      reBtn.classList.add('retweet');
      newUser.classList.add('new-user');
      newTweet.classList.add('new-tweet');

      tweetNum++;
      userNum++;

      newTweet.setAttribute('id', `tw-${tweetNum}`);
      newUser.setAttribute('id', `us-${userNum}`); 
      feedDivs.insertBefore(newDiv, feedDivs.firstChild);
      newDiv.appendChild(newUser);
      newDiv.appendChild(newTweet);
      newDiv.appendChild(likeBtn);
      newDiv.appendChild(reBtn);
      newDiv.appendChild(newHr);

      likeBtn.innerHTML = `<i class="fas fa-heart fa-lg"></i>`;
      reBtn.innerHTML = `<i class="fas fa-retweet fa-lg"></i>`;
//       newUser.textContent = '@' + userInfo;
//       newTweet.textContent = tweetContent;
//       document.getElementById('userInfo').value = '';
      document.getElementById('tweetContent').value = '';
 
    //   console.log(tweets);
let t = {
    user: userInfo,
    tw: tweetContent
};
      tweets.push(t);
      console.log(tweets);
      
      newUser.textContent = '@' + tweets[tweetNum].user;
      newTweet.textContent = tweets[tweetNum].tw;


    likeBtn.onclick = () => {
        newUser.setAttribute('style', 'color:#1DA1F2;');
        newTweet.setAttribute('style', 'color:rgb(224, 36, 94);'); 
        likeBtn.setAttribute('style', 'color:rgb(224, 36, 94);');
//      likeBtn.innerText = 'LIKED';
    }
    
    let reNum = -1;
    reBtn.onclick = () => {

        let reDiv     = document.createElement('div'),
            reYou     = document.createElement('p'),
            reUser    = document.createElement('p'),
            reTweet   = document.createElement('p'),
            reLikeBtn = document.createElement('button'),
            reReBtn   = document.createElement('button'),
            reHr      = document.createElement('hr');

            reNum++;

            feedDivs.insertBefore(reDiv, feedDivs.firstChild);
            reTweet.setAttribute('id', `reTw-${reNum}`);
            reDiv.appendChild(reYou);
            reDiv.appendChild(reUser);
            reDiv.appendChild(reTweet);
            reDiv.appendChild(reLikeBtn);
            reDiv.appendChild(reReBtn);
            reDiv.appendChild(reHr);
            reDiv.classList.add('reDiv');
            reLikeBtn.classList.add('like');
            reYou.classList.add('reYou');
            reReBtn.classList.add('retweet');
            reYou.setAttribute('style', 'color: #657786;')

            reYou.textContent = '@' + tweets[tweetNum].user + ' Retweeted';
            reLikeBtn.innerHTML = `<i class="fas fa-heart fa-lg"></i>`;
            reReBtn.innerHTML = `<i class="fas fa-retweet fa-lg"></i>`;
            reUser.textContent = newUser.textContent;
            reTweet.textContent = newTweet.textContent;
        
            reReBtn.onclick = reBtn.onclick;

            reLikeBtn.onclick = () => {
                reUser.setAttribute('style', 'color:#1DA1F2;');
                reTweet.setAttribute('style', 'color:rgb(224, 36, 94);'); 
                reLikeBtn.setAttribute('style', 'color:rgb(224, 36, 94);');
//              reLikeBtn.innerText = 'LIKED';

              
            }
        }
}
}



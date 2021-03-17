


let tweetBtn = document.querySelector('.btn'),
    FeedDivs = document.getElementById('newFeeds'),
    tweetNum = -1,
    UserNum  = -1,
    tweets   = [];
    console.log(tweets);
    tweetBtn.addEventListener('click',CreateTweet);

function CreateTweet() {

let   userInfo     = document.getElementById('userInfo').value,
      tweetContent = document.getElementById('tweetContent').value;

if(userInfo == ''){alert('Please enter your username');}
else if(tweetContent == ''){alert('Please enter your tweet')}     
else{

let   newDiv    = document.createElement('div'),
      newUser   = document.createElement('p'),
      newTweet  = document.createElement('p'),
      likeBtn   = document.createElement('button'),
      reBtn     = document.createElement('button'),
      newHr     = document.createElement('hr');

      newDiv.classList.add('new-div');
      likeBtn.classList.add('new-btn0');
      reBtn.classList.add('new-btn1');
      newUser.classList.add('new-user');
      newTweet.classList.add('new-tweet');

      tweetNum++;
      UserNum++;

      newTweet.setAttribute('id', `tw-${tweetNum}`);
      newUser.setAttribute('id', `us-${UserNum}`); 
      FeedDivs.insertBefore(newDiv, FeedDivs.firstChild);
      newDiv.appendChild(newUser);
      newDiv.appendChild(newTweet);
      newDiv.appendChild(likeBtn);
      newDiv.appendChild(reBtn);
      newDiv.appendChild(newHr);

      likeBtn.innerText ='LIKE';
      reBtn.innerText = 'RE';
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
        likeBtn.setAttribute('style', 'background-color:rgb(224, 36, 94);color:white;');
//         likeBtn.innerText = 'LIKED';
    }
    
    let reNum = -1;
    reBtn.onclick = () => {

        let reDiv     = document.createElement('div'),
            reYou     = document.createElement('p'),
            reUser    = document.createElement('p'),
            reTweet   = document.createElement('p'),
            reLikeBtn = document.createElement('button'),
            reHr      = document.createElement('hr');

            reNum++;

            FeedDivs.insertBefore(reDiv, FeedDivs.firstChild);
            reTweet.setAttribute('id', `reTw-${reNum}`);
            reDiv.appendChild(reYou);
            reDiv.appendChild(reUser);
            reDiv.appendChild(reTweet);
            reDiv.appendChild(reLikeBtn);
            reDiv.appendChild(reHr);
            reDiv.classList.add('reDiv');
            reLikeBtn.classList.add('reLikeBtn');
            reYou.classList.add('reYou');
            reYou.setAttribute('style', 'color: #657786;')

            reYou.textContent = '@' + tweets[tweetNum].user + ' Retweeted';
            reLikeBtn.innerText = 'LIKE';
            reUser.textContent = newUser.textContent;
            reTweet.textContent = newTweet.textContent;

            reLikeBtn.onclick = () => {
                reUser.setAttribute('style', 'color:#1DA1F2;');
                reTweet.setAttribute('style', 'color:rgb(224, 36, 94);'); 
                reLikeBtn.setAttribute('style', 'background-color:rgb(224, 36, 94);color:white;');
//                 reLikeBtn.innerText = 'LIKED';
              
            }
        }
}
}



const submit = document.querySelector('.comment-submit');
const commentlist = document.querySelector('.comments');
const commentInput = document.querySelector('.comment-input');
const author = document.querySelector('.authorinput');



submit.addEventListener('click',appendComment,false);
// get instance of localStorage key/value
const saved = localStorage.getItem("commentlisting");
// check if it exists and if so set hTML value
if(saved){
    commentlist.innerHTML =saved;
}

function appendComment(event){
    // Define dynamic data to add
    const data= {
        picture:"p2.png",
        comment:commentInput.value,
        author:author.value,
    }
    //prevent form from submitting
    event.preventDefault();
    // if comment textarea value <1 exit
    if(commentInput.value.length<1)return;
    //Append Comment
    template(data);

    // Reset textarea value
    commentInput.value = "";
    author.value = "";
    // save the list to localstorage
    localStorage.setItem('commentlisting',commentlist.innerHTML);
}

function template(data){
    commentlist.insertAdjacentHTML("beforeend",` <div class="comment flex items-start justify-start"></div>
    <img class="comment-avatar" src="${data.picture}" alt="${data.author}">
    <div class="flex-1">
        <h3 class="comment-author">${data.author}</h3>
        <div class="comment-body">
            ${data.comment}
        </div>
    </div>
</div>
`)

}
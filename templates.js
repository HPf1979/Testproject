function templateProfils(x, y) {
    return `
  
       <div class="name">
       <div class="border-foto"><img class="foto-img" src="${x}"></div>
       <span>${y}</span>
       </div>
     
    `;
}


function templatePost(post, i) {
    return  /*html*/ `
<div class="post">
  <div class="post-header">
      <img class="foto-img-post" src="${post.profilfoto}">
      <span>${post.author}</span>
  </div>
  <img class="post-image" src="${post.picture}">
  <div class="icons"> 
     <div>
     <img id="iconLike${i}" onclick="like(${i})" class="icon-like" src="img/favorite.png"> 
     <img id="iconDislike${i}" onclick="dislike(${i})" class="icon-dislike d-none"  src="img/favorized.png">
     <img class="icon-size" src="img/comments.png">
     <img class="icon-size" src="img/paper.png">
     </div>
    <img class="icon-size" src="img/bookmark.png"> 
  </div>
  <div class="like">  
       Gefällt 
       <span id="like${i}"class="like-number">  ${post.likes} <span>
       Personen </div>
  <div class="first-author">
  <span><b>${post.author}:</b> </span>
  <span>${post.dscr}</span>
  </div>

  <div class="first-author" id="commentsCon${i}">
  <!-- here  all the comments will be rendered from json -->
        <!-- the function for this is in the Javacript-->
  </div>
  <div class="add-comment">
     <div class="add-comment-left" >
     <img src="img/happy.png">  
     <textarea class="input-comment"  id="inputComment${i}" placeholder="schreiben......"r ows="2"></textarea>
     </div>
    <button onclick="addComment(${i})" class="new-comment-button"> Posten </button>
    <div id="textArea${i}" class="text-area"> </div> 


</div>

`
}

function templateComment(comment, commentauthor, i, j) {
    return  /*html*/ `
<div> 
<span><b>${commentauthor}:</b> ${comment} </span>
 
</div>
`
}

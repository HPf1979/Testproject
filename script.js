//loadProfils();


function render() {
    showProfils();
    showPosts();

}


function showProfils() {
    let profilContent = document.getElementById('fotosMenu');
    profilContent.innerHTML = '';

    for (let i = 0; i < profils[0].names.length; i++) {
        const foto = profils[0].fotos[i];
        let name = profils[0].names[i];
        //xName = adaptStringlength(xName, 9);//
        profilContent.innerHTML += templateProfils(foto, name);

    }
}

function showPosts() {
    let postContent = document.getElementById('posts');
    postContent.innterHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        postContent.innerHTML += templatePost(post, i);
        showComments(post, i);
    }
}

function showComments(post, i) {
    let commentsContainer = document.getElementById(`commentsCon${i}`);
    commentsContainer.innerHTML = '';

    for (let j = 0; j < post.comments.length; j++) {
        const comment = post.comments[j];
        const commentauthor = post.commentauthors[j];
        commentsContainer.innerHTML += templateComment(comment, commentauthor, i, j);
    }
}

function addComment(i) {
    let newComment = document.getElementById(`inputComment${i}`).value;

    if (newComment == 0) {
        alert("Bitte geben Sie Kommentar ein")
    }
    else {

        posts[i].comments.push(newComment);
        posts[i].commentauthors.push('Lina');
    }

    showPosts();
}


function searchButton() {
    let searchedPost = document.getElementById('searched_post');
    searchedPost.innerHTML = '';

    let search = document.getElementById('search-post-text').value;
    search = search.toLowerCase();

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        if (post.author.toLowerCase().includes(search)) {
            searchedPost.innerHTML = templatePost(post, i)
            document.getElementById('posts').classList.add('d-none');
        }
       if (search == 0) {
        searchedPost.innerHTML = '';
        document.getElementById('posts').classList.remove('d-none');
       }
        
    }
}

function like(i) {
    document.getElementById(`iconLike${i}`).classList.add('d-none');
    document.getElementById(`iconDislike${i}`).classList.remove('d-none');
  
    document.getElementById(`like${i}`).innerHTML= posts[i].likes +1 + " Personen";

}

function dislike(i) {
    document.getElementById(`iconLike${i}`).classList.remove('d-none');
    document.getElementById(`iconDislike${i}`).classList.add('d-none');
    document.getElementById(`like${i}`).innerHTML= posts[i].likes + " Personen";
}


function scrollToLeft() {
    document.getElementById('arrowLeft').classList.remove('d-none');
    document.getElementById('fotosMenu').scrollLeft += 350;
    if (document.getElementById('fotosMenu').scrollLeft > 300) {
        document.getElementById('arrowLeft').classList.remove('d-none');
    }
}

function scrollToRight() {
    document.getElementById('fotosMenu').scrollLeft -= 350;
    if (document.getElementById('fotosMenu').scrollLeft < 300) {
        document.getElementById('arrowLeft').classList.add('d-none');
    }
}
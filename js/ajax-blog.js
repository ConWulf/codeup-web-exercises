$(document).ready(function () {

    let posts = $('#posts');
    let postBtn = $('#add-post')


function blogPost(postObj) {
    let postHtml = "";
    postHtml += `<div>${postObj.title}</div>`;
    postHtml += `<div>${postObj.content}</div>`;
    postHtml += `<div class="container-fluid d-flex justify-content-between">${postObj.categories}<span>${postObj.date}</span></div>`;
    postHtml += '<hr>';
    return postHtml;
}

function addPost() {
    $.ajax('data/blog.json').done(function (data) {
        let finalPost = ""
        for (const info of data) {
            finalPost += blogPost(info);
        }
        posts.html(finalPost);
    });
}

postBtn.click(addPost);






















});
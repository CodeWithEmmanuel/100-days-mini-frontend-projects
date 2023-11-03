"use strict";

const likeEl = document.querySelector(".like");
const commentBtn = document.querySelector(".post-comment");
const commentEl = document.querySelector(".comment");
const likeCountEl = document.querySelector(".like-count");
const commentCountEl = document.querySelector(".comment-count");

let likeNum = 75;
let commentsNum = 31;
let commentsArr = [];
const storedComments = JSON.parse(localStorage.getItem("comments"));

likeEl.addEventListener("click", () => {
  likeNum += 1;
  likeEl.classList.add("like-post");
  likeCountEl.textContent = `${likeNum} Likes`;
});

function postComment(name, comment, numComments) {
  commentsNum += 1;
  const commentPostEl = `<p>
                          ${name}:
                          ${comment}
                        </p>`;

  commentEl.insertAdjacentHTML("beforeend", commentPostEl);
  commentEl.classList.add("show-comment");
  commentCountEl.textContent = `${numComments} Comments`;
}

function storeComments(obj) {
  if (storedComments !== null) {
    commentsArr = storedComments;
  }
  commentsArr.push(obj);
  const saveComments = JSON.stringify(commentsArr);
  localStorage.setItem("comments", saveComments);
}

commentBtn.addEventListener("click", () => {
  const commentName = prompt("Your Name:");

  if (commentName === null) {
    alert(`Name cannot be empty`);
    return;
  }

  const commentPost = prompt("Comment:");

  if (commentPost === null) {
    alert(`Comment cannot be empty`);
    return;
  }

  postComment(commentName, commentPost, commentsNum);

  const commentObj = {
    name: commentName,
    comment: commentPost,
    numComments: commentsNum,
  };

  storeComments(commentObj);
});

document.addEventListener("DOMContentLoaded", () => {
  if (storedComments !== null) {
    const prevComments = storedComments;

    prevComments.forEach((obj) => {
      const { name, comment, numComments } = obj;
      commentsNum = prevComments[prevComments.length - 1].numComments;
      postComment(name, comment, numComments);
    });
  }
});

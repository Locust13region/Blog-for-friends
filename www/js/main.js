let firstBlock = document.querySelector(".first__block");
let secondBlock = document.querySelector(".second__block");
let thirdBlock = document.querySelector(".third__block");
let fourthBlock = document.querySelector(".fourth__block");

function getBlockByIndex(index) {
  switch (index + 1) {
    case 1:
    case 2:
      return firstBlock;
    case 3:
      return secondBlock;
    case 4:
      return thirdBlock;
    case 5:
    case 6:
      return fourthBlock;
  }
}

function insertPostsBlock(blockNumber, element) {
  blockNumber.insertAdjacentHTML(
    "beforeend",
    `<div class="post__overview" onclick="location.href='post.html';">
					  <div class="title__post">
							 <p>${element.title}</p>
					  </div>
					  <div class="short__description__post">
						  <p>${element.description}</p>
					  </div>
			</div>`
  );
}

let url = "http://127.0.0.1:3000/posts";
fetch(url)
  .then((response) => response.json())
  .then((posts) => {
    posts.forEach((element, index) => {
      const block = getBlockByIndex(index);
      insertPostsBlock(block, element);
    });
  })
  .catch((error) => console.log(error));

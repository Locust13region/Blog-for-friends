let firstBlock = document.querySelector(".first__block");
let secondBlock = document.querySelector(".second__block");
let thirdBlock = document.querySelector(".third__block");
let fourthBlock = document.querySelector(".fourth__block");

// debugger;
let url = "http://127.0.0.1:3000/posts";
fetch(url)
  .then((response) => response.json())
  .then((posts) => {
    posts.forEach((element, index) => {
      switch (index + 1) {
        case 1:
          firstBlock.insertAdjacentHTML(
            "beforeend",
            `<div class="post__overview" onclick="location.href='post.html';">
					<div class="title__post">
				   		<p>${element.title}</p>
					</div>
					<div class="short__description__post">
						<p>${element.description}</p>
					</div>
			</div>`
          )
		break;
		case 2:
			firstBlock.insertAdjacentHTML(
			  "beforeend",
			  `<div class="post__overview" onclick="location.href='post.html';">
					  <div class="title__post">
							 <p>${element.title}</p>
					  </div>
					  <div class="short__description__post">
						  <p>${element.description}</p>
					  </div>
			  </div>`
			)
		break;
		case 3:
			secondBlock.insertAdjacentHTML(
			  "beforeend",
			  `<div class="post__overview" onclick="location.href='post.html';">
					  <div class="title__post">
							 <p>${element.title}</p>
					  </div>
					  <div class="short__description__post">
						  <p>${element.description}</p>
					  </div>
			  </div>`
			)
		break;
		case 4:
			thirdBlock.insertAdjacentHTML(
			  "beforeend",
			  `<div class="post__overview" onclick="location.href='post.html';">
					  <div class="title__post">
							 <p>${element.title}</p>
					  </div>
					  <div class="short__description__post">
						  <p>${element.description}</p>
					  </div>
			  </div>`
			)
		break;
		case 5:
			fourthBlock.insertAdjacentHTML(
			  "beforeend",
			  `<div class="post__overview" onclick="location.href='post.html';">
					  <div class="title__post">
							 <p>${element.title}</p>
					  </div>
					  <div class="short__description__post">
						  <p>${element.description}</p>
					  </div>
			  </div>`
			)
		break;
		case 6:
			fourthBlock.insertAdjacentHTML(
			  "beforeend",
			  `<div class="post__overview" onclick="location.href='post.html';">
					  <div class="title__post">
							 <p>${element.title}</p>
					  </div>
					  <div class="short__description__post">
						  <p>${element.description}</p>
					  </div>
			  </div>`
			)
		break;
      }
    });
  })
  .catch((error) => console.log(error));

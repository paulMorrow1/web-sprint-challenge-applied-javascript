const Card = (article, headline, authorPhoto, authorName) => {
  const cardClass = document.createElement("div");
  const headLine = document.createElement("div");
  const author = document.createElement("div");
  const imageCont = document.createElement("div");
  const image = document.createElement("img");
  const authName = document.createElement("span");

  cardClass.classList.add("card");
  headLine.classList.add("headline");
  author.classList.add("author");
  imageCont.classList.add("img-container");

  cardClass.appendChild(headLine);
  cardClass.appendChild(author);
  author.appendChild(imageCont);
  imageCont.appendChild(image);
  author.appendChild(authName);

  headLine.textContent = article.headline;
  image.src = article.authorPhoto;
  authName.textContent = article.authorName;

  return cardClass;
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
};

export { Card, cardAppender };

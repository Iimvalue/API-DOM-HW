localStorage.getItem("user-name") == null
? window.location.href = './login' : "";


let userName =
  localStorage.getItem("user-name") != null
    ? localStorage.getItem("user-name")
    : "Not Logined In";

let userNameNavBar = document.getElementById("user-name");

userNameNavBar.textContent =
  localStorage.getItem("user-name") != null
    ? `Welcome ${userName}`
    : userNameNavBar.innerHTML("<a href='./login' style={text-decoration:none; color:white}>Not Loged In</a>");

let cardContainer = document.getElementById("card-container");

async function getProducts() {
  let response = await fetch("https://fakestoreapi.com/products");
  let products = await response.json();

  products.map((product) => {
    let colDiv = document.createElement("div");
    colDiv.className = "col";

    let card = document.createElement("div");
    card.className = "card shadow";
    card.style = "background-color:#fff5f0;";

    // Image container
    let imgContainer = document.createElement("div");
    imgContainer.style.height = "225px";
    imgContainer.style.overflow = "hidden";

    let img = document.createElement("img");
    img.className = "card-img-top h-100 w-100 object-fit-cover";
    img.src = product.image;
    imgContainer.appendChild(img);

    let cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex flex-column justify-content-center align-items-center gap-4";

    let cardText = document.createElement("div");
    cardText.className = "card-text text-center";
    cardText.textContent = product.title;

    let price = document.createElement("div");
    price.className = "fw-bold fs-5 text-dark";
    price.textContent = "$ " + product.price; 

    let buyButton = document.createElement("a");
    buyButton.className = "btn btn-orange text-white";
    buyButton.href = "#";
    buyButton.textContent = "Add to Cart";

    // Append elements
    cardBody.appendChild(imgContainer);
    cardBody.appendChild(cardText);
    cardBody.appendChild(price); // Add price between title and button
    cardBody.appendChild(buyButton);
    card.appendChild(cardBody);
    colDiv.appendChild(card);
    cardContainer.appendChild(colDiv);
});
}

getProducts();

{
  /* <div class="col">
<div class="card shadow-sm">
  <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

  <div class="card-body">
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <div class="d-flex justify-content-between align-items-center">
      <div class="btn-group">
        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
      </div>
      <small class="text-muted">9 mins</small>
    </div>
  </div>
</div>
</div> */
}

function logout(){
    localStorage.removeItem("user-name")
    localStorage.removeItem("password")
    localStorage.removeItem("email")
}
// home page
const sidenav = document.querySelector(".side-navbar");


function showNavbar() {
    sidenav.style.left = "0%";
}

function hideNavbar() {
    sidenav.style.left = "-60%";
}

// collection page

const productContainer = document.getElementById("products");
const search = document.getElementById("search");
const productList = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function(event) {
    var userInput = event.target.value.toUpperCase();

    for(count = 0; count<productList.length; count++) {
        var productfound = productList[count].querySelector("p").textContent;

        if (productfound.toUpperCase().indexOf(userInput)<0) {
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
});
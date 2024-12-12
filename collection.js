var productcontainer = document.getElementById("products");
var search = document.getElementById("search");
var productlist = productcontainer.querySelectorAll("div");

search.addEventListener("keyup", function () {
  var enterdvalue = event.target.value.toUpperCase();

  for (count = 0; count < productlist.length; count = count++) {
    var productname = productlist[count].getElementById("para").textContent;

    if (productname.toUpperCase().indexOf(enterdvalue) < 0) {
      productlist[count].style.display = "none";
    } else {
      productlist[count].style.display = "block";
    }
  }
});

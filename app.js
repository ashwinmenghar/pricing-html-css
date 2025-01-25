const checkedbox = document.getElementById("checkbox");
const basicPrice = document.querySelector(".basic-price");
const profPrice = document.querySelector(".professional-price");
const masterPrice = document.querySelector(".master-price");

checkedbox.addEventListener("click", (e) => {
  if (e.target.checked) {
    basicPrice.innerHTML = `<span class="dollar-sign">&dollar;</span>19.99`;
    profPrice.innerHTML = `<span class="dollar-sign">&dollar;</span>24.99`;
    masterPrice.innerHTML = `<span class="dollar-sign">&dollar;</span>39.99`;
  } else {
    basicPrice.innerHTML = `<span class="dollar-sign">&dollar;</span>199.99`;
    profPrice.innerHTML = `<span class="dollar-sign">&dollar;</span>249.99`;
    masterPrice.innerHTML = `<span class="dollar-sign">&dollar;</span>399.99`;
  }
});

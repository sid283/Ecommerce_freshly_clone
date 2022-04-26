
var arrow = document.querySelectorAll(".toggle");
arrow.forEach(function(elem) {
      elem.addEventListener("click",function(){
      elem.parentNode.classList.toggle("active");
      });
    });
  

  document.querySelector("button").addEventListener('click',call);
  function call(){
      window.location.href="../products/products.html";
  }


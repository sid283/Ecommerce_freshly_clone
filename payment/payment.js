var arrow = document.querySelectorAll(".toggle");
arrow.forEach(function(btn) {
      btn.addEventListener("click",function(){
      btn.parentNode.classList.toggle("active");
      });
    });
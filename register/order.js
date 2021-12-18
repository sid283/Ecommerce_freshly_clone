

    var arrow = document.querySelectorAll(".toggle");
    arrow.forEach(function(elem) {
          elem.addEventListener("click",function(){
          elem.parentNode.classList.toggle("active");
          });
        });
      
    
    
    // when we click button
    
    document.querySelector('button').addEventListener('click',store);
    
    var data=JSON.parse(localStorage.getItem("userdata"))||[];
    function store(){
      // console.log("helo")
      //  call values
      var email=document.querySelector('#text1').value;
      var zip=document.querySelector('#text2').value;
    
      // console.log(email,zip)
    
      // Object creation.................
     var bag={
             email:email,
             zip:zip
             };
    
            //  console.log(bag);
    
            data.push(bag);  //store obj into arr...........
            console.log(data);
    
    localStorage.setItem("userdata",JSON.stringify(data)); // set all to localStorage
    alert("successfull Entered");
    window.location.href="calender.html";
    
    }
    
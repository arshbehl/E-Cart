function myfunc(x) {
    x.classList.toggle("change");
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  
  document.getElementById("js1").innerHTML="Smart Split AC";

  document.getElementById("js2").innerHTML="Sony Exclusive Headphones";
  
  document.getElementById("js3").innerHTML="Laptop";
  
  document.getElementById("js4").innerHTML="Smart Samsung LED TV";
  
  document.getElementById("js5").innerHTML="Smart Refrigerator";
  
  document.getElementById("js6").innerHTML="Latest Smart Phone";
  
  document.getElementById("js7").innerHTML="Smart Watches";
  
  document.getElementById("js8").innerHTML="Smart Speakers";
  
  const navline = document.querySelector('#navline1');
  document.addEventListener('scroll', function(e) {
    let w = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
    navline.style.setProperty('width', w + '%');
  });
  
  function changeImage() {
    var image = document.getElementById('pic1');
    if (image.src.match("pic2.jpg")) {
      image.src = "pic1.jpg";
    }
    
    // else if (image.src.match("pic3.jpg")) {
    //   image.src = "pic3.jpg";
    // }
  
    // else if (image.src.match("pic4.jpg")) {
    //   image.src = "pic4.jpg";
    // }
  
    // else if (image.src.match("pic5.jpg")) {
    //   image.src = "pic5.jpg";
    // }
  
    // else if (image.src.match("pic6.jpg")) {
    //   image.src = "pic6.jpg";
    // }
  
    // else if (image.src.match("pic7.jpg")) {
    //   image.src = "pic7.jpg";
    // }
  
    else {
      image.src = "pic2.jpg";
    }
  }
  
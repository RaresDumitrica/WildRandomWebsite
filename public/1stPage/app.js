const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();


var div = document.getElementById('liveClock'); 

// function time() {
//   div.innerHTML = " ";
//   var date = new Date();
//   var seconds = date.getSeconds();
//   var minutes = date.getMinutes();
//   var hours = date.getHours();
//   div.innerHTML = hours + " : " + minutes + " : " + seconds;
// }

// setInterval(time, 1000);

setInterval(function(){
  var date = new Date();
  var format = [
      ("0" + date.getHours()).substr(-2)
    , ("0" + date.getMinutes()).substr(-2)
    , ("0" + date.getSeconds()).substr(-2)
  ].join(" : ");
  div.innerHTML = format;
}, 500);


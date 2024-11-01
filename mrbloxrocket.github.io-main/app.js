// open website animation
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (idx + 1) * 400)
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove('active');
          // span.classList.fade('fade');
        }, (idx + 1) * 50)
      })
    }, 2000);

    setTimeout(() => {
      intro.style.top = '-100vh';
    }, 2300)
  });
})



const portfolio = document.getElementsByClassName("modal-btn")
for (let i = 0; i < portfolio.length; i ++){
  portfolio[i].addEventListener("click", function(){
    const data = json[portfolio[i]["firstChild"]["id"]];
    console.log(data);
    document.getElementById("exampleModalLabel").innerHTML = portfolio[i]["firstChild"]["id"];
    document.getElementById("year").innerHTML = data["year"]
    document.getElementById("description").innerHTML = data["description"];
    console.log($('#languages'));
    $('#languages').innerHTML = ""
    for (let i = 0; i < data["languages"].length; i ++){
      console.log(data["languages"][i])
      $('#languages').append(
        '<div class="col-sm-3">' + 
        '<img id="l1" class="image-fluid" src= "' + data["languages"][i] + '"/>' + 
        '</div>'
      )
    }
  })
}
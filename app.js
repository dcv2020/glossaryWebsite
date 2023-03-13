const mainSearchBtn=document.querySelector('#mainSearchBtn');
const searchBtn=document.querySelector('#searchBtn');
const navInput =document.querySelector("#navInput");
const searchBox =document.querySelector("#searchBox");

mainSearchBtn.addEventListener('click', function(event){
    event.preventDefault()
    scroll()
})

searchBtn.addEventListener('click', function(event){
    event.preventDefault()
    scroll()
})

function scroll(){
    if(searchBox.value||navInput.value){
        let found=false;
        for(let i=0;i<document.body.children[3].children.length;i++){
            // console.log(document.body.children[3].children[i].id)
            let input=searchBox.value.toLowerCase();
            if(input==document.body.children[3].children[i].id){
                found=true;
                inputDOM=document.querySelector(`#${input}`);
                inputDOM.scrollIntoView()
            }
            let input2=navInput.value.toLowerCase();
            if(input2==document.body.children[3].children[i].id){
                found=true;
                inputDOM=document.querySelector(`#${input2}`);
                inputDOM.scrollIntoView()
            }
        }
        if(!found){
            alert("We don't have that word here")
        }
    }else{
        alert("Enter something to search")
    }
    searchBox.value="";
    navInput.value="";
}


// scroll to the top code
$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
        $('#toTopBtn').fadeIn();
      } else {
        $('#toTopBtn').fadeOut();
      }
    });
  
    $('#toTopBtn').click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  });

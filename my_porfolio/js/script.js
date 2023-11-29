// get menu button image source value
let getImg = document.getElementById('menu_img').src = 'images/menu_bar_round.png';


// display box description when user hovers on the box
function displayProjectDes(){
    document.getElementById('project-description').style.top = 0;
}
function removeProjectDes(){
    document.getElementById('project-description').style.top = '1000px';
}

function displayPortfolioDes(){
    document.getElementById('portfolio-description').style.top = 0;
}
function removePortfolioDes(){
    document.getElementById('portfolio-description').style.top = '1000px';
}

function displayAboutMeDes(){
    document.getElementById('about-me-description').style.top = 0;
}
function removeAboutMeDes(){
    document.getElementById('about-me-description').style.top = '1000px';
}

j = 0;
function runSlide() {
	let images = [];
	let time = 5000;

	//image list
	images[0] = 'images/home/slide-img/amusement-raft.png'
    images[1] = 'images/home/slide-img/duplicate-web.png'
    images[2] = 'images/home/slide-img/megasoftouch-h.png'
    images[3] = 'images/home/slide-img/megasoftouch.png'
    images[4] = 'images/home/slide-img/count-down.png'
    lastImg = 'images/home/slide-img/desktop-cal.png'

    let imgOne = document.getElementById('img_1')
    let imgTwo = document.getElementById('img_2')

    // && imgTwo.style.left == '600px'
    // imgTwo.style.left == 0 && 

	function changeImg(){
        if(j < images.length){
            if(imgOne.style.left == 0){
                imgTwo.src = images[j];
                imgOne.style.left = '-800px';
                imgTwo.style.left = 0;
            }else if(imgOne.style.left=='-800px'){
                imgOne.src = images[j]
                imgOne.style.left = 0;
                imgTwo.style.left = '800px';
            }else{
                imgTwo.src = images[j];
                imgOne.style.left = '-800px';
                imgTwo.style.left = 0;
            }
            j++;
        }else {
            j = 0;
            imgOne.src = lastImg;
            imgOne.style.left = 0;
            imgTwo.style.left = '800px';
        }
        setTimeout("runSlide()", time);
	}
    changeImg();
}

runSlide();

function changeBar(){
    let menuImg ='images/menu_bar_round.png';
    let closeImg = 'images/close_menu_bar.png';
    let img = '';
    if (getImg == menuImg) {
        img = closeImg;
        document.getElementById('navigation').style.left = '0%';
    }
    else {
        img = menuImg;
        document.getElementById('navigation').style.left = '100%';
    }

    getImg = document.getElementById('menu_img').src = img;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// get image source value
let getImg = document.getElementById('menu_img').src = 'images/menu_bar_round.png';

function changeBar(){
    let menuImg ='images/menu_bar_round.png';
    let closeImg = 'images/close_menu_bar.png';
    let img = '';
    if (getImg == menuImg) {
        img = closeImg;
        document.getElementById('navigation').style.left = '70%';
    } else {
        img = menuImg;
        document.getElementById('navigation').style.left = '100%'
    }

    getImg = document.getElementById('menu_img').src = img
}

// prompt('hello')

// Change photos slide for my about-me page
k = 0;
function changePhotos() {
	let images = [];
	// let time = 0;
    // let time_1 = 12600;
    // let time_2 = 12600;
    // prompt('hello')

	//image list
	images[0] = 'images/about_me/daniel_opute.jpg'
    images[1] = 'images/about_me/daniel_opute.jpg'
    images[2] = 'images/about_me/danielcopute.png'
    // images[3] = 'images/about_me/danielcopute.png'
    // images[4] = 'images/about_me/danielcopute.png'
    // images[2] = 'images/home/slide-img/megasoftouch-h.png'
    // images[3] = 'images/home/slide-img/megasoftouch.png'
    // images[4] = 'images/home/slide-img/count-down.png'
    lastImg = 'images/about_me/danielcopute.png'

    let imgOne = document.getElementById('my_photos')
    let imgTwo = document.getElementById('my_photos_2')

	function changeImg(){
        if(k < images.length){
            imgOne.src = images[k];
            imgTwo.src = images[k];
            k++;
            time = 13500
            setTimeout("changePhotos()", time);
        }
        else {
            time = 20050
            setTimeout("changePhotos()", time);
            imgOne.src = lastImg;
            imgTwo.src = lastImg;
            k = 0;
        }
	}
    changeImg();
}

changePhotos()
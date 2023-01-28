(function(){

    /**Creating canvas element */
    const canvas = document.querySelector('canvas'),
          ctx = canvas.getContext('2d');

    //creating card image
    let cardImage = new Image();
    cardImage.src = 'img/cards/ace_hearts.png';
    
    /**creating object of card */
    let AceHearts = {
        img: cardImage,
        x: 10,
        y: 10
    }

   
    /**animate function */
    function animate () {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let { img, x, y } = AceHearts;
        ctx.drawImage(img, x, y);
        //animate recursion rendering image
        requestAnimationFrame(animate);

       
    }
    /**calling animate function */
    animate();
})()
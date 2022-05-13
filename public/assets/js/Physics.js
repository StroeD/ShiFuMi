// document.addEventListener('keydown', function(e){
//     if (e.code  == 'Space') {
    
//     document.getElementById('character').classList.remove('animate');
//     }
// })
let leftPos = parseInt(window.getComputedStyle(character).getPropertyValue("left"))
let dx = 30;
let maxHeightVal =  parseInt(window.getComputedStyle(character).getPropertyValue("bottom"))
let movR = 0;
let movL = 0;
let jumpSound = new Audio('public/assets/sound/smw_jump.wav')
let bumpSound = new Audio('public/assets/sound/smb_bump.wav')

document.addEventListener('keypress', function(e){
    
    if(e.code  == 'Space' && document.getElementById('character').classList !='animate') {
        jumpSound.play();
        leftPos = parseInt(window.getComputedStyle(character).getPropertyValue("left"))
        if (leftPos>=350 && leftPos <= 500){
            setTimeout(function(){
                bumpSound.play();
        document.getElementById('rock').classList.add('bounce');
        
        results = AI(results[0],results[1],0);
        if (results[1] == 0){
            document.getElementById('computerImage').src='public/assets/img/rock.png'
        } else if (results[1]==1){
            document.getElementById('computerImage').src='public/assets/img/paper.png'
        } else if (results[1]==2){
            document.getElementById('computerImage').src='public/assets/img/Scissors.png'
        }
        document.getElementById('computerImage').classList.add('bounce');
        if (results[0] != 0){
            i++
        }
        if (results[0] != 1){
            j++
        }
        if (i == 10 && j ==10){
            alert('Tie!')
            i=0;
            j=0;
        }else if(i == 10){
            alert('Win!')
            i=0;
            j=0;
        }else if(j == 10){
            alert('| ||\n|i | _')
            i=0;
            j=0;
        }
        switch (results[0]){
            case 0:
                partialResult.innerHTML = 'Fail!'
                break;
            case 1:
                partialResult.innerHTML = 'Win!'
                break;
            case 2:
                partialResult.innerHTML = 'Tie!'
                break;
        }
        document.getElementById('score').innerHTML=' Player: ' + i + '\nComputer: ' + j  
    },150)
        }else if (leftPos>=750 && leftPos <= 900){
            setTimeout(function(){
                bumpSound.play();
        document.getElementById('paper').classList.add('bounce');
        results = AI(results[0],results[1],1);
        if (results[1] == 0){
            document.getElementById('computerImage').src='public/assets/img/rock.png'
        } else if (results[1]==1){
            document.getElementById('computerImage').src='public/assets/img/paper.png'
        } else if (results[1]==2){
            document.getElementById('computerImage').src='public/assets/img/Scissors.png'
        }
        if (results[0] != 0){
            i++
        }
        if (results[0] != 1){
            j++
        }
        if (i == 10 && j ==10){
            alert('Tie!')
            i=0;
            j=0;
        }else if(i == 10){
            alert('Win!')
            i=0;
            j=0;
        }else if(j == 10){
            alert('| ||\n|i | _')
            i=0;
            j=0;
        }
        switch (results[0]){
            case 0:
                partialResult.innerHTML = 'Fail!'
                break;
            case 1:
                partialResult.innerHTML = 'Win!'
                break;
            case 2:
                partialResult.innerHTML = 'Tie!'
                break;
        }
        document.getElementById('score').innerHTML=' Player: ' + i + '\nComputer: ' + j    
    },150)}else if (leftPos>=1150 && leftPos <= 1300){
            setTimeout(function(){
                bumpSound.play();
                document.getElementById('scissors').classList.add('bounce');
        results = AI(results[0],results[1],2);
        if (results[1] == 0){
            document.getElementById('computerImage').src='public/assets/img/rock.png'
        } else if (results[1]==1){
            document.getElementById('computerImage').src='public/assets/img/paper.png'
        } else if (results[1]==2){
            document.getElementById('computerImage').src='public/assets/img/Scissors.png'
        }
        if (results[0] != 0){
            i++
        }
        if (results[0] != 1){
            j++
        }
        if (i == 10 && j ==10){
            alert('Tie!');
            i=0;
            j=0;
        }else if(i == 10){
            alert('Win!')
            i=0;
            j=0;
        }else if(j == 10){
            alert('| ||\n|i | _')
            i=0;
            j=0;
        }
        switch (results[0]){
            case 0:
                partialResult.innerHTML = 'Fail!'
                break;
            case 1:
                partialResult.innerHTML = 'Win!'
                break;
            case 2:
                partialResult.innerHTML = 'Tie!'
                break;
        }
        document.getElementById('score').innerHTML=' Player: ' + i + '\nComputer: ' + j    
    },150)}

    document.getElementById('character').classList.add('animate');
    setTimeout(
        function(){
        document.getElementById('character').classList.remove('animate')
        document.getElementById('rock').classList.remove('bounce')
        document.getElementById('paper').classList.remove('bounce')
        document.getElementById('scissors').classList.remove('bounce')
        document.getElementById('computerImage').classList.remove('bounce')
    },500)
    }
})



function right() {

    var leftVal =  parseInt(window.getComputedStyle(character).getPropertyValue("left"))
    if (leftVal<=1600){character.style.left = (leftVal + dx) + "px";
}
movR++


}
function left() {

    var leftVal =  parseInt(window.getComputedStyle(character).getPropertyValue("left"))
    if (leftVal>=20){character.style.left = (leftVal -dx) + "px";
}
movL++
}

document.addEventListener('keydown', function(e){
    if (e.key == 'd'){
        right();
    }
})
// document.addEventListener('keyup', function(e){
//     if (e.key == 'd' && position <= 1600){
//         alert(position)
//     }
// })
document.addEventListener('keypress', function(e){
    if (e.key == 'q'){
        left();
    }
})


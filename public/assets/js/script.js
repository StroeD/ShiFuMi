
// alert(a+' '+aPC);
let lastCase = 0; // Last sign the computer used
let userInput = 0; //Rock = 0, Paper = 1, Scissors = 2
end = 2; //end is the game result: 0 = lose, 1 = win, 2 = tie
let results = [end,lastCase,userInput];
let i = 0; // player Win Counter
let j = 0; // computer Win Counter

// document.getElementById('rock').addEventListener('click',function(){
//     results = AI(results[0],results[1],0);
//     if (results[0] != 0){
//         i++
//     }
//     if (results[0] != 1){
//         j++
//     }
//     if (i == 10 && j ==10){
//         alert('Tie!')
//     }else if(i == 10){
//         alert('Win!')
//     }else if(j == 10){
//         alert('| ||\n|i | _')
//     }
//     alert(results[0]+ ' ' + results[1] + ' ' + results[2] + ' Player: ' + i + 'Computer: ' + j);
// })
// document.getElementById('paper').addEventListener('click',function(){
//     results = AI(results[0],results[1],1);
//     if (results[0] != 0){
//         i++
//     }
//     if (results[0] != 1){
//         j++
//     }
//     if (i == 10 && j ==10){
//         alert('Tie!')
//     }else if(i == 10){
//         alert('Win!')
//     }else if(j == 10){
//         alert('| ||\n|i | _')
//     }
//     alert(results[0]+ ' ' + results[1] + ' ' + results[2] + ' Player: ' + i + 'Computer: ' + j);
// })

// document.getElementById('scissors').addEventListener('click',function(){
//     results = AI(results[0],results[1],2);
//     if (results[0] != 0){
//         i++
//     }
//     if (results[0] != 1){
//         j++
//     }
//     if (i == 10 && j ==10){
//         alert('Tie!')
//     }else if(i == 10){
//         alert('Win!')
//     }else if(j == 10){
//         alert('| ||\n|i | _')
//     }
//     alert(results[0]+ ' ' + results[1] + ' ' + results[2] + ' Player: ' + i + 'Computer: ' + j);
// })
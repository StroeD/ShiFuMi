function AI(end,lastCase,userInput){
    let a = Math.random()*1000
    let aPC = Math.round(a)/10;
    if (end == 0){ //how the random should behave if last game was a loss
        switch (lastCase) {
            case 0:
                if (aPC>=0 && aPC<=17.7){
                    
                    lastCase = 0;
                    if(userInput == 0 ){
                        end = 2
                    }else if(userInput == 1){
                        end = 1
                    }else if(userInput == 2){
                        end = 0
                    }
                } else if (aPC>17.7 && aPC<=(17.7+37)){
                    ;
                    lastCase = 1;
                    if(userInput == 0 ){
                        end = 0
                    }else if(userInput == 1){
                        end = 2
                    }else if(userInput == 2){
                        end = 1
                    }
                } else {
                    
                    lastCase = 2;
                    if(userInput == 0 ){
                        end = 1
                    }else if(userInput == 1){
                        end = 0
                    }else if(userInput == 2){
                        end = 2
                    }
                }
                break;
            case 1:
                if (aPC>=0 && aPC<=44.25){
                    
                    lastCase = 0;
                    if(userInput == 0 ){
                        end = 2
                    }else if(userInput == 1){
                        end = 1
                    }else if(userInput == 2){
                        end = 0
                    }
                } else if (aPC>44.25 && aPC<=(44.25+14.8)){
                    
                    lastCase = 1;
                    if(userInput == 0 ){
                        end = 0
                    }else if(userInput == 1){
                        end = 2
                    }else if(userInput == 2){
                        end = 1
                    }
                } else {
                    
                    lastCase = 2;
                    if(userInput == 0 ){
                        end = 1
                    }else if(userInput == 1){
                        end = 0
                    }else if(userInput == 2){
                        end = 2
                    }
                }
                break;
            case 2:
                if (aPC>=0 && aPC<=44.25){
                    
                    lastCase = 0;
                    if(userInput == 0 ){
                        end = 2
                    }else if(userInput == 1){
                        end = 1
                    }else if(userInput == 2){
                        end = 0
                    }
                } else if (aPC>44.25 && aPC<=(44.25+37)){
                    
                    lastCase = 1;
                    if(userInput == 0 ){
                        end = 0
                    }else if(userInput == 1){
                        end = 2
                    }else if(userInput == 2){
                        end = 1
                    }
                } else {
                    
                    lastCase = 2;
                    if(userInput == 0 ){
                        end = 1
                    }else if(userInput == 1){
                        end = 0
                    }else if(userInput == 2){
                        end = 2
                    }
                }
                break;

        }
    }else if(end == 1){ //how the random should behave if last game was a win
        switch (lastCase) {
            case 0:
                if (aPC>=0 && aPC<=53.1){
                    
                    lastCase = 0;
                    if(userInput == 0 ){
                        end = 2
                    }else if(userInput == 1){
                        end = 1
                    }else if(userInput == 2){
                        end = 0
                    }
                } else if (aPC>53.1 && aPC<=(53.1+22.2)){
                    
                    lastCase = 1;
                    if(userInput == 0 ){
                        end = 0
                    }else if(userInput == 1){
                        end = 2
                    }else if(userInput == 2){
                        end = 1
                    }
                } else {
                    
                    lastCase = 2;
                    if(userInput == 0 ){
                        end = 1
                    }else if(userInput == 1){
                        end = 0
                    }else if(userInput == 2){
                        end = 2
                    }
                }
                break;
            case 1:
                if (aPC>=0 && aPC<=26.55){
                    
                    lastCase = 0;
                    if(userInput == 0 ){
                        end = 2
                    }else if(userInput == 1){
                        end = 1
                    }else if(userInput == 2){
                        end = 0
                    }
                } else if (aPC>26.55 && aPC<=(26.55+44.4)){
                    
                    lastCase = 1;
                    if(userInput == 0 ){
                        end = 0
                    }else if(userInput == 1){
                        end = 2
                    }else if(userInput == 2){
                        end = 1
                    }
                } else {
                    
                    lastCase = 2;
                    if(userInput == 0 ){
                        end = 1
                    }else if(userInput == 1){
                        end = 0
                    }else if(userInput == 2){
                        end = 2
                    }
                }
                break;
            case 2:
                if (aPC>=0 && aPC<=26.55){
                    
                    lastCase = 0;
                    if(userInput == 0 ){
                        end = 2
                    }else if(userInput == 1){
                        end = 1
                    }else if(userInput == 2){
                        end = 0
                    }
                } else if (aPC>26.55 && aPC<=(26.55+52.5)){
                    
                    lastCase = 1;
                    if(userInput == 0 ){
                        end = 0
                    }else if(userInput == 1){
                        end = 2
                    }else if(userInput == 2){
                        end = 1
                    }
                } else {
                    
                    lastCase = 2;
                    if(userInput == 0 ){
                        end = 1
                    }else if(userInput == 1){
                        end = 0
                    }else if(userInput == 2){
                        end = 2
                    }
                }
                break;

        }
    }else if(end == 2){ //how the random should behave if last game was a tie
        switch (lastCase) {
            case 0:
                if (aPC>=0 && aPC<=35.4){
                    
                    lastCase = 0;
                    if(userInput == 0 ){
                        end = 2
                    }else if(userInput == 1){
                        end = 1
                    }else if(userInput == 2){
                        end = 0
                    }
                } else if (aPC>35.4 && aPC<=(35.4+29.6)){
                    
                    lastCase = 1;
                    if(userInput == 0 ){
                        end = 0
                    }else if(userInput == 1){
                        end = 2
                    }else if(userInput == 2){
                        end = 1
                    }
                } else {
                    
                    lastCase = 2;
                    if(userInput == 0 ){
                        end = 1
                    }else if(userInput == 1){
                        end = 0
                    }else if(userInput == 2){
                        end = 2
                    }
                }
                break;
            case 1:
                if (aPC>=0 && aPC<=35.4){
                    
                    lastCase = 0;
                    if(userInput == 0 ){
                        end = 2
                    }else if(userInput == 1){
                        end = 1
                    }else if(userInput == 2){
                        end = 0
                    }
                } else if (aPC>35.4 && aPC<=(35.4+29.6)){
                    
                    lastCase = 1;
                    if(userInput == 0 ){
                        end = 0
                    }else if(userInput == 1){
                        end = 2
                    }else if(userInput == 2){
                        end = 1
                    }
                } else {
                    
                    lastCase = 2;
                    if(userInput == 0 ){
                        end = 1
                    }else if(userInput == 1){
                        end = 0
                    }else if(userInput == 2){
                        end = 2
                    }
                }
                break;
            case 2:
                if (aPC>=0 && aPC<=35.4){
                    
                    lastCase = 0;
                    if(userInput == 0 ){
                        end = 2
                    }else if(userInput == 1){
                        end = 1
                    }else if(userInput == 2){
                        end = 0
                    }
                } else if (aPC>35.4 && aPC<=(35.4+29.6)){
                    
                    lastCase = 1;
                    if(userInput == 0 ){
                        end = 0
                    }else if(userInput == 1){
                        end = 2
                    }else if(userInput == 2){
                        end = 1
                    }
                } else {
                    
                    lastCase = 2;
                    if(userInput == 0 ){
                        end = 1
                    }else if(userInput == 1){
                        end = 0
                    }else if(userInput == 2){
                        end = 2
                    }
                }
                break;

        }
    }
b = [end,lastCase,userInput];

return b;

}
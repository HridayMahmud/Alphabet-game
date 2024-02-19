
function generateRandomL(){
   const string = "abcdefghijklmnopqrstuvwxyz";
   const letter = string.split('');
   const randomnum = Math.random()*25;
   index = Math.round(randomnum);
   alphabet=letter[index];
   return alphabet;
}
function keyboardLettercheck(){
   
}
function continueGame(key){
  
   getARandomAlphabet(generateRandomL(),key);
}

function play(){
  removeElementById('home-section');
  addElementById('play-keyboard');
  continueGame('kbd');
  keyboardLettercheck();
 

}
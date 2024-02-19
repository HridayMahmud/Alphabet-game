function removeElementById(elementId){
   const element = document.getElementById(elementId);
   element.classList.add('hidden');
}
function addElementById(addelement){
    const addElement = document.getElementById(addelement);
    addElement.classList.remove('hidden');
}

function getARandomAlphabet(alphabet,key){
    const displayedtext = document.getElementById('displayedtext');
    const resulttext = document.getElementById('resulttext');
    
    displayedtext.innerText = alphabet;
    //alphabetCasecheck function
  function alphaCaseCheck(alphabet){
     
    if(alphabet===alphabet.toUpperCase()){
        return alphabet.toLowerCase();
    }
    else{
        return alphabet;
    }
  }
   
   //life and point element
  
   const life = document.getElementById('life');
   const point = document.getElementById('point');
   life.innerText = 5;
   point.innerText = 0;
  

  //for clicking
    const keys = document.getElementsByClassName(key);
    for(const k of keys){
        const singlekey = k;
        singlekey.addEventListener('click',function(){
         const keyval = singlekey.innerText;
         console.log(keyval ,"is clicked");
        const keyvalstyle = document.getElementById(keyval);
        keyvalstyle.style.background = "orange";

         if(alphabet===keyval){
            resulttext.innerText = "wow! you win. you got a point";
            
         }
         else{
            resulttext.innerText = "you loose! you lost life";
         }
        });
      }
      //removebackground function

      // function removeBackground(val){
      //   const remove = document.getElementById(val);
      //   remove.style.background ="white";
      // }
    
      //  //add background function
      //    function addBackground(val){
      //     add = document.getElementById(val);
      //     add.classList.add('bg-orange-500');
      //     console.log(add);
      //    } 

        //for keyboard pressing
        document.addEventListener('keyup',function(handle){
          let val = handle.key;
          val = alphaCaseCheck(val);
          const keystyle = document.getElementById(val);
          keystyle.style.background ="orange";
       
          let lifecount = 5,pointcount=0; 
      
         if(alphaCaseCheck(alphabet)===val){
          resulttext.innerText = "wow! you win. you got a point";
       
        
          //removeBackground(alphabet);
            continueGame();
          
            pointcount+=50;
            point.innerText = pointcount;
         }
         else{
            resulttext.innerText ="you loose! you lost life";
            lifecount = lifecount - 1;
            life.innerText = lifecount;
            
         }
        });
     
}

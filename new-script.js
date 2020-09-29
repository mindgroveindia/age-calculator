function zodiac(){
    var mdate = document.getElementById("month").value;
     var dayThen = document.getElementById("day").value;
   var result = " unknown because you didn't put a valid date.";
  
  
  if (mdate == 1&& dayThen >= 20 || mdate == 2 && dayThen <= 18
      ){
          result = ("Aquarius");
      
    
      }
  
      if (mdate == 2&& dayThen >= 19 || mdate == 3&& dayThen <= 20){
         result = ("Pisces");
         
      }
     if (mdate == 3&& dayThen >= 21 || mdate == 4 && dayThen <= 19){
         result = ("Aries");
      
     }
    
      if (mdate == 4&& dayThen >= 20|| mdate == 5 && dayThen <= 20){
          result = ("Taurus");
        
        
      }
    
      if (mdate == 5&& dayThen >= 21 || mdate == 6 && dayThen <= 20
       ){
          result = ("Gemini");
        
       
      }
    
      if (mdate == 6&& dayThen >= 21 || mdate == 7&& dayThen <= 22){
          result = ("Cancer");
         
        
      }
      if (mdate == 7&& dayThen >= 23 || mdate == 8 && dayThen <= 22){
          result = ("Leo");
        
        
      }
      if (mdate == 8 && dayThen >= 23 || mdate == 9 && dayThen <= 22){
          result = ("Virgo");
        
      }
      if (mdate == 9&& dayThen >= 23 || mdate == 10&& dayThen <= 22){
        result = ("Libra");
        
      }
      if (mdate == 10 && dayThen >= 23|| mdate == 11 && dayThen <= 21){
         result = ("Scorpio");
        
          
      }
      if (mdate == 11 && dayThen >= 22 || mdate == 12 && dayThen <= 21){
          result = ("Sagittarius");
        
         
      }
    
    if(mdate == 12 && dayThen >= 22 || mdate == 1 && dayThen <= 19){
   
          result = ("Capricorn");
     
      }
      
   document.getElementById("output").innerHTML= result;
  }
    
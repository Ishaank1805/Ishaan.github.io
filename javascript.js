
  function scrolltodiv(targetId) {

    var targetDiv = document.getElementById(targetId);

   
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
  }
  var isStyleChanged = false;

  

  function togglePageStyle() {
      
      var body = document.body;
    
      
      if (isStyleChanged) {
        
        body.style.backgroundColor = '#FFFFFF'; 
    
        
        var allPTags = document.querySelectorAll('.achievement-container p');
        for (var i = 0; i < allPTags.length; i++) {
          allPTags[i].style.color = '#333'; 
        }
  
     
        var introText = document.querySelector('.intro');
        if (introText) {
          introText.style.color = '#000'; 
        }
  
      
      } else {
        
        body.style.backgroundColor = '#000000'; 
    
        
        var allPTags = document.querySelectorAll('.achievement-container p');
        for (var i = 0; i < allPTags.length; i++) {
          allPTags[i].style.color = '#000'; 
        }
  
       
        var introText = document.querySelector('.intro');
        if (introText) {
          introText.style.color = '#FFF'; 
        }
  
       
      }
    
      
      isStyleChanged = !isStyleChanged;
    
      var button = document.querySelector('.toggle');
      button.textContent = isStyleChanged ? 'Light Mode' : 'Dark Mode';
  }
  
 


function hideImage() {
    var image = document.getElementById('logo-img');
      image.style.display = 'none';  
    var textname = document.getElementById('textname');
      textname.style.display = 'inline';   
  }

function showImage() {
    var image = document.getElementById('logo-img');
      image.style.display = 'inline'; 
    var textname = document.getElementById('textname');
      textname.style.display = 'none';   // Możesz również użyć 'inline' lub 
  }
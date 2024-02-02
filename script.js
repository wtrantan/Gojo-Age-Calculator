function calculateAge() {
    // Get the input value (birth date)
    var birthDateInput = document.getElementById("birthDate").value;
    // Get image value
    const imageElement = document.getElementById("gojo");

    // Create a Date object from the input value
    var birthDate = new Date(birthDateInput);

    // Get the current date
    var currentDate = new Date();

    // Calculate the difference in milliseconds
    var timeDifference = currentDate - birthDate;

    
    // Calculate age in years
  
    var ageInYears = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));

    // Display the result
   
    if(ageInYears < 0 || isNaN(ageInYears)){
      document.getElementById("result").innerHTML = "Invalid Birthday!";
    }else{
      document.getElementById("result").innerHTML = "Your age is: " + ageInYears + " years";
    }
    if(ageInYears <= 12){
      imageElement.src = "images/child.jpeg";
    }else if(ageInYears > 12 && ageInYears <= 28) {
      imageElement.src = "images/adult.jpeg";
  
    } else{
      imageElement.src = "images/dead.jpeg";
    }
   
   
  }

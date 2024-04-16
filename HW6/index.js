
let resultMessage = "";
const userYearOfBirth = prompt("Enter your year of birth");
if (!userYearOfBirth) {
  alert("It is a pity that you did not want to enter year of birth");
} 
else {
  resultMessage += `Your age: ${new Date().getFullYear() - userYearOfBirth}\n`;
  const userCity = prompt("Enter city where are you leave.");

  if (!userCity.toLowerCase()) {
    alert("It is a pity that you did not want to enter your city.");
  } 
  else {
    switch (userCity) {
      case "Kyiv":
        resultMessage += `You live in the capital of Ukraine\n`;
        break;
      case "Washington":
        resultMessage += `You live in the capital of USA\n`;
        break;
      case "London":
        resultMessage += `You live in the capital of Great Britain\n`;
        break;
      default:
        resultMessage += `You live in the city ${userCity}\n`;
        break;
    }
    const userSport = prompt("Enter your favorit Sport");
if (!userSport ) {
  alert("It is a pity that you did not want to enter your favorit Sport");
} 
else {
  resultMessage += `Your favorit Sport: ${ userSport}\n`;

         alert(resultMessage)
    }
  }
}


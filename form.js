var submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener("click", validate);
var bannerValidation = document.getElementById("valid-banner");
var bannerMsg = "Thank you for contacting us, ";


function validate() {

  var name1 = document.getElementById("name-area-input-1");
  var name2 = document.getElementById("name-area-input-2");

  if (name1.value.trim() === "" || name2.value.trim() === "") {
    name1.style.border = "3px solid red";
    name2.style.border = "3px solid red";
    if (name1.value.trim() !== "") {
      name1.style.border = "1px solid";
    }
    if (name2.value.trim() !== "") {
      name2.style.border = "1px solid";
    }
    return false;
  } else {
    name1.style.border = "1px solid";
    name2.style.border = "1px solid";
    bannerValidation.style.visibility = "visible";
    bannerValidation.textContent = bannerMsg + name1.value + "! Your answer has been registered.";
    bannerValidation.style.fontSize = "20px";
    bannerValidation.style.color = "green";
    bannerValidation.style.fontWeight = "bold";
    return true;
  }
}
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/images.jpeg") {
    myImage.setAttribute("src", "images/Beterbiev.jpg");
  } else {
    myImage.setAttribute("src", "images/images.jpeg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Artur Beterbiev is undisputed, ${myName}`;
    }
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Beterbiev is undisputed, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
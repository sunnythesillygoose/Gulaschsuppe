function show1() {
   pet1.classList.remove("hide");
   pet2.classList.add("hide");
   pet3.classList.add("hide");
   pet4.classList.add("hide");
   upload.classList.add("hide");
   rectangle.classList.remove("hide");

   button1.classList.add("activated");
   button2.classList.remove("activated");
   button3.classList.remove("activated");
   button4.classList.remove("activated");
   button5.classList.remove("activated")
}

function show2() {
   pet1.classList.add("hide");
   pet2.classList.remove("hide");
   pet3.classList.add("hide");
   pet4.classList.add("hide");
   upload.classList.add("hide");
   rectangle.classList.remove("hide");

   button1.classList.remove("activated");
   button2.classList.add("activated");
   button3.classList.remove("activated");
   button4.classList.remove("activated");
   button5.classList.remove("activated")
}

function show3() {
   pet1.classList.add("hide");
   pet2.classList.add("hide");
   pet3.classList.remove("hide");
   pet4.classList.add("hide");
   upload.classList.add("hide");
   rectangle.classList.remove("hide");

   button1.classList.remove("activated");
   button2.classList.remove("activated");
   button3.classList.add("activated");
   button4.classList.remove("activated");
   button5.classList.remove("activated")

}

function show4() {
   pet1.classList.add("hide");
   pet2.classList.add("hide");
   pet3.classList.add("hide");
   pet4.classList.remove("hide");
   upload.classList.add("hide");
   rectangle.classList.remove("hide");

   button1.classList.remove("activated");
   button2.classList.remove("activated");
   button3.classList.remove("activated");
   button4.classList.add("activated");
   button5.classList.remove("activated")
}

function show5() {
   pet1.classList.add("hide");
   pet2.classList.add("hide");
   pet3.classList.add("hide");
   pet4.classList.add("hide");
   upload.classList.remove("hide");
   rectangle.classList.add("hide");
   
   button1.classList.remove("activated");
   button2.classList.remove("activated");
   button3.classList.remove("activated");
   button4.classList.remove("activated");
   button5.classList.add("activated");
}



function show11() {
   food1.classList.toggle("hide");
   console.log(button11.classList)
   button11.classList.toggle("activated");
}

function show12() {
   food2.classList.toggle("hide");
   button12.classList.toggle("activated");

}

function show13() {
   food3.classList.toggle("hide");
   button13.classList.toggle("activated");

}

function show14() {
   food4.classList.toggle("hide");
   button14.classList.toggle("activated");

}

const profilePic = document.querySelector(".image img");
const userFile = document.querySelector(".user-file");

userFile.onchange = function () {
  profilePic.src = URL.createObjectURL(userFile.files[0]);
}



let gif = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let input = document.querySelector("input");
let div = document.querySelector(".gif")
input.addEventListener("input", () => {
  console.log(input.value);
  if (input.value == "Saturday" || input.value == "Sunday") {
    div.innerHTML = '<img src="https://i.pinimg.com/originals/3d/81/f7/3d81f7067fe0d9604ddcbd54d1c59717.gif">';
  } else if(input.value == "Tuesday" || input.value == "Monday" || input.value == "Wednesday" || input.value == "Thursday" || input.value == "Friday") {
    div.innerHTML = '<img src="https://reactiongifs.me/cdn-cgi/imagedelivery/S36QsAbHn6yI9seDZ7V8aA/204247eb-5555-4f74-16f4-1b0c43bc0a00/w=500">';
}else{
  div.innerHTML = "*";
}
});

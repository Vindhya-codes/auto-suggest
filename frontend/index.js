const users = [
  {
    "name" :"Jane Doe",
    "gender" : "Female",
    "image" : "../images/jane.png"
  },
  {
    "name" :"John Doe",
    "gender" : "Male",
    "image" : "../images/john.png"
  },
]
let curUserId = 0;
function toggle(){
  if(curUserId == 0)
    curUserId=1;
  else
    curUserId=0;
  // image
  document.getElementById("img").src=users[curUserId].image;
  // name
  document.getElementById("name").innerText=users[curUserId].name;
  document.getElementById("gender").innerText=users[curUserId].gender;
}

function getRandomUser() {
  fetch("https://randomuser.me/api/")
  .then(function (data) {
    return data.json()
  })
  .then(function (parsedData) {
    let gender = parsedData.results[0].gender;
    let first = parsedData.results[0].name.first;
    let last = parsedData.results[0].name.last;

    let name = first + " " + last;
    let imgURL = parsedData.results[0].picture.large;
    console.log(name);

    document.getElementById("gender").innerText=gender;
    document.getElementById("name").innerText=name;
    document.getElementById("img").src=imgURL;
  })
}
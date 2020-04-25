fetch ('data.json') //This gets all the data from local JSON
        .then(response => {return response.json() })
        .then(data => {
          let music = data['Music'] 
         
          let griddivs = (document.getElementsByClassName('imgcontainer')); //This changes innerHTML of img grid, to show data
          let gridTextdivs = (document.getElementsByClassName("grid-text"));
          for (let i =0; i < griddivs.length; i++)
          {
            griddivs[i].style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+(data['Music'][0]['Artists'][i]['Images'])+")";
            griddivs[i].style.backgroundColor = "#2f2f2f";
            gridTextdivs[i].innerHTML= (data['Music'][0]["Artists"][i]['Name'])+", "+(data['Music'][0]["Artists"][i]['Listens'])+" Total Listens";
          }
          
          let songdivs =(document.getElementsByClassName('Topsong-name')); //This changes innerHTML of top songs to show JSON data
          let artistdivs=(document.getElementsByClassName('Topsong-artist'))
          let listensdivs=(document.getElementsByClassName('Topsong-listens'))
          let bardivs=(document.getElementsByClassName('barchart'))
          console.log(songdivs);
          for (let i=0; i < songdivs.length; i++)
          {
            songdivs[i].innerHTML= (data['Music'][1]['Top_Songs'][i]['Name']) 
            artistdivs[i].innerHTML= (data['Music'][1]['Top_Songs'][i]['Artist'])
            listensdivs[i].innerHTML= (data['Music'][1]['Top_Songs'][i]['Listens'])
            bardivs[i].style.width= (((data['Music'][1]['Top_Songs'][i]['Listens'])/100)*30)+"%";
          }
          let rsongdivs=(document.getElementsByClassName("Recentsong-name")) //This changes innerHTML of recent songs to JSON data
          let rartistdivs=(document.getElementsByClassName("Recentsong-artist"))
          let rimgdivs=(document.getElementsByClassName("recentimg"))
          let rlistendivs =(document.getElementsByClassName("Recent-time"))
          for (let i=0; i<rsongdivs.length; i++)
          {
            rsongdivs[i].innerHTML= (data['Music'][2]['Recent_Songs'][i]['Name'])
            rartistdivs[i].innerHTML= (data['Music'][2]['Recent_Songs'][i]['Artist'])
            rimgdivs[i].src = (data['Music'][2]['Recent_Songs'][i]['Images'])
            rlistendivs[i].innerHTML = (data['Music'][2]['Recent_Songs'][i]['Last_Listened'])
          }
        })

function classToggle() {    //This lets the navbar change to dropdown on smaller screens
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);

function processComment() { //This appends data from form to the bottom of the page
  let nameval = document.querySelector('#subname').value
  let commentval = document.querySelector('#subcomment').value
  let comcontainer =document.getElementById('commentbox')
  let namediv = document.createElement('div')
  let linebr = document.createElement('div')
  linebr.classList.add('comspacer')
  console.log(linebr)
  namediv.classList.add('commentname')
  let commentdiv = document.createElement('div')
  commentdiv.classList.add('comment')
  namediv.innerHTML=(nameval+":")
  commentdiv.innerHTML=(commentval)
  comcontainer.append(namediv)
  comcontainer.append(linebr)
  comcontainer.append(commentdiv)
  
}

function heart1Function() { //This makes the hearts change brightness on click
 let heart=document.getElementById("heart1")
console.log(heart)
if (heart.style.filter == "brightness(100%)")
{
heart.style.filter = "brightness(50%)";
}
else 
{
  heart.style.filter = "brightness(100%)";
}
}

function heart2Function() {
  let heart=document.getElementById("heart2")
 console.log(heart)
 if (heart.style.filter == "brightness(100%)")
 {
 heart.style.filter = "brightness(50%)";
 }
 else 
 {
   heart.style.filter = "brightness(100%)";
 }
 }

 function heart3Function() {
  let heart=document.getElementById("heart3")
 console.log(heart)
 if (heart.style.filter == "brightness(100%)")
 {
 heart.style.filter = "brightness(50%)";
 }
 else 
 {
   heart.style.filter = "brightness(100%)";
 }
 }

 function heart4Function() {
  let heart=document.getElementById("heart4")
 console.log(heart)
 if (heart.style.filter == "brightness(100%)")
 {
 heart.style.filter = "brightness(50%)";
 }
 else 
 {
   heart.style.filter = "brightness(100%)";
 }
 }

 function heart5Function() {
  let heart=document.getElementById("heart5")
 console.log(heart)
 if (heart.style.filter == "brightness(100%)")
 {
 heart.style.filter = "brightness(50%)";
 }
 else 
 {
   heart.style.filter = "brightness(100%)";
 }
 }

 function heart6Function() {
  let heart=document.getElementById("heart6")
 console.log(heart)
 if (heart.style.filter == "brightness(100%)")
 {
 heart.style.filter = "brightness(50%)";
 }
 else 
 {
   heart.style.filter = "brightness(100%)";
 }
 }

 function heart7Function() {
  let heart=document.getElementById("heart7")
 console.log(heart)
 if (heart.style.filter == "brightness(100%)")
 {
 heart.style.filter = "brightness(50%)";
 }
 else 
 {
   heart.style.filter = "brightness(100%)";
 }
 }

 function heart8Function() {
  let heart=document.getElementById("heart8")
 console.log(heart)
 if (heart.style.filter == "brightness(100%)")
 {
 heart.style.filter = "brightness(50%)";
 }
 else 
 {
   heart.style.filter = "brightness(100%)";
 }
 }

 function heart9Function() {
  let heart=document.getElementById("heart9")
 console.log(heart)
 if (heart.style.filter == "brightness(100%)")
 {
 heart.style.filter = "brightness(50%)";
 }
 else 
 {
   heart.style.filter = "brightness(100%)";
 }
 }

 function heart10Function() {
  let heart=document.getElementById("heart10")
 console.log(heart)
 if (heart.style.filter == "brightness(100%)")
 {
 heart.style.filter = "brightness(50%)";
 }
 else 
 {
   heart.style.filter = "brightness(100%)";
 }
 }
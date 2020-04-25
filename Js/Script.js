fetch ('data.json')
        .then(response => {return response.json() })
        .then(data => {
          let music = data['Music']
         
          let griddivs = (document.getElementsByClassName('imgcontainer'));
          let gridTextdivs = (document.getElementsByClassName("grid-text"));
          for (let i =0; i < griddivs.length; i++)
          {
            griddivs[i].style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+(data['Music'][0]['Artists'][i]['Images'])+")";
            griddivs[i].style.backgroundColor = "#2f2f2f";
            gridTextdivs[i].innerHTML= (data['Music'][0]["Artists"][i]['Name'])+", "+(data['Music'][0]["Artists"][i]['Listens'])+" Total Listens";
          }
          
          let songdivs =(document.getElementsByClassName('Topsong-name'));
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
          let rsongdivs=(document.getElementsByClassName("Recentsong-name"))
          let rartistdivs=(document.getElementsByClassName("Recentsong-artist"))
          let rimgdivs=(document.querySelectorAll("#recentimg"))
          let rlistendivs =(document.getElementsByClassName("Recent-time"))
          for (let i=0; i<rsongdivs.length; i++)
          {
            rsongdivs[i].innerHTML= (data['Music'][2]['Recent_Songs'][i]['Name'])
            rartistdivs[i].innerHTML= (data['Music'][2]['Recent_Songs'][i]['Artist'])
            rimgdivs[i].src = (data['Music'][2]['Recent_Songs'][i]['Images'])
            rlistendivs[i].innerHTML = (data['Music'][2]['Recent_Songs'][i]['Last_Listened'])
          }
        })

function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);

function heart1Function() {
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
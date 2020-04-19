function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);

function recentSonglist() {
  fetch("../json/Music.json")
.then(response => { return response.json() })
.then(data => {
    let music = data[""];
    var Recentsongs = document.getElementsByClassName('RSongs')
  for (let i=0; i < data[Recent_Songs].Length; i++)
  {
    Recentsongs[i].innerHTML = ("<img src= (data[Recent_Songs][Images][i])><p>(data[Recent_Songs][Name][i])</p><p>(data[Recent_Songs][Artist][i])</p><p>(data[Recent_Songs][Last_Listened][i])</p>")
  }
})
}


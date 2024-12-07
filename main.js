const btns = document.getElementsByClassName('btn');
const button = document.getElementById('btnPrimary');
const elem = document.querySelector('.btn');
const navBar = document.querySelector('nav');

const gitHubUsers = "https://api.github.com/users";

function changeLogo(urlPhoto)
{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <img src="${urlPhoto}" class="card-img-top" alt="userLogo">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    document.body.appendChild(card);
}


async function getHitHubUsers(){
    const response = await fetch(gitHubUsers);
    console.log(response); 
    const data = await response.json(); 
    console.log(data);
    const photo = data[1].avatar_url;
    changeLogo(photo);
}






button.addEventListener('click', function() {
    for(let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = 'green';
    }
    button.className = 'btn btn-success';
    navBar.className = ("navbar navbar-expand-lg navbar-dark bg-dark");
    //changeLogo(photo);
});


getHitHubUsers();

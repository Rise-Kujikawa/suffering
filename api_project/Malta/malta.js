let shipName;
async function loadDataFromApi() {
    try {
        const response = await axios.get('https://65b4864e41db5efd28669b3d.mockapi.io/Malta');
        const data = response.data[0];
        document.getElementById('continuousDmg').innerText = `Continuous Damage: ${data.continuous_dmg}`;
        document.getElementById('shellExpDmg').innerText = `Damage by Shell Explosions: ${data.shell_exp_dmg}`;
        document.getElementById('prioritySector').innerText = `Priority Sector Reinforcement: ${data.priority_sector}%`;
        document.getElementById('maxSpeed').innerText = `Maximum Speed: ${data.max_speed} knots`;
        document.getElementById('turnRadius').innerText = `Turning Circle Radius: ${data.turn_radius} m`;
        document.getElementById('rudderTime').innerText = `Rudder Shift Time: ${data.rudder_time} s`;
        document.getElementById('hitpoints').innerText = `Hit Points: ${data.hitpoints}`;
        document.getElementById('torp_dmg_red').innerText = `Torpedo Protection. Damage Reduciton: ${data.torp_dmg_red}%`;
        document.getElementById('aa_planes').innerText = `Attack Aircraft: ${data.aa_planes}`;
        document.getElementById('tb_planes').innerText = `Torpedo Bombers: ${data.tb_planes}`;
        document.getElementById('b_planes').innerText = `Bombers: ${data.b_planes}`;
        document.getElementById('artillery').innerText = `Secondary Battery: ${data.artillery}`;
        document.getElementById('desc1').innerText = `${data.desc1_malta}`;
        document.getElementById('desc2').innerText = `${data.desc2_malta}`;
        document.getElementById('desc3').innerText = `${data.desc3_malta}`;
        shipName = data.shipName;
        changeBackgroundColor(shipName);
        return Promise.resolve();
    } catch (error) {
        console.error('Error getting data from api', error);
        return Promise.reject(error);
    }
}
function changeBackgroundColor(shipName) {
    let bgclass = document.querySelector('.cv-box');

    if (shipName === 'Malta') {
        bgclass.style.background = 'linear-gradient(245.59deg, #776168 0%, #3a4062 28.53%, #152149 75.52%)';
    } else {
    }
}

function addToFavorites(shipName) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyFavorite = favorites.some((ship) => ship.name === shipName);
    if (!isAlreadyFavorite) {
        favorites.push({ name: shipName });
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`Added ${shipName} to Favorites!`);
    } else {
        favorites = favorites.filter((ship) => ship.name !== shipName);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`Removed ${shipName} from Favorites!`);
    }
}



function updateFavoritesButton(isAlreadyFavorite) {
    const addToFavoritesButton = document.getElementById('addToFavorites');
    if (isAlreadyFavorite) {
        addToFavoritesButton.innerText = 'Added to Favorites';
    } else {
        addToFavoritesButton.innerText = 'Add to Favorites';
    }
}


document.getElementById('addToFavorites').addEventListener('click', async function () {
    await loadDataFromApi();
    const shipNameForFavorites = shipName; 
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyFavorite = favorites.some((ship) => ship.name === shipNameForFavorites);

    addToFavorites(shipNameForFavorites, isAlreadyFavorite);
    updateFavoritesButton(!isAlreadyFavorite);
    checkIfInFavorites(shipNameForFavorites);
});




function checkIfInFavorites(shipName) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let checker = document.getElementById('fav-check');
    
    if (favorites.some((ship) => ship.name === shipName)) {
        checker.src = 'img/star.png'
        console.log(`${shipName} is in favorites!`);
    } else {
        checker.src = 'img/favourite.png'
        console.log(`${shipName} is not in favorites!`);
    }
}
loadDataFromApi().then(() => {
    checkIfInFavorites(shipName);
});

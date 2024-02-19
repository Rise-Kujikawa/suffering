document.addEventListener('DOMContentLoaded', function () {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favoritesList');
    favorites.forEach((ship) => {
        const listItem = document.createElement('li');
        listItem.textContent = ship.name;
        favoritesList.appendChild(listItem);
    });
});
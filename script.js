function toggleDetails(recipeId) {
    var recipe = document.getElementById(recipeId);
    var details = recipe.querySelector('.details');
    if (details.style.display === 'block') {
        details.style.display = 'none';
    } else {
        details.style.display = 'block';
    }
}

function filterRecipes() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var recipes = document.querySelectorAll('.recipe');

    recipes.forEach(function(recipe) {
        var recipeName = recipe.querySelector('h2').textContent.toLowerCase();
        if (recipeName.includes(searchInput)) {
            recipe.style.display = 'block';
        } else {
            recipe.style.display = 'none';
        }
    });
}

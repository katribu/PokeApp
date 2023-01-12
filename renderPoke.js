const avatarContainer = document.getElementById('avatarContainer')

function getPokeHTML(pokeData){
    let pokemon = pokeData.results
    let pokemonUrl = pokemon.map(pokeUrl => pokeUrl.url)

    for(let i = 0; i < pokemonUrl.length; i++){
        fetch(`${pokemonUrl[i]}`)
            .then(res => res.json())
            .then(data => {
                avatarContainer.innerHTML += `
                <div class = 'grid-item'>
                    <div> <img src = '${data.sprites.front_shiny}' alt = 'pokemon avatar'> </div>
                    <div class = 'p-div'> 
                        <p class = 'name'> ${data.name.charAt(0).toUpperCase() + data.name.slice(1)} </p> 
                        <p class = 'exp'> Experience: ${data.base_experience} </p>
                    </div>
                </div>
                `
            })
    }
  
}

export {getPokeHTML}
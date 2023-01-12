const input = document.getElementById('input')

async function searchPokemon(){
    avatarContainer.style.display = "block"
    try{
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)

        if(!res.ok){
            avatarContainer.innerHTML = `
            <h3> Sorry, this pokemon can't be found. <br>
            Please check your spelling! </h3>
            `
            throw new Error(res.status)
        }
        else {
            let singlePokemon = await res.json()
            // console.log(singlePokemon)

            let pokeStats = singlePokemon.stats
            console.log(pokeStats)

            let allPokeStats = pokeStats.map(stat => {
                console.log(stat)
                return `
                <p> ${stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: ${stat.base_stat} </p>
                `
            })
            
            avatarContainer.innerHTML = `
            <div class = 'poke-stats grid-item'>
                <div> <img src = '${singlePokemon.sprites.front_shiny}' alt = 'pokemon avatar'> </div>
                <div class = 'p-div'> 
                    <p class = 'name'> ${singlePokemon.name.charAt(0).toUpperCase() + singlePokemon.name.slice(1)} </p> 
                    <p class = 'exp'> Experience: ${singlePokemon.base_experience} </p>
                    <div class = 'exp'> ${allPokeStats.join('')} </div>
                        
                </div>
            </div>
            `
        }
    }catch(error){
        console.error(error)
    }

        
}


export {searchPokemon}
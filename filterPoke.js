const input = document.getElementById('input')
const avatarContainer = document.getElementById('avatarContainer')

async function filterPoke(){

    try{
        let response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=200&offset=0')
        if(!response.ok){
            throw new Error(response.status)
        }else{
            let pokeData = await response.json()
            let pokeNames = pokeData.results.map(poke => poke.name)
            // console.log(pokeNames)

            for (let i = 0; i < pokeNames.length; i++){
                avatarContainer.innerHTML += `
                <p> ${pokeNames[i]} </p>
                `
            }

            

        }
    }catch(error){
        console.error(error)
    }
}

filterPoke()
// export {filterPoke}


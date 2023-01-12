import { searchPokemon } from "./search.js"
import { getPokeHTML } from "./renderPoke.js"
// import { filterPoke } from "./filterPoke.js"


const btn = document.getElementById('btn')
btn.addEventListener('click', searchPokemon)

async function getPokemon(){
    try{
        let response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0')
        if(!response.ok){
            throw new Error(response.status)
        }else{
            let pokeData = await response.json()
            getPokeHTML(pokeData)
        }
    }catch(error){
        console.error(error)
    }
}

getPokemon()

console.log('does this git work')







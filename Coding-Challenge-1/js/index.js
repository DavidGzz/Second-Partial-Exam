
function addPokemonFetch(){

    let url = `/api/v2/pokemon/${id}/`

    let data = {
        name,
        id
    }

    let settings = {
        method : 'GET',
        body : JSON.stringify(data)
    }

    let results = document.querySelector('results');

    fetch(url, settings)
        .then(response =>{
            if(response.ok){
                return response.json();
            }
            throw new Error
        })
        .then(responseJSON =>{
            fetchPokemon();
        })
        .catch(err =>{

        })  
}

function fetchPokemon(){
    let url = `/api/v2/pokemon/${id}/`

    let data = {
        name,
        id
    }

    let settings = {
        method : 'GET',
        body : JSON.stringify(data)
    }

    let results = document.querySelector('results');

    fetch(url, settings)
        .then(response =>{
            if(response.ok){
                return response.json();
            }
            throw new Error
        })
        .then(responseJSON =>{
            results.innerHTML = ""
            for(i = 0; i < responseJson.length; i++){
                results.innerHTML = `
                <div>
                    ${responseJson[i].abilities}
                </div>
                <div>
                    ${responseJson[i].moves}
                </div>
                <div>
                    ${responseJson[i].stats}
                </div>
            `}
        });
}
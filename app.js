const searchInput = document.getElementById("searchInput")
const searchButton = document.getElementById("searchButton")
const gifsWrapper = document.getElementById("gifsWrapper")

const apiKey = "FeGIgzCZFuF1g9S6qnrYUbO4wojY3yJu"
let restApi = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=`

searchButton.addEventListener("click",searchGifs)

async function searchGifs(e){ 
    searchingItems = searchInput.value
    if(searchInput.value = ""){
        alert("You dont write anyting in to the search input")
    }else{
        restApi = restApi + searchingItems
        let data = await((await (fetch(restApi))).json())
        restApi = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=`
        console.clear()
        gifsWrapper.innerHTML = ""
        data.data.forEach(gif => {
            addToGifsToUI(gif.images.original.url)
        });
    }
}

function clearGifs(){
    gifsWrapper.innerHTML = ""
}

function addToGifsToUI(url){
    gifsWrapper.innerHTML+= `
    <div class="gifCard">
    <img src="${url}">
    </div>
    `
}
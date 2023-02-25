document.title="Promise Task 3"

// below function is used to fetch data using api given in url
let url="https://api.jikan.moe/v4/anime"
async function getAnimeData(){
    let data=await fetch(url)
    let res=await data.json()
    console.log(res.data)
    showAnime(res.data)//args
}
getAnimeData()

let mainAnimeDiv=document.getElementById('mainAnimeDiv')

// this function is used to show all data using bootstraap card in to mainAnimeDiv
function showAnime(animes){
    animes.map((element,index)=>{
        let animeDiv=document.createElement('div')
        animeDiv.classList.add("col","anime")
        animeDiv.innerHTML=`
        <div class="card h-100">
            <img src="${element.images.jpg.image_url}" class="card-img-top" alt="..." />
            <div class="card-body p-0 m-1">
              <div class="d-flex justify-content-between">
              <h5 class="card-title">${element.title}</h5>
              <h5 class="card-title">
              <span>${element.score}</span>  
              </h5>
              </div>
              <!-- synopsis Details -->
              <div class="card card-header synopsis">
                <p>Synopsis</p>
                <p>${element.synopsis}</p>
              </div>
            </div>        
          </div>

        `
        mainAnimeDiv.append(animeDiv)
    })
}



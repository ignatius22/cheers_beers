const heading = document.querySelector('.info__section--container--heading')
const image = document.querySelector('.info__section--container--image')
const nameSection = document.querySelector('.info__section--container--name')
const infoSection = document.querySelector('.main__container--container--info__section')
const errMsg = document.querySelector('.main__container--container--error')



const URL = 'https://api.punkapi.com/v2/beers'


const renderError = (response) =>{
    infoSection.appendChild(errMsg)

  if (!response.ok)
        throw new Error(errMsg.textContent ='Beer not found');
}


const renderBrewers = (recievedData) =>{
    const renderHTML = `
        <div class="info__section--container">
            <h1 class="info__section--container--heading">${recievedData.brewers_tips}</h1>
            <img class="info__section--container--image" src=${recievedData.image_url} alt="">
            <p class="info__section--container--name">${recievedData.name}</p>
            <p class="info__section--container--description">${recievedData.description}</p>
            <a href="#">More</a>
        </div>
    `
    infoSection.insertAdjacentHTML('afterend', renderHTML)
 
    
}


const fetchApi = async () =>{
    try {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        console.log(response)
        renderError(response)
        data.map(recievedData => renderBrewers(recievedData))
    } catch (error) {
       console.log(error) 
    }
}

fetchApi()

// Select element from the DOM 

const firstText = document.querySelector('#firstText')
const secondText = document.querySelector('#secondText')
const submit = document.querySelector('#submit')
const cookies = document.querySelector('#cookies')

submit.addEventListener('click', () => {
    setCookie("firstText", firstText.value, 365)
    setCookie("secondText", secondText.value, 365)
     
} )

cookies.addEventListener('click', () => {
    firstText.value = getCookie("firstText")
    secondText.value = getCookie("secondText")
} )

setCookie("New", "Ahmed", 10)
setCookie("Old", "Me", 10)

function setCookie(name, value, daysToLive){
    const date = new Date()
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000))
    let expires = "expires=" + date.toUTCString()
    document.cookie = `${name}=${value}; ${expires}; path=/`
}

function deleteCookie(name){
    setCookie(name, null, null)
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie)
    let cList = cDecoded.split('; ')
    let result = null

    cList.forEach(element =>{
        if(element.indexOf(name) == 0)
        result = element.substring(name.length+1)
    });
    return result 
}
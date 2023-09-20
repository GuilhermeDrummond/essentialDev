function useLightTheme() {
    document.body.style.color = 'aliceblue'
    document.body.style.backgroundColor = 'black'
}

function useDarkTheme() {
    document.body.style.color = 'black'
    document.body.style.backgroundColor = 'aliceblue'
}

function switchTheme() {
    document.body.classList.toggle("is-light")
    document.body.classList.toggle("is-dark")
}

document.getElementById('tema').addEventListener('click', useLightTheme)
document.getElementById('tema').addEventListener('click', useDarkTheme)

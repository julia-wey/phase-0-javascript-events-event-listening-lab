function addingEventListener() {
    const btn = document.querySelector('#button')
    btn.addEventListener('click', handleClick)
    function handleClick() {
        alert("I was clicked!")
    }
}

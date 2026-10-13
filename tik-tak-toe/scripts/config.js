function openPlayerConfig(){
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
}

function savePlayerConfig(event){
    debugger
    event.preventDefault();
    const formData = new FormData(event.target);
    // console.log(Object.fromEntries(formData));
    const enteredPlayername = formData.get("playername");
    console.log(enteredPlayername)
}
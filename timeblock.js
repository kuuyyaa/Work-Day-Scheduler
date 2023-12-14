const eventArray = []

function saveTask(event) {

}

function initiateEvents() {
    for(let i = 0; i < 24; i++) {
        eventArray.push("");
    }
    console.log(eventArray);
}

window.onload = () => {
    initiateEvents();
}
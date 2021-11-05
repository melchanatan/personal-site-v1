let activeDiv = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

for (let i = 0; i < 4; i ++) {
    if (i != activeDiv) {
        document.getElementById("panel-" + i).style.display="none";
    }
}

function replace(id) {
    const idNumber = id.slice(-1)

    if (idNumber != activeDiv) {
        moveIndicator(idNumber);
        document.getElementById("panel-" + activeDiv).style.opacity="0";
        document.getElementById("panel-" + idNumber).style.opacity="1";
        sleep(200).then( () => {
            document.getElementById("panel-" + activeDiv).style.display="none";
            document.getElementById("panel-" + idNumber).style.display="block";
            activeDiv = idNumber;
        }, 200);

    }
}

const indicator = document.getElementById("sel-indicator");
moveIndicator(activeDiv)

function moveIndicator(id) {
    const movePx = id * 4.35;
    indicator.style.top = movePx + "rem";
}
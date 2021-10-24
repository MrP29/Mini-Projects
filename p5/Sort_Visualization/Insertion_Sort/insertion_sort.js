let values = [];
let states = [];
let numOfElements = 160
let w = 4;

function setup() {
    createCanvas(numOfElements * w, windowHeight / 2);
    values = new Array(numOfElements);
    for(let i = 0; i < values.length; i++) {
        values[i] = random(height);
        states[i] = -1;
    }
    insertionSort(values);
}

async function insertionSort(arr) {
    states[0] = 1;
    for(let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j;
        for(j = i - 1; j >= 0 && arr[j] > temp; j--) {
            states[j] = 1;
            await move(arr, j);
            states[j] = 0;
        }
        arr[j + 1] = temp;
    }
}

async function move(arr, i) {
    await sleep(1);
    arr[i + 1] = arr[i];
}

function draw() {
    background(0);
    for(let i = 0; i < values.length; i++) {
        noStroke();
        if(states[i] == 0) {
            fill('#99FF99');
        } else if(states[i] == 1) {
            fill('#FF0000');
        } else {
            fill('#E0E0E0');
        }
        rect(i * w, height - values[i], w, values[i]);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
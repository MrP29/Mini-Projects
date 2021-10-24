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
    bubbleSort(values);
}

async function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1 - i; j++) {
            states[j] = 1;
            if(arr[j] > arr[j + 1]) {
                await swap(arr, j, j + 1);
            }
            states[j] = -1;
        }
        states[arr.length - i - 1] = 0;
    }
}

async function swap(arr, i, j) {
    await sleep(2);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
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
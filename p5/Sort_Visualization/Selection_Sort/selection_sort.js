let values = [];
let states = [];
let numOfElements = 150
let w = 4;

function setup() {
    createCanvas(numOfElements * w, windowHeight / 2);
    values = new Array(numOfElements);
    for(let i = 0; i < values.length; i++) {
        values[i] = random(height);
        states[i] = -1;
    }
    selectionSort(values);
}

async function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let min = i;
        states[i] = 2;
        for(let j = i + 1; j < arr.length; j++) {
            states[j] = 1;
            await sleep(1)
            if(arr[j] < arr[min]) {
                states[min] = -1;
                min = j;
            }
            states[j] = -1;
            states[min] = 2;
        }
        await swap(arr, i, min);
        states[min] = -1;
        states[i] = 0;
    }
}

function draw() {
    background(0);
    for(let i = 0; i < values.length; i++) {
        noStroke();
        if(states[i] == 0) {
            fill('#99FF99');
        } else if(states[i] == 1) {
            fill('#0000FF');
        } else if(states[i] == 2) {
            fill('#FF0000');
        } else {
            fill('#E0E0E0');
        }
        rect(i * w, height - values[i], w, values[i]);
    }

}

async function swap(arr, a, b) {
    await sleep(3);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
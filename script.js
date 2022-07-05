let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let storedCount = 0;

function increment () {
    count += 1;
    document.getElementById("count-el").textContent = count;
}

function decrement() {
    count -= 1;
    document.getElementById("count-el").textContent = count;
}

function save() {
    if (storedCount === 0) {
        storedCount = count;
        saveEl.textContent = "TOTAL: " + storedCount;
    } else {
        storedCount += count;
        saveEl.textContent = "TOTAL: " + storedCount;
    }
    count = 0;
    countEl.textContent = count;
}

function reset() {
    count = 0;
    storedCount = 0;
    countEl.textContent = count;
    saveEl.textContent = "TOTAL: 0"
}

    

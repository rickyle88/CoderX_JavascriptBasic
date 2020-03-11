// Sort an array alphabetically

function alphabetical(arr) {
    // Write code here...
    return arr.sort(function(a,b){
        return a.charCodeAt(0) - b.charCodeAt(0);
    });
}

let arrayString = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

// [ 'Blue ', 'Green', 'Indigo', 'Orange', 'Red', 'Violet', 'Yellow ' ]
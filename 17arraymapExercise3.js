// Use array map make an array of the names in <h1></h1>, and the ages in <h2></h2>

const users = [
    {
        name: "Angelina Jolie",
        age: 80

    },
    {
        name: "Eric Jones",
        age: 2

    },
    {
        name: "Paris Hilton",
        age: 5

    },
    {
        name: "Kayne West",
        age: 16

    },
    {
        name: "Bob Ziroll",
        age: 100

    }
]

function readyToPutInTheDOM(arr) {
    // Write code here...
    return arr.map(function (obj) {
        return '<h1>' + obj.name + '</h1><h2>' + obj.age + '</h2>';
    })
}

//   readyToPutInTheDOM(users)


// ["<h1>Angelina Jolie</h1><h2>80</h2>", "<h1>Eric Jones</h1><h2>2</h2>", "<h1>Paris Hilton</h1><h2>5</h2>", "<h1>Kayne West</h1><h2>16</h2>", "<h1>Bob Ziroll</h1><h2>100</h2>"]
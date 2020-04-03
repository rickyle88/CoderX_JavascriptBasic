// database design
var classes = [
    {
        id: 0,  //identifier
        name: '1A',
        teacher: 0
    },
    {
        id: 1,
        name: '2A',
        teacher: 1
    },
    {
        id: 2,
        name: '3A',
        teacher:2
    },
    {
        id: 3,
        name: '4A',
        teacher:3
    },
    {
        id: 4,
        name: '5A',
        teacher:4
    },


];

var teachers = [
    {
        id: 0,
        name: 'Quynh',
        age: 30
    },
    {
        id: 1,
        name: 'Chinh',
        age: 35
    },
    {
        id: 2,
        name: 'Nguyet',
        age: 40
    },
    {
        id: 3,
        name: 'Huong',
        age: 50
    },
    {
        id: 4,
        name: 'Hai',
        age: 40
    }
];

var students = [
    { id: 0, name: 'Minh', height: 120, class: 0 },
    { id: 1, name: 'Minh', height: 120, class: 0 },
    { id: 2, name: 'Minh', height: 120, class: 0 }
]

// var class1A = classes.find(function(x){
//     return x.name === '1A';
// })

function getStudentsInClass(className){
    var classObject = classes.find(function(x){
        return x.name === className;
    });

    var studentsInClass = students.filter(function(student){
        return student.class === classObject.id;
    })

    return studentsInClass;

}

var studentsInClass = getStudentsInClass('1A');

console.log(studentsInClass);

// Design database for e-magazine website

// Design database for e-commerce

// npm table
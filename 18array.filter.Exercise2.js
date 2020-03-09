/**
 * Give a list of students, filter out non-female 
 */

var members = [
    { name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
];
function filterOutFemales(members) {
    // your code here!
    return members.filter(function(obj){
        return obj.gender !== 'female';
    })
}

console.log(filterOutFemales(members));

// [ { name: 'Trung', gender: 'male' }, { name: 'Peter', gender: 'gay' } ]

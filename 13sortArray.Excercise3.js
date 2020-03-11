// Sort an array from shortest string to longest

function lengthSort(arr) {
    // Write code here...
    return arr.sort(function(a,b){
        return a.length - b.length;
    })

    // return arr.sort((a,b)=> a.length - b.length);
  }
  
  // Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length

  let arrayString = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
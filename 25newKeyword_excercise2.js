/**
 * Viết hàm xoá thuộc tính (prop) khỏi object student
 * Trả về object đã được xoá
 * Example:
 *  removeProp("name") = { class: “VI”, rollno: 12 }
*/

function removeProp(prop) {
    var student = {
            name : "David Rayy",
            class : "VI",
            rollno : 12
        }

    delete student.prop;
    return student;
  // chỉ viết code ở dưới dòng này.
}

// removeProp("class")


// { name: "David Rayy", rollno: 12 }

// removeProp("rollno")


// { name: "David Rayy", class: "VI" }
/**
 * Tạo một đối tượng student gồm các property name, sex, age
 * Example:
  name: "CodersX",
  sex: "Male",
  age: 1
 * Viết hàm showInfo trả về object đó
*/

var student = {
    name: "CodersX",
    sex: "Male",
    age: 1
};

function showInfo(obj) {
    // viết code ở đây
    //   return obj;
    this.name = obj.name;
    this.sex = obj.sex;
    this.age = obj.age;
}

showInfo(student);
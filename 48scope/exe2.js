var a = 1;

var b = {
  a: 2,
  foo: function() {
    console.log(this.a);
  }
};

b.foo();

var fooCopy = b.foo;
fooCopy();
// Chạy code và giải thích vì sao kết quả dòng 10 khác dòng 13

// b.foo() sẽ chạy phương thức foo của đối tượng b nên this.a = 2(vì a: 2);
// fooCopy là 1 hàm chạy bên ngoài đối tượng b, nên this.a = 1(do biến toàn cục a = 1)
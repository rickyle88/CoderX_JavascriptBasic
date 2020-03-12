// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

function powerup(arr) {
  
  return arr.map(function(n){
      if(n%2==0){
          return Math.pow(n,2);
      }else{
          return n;
      }
  });


}
console.log(powerup([0, 3, 6, 7, 4]));
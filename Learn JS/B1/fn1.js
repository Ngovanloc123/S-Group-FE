//--------- BT3 -----------------------------------------
function isNumberIncrease(number) {
  // Chuyển số thành string
  let strNumber = String(number);
  // Kiểm tra chuỗi số có tăng hay không
  for (let i = 0; i < strNumber.length - 1; i++) {
    if (strNumber[i] > strNumber[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log("Bài tập 3:");

console.log(isNumberIncrease(12345777));
console.log(isNumberIncrease(5432123));

//--------- BT6 -----------------------------------------
function mostFreq(arr) {
  if (arr.length == 0) {
    return null;
  }

  // Mảng lưu số lần xuất hiện của mỗi phần tử trong mảng arr
  // Khởi tạo ban đầu là 1
  let arrMaxFreqOfNumber = Array(arr.length).fill(1);
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arrMaxFreqOfNumber[i]++;
      }
    }
  }
  // Giá trị lớn nhất trong mãng arrMaxFreqOfNumber
  let maxFreq = Math.max(...arrMaxFreqOfNumber);
  // Chỉ lấy phần tử đầu tiên trong mảng có giá trị tương đương maxFreq
  let index = arrMaxFreqOfNumber.indexOf(maxFreq);
  return arr[index];
}

console.log("Bài tập 6:");

let arr1 = [-1, -2, -3, -4, -5, "a", -5, -6, -7, -7, -7, -7, -8, -9];
console.log(mostFreq(arr1));
let arr2 = [9, 9, 9, 9, 5, 5, 5, 6, 7, 7, 7, 7, 8, 9];
console.log(mostFreq(arr2));

//--------- BT7 -----------------------------------------
function isContainJava(str) {
  return str.includes("java");
}

console.log("Bài tập 7:");
console.log(isContainJava("JavaScript"));
console.log(isContainJava("javaScript"));

//--------- BT9 -----------------------------------------
function substrMax(str) {
  // Biến lưu chuỗi con
  let substr = "";
  // Tách chuỗi ngang cách bởi khoảng trống
  let arrSubStr = str.split(" ");
  // Tìm chuỗi con dài nhất trong mảng arrSubStr
  for (let i = 0; i < arrSubStr.length; i++) {
    if (arrSubStr[i].length > substr.length) {
      substr = arrSubStr[i];
    }
  }
  return substr;
}

console.log("Bài tập 9:");
let str = "Ngô     Ngoooo Vaanaănnananan Lcocoôocoo";
console.log(substrMax(str));

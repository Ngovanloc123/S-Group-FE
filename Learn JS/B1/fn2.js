//--------- BT1 -----------------------------------------

const date = new Date();

// Tháng bắt đầu từ 0
// Thứ trong tuần bắt đầu từ 1 (thứ hai => 1)

let mm = date.getMonth() + 1; // Months start at 0!
let dd = date.getDate();

// Định dạng lại ngày và tháng
if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;

console.log("Bài tập 1:");
console.log(
  date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds() +
    " " +
    dd +
    "/" +
    mm +
    "/" +
    date.getFullYear()
);

//--------- BT2 -----------------------------------------

console.log("\nBài tập 2:");
console.log("Định dạng mm-dd-yyyy");

console.log(mm + "-" + dd + "-" + date.getFullYear());
console.log("Định dạng mm/dd/yyyy");
console.log(mm + "/" + dd + "/" + date.getFullYear());
console.log("Định dạng dd-mm-yyyy");
console.log(dd + "-" + mm + "-" + date.getFullYear());

//--------- BT8 -----------------------------------------

function getMonthForNumber(number) {
  // Ngoại lệ
  if (number <= 0 || number > 12) {
    return "Tháng không hợp lệ!!!";
  }
  // Mảng chứa tên các tháng
  const months = [
    "Tháng một",
    "Tháng hai",
    "Tháng ba",
    "Tháng bốn",
    "Tháng năm",
    "Tháng sáu",
    "Tháng bảy",
    "Tháng tám",
    "Tháng chín",
    "Tháng mười",
    "Tháng mười một",
    "Tháng mười hai",
  ];
  return months[number - 1];
}

console.log("\nBài tập 8:");
let month = 12;
console.log(getMonthForNumber(month));


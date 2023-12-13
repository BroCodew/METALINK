// const timestamp = 1670018373;
// const date = new Date(timestamp * 1000);

// const day = date.getDate();
// const monthNames = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];
// const month = monthNames[date.getMonth()];
// const year = date.getFullYear();

// const formattedDate = `${day} ${month} ${year}`;

// console.log(formattedDate);

const timestamp = 1670192553;
const date = new Date(timestamp * 1000);
const datevalues = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
console.log("datevalues", datevalues);

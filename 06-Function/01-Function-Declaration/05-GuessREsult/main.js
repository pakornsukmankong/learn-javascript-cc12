// const sender = "Matt";

// function sendTo(from, to) {
//   console.log(`From ${from} to ${to}`);
// }

// sendTo(sender, "Sarah"); // * From Matt to Sarah
// sendTo(null); // ** From null to undefined

const sender = "Matt";

function sendTo(to, from = "CC") {
  console.log(`From ${from} to ${to}`);
}

sendTo("Max"); // *** from cc to J
sendTo("Ben", "Jay"); // **** From jay to ben
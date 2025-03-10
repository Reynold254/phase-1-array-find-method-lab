function superbowlWin(record) {
  let win = record.find((game) => game.result === "W");
  return win ? win.year : undefined;
}

// Example usage (optional for testing)
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];

console.log(superbowlWin(record)); // Output: "2015"

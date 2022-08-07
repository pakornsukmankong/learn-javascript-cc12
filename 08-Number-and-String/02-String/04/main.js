const checkWord = (text) => {
  // #1 Normalize
  let lowerStr = text.toLowerCase();
  // #2 Check
  let isMatch =
    lowerStr.includes("xxx") ||
    lowerStr.includes("porn") ||
    lowerStr.includes("sex");

  return isMatch;
};

console.log(checkWord("sex"));
console.log(checkWord("porn"));
console.log(checkWord("xxx"));


console.log(checkWord("SEX"));
console.log(checkWord("PORN"));
console.log(checkWord("XXX"));


console.log(checkWord("seX"));
console.log(checkWord("porn"));
console.log(checkWord("xXx"));
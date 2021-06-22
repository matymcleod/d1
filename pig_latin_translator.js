let args = process.argv.slice(2);
let pigWords = [];

for (let i = 0; i < args.length; i++) {
  pigWords.push(piggyWords(args[i]));
}

function piggyWords(words) {
  return words.slice(1, words.length) + words[0] + "ay";
}

console.log(pigWords.join(" "));
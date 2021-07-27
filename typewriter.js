
let sentence = "hello there from lighthouse labs";
sentence += "\n"

let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay)
  delay += 50
 };
// let arr = sentence.split('');
// arr.forEach((char, index) => {
//   if(char === char[char.length]){
//     char = char + "\n";
//      setTimeout(() => {
//       process.stdout.write(char);
//     }, index * 50);  }
// });
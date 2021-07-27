
const sentence = "hello there from lighthouse labs";
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
//      setTimeout(() => {
//       process.stdout.write(char);
//     }, index * 50);  
// });
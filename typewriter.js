// implement a typewriter animation logic
const sentence = "hello there from lighthouse labs";
let i = 0;
for (const char of sentence) {
  // For animated printing increment i with every looping
  setTimeout(() => {
    process.stdout.write(char);// prints the value in same line .
  }, i);
  i += 50;
};
setTimeout(() => {
  console.log("");
}, i);

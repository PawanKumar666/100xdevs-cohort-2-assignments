/* We can see the cpu load at max level(check with 'top' command) on a core on running this code*/

let sum = 0;
for (let i = 0; i < 10000000000; i++) {
  sum += i;
}
console.log(sum);

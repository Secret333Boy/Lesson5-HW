// Дано целое число N (>0). Найти значение выражения 1-2+3-...(N слагаемых, знаки чередуются). 
// Условный оператор не использовать.

/*1*/
// var N = 5, nums = [],sign = [], numsWithSigns = [], result = 0;

// for (var i = 0; i < N; i++) {
// 	nums.push(i+1);
// }

// console.log(`Nums: ` + nums);

// for (var i = 0; i < N; i+=2) {
// 	sign.push("+");
// 	sign.push("-");
// }

// console.log(`Signs: ` + sign);

// for (var i = 0; i < nums.length; i++) {
// 	numsWithSigns.push(+`${sign[i]}${nums[i]}`);
// }
// var task = "(" + numsWithSigns.join(')+(') + ")";
// console.log(`Task: ` + task);

// for (var i = 0; i < numsWithSigns.length; i++) {
// 	result += numsWithSigns[i];
// }
// console.log(result);

/*2*/
// var N = 6, result = 0, j = 1;

// for (var i = 1; i <= N; i++) {
// 	console.log(`${result} + ${i*j}:`);
// 	result += i * j;
// 	console.log(`${result}`);
// 	j *= -1;
// }

// console.log(`Result: ${result}`);
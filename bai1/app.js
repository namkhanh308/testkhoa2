a = [1, 2, 3, "a"];
b = [2, 3, 4, 5, "b"];
let g = a.concat(b);
k = [];
for (let i = 0; i < a.length; i++) {
	for (let j = 0; j < b.length; j++) {
		if (a[i] == b[j]) {
			k.push(a[i]);
		}
	}
}
let new_arr = 0;
new_arr = g.filter((item) => !k.includes(item));
console.log(new_arr);

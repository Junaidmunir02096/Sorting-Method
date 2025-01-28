
let  Arry1 = [1, 7, 2, 8, 3, 4, 5, 0, 9];

for (let i = 1; i < Arry1.length; i++)
    for (let j = 0; j < i; j++)
        if (Arry1[i] < Arry1[j]) {
            let r = Arry1[i];
            Arry1[i] = Arry1[j];
            Arry1[j] = r;
        }

console.log(Arry1);






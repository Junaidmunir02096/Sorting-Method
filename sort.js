// Object Sorting in JavaScript


let array = [200, 100, 50, 20, 40, 2, 30];

function sortArray(arr) {
    let work = true;
    while (work) {
        work = false;
        for (let i = 0; i < arr.length; i++) {
// sorting algorithm
            if (arr[i] > arr[i + 1]) {
                work=true;

                let res = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = res;
            }
        }
        
    }
    return arr;

}
console.log(sortArray(array));












// let Objects = [
//     {
//         id: 2,
//         name: 'yash',
//         age: 25,
//         city: 'Delhi',
//         univeristy: 'Uol'
//     },
//     {
//         id: 3,
//         name: 'tushar',
//         age: 15,
//         city: 'lahore',
//         univeristy: 'Uol'
//     },
//     {
//         id: 1,
//         name: 'Akash',
//         age: 45,
//         city: 'Islamabad',
//         univeristy: 'UOL'
//     },
// ]

// let length = Objects.length;
// for (let i = 0; i < length; i++) {
//     for (let j = i + 1; j < length; j++) {
//         if (Objects[i].name > Objects[j].name) {
//             let final = Objects[i];
//             Objects[i] = Objects[j];
//             Objects[j] = final;
//         }
//     }
// }
// console.log(Objects);
















// let Arry1 = [12, 27, 42, 18, 3, 14, 15, 0, 9]

// for (let i = 1; i < Arry1.length; i++) {
//     for (j = 0; j < i; j++)
//         if(Arry1[i]<Arry1[j]){
//             let res = Arry1[i]
//             Arry1[i]=Arry1[j]
//             Arry1[j]=res;
//         }
// }
// console.log(Arry1);



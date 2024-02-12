// // * =======================================================
// // *             FOR LOOP
// // * =======================================================


// const s1 = prompt("1.sayiyi giriniz")
// const s2 = prompt("2.sayıyı giriniz")
// const islem = prompt("işlem giriniz: + , -, *, %")

// let yekun = 0

// switch(islem){
//     case "+": 
//     yekun = s1 + s2
//     break

//     case "-": 
//     yekun = s1 - s2
//     break

//     case "*":
//         yekun = s1 * s2
//         break
//     case "%": 
//     yekun = s1 % s2
//     break
//     default:
//         alert("yi")
//         break
// }

// console.log(`${s1} ${islem} ${s2} = ${yekun}`);






// console.log(" **** FOR ****")

// // 5 kişinin notunu gierek otalamasını hesaplayan kodu giriniz


// let sum = 0
// let i = 1
// for (let i = 1; i <= 50; i++) {
//     const grade = Number(prompt(`${i}. notu giriniz`))
//     let sum = sum + grade
//     console.log(sum);
// }

// console.log(`avg:${sum / 5}`);

// for(let i = 10; i >= 0; i-- ) {
//     console.log(i);
// }

const n1 = 15
const n2 = 25
let sum = 0
if (n1 > n2) {
    console.log("n2 should be bigger than1");
}else{
    for(let i = n1; i <= n2; i++){
        sum += i
    }
    console.log("SUM:", sum);
}

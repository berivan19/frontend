

var x = 10
console.log(x);

let y = 67
console.log(y);


ad = "arkadaşlar"

let str1 = "merhaba dünya"
let str2 = 'merhaba dünya'
let str3 = `merhaba ${ad}`
let str4 = new String("merhaba dünya")


console.log(typeof str4,str4);
console.log(str1);

console.log(str1[4]);

str1[4]="ü"

str1="merhaba FS16"
console.log(str1);

let kimlik=1234567890009
let adSoyad = "berivan taskin"

console.log("personelimiz" ,adSoyad,"'in kimlik numarası:",kimlik);


console.log(`personelimiz ${adSoyad}'in kimlik numarası:${kimlik}`);

console.clear()

//! BOOLEAN
// true yada false değeri tutar

let deger=true

console.log(Boolean(deger))

let kontrol=(sifre="12x45")

if (sifre=="12x45"){
    console.log("Sistemiz açık")
}
else{
    console.log("sisteminiz kapalı")
}

/* -------------------------------------------------------------------------- */

//! NULL 
let personel=null
console.log(typeof null)
console.log(null+5)


// *********** UNDEFİNED ***********

let phoneNumber;
console.log(phoneNumber);
console.log(typeof phoneNumber);

phoneNumber="+90456456"
console.log(typeof phoneNumber);

//******* NaN ****** not a number

let n;

let result = n + 15
console.log(result);

let a=10
let b=2

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a**6) // üs alma işlemi
console.log(a % 2) // remainder (modules) kalanı bulma


// let result=365/6
// console.log(result)
// console.log(Math.trunc(result))
// console.log(result.toFixed(2))
// console.log(typeof result.toFixed(3))

// saat ve dakika bulma
let time=375

let hour=




// let time = 375

// let hour = Math.trunc(time/60)
// console.log(hour);

// let minute = 375 % 60
// console.log(`375 dakika=> ${hour}:${minute}`);
console.clear()

let d=5
console.log(a++);


let e = 10
let f = 5
e = f
console.log(e);
console.log(f);

// console.log(e = e+f);
   console.log(e += f);

   console.log(e -= f);

   let g = 3
   let h = "3"
    console.log(g==h);
    console.log(g===h);


    console.log(Boolean("merhaba"));
    console.log(Boolean(0));
    console.log(Boolean(2));
    console.log(Boolean(null));
    console.log(Boolean(undefinedl));
    console.log(Boolean([]));

    console.log(0 && [] && 2);
    console.log([] && "m" && 5);

    


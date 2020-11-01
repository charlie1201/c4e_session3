// A= 1 + 2 + 3+....+ n
// let n = Number(prompt("Input n"));
// let a = (1+n)*(n/2);
// console.log(`A = ${a}`)

// let n = Number(prompt("Input n"));
// let a = 0;
// for(let i= 1; i<=n; i++){
//     a= a +i;
// }
// console.log(a);

//B
// let n = Number(prompt("Input n"));
// let a= 0;
// for(let i = 1; i <= n; i = i +1){
//     a = a + i*i;
// }
// console.log(a);

//C
// let n = Number(prompt("INput n"));
// let a = 1;
// for (let i = 2; i <= n; i = i+ 1){
//     a = a + 1/(i*(i+1))
// }
// console.log(a);

//1.
// let n = Number(prompt("Input number"));
// let a =1;
// if(n < 0){
//     console.log("Invalid number");
// }else{
// for(let i = 1; i<= n; i =i + 1){
//     a = a*i;
// }
// console.log(`${n}! = ${a}`);
// }


//2.
// let name = prompt("What's your name?");
// let age = Number(prompt("How old are you?"));
// if( age < 18){
//     console.log(`${name} chua du tuoi`);
// } else{
//    let a = prompt(`${name} co muon dang nhap khong`);
//    if (a === "yes"){
//        console.log(`${name} dang nhap thanh cong`);
//    }else if( a === "no"){
//        console.log(`${name} thoat khoi trang web`);
//    }else{
//        console.log("sai cu phap");
//    }


// }

//3.
// let userName = prompt("Input user name:");
// let password = prompt("Input password:");
// let userName2 = "maihuong";
// let password2 = "zxcvbn";
//  if(userName === userName2 && password === password2){
//     console.log("dang nhap thanh cong");
//  }else{
//      console.log("invalid name or pass");

//  }

//4.
// let a = prompt("input name");
// let b = Number(prompt("input thang sinh"));
// switch(b){
//     case 1:
//     case 2:
//     case 3:{
//         console.log(`${a} sinh mua xuan`);
//         break;
//     }
//     case 4:
//     case 5:
//     case 6: {
//         console.log(`${a} sinh mua he`);
//         break;
//     }
//     case 7: 
//     case 8:
//     case 9:{
//         console.log(`${a} sinh mua thu`);
//         break;
//     }
//     case 10:
//     case 11:
//     case 12: {
//         console.log(`${a} sinh mua dong`);
//     }
// }


// //5
// let loop = true;
// while(loop){
//     let a = Number(prompt("input a:"));
//     let b = Number(prompt("input b:"));
//     let c = Number(prompt("input c:"));
//     let delta = (b*b)-(4*a*c);
//     if(a !== 0){
//     if(delta < 0){
//         console.log("Vo nghiem");
//     }else if (delta === 0){
//         console.log(`phuong trinh co nghiem kep x = ${-b/(2*a)}`);
//     }else{
//         console.log(`phuong trinh co nghiem x1 = ${(-b + Math.sqrt(delta))/(2*a)}, x2 = ${(-b - Math.sqrt(delta))/(2*a)}`)
//     }
//     }else{
//         console.log(`phuong trinh co nghiem x = ${-c/b}`);
//     }
//     let userAnswer = prompt("co su dung phuong trinh tiep hay khong?");
//     if(userAnswer === "no"){
//         //break;
//         loop = false;
//     }
// }

//6
// let loop = true;
// while(loop){
//     let userInput = prompt("input smt:");
//     let a = userInput[userInput.length-1];
//     for (i = 2; i <= userInput.length; i= i+1){
//         a = `${a}${userInput[userInput.length-i]}`;
//     }
//     console.log(a);
//     let userAnswer = prompt("continue?");
//     if(userAnswer === "no"){
//         break;
//     }
// }

//Array
// let item1 = "chao ga";
// let item2 = "com gao lut";
// let item3 = "burger";
// let item4 = "khoai tay chien";

// let menu =[];
// console.log(menu);
//  let menu = [`chao ga`, `burger`, `com gao lut`]
//  console.log(menu);


                    // 0              1               2           = index
let anime = [`Kimetsu no yaiba`, `Naruto`, `Sword Art Online`];
// console.log(anime);

// anime.push(`Bleach`);
// let newItem = prompt("Input new anime");
// anime.push(newItem);
// console.log(anime[1]);
// result= naruto
// update

// anime[1] = `Tokyo Ghoul`;
// console.log(anime);
// let animeTitle = prompt("input anime title");
// anime[0] = animeTitle;
// console.log(anime);

// anime.splice(0, 1);
// console.log(anime);

let n = anime.length;
for(let i= 0; i < n; i++){
console.log(anime[i]);
}

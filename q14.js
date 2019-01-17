//Question(5.14)
//Write a program that prints the following using a for loop:
//11 ~ 12 ~ 13 ~ 14 ~ 15
//21 ~ 22 ~ 23 ~ 24 ~ 25
//31 ~ 32 ~ 33 ~ 34 ~ 35
//41 ~ 42 ~ 43 ~ 44 ~ 45
//51 ~ 52 ~ 53 ~ 54 ~ 55
//61 ~ 62 ~ 63 ~ 64 ~ 65
//71 ~ 72 ~ 73 ~ 74 ~ 75
//81 ~ 82 ~ 83 ~ 84 ~ 85
let row1 = "";
let row2 = "";
let row3 = "";
let row4 = "";
let row5 = "";
let row6 = "";
let row7 = "";
let row8 = "";

for(let i = 11; i <= 15; i++) {
    row1 += "" +  i  +  "~"  ;
}   
console.log(row1);

for(let j = 21; j <= 25; j++) {
    row2 += "" +  j  +  "~"  ;
}
console.log(row2);

for(let k = 31; k <= 35; k++) {
    row3 += "" +  k  +  "~"  ;
}
console.log(row3);

for(let l = 41; l <= 45; l++) {
    row4 += "" +  l  +  "~"  ;
}
console.log(row4);

for(let m = 51; m <= 55; m++) {
    row5 += "" +  m  +  "~"  ;
}
console.log(row5);

for(let n = 61; n <= 65; n++) {
    row6 += "" +  n  +  "~"  ;
}
console.log(row6);

for(let o = 71; o <= 75; o++) {
    row7 += "" +  o  +  "~"  ;
}
console.log(row7);

for(let p = 81; p <= 85; p++) {
    row8 += "" +  p  +  "~"  ;
}
console.log(row8);
//Answer(11~12~13~14~15............81~82~83~84~85)
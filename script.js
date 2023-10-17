// lab_5.4
// Гринчук Тарас
// Лабораторна робота № 5.4
// Обчислення сум та добутків за допомогою рекурсії
// Варіант №4

function s0(i, N) {
   S = 0;
   for (i; i <= N; i++) {
      S += (1 + i / N) / (i * i);
   }
   return S;
}

function s1(i, N) {
   if (i > N) {
      return 0;
   } else {
      return (1 + i / N) / (i * i) + s1(i + 1, N);
   }
}

function s2(i, N) {
   if (i < 1){
      return 0;
   } else {
      return (1 + i / N) / (i * i) + s2(i-1, N);
   }
}
function s3(i, N, t) {
   t = t + (1 + i / N) / (i * i);
   if (i >= N){
      return t;
   } else {
      return s3(i + 1, N, t);
   }
}
function s4(i, N, t) {
   t = t + (1 + i / N) / (i * i);
   if (i <= 1){
      return t;
   } else {
      return s4((i - 1), N, t);
   }
}


let N = Number(prompt("N = "));
let i = 1;

console.log("(Iteration)     S0 = " + s0(i, N));
console.log("(rec up ++)     S1 = " + s1(i, N));
console.log("(rec up --)     S2 = " + s2(N, N));
console.log("(rec down ++)   S3 = " + s3(i, N, 0));
console.log("(rec down --)   S4 = " + s4(N, N, 0));

// module.exports = {s0, s1, s2, s3, s4};

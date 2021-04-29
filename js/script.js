let ex = Number(prompt("Введите номер задачи 6-8, 10: "))
switch (ex)
{
    case 2:
// Ex.2
// Пользователь вводит длину оснований трапеции (a и b),
//  а также высоту трапеции h. 
// Программа выводит сообщение: 
// «Площадь трапеции будет равна <значение>». 
// Площадь вычисляется по формуле ((a + b) / 2) * h, 
// где a, b - основания, h - высота.


// let a = 0, b = 0, c=0; 
let ex = Number(prompt("Введите номер задачи: 2,3 или4"))

if (ex == 2)
{
alert ("Ex2")   
let a = Number(prompt("Задайте основание трапеции `a=`"));
let b = Number(prompt("Задайте основание трапеции `b=`"));
let h = Number(prompt("Задайте высоту трапеции 'h='"));
let c=(a+b)/2*h

alert(`Площадь трапеции будет равна =   ${c}`);
}
    else if(ex == 3)
    {

    alert("Ex3");
    // Ex.3
    // Пользователь вводит сумму вклада и процент, 
    // который будет начисляться ежегодно. 
    // Отобразить размер вклада поочередно на ближайшие 5 лет.
    // let k=5;
    
    let sum = Number(prompt("Введите сумму вклада `sum=`"));
    let prt = Number(prompt("Введите процент вклада `prt=`"));
        for (let k=1; k<6;k++)
        {
            // document.getElementById("h1").innerHTML=k;
            let TotalSum = sum*Math.pow((1+prt/100),k);
            alert(k);
            alert(`размер вклада через ${k} ,будет = ${TotalSum}`);
        }
    }

    if (ex == 4)
    {
    // else if (ex == 4){
        alert("Ex4");
    }
        // Ex.4
        // Запросить у пользователя ввод числа и сохранить 
        // это число в переменную a.Если переменная a равна 10, 
        // то выведите 'Верно',иначе выведите 'Неверно'.
    
    var i=0;
        let a = Number(prompt("Введите число `a=`"));
            if (a==10){
                alert("Верно!!!");
            }
            else {
                alert ("Не верно!!!");
            }
break;
case 6:
    alert(`"Ex6" Даны переменные a = 10 и b = 3.
    Найдите остаток от деления a на b.`);
          let a1 = 10;
          let b1 = 3;
          let c1 = a1 % b1;  
        //   c1 = parceInt(c1, 10);
          alert(parseInt(c1));


break;
case 7:
    alert(`"Ex7" С помощью цикла for сформируйте строку '123456789' 
            и запишите ее в переменную str.`);
         let str = "";   
         let j = 0; 

          for (j = 1; j<10; j++)
                {
                str = str + "" + j ;           

                }
                alert(str);

break;
case 8:
    alert(`"Ex8" Создайте переменную str и присвойте ей 
    значение 'abcde'. Обращаясь к отдельным символам этой строки 
    выведите на экран символ 'a', 
    символ 'b', символ 'e'.`);
            let m_str =  'abcde';
            let n_pos = 1;
            let l_str = m_str.length;
            
            n_pos = prompt(`"Введите № позиции, не более ${l_str}"`);
            let simv= m_str.charAt(n_pos);
            alert (simv);

break;
case 10:


    let A = [];
    let B = [];
    let AB = []; 
        A = ['a', 'b', 'c'];
        // console.log(A[1]);
        B =[1, 2, 3];
        // console.log(B[1]);
        AB = A.slice([0],A.length+1);
        // console.log(A.length);
        AB = A.concat(B);
    for (let i in AB){
        // console.log(AB[i]); 
        alert(AB[i]);
            }
break;              
}
alert ("End");
// let kursDollara = 74.8;
// let kursEuro = 90.5;
// let sumDollars = 0, sumEuro = 0;

// let rubles = prompt("Сумма в рублях:");

// if(!rubles && typeof rubles == "object") {
//   alert("Вы отменили!!!");
// }
// else {
//   if(rubles == "") {
//     alert("Вы ничего не ввели!!!");
//   }
//   else {
//     if(isNaN(+rubles)) {
//       alert("Это не число!");
//     }
//     else {
//       sumDollars = (rubles/kursDollara).toFixed(2);
//       sumEuro = (rubles/kursEuro).toFixed(2);

//       alert(`Сумма в долларах = ${sumDollars}$, сумма в евро = ${sumEuro}\u20AC`);
//     }
//   }
// }

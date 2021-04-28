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
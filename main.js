var age=+prompt("Введите свой возраст: ")

if (age > 0 && age <= 18){
    alert("Вы ещё молоды,вам нужно учиться!!! ")
}

 else if (age > 18 && age < 50 ){
    alert("Вам нужно работать!!!😎")
}
 else if (age > 50 && age < 59 ){
    alert("Скоро на пенсию!!!")
}

else if (age > 50 && age < 100 ){
    alert("Вы пенсионер!!!")
}

else {
    alert("Что-то пошло не так!!!!")
}



//////////////////////////////////////////////////



var time=+prompt("Введите текущее время:")
if (time==0){
    alert("полночь!!!!!🕐")
}

else if (time > 0 && time <= 4) {
    alert(time+ " часа ночи🕐")
}

 else if (time > 4 && time < 12) {
    alert(time+ " часа утра🕐")
}

else if (time >= 12 && time <= 17) {
    alert((time-12)+ " часа дня🕐")
}

else if (time > 17 && time <= 23) {
    alert((time-12)+ " часа вечера🕐")
}

else {
    alert("Что-то пошло не так!!!!")
}



////////////////////////////////////////////////////



var num1=+prompt("Введите первое число:")
var num2=+prompt("Введите второе число:")
var num3=+prompt("Введите третье число:")

//3 4 5 
if (num1<num2 && num2<num3) {
    alert(num2+" Среднее число")
}
else if (num1<num2 && num1>num3) {
    alert(num1+" Среднее число")
}
else{
    alert(num3+" Среднее число")
}

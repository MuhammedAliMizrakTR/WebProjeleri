console.log('Merhaba JS');

//DYNAMIC TYPED

var a = 'Hello world';
a=23;
a=true;
a='Hello again';

console.log(a);

let b ="Another keyword  for variables";
b='Other var';

const c = 'Conctant Variable'; //değiştiremezsin !!!
//c='Change contant';

console.log(c);


//DATA TYPES
//Primitive Data Types

var str = 'STRING'; //string
var number = 25; //sayısal - int double decimal...
var boolean = true; // boolean
var nullVar = null; //null 
var notANumber = NaN;
var myundefined = undefined;

var myVar; //default olarak undefined (tanımsız..)


//Complex data Types
//Object

var myObj ={

    name:'John',
    age:23,
    isEngineer:true,

}


console.log(myObj);

//Değer okuma

console.log(myObj['age'])
console.log(myObj.name)

//Yeni property oluşturma

myObj.country = 'USA';
console.log(myObj);

//Property silme
delete myObj.isEngineer;
console.log(myObj);

//property değerini  değiştirme
myObj.name = 'Jane';
console.log(myObj);

console.clear();


//Array

var myArr = ['John','Jane',33,57,12.25,true,false,null,NaN];

console.log(myArr);

//dizi içinden veri  okuma
console.log(myArr[0]);
console.log(myArr[3]);


//değer değiştirme

myArr[0]="Bob";
console.log(myArr);

//DEĞER EKLEME
//en sona değer ekleme

myArr.push('Alice');
console.log(myArr);


//en başa değer eklemek için
myArr.unshift('David');
console.log(myArr);

//değer çıkartmak
//pop() en sondaki değeri array den çıkarır

myArr.pop();
console.log(myArr);


//ilk sıradaki elemanı çıkartmak için

myArr.shift();
console.log(myArr);



//Math Operators
//c# ile hepsi aynı...

//us alma

var usAl = 2 ** 3;
console.log(usAl);

//Math Shortcut

var x=4;

x +=4;

console.log(x);


//1 arttırıp 1 azaltma

x++; //x = x+1      x+=1
x--;

console.clear();

//Conditional Operators

var n=13;
var l=7;

var con1 = n>1;
console.log(con1);

var con2 = 13<=n;

console.log(con2);


//Equalty check

var con3 = 5 == '5';
console.log(con3);

//strcit equaltiy check

var con4 = 25 === '25';
console.log(con4);


//not equal

var con5 = '44' !== 44;
console.log(con5);


//IF

if(3>5){

    console.log('3 büyüktür 5');
}


var msg = 'Hello';

if(msg==='Hello')
{
    console.log('message is hello');
}

//else

var age=45;

if(age>=65){

    console.log('Aşı olduk mu?');
}
else
{
    console.log('daha gençsin')
}

//else if

var johnAge = 29;

if(johnAge>=45){
    console.log("john 45 yaşından büyüktür");
}
else if(johnAge>=18)
{
    console.log('john bir yetişkindir')
}
else if (johnAge>=12)
{
    console.log('john genç birisidir')
}
else
{
    console.log('john bir çocuktur');
}


//switch case

var firstName = 'Alice';

switch (firstName) {
    case 'Bob':
        console.log('Sen bobsun');
        break;
    case 'John':
        console.log('Sen John');
        break;

     case 'Alice':
        console.log('Sen Alice sin');
        break;    


    default:
        console.log('Sen kimsin ?')
        break;
}


//Döngüler
//FOR

var loopArray = ['John','Alice','Bob','Betty'];


for (let i = 0; i < loopArray.length; i++) {
    
    console.log(loopArray[i]);
}


//var ile let arasındaki fark

var z = 2;

for (let z = 0; z < 5; z++) {
   
    console.log('z = ', z);
}

console.log('Global z = ', z);


//negatif yönlü for döngüsü

for (let i = 10; i >= 0; i--) {
    console.log("i = " + i);
    
}

console.clear();


//WHILE

let myAge = 33;

while (myAge<=65) {
    console.log('Hala emekli değilsin');
    myAge++;
}

console.log('Artık emekli olabilirsin');
console.clear();

//DO-WHILE

let yourAge = 100;

do {
    console.log('90 yaşından küçüksün')
    yourAge++;

} while (yourAge<90);


console.log(yourAge);


console.clear();



//FUNCTIONS

function add(){
    console.log('Add function', 4 +10);
}

add();


//parametre alan fonksiyonlar

function double(n){
    console.log(n*2);
}


double(23);
double(3);



function multiply(x,y){
    console.log(x*y);
    return x*y;
}



let sonuc = multiply(3,2);
console.log(sonuc);

//Anonym Function

var addFn = function(a,b){

    console.log(a+b);
    return a+b;
}

const output1 = addFn(5,7);
console.log(output1);


function toplam(a,b){

    console.log('a değerinin number olup olmadığı kontrol ediliyor');

    if(typeof a !=='number'){
        console.log('a değişkeni bir number değil');
        return;
    }


    console.log('a 10 dan küçük mü diye bakalım');

    if(a>=10){

        return a+b;
    }


    console.log('Sonuç hesaplanıyor');

    return 10 + a + b;


}

const result1 = toplam(3,5);
console.log(result1);

const result2 = toplam(12,3);
console.log(result2);

const result3 = toplam('Hello',4);
console.log(result3);
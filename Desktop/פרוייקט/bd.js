/* let arr=[1,2,3 ,4,5,6]
let start=2
let delCount=2
let a="a",b="s"

let i=0
for( i=start;i<arr.length-delCount;i++)
                      arr[i]=arr[i+delCount];
                          
  for( i;i<arr.length;i++)  
                         delete arr[i]                   
                       console.log(arr) */

//pop
/* let fruits =['Apple', 'Orange', 'Banana'];
delete(fruits[length]);
console.log(fruits); */

//push
/* let argToPush="melon"
 let fruits =['Apple', 'Orange', 'Banana'];
fruits[fruits.length]=argToPush
console.log(fruits); 
console.log(fruits.length); */

//shift לא טיפלתי במקרה שמערך ריק צריך להחזיר UND
/* let fruits =['Apple', 'Orange', 'Banana'];
for (let i=0;i<fruits.length-1;i++)
fruits[i]=fruits[i+1];
delete(fruits[fruits.length-1]);
console.log(fruits); 
console.log(fruits.length);  */

/* let fruits =['Apple', 'Orange', 'Banana'];
for (n of fruits) fruits[n]=fruits[n+1];
delete(fruits[fruits.length-1]);
console.log(fruits); 
console.log(fruits.length);  */

//unshift
/* let argTounshift="melon"
let fruits =['Apple', 'Orange', 'Banana'];
for (let i=fruits.length;i>0;i--)
fruits[i]=fruits[i-1];
fruits[0]=argTounshift;
console.log(fruits); 
console.log(fruits.length);  */

//slice
/* let j=0;
let fruits =['Apple', 'Orange', 'Banana','Melon','Batata','Kivi'];
let start=-3,end=-1;
let result_fruits=[]; 
if (start<0) {
  start=fruits.length+start
  end=fruits.length+end;
}
for (let i=start;i<end;i++)
                   result_fruits[j++]=fruits[i]
 console.log(result_fruits); 
 console.log(result_fruits.length);

console.log(fruits.slice(-3,-2))
console.log(fruits.slice(-3,-3))
console./* log(fruits.slice(-3,-1)) */

//splice
/* let fruits = ["Apple", "Orange", "Banana", "Melon", "Batata", "Kivi"];
let fruits_result = [];
let start = 2;
let delCount = 2;
let a = "a",
  b = "s";
let i = 0;
j = 0;
for (i = 0; i < start; i++) fruits_result[i] = fruits[i];
fruits_result[++i] = a;
fruits_result[++i] = b;

for (j = start + delCount; j < fruits.length; j++)
  fruits_result[++i] = fruits[j];
console.log(fruits_result);  */

//join
/*  let fruits =['Apple', 'Orange', 'Banana','Melon','Batata','Kivi']; 
 let str=""                    
 for (n of fruits) str=str+n;
 console.log(str) */

//indexOf
/* let str="todayhappyday";
 let start=0;
 let find=false;

 let str2="happy"
 let find_str2=true;
 let start2=0;
 while (!find && start<str.length-str2.length) {
                             while(find_str2&&start2<str2.length){
                                                 if (str2[start2]==str[start+start2]) find_str2;
                                                 else find_str2=false;
                                start2++;    
                                //console.log(start,start2,find,find_str2);
             
                             }
if (start2==str2.length) find=true;
//console.log(start2,str2.length)
start2=0;
start++;
 find_str2=true;
}                            
 if (find) console.log(start)   
 else console.log(-1);    */

//includes
/*  let str="todayhappyday";
 let start=0;
 let find=false;

 let str2="happy"
 let find_str2=true;
 let start2=0;
 while (!find && start<str.length-str2.length) {
                             while(find_str2&&start2<str2.length){
                                                 if (str2[start2]==str[start+start2]) find_str2;
                                                 else find_str2=false;
                                start2++;    
                                //console.log(start,start2,find,find_str2);
             
                             }
if (start2==str2.length) find=true;
//console.log(start2,str2.length)
start2=0;
start++;
 find_str2=true;
}                            
 if (find) console.log(true)   
 else console.log(false); */

//trim
/*   let str="     adfadfsdfsdf     ";
 let done=0,end=str.length;
 let str_result="";
 while(str[start]==" ") start++;
 while(str[end]==" ") end--;
 for(let i=start;i<end;i++) str_result=str_result+str[i];
 console.log(str_result);
 console.log("adfadfsdfsdf");
 console.log(start,end);  */

//replaceAll
/*  let str="todayhappyday";
 let start=0;
 let find=false;

 let str2="y";
 let str_replace="dd";
 let str_result="";
 let find_str2=true;
 let start2=0;
 while ( start<=str.length-str2.length) {
                             while(find_str2&&start2<str2.length){
                                                 if (str2[start2]==str[start+start2]) find_str2;
                                                 else find_str2=false;
                                start2++;    
             
                             }
 if (find_str2==true) {
                   str_result=str_result+str_replace;
                   start+=str2.length;
                   start2=0;
}
else{
  str_result=str_result+str[start];
  start2=0;
  start++;
   find_str2=true;
   
  }

}                            
  console.log(str_result)  */

/*   let fruits =['Apple', 'Orange', 'Banana'];
  function popy(){
    delete(fruits[length]);
    console.log(fruits);
  }
popy.apply(this,fruits) */

/* let names=['nadav','maya','yonatan','avi','yossi','batel'];
for (i in names)
    if (names[i].length>3 && names[i].length<7) console.log(names[i]); */
/* 
str = "";
let names = ["nadav", "maya", "yonatan", "avi", "yossi", "batel"];
for (i in names) str = str + names[i];
str1 = str.toUpperCase();
console.log(str1); */

/* let names = ["nadav", "maya", "yonatan", "avi", "yossi", "batel"];
for (i in names) console.log(names[i].toUpperCase())

console.log(names);  */
/* let names = ["nadav", "maya", "yonatan", "avi", "yossi", "batel"];
for (i in names) console.log(names[i]+"*".repeat(Number(i)+1)) */

/* let number=[1,2,3,4,5]
//console.log(number.slice(0,number.length-2))
console.log(number.splice(0,3)) */

/* let d=1
for(i=0;i<10;i++) {
              d=d+1
            console.log()
              debugger
} */

/* function trys(number){
  console.log("hello")

console.log(number)


}
let names = ["nadav", "maya", "yonatan", "avi", "yossi", "batel"];
for(i of names) trys(i) */

/*  let fruits =['Apple', 'Orange', 'Banana'];
  function popy(){
    delete(fruits[length]);
    console.log(fruits);
  }
popy.apply(this,fruits)  */

/* let fruits =['Apple', 'Orange', 'Banana'];
function popy(arr){
  delete(arr[length]);
  console.log(arr);
  //return arr
}
//popy.apply(fruits) 
//arr2=popy(fruits) 
//console.log(arr2)
console.log(fruits); */

/*  let max=Number(prompt("max"))
let min=Number(prompt("min"))
function random (max,min){
  return  Math.round(Math.random()*(max-min)+min)
}
for(i=1;i<100;i++)
console.log(random (max,min)) 
 */
/*  function random(max, min) {
  return  Math.round(Math.random() * (max - min) + min);
}

function build_array(max, min, size) {
  let arr = [];
  for (i = 0; i < size; i++) arr[i] = random(max, min);
  console.log(arr)
  return arr;
}
let max=Number(prompt("max"))
let min=Number(prompt("min"))
let size = prompt("size");
arr1=build_array(max,min,size)
console.log(arr1)  */


/* function add(num1,num2){
return num1+num2
}
/* let num1=Number(prompt("num1"))
let num2=Number(prompt("num2"))
console.log(add(num1,num2)) 

function addArray(arr){
  let sum=0
for(i=0; i<arr.length-1;i=i+2){
  sum+=add(arr[i],arr[i+1])
}
  return sum             
}
let arr=[1,2,3,4,5,6,7] 
if (arr.length % 2==1) arr.push(0)
console.log(addArray(arr)) 
   */

/* function add(num1,num2){
  return num1+num2
  }
  /* let num1=Number(prompt("num1"))
  let num2=Number(prompt("num2"))
  console.log(add(num1,num2)) */
  
 /*  function addArray(arr){
    sum+=add(arr[i],arr[i+1])
        if (i==arr.length) return sum
        addArray(arr)
  }
    return sum             
  }
  let arr=[1,2,3,4,5,6,7] 
  let sum=0
  if (arr.length % 2==1) arr.push(0)
  console.log(addArray(arr))  */

 /*  function fib(number){
    let sum=0;
    if (number==0) return 0
      else return number+fib(--number)
    
}


console.log(fib(4)) */


function repStr(str){
  let sum=0;
  if (number==0) return 0
    else return number+fib(--number)
  
}


console.log(fib(4))
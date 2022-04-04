let str=prompt("enter string");
let sumNum=0,sumChar=0,sumSign=-1;//-1 שלא יכלול את ENTER

for(let i=0;i<=str.length;i++)
{
if (str[i]>="0" && str[i]<="9") sumNum++;
else if ((str[i]>="a" && str[i]<="z") ||(str[i]>="A" && str[i]<="Z") ) sumChar++;
else sumSign++;
}
console.log("number: "+sumNum);
console.log("character:" +sumChar);
console.log("numbsign: "+sumSign);

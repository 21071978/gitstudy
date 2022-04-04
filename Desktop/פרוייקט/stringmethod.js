
let str = prompt("enter string");
let Ischoise = true;
console.log("menu");
console.log("1- slice revah");
console.log("2- count words");
console.log("3- count number");
console.log("4- slice a string");
console.log("9- change string");

console.log("10- exit");
while (Ischoise) {
    let choise = Number(prompt("your choise"));
    switch (choise) {
        case 1: {
            str1 = str.replace(/\s/g, '');
            console.log(str1);
        }
            break;
        case 2:
            {
                let wordCount = 0;
                for (let i = 0; i < str.length; i++)
                    if (str[i] === " " && !(str[i + 1] > '0' && str[i + 1] < '9') && str[i + 1] !== " ") wordCount++
                    else i++;

                console.log(++wordCount);
            }
            break;
        case 3:
            {
                let numCount = 0;
                for (let i = 0; i < str.length; i++)
                    if (str[i] === " " && (str[i + 1] > '0' && str[i + 1] < '9') && str[i + 1] !== " ") numCount++
                    else i++;

                console.log(++wordCount);
            }
            break;
        case 4: {
            let begin = Number(prompt("enter begin? "));
            let end = Number(prompt("enter end? "));
            str4 = str.slice(begin, end);
            console.log(str4);

        }
            break;
        case 9: {
            let strOld = prompt("enter old string to change");
            let strNew = prompt("enter new string ");// jjjjhjhjh 
            //let str9= str.replace(strOld, strNew); //החלפה אחת בלבד
            str9 = str.replaceAll(strOld, strNew);

            console.log(str9);
        }
            break;
    }
case 10: {
        Ischoise = false;
    }
default {
        console.log("menu");
        console.log("1- slice revah");
        console.log("2- count words");
        console.log("3- count number");
        console.log("4- slice a string");
        console.log("9- change string");

        console.log("10- exit");

    };
}
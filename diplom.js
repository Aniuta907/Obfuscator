/*
 Comment 1 - This is my javascript code
 for testing
 */
const      solution = (str) =>{ //функция, которая делает заглавной первую букву каждого слова в предложении
    let   words = str.split(' ');
    let       newstr = "";
    for (i=0;i<words.length; i++){
       let word=words[i];
       let newword=word.toUpperCase();
       newstr+=word.replace(word[0], " "+newword[0]);
    }
    return newstr;
};

const summing = (num) =>{//Суммирует все цифры в числе, пока оно не будет состоять из одной цифры
    let sum = 0;
    while (num > 0){
        sum += num%10;
        num = Math.trunc(num/10);
    }
    return sum;
};
const addDigits = (num) =>{ //Дано неотрицательное целое число num. Складывает все входящие в него цифры до тех пор, пока не останется одна цифра.
    while (num > 9)
        num = summing(num);
    return num;
};
System.out.println("/////");
/*
 Comment 2
 I'm writing my obfuscator
 */
const isPrime = (num) =>{//принимает число и возвращает true, если число является простым, и false в ином случае
    let k=0;
    for (var i=1;i<=num;i++)
        if (num%i==0)
            k++;
    if (k==2) return true;
    else return false;
}
var hello = "//Hello!";
let b = "";
System.out.println("/////");
System.out.println("// This is not a comment");
System.out.println("");

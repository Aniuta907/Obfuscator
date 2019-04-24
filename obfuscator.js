function readFile(object) {
let file = object.files[0];
let reader = new FileReader();

reader.onload = function(event) {
  let content = event.target.result;
  console.log("Содержимое файла:\n " + content);

  const deleteSinglelineСomments = (str) =>{ //функция, удаляющая однострочные комментарии
  //return str.replace(/(\/\/[^\n\r]*[\n\r]+)/g,''); //такой вариант калечит код

    let commas = false; //есть ли кавычка в строке

    for (i = 0;i < str.length; i++){
      if ((str[i] == "\"") && (commas == false)){//нашли кавычку и ее еще не было
        commas = true;
        continue;
      }

     if ((str[i] == "\"") && (commas == true)){//нашли кавычку и она уже была
        commas = false;
        continue;
      }

     if ((str[i] == "\/") && (str[i+1] == "\/")){ //нашли "//"
      if (commas == false) {//кавычки до этого не было
        for (j = i + 2; j < str.length; j++){
          if (str[j] == "\n"){ //находим перевод строки
            str = str.substring(0, i) + "" + str.substring(j, str.length); //удаляем, начиная с "//" и до перевода строки
            break;
          }
        }
      }
      else { //кавычка до этого была найдена, значит это не комментарий
        for (j = i + 2; j < str.length; j++)
          if (str[j] == "\""){ //находим закрывающую кавычку
            i = j; //продолжаем идти по циклу после индекса второй кавычки
            commas = false;
            break;
          }
    }
  }
}
  return str;
}

  const deleteMultilineСomments = (str) =>{ //функция, удаляющая многострочные комментарии
    return str.replace(/(\/\*(?:(?!\*\/).|[\n\r])*\*\/)/g,'');
  }

  const deleteWhitespace = (str) =>{ //функция, удаляющая пробельные символы
    return str.replace(/\s+/g,'');
  }

  const renameVariables = (str) =>{ //функция переименования переменных (рандомная буква плюс рандомное трехзначное число)
    str = str.replace(/\s+/g,' ').trim();

  const randomInteger = (min, max) => {//функция генерации случайного целого числа между min и max, включая min, max как возможные значения.
      var rand = min - 0.5 + Math.random() * (max - min + 1)
      rand = Math.round(rand);
      return rand;
  }

  const makeid = () => {//функция генерации случайной буквы
      var text = "";
      var possible = "abcdefghijklmnopqrstuvwxyz";

      text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
  }

  function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}


    const substrSearch = (target) => {//поиск индексов всех вхождений подстроки в строку
        let arrsubstr = [];
        k = 0;
        var pos = -1;
        while ((pos = str.indexOf(target, pos + 1)) != -1) {
          arrsubstr[k] = pos;
          k++;
        }
        return arrsubstr;
    }

    let arrvariab = [];
    let variabnumber = 0;

    const identifSearch = (stroka) => {
        len = stroka.length;
        arr = substrSearch(stroka);
        for (i = 0; i < arr.length; i++){
          let identif = "";
          let newidentif = "";
          let flag = false;
          let idindex = -1;

          for (let j = arr[i]+len; j < str.length; j++)
            if ((str[j] != " ") && (str[j] != "=") && (str[j] != ";") && (str[j] != "(") && (str[j] != ")") && (str[j] != "\""))
              identif += str[j];
            else break;

//тут учитывается только первое вхождение переменной
          if (identif != ""){/*&& ((str.charAt(idindex + identif.length) == " ")||(str.charAt(idindex + identif.length) == "+")||(str.charAt(idindex + identif.length) == "-")||(str.charAt(idindex + identif.length) == ".")||(str.charAt(idindex + identif.length) == "!")||(str.charAt(idindex + identif.length) == "[")||(str.charAt(idindex + identif.length) == ";")||(str.charAt(idindex + identif.length) == "=")))*/

          //if (isLetter(str.charAt(idindex + identif.length)) != true)
            do{
              newidentif = makeid() + randomInteger(100, 999);
              console.log(identif, "переменовываем в", newidentif);
              //for (i = 0; i < arrvariab.length; i++)
              //  if (newidentif == arrvariab[i])
              //    g++;

              //if (g == 0)
              idindex = str.indexOf(identif);
              if (arrvariab.indexOf(newidentif) == -1) {
                if ((isLetter(str.charAt(idindex - 1)) != true) && (isLetter(str.charAt(idindex + identif.length)) != true))
                if ((str.charAt(idindex - 1) == " ")||(str.charAt(idindex - 1) == "+")||(str.charAt(idindex - 1) == "-")||(str.charAt(idindex - 1) == ".")||(str.charAt(idindex - 1) == "!")||(str.charAt(idindex - 1) == "[")||(str.charAt(idindex - 1) == ";")||(str.charAt(idindex - 1) == "="))
                if ((str.charAt(idindex + identif.length) == " ")||(str.charAt(idindex + identif.length) == "+")||(str.charAt(idindex + identif.length) == "-")||(str.charAt(idindex + identif.length) == ".")||(str.charAt(idindex + identif.length) == "!")||(str.charAt(idindex + identif.length) == "[")||(str.charAt(idindex + identif.length) == ";")||(str.charAt(idindex + identif.length) == "=")){
                  str = str.replace(new RegExp(identif, 'g'), " " + identif + " ");
                }
                //let identif2 = " " + identif + " ";
                str = str.replace(new RegExp(" " + identif + " ", 'g'), newidentif);
                //str.replace (/identif/g, newidentif);
                arrvariab[variabnumber] = newidentif;
                variabnumber++;
                flag = true;

              }

            } while (flag == false);
          }
          arr = substrSearch(stroka);
        }
    }

      identifSearch("let ");

      //substrSearch("var ");
      //identifSearch(4);

      //substrSearch("const ");
      //identifSearch(6);

      //substrSearch("function ");
      //identifSearch(9);
    return str;
    }

  let newcontent = content;
  newcontent = deleteSinglelineСomments(newcontent);//не работает
  newcontent = deleteMultilineСomments(newcontent);
  //newcontent = deleteWhitespace(newcontent);
  newcontent = renameVariables(newcontent);
  console.log("Содержимое обфусцированного файла:\n " + newcontent);
  }

reader.readAsText(file);
}

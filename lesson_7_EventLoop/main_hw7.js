/* function startDay(haveMood,cb) {
    console.log("Початок гарного дня.");
    setTimeout(()=>{
        if (!haveMood) {
            cb("Залишаюся у ліжку", null);
        }else{
            cb(null, "Збираюся на роботу");
         }
    },600)
}
/////////////////////////////////////////////////////
function breakfast(eat,cb){
        console.log("Йду готувати сніданок.");
    setTimeout(()=>{
        if (!eat) {
            cb("Продуктів немає",null);
        }else{
            cb(null,"Готую яєшню та пью каву ");
         }
    },500)
}
///////////////////////////////////////////////////////////
function bathroom(Water,cb) {
       console.log("Йду в душ.");
  setTimeout(()=>{
    if(!Water) {
        cb("Немає води", null);
    }else{
    cb(null,"Приймаю душ");
    }
  },850)
    }
//////////////////////////////////////////////////////////
function goToSchool(desire,cb) {
        console.log("Збираю дитину до школи.");
    setTimeout(()=>{
    if (!desire) {
        cb("Мала не хоче до школи",null);
    }else{
        cb(null,"Дивно,але мала з задоволенням йде до школи!");
    }
},370)
}
/////////////////////////////////////////////////////////////
function getInTheCar(fuel,cb){
        console.log("Сідаю в авто");
    setTimeout(()=> {
     if (!fuel) {
        cb("Забула вчора заправити бак!", null);
     }else {
        cb(null, "Прогріваю ластівку,та їду на роботу.");
        }
    },420)
}
///////////////////////////////////////////////
function go(documents,cb){
        console.log("Забула документи");
    setTimeout(()=> {
     if (!documents) {
        cb("Вертаюсь за докуметами до дому!", null);
     }else {
        cb(null, "Їду на роботу.");
        }
    },480)
}
///////////////////////////////////////////////
function goToWork(weekend,cb){
        console.log("Вже на роботі.");
    setTimeout(()=>{
  if (!weekend) {
     cb("Вертаюсь до дому",null);
  }else {
     cb(null,"Працюю з задоволенням!");
        }
},660)
}

 ///////////////////////////////////////////////
 startDay(1,(err,data)=>{
     if (err){
         console.log(err);
     } else {
         console.log(data);
    breakfast(1,(err,data)=>{
         if (err){
             console.log(err);
         } else{
             console.log(data);
             bathroom(1,(err,data)=>{
                 if (err) {
                     console.log(err);
                 } else {
                     console.log(data)
                 goToSchool(1,(err,data)=>{
                     if (err) {
                         console.log(err);
                     } else {
                         console.log(data);
                     getInTheCar(1,(err,data)=>{
                         if (err) {
                             console.log(err);
                         } else {
                             console.log(data);
                         go(1,(err,data)=>{
                             if (err) {
                                 console.log(err);
                             } else {
                                 console.log(data);
                             goToWork(0,(err,data)=> {
                                 if (err) {
                                     console.log(err);
                             } else {
                                     console.log(data);
                                 }
                             })
                             }
                             })
                         }
                         })
                     }
                 })
                 }
             })
         }

     })
 }
 })*/



           // PROMISE


/* function startDay(haveMood) {
     return new Promise((resolve,reject)=>{
         console.log("Початок гарного дня.");
         setTimeout(()=>{
             if (!haveMood) {
                reject("Залишаюся у ліжку");
            } else{
                resolve("Збираюся на роботу");
             }
         }, 600);
     })
     }
 ////////////
 function breakfast(eat){
     return new Promise((resolve,reject)=>{
             console.log("Йду готувати сніданок.");
         setTimeout(()=>{
             if (!eat) {
                 reject("Продуктів немає");
             }else{
                 resolve("Готую яєшню та пью каву ");
             }
         },500);
     })
     }
 ///////
 function bathroom(water){
     return new Promise((resolve,reject)=>{
         console.log("Йду в душ.");
         setTimeout(()=>{
             if (!water) {
                 reject("Немає води");
             }else{
                 resolve("Приймаю душ");
             }
         },850);
     })
 }
 //////
 function goToSchool(desire){
     return new Promise((resolve,reject)=>{
         console.log("Збираю дитину до школи.");
         setTimeout(()=>{
             if (!desire) {
                 reject("Мала не хоче до школи");
             }else{
                 resolve("Дивно,але мала з задоволенням йде до школи!");
             }
         },370);
     })
 }
 ////////
 function getInTheCar(fuel){
     return new Promise((resolve,reject)=>{
         console.log("Сідаю в авто");
         setTimeout(()=>{
             if (!fuel) {
                 reject("Забула вчора заправити бак!");
             }else{
                 resolve("Прогріваю ластівку,та їду на роботу.");
             }
         },420);
     })
 }
 ///
 function go(documents){
     return new Promise((resolve,reject)=>{
         console.log("Забула документи");
         setTimeout(()=>{
             if (!documents) {
                 reject("Вертаюсь за докуметами до дому!");
             }else{
                 resolve("Їду на роботу.");
             }
         },480);
     })
 }

 function goToWork(weekend){
     return new Promise((resolve,reject)=>{
         console.log("Вже на роботі.");
         setTimeout(()=>{
             if (!weekend) {
                 reject("Вертаюсь до дому");
             }else{
                 resolve("Працюю з задоволенням!");
             }
         },660);
     })
 }

 startDay(1).then(value => {
     console.log(value);
     return breakfast(1);
 }).then(value => {
     console.log(value);
     return bathroom(1);
 }).then(value => {
     console.log(value);
     return goToSchool(1);
 }).then(value => {
     console.log(value);
     return getInTheCar(1);
 }).then(value => {
     console.log(value);
     return go(1);
 }).then(value => {
     console.log(value);
     return goToWork(1);
 }).then(value => {
     console.log(value);
 }).catch(reason => {
     console.log(reason);
 })*/


       // ASYNC AWAIT


/*function startDay(haveMood) {
    return new Promise((resolve,reject)=>{
        console.log("Початок гарного дня.");
        setTimeout(()=>{
            if (!haveMood) {
                reject("Залишаюся у ліжку");
            } else{
                resolve("Збираюся на роботу");
            }
        }, 600);
    })
}
////////////
function breakfast(eat){
    return new Promise((resolve,reject)=>{
        console.log("Йду готувати сніданок.");
        setTimeout(()=>{
            if (!eat) {
                reject("Продуктів немає");
            }else{
                resolve("Готую яєшню та пью каву ");
            }
        },500);
    })
}
///////
function bathroom(water){
    return new Promise((resolve,reject)=>{
        console.log("Йду в душ.");
        setTimeout(()=>{
            if (!water) {
                reject("Немає води");
            }else{
                resolve("Приймаю душ");
            }
        },850);
    })
}
//////
function goToSchool(desire){
    return new Promise((resolve,reject)=>{
        console.log("Збираю дитину до школи.");
        setTimeout(()=>{
            if (!desire) {
                reject("Мала не хоче до школи");
            }else{
                resolve("Дивно,але мала з задоволенням йде до школи!");
            }
        },370);
    })
}
////////
function getInTheCar(fuel){
    return new Promise((resolve,reject)=>{
        console.log("Сідаю в авто");
        setTimeout(()=>{
            if (!fuel) {
                reject("Забула вчора заправити бак!");
            }else{
                resolve("Прогріваю ластівку,та їду на роботу.");
            }
        },420);
    })
}
///
function go(documents){
    return new Promise((resolve,reject)=>{
        console.log("Забула документи");
        setTimeout(()=>{
            if (!documents) {
                reject("Вертаюсь за докуметами до дому!");
            }else{
                resolve("Їду на роботу.");
            }
        },480);
    })
}

function goToWork(weekend){
    return new Promise((resolve,reject)=>{
        console.log("Вже на роботі.");
        setTimeout(()=>{
            if (!weekend) {
                reject("Вертаюсь до дому");
            }else{
                resolve("Працюю з задоволенням!");
            }
        },660);
    })
}


 async function xxx(){
     const haveMood = await startDay(1);
     console.log(haveMood);
     const eat = await breakfast(1);
     console.log(eat);
     const water = await bathroom(1);
     console.log(water);
     const desire = await goToSchool(1);
     console.log(desire);
     const fuel = await getInTheCar(1);
     console.log(fuel);
     const documents = await  go(1);
     console.log(documents);
     const weekend = await goToWork(1);
     console.log(weekend);
 }
xxx();*/











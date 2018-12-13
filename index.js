'use strict';

// Создаётся объект promise
let promise = new Promise((resolve, reject) => {


  setTimeout(() => {
    // переведёт промис в состояние fulfilled с результатом "result"
    
    
    setTimeout(()=>{      
      console.log('5000')
    resolve("result");}, 5000)


    setTimeout(function name(params) {
      console.log('30001')
      resolve("result");
    }, 30001)
    console.log('3000')


  }, 3000);
});

// promise.then навешивает обработчики на успешный результат или ошибку
promise
  .then(
    (resul ) => {
      // первая функция-обработчик - запустится при вызове resolve
      console.log("Fulfilled: " + resul); // result - аргумент resolve
    },
    error => {
      // вторая функция - запустится при вызове reject
      console.log("Rejected: " + error); // error - аргумент reject
    }
  );
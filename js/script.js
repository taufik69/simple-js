
// let value = true;
// let newvalue = Number(value);
// console.log(typeof newvalue);



// let num = '123';
// let x = true;
// console.log(typeof Number(x));
// console.log(String(num));


// function Gretting (nam1 = 'you are missing frist input' , nam2 = ' you are missing sencond input') {
//     alert(nam1 + ' ' +nam2);

// }

// Gretting();

// function showMessage(from, text = anotherFunction()) {
//     // anotherFunction() only executed if no text given
//     // its result becomes the value of text
//     console.log(from + text);
//   }

//   showMessage();

//   function anotherFunction(){
//       alert('motherchod vlaue de');
//   }
// function showCount(count) {
//     // if count is undefined or null, show "unknown"
//     alert(count ?? "unknown"  );
//   }
  
//   showCount(0); // 0
//   showCount(null); // unknown
//   showCount(); // unknown


// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Do you have permission from your parents?');
//     }
//   }
  
//   let age = prompt('How old are you?', 18);
  
//   if ( checkAge(age) ) {
//     alert( 'Access granted' );
//   } else {
//     alert( 'Access denied' );
//   }
  
  
//   age checking problem

function checkAge(age) {
    if(age >= 18) {
        return true;
    }
    else{
        return confirm('do you have permission of parents for checking age');
    }
}

let age = prompt('How old are you :',18);

if ( checkAge(age) ) {
    alert('Acess granted');
}
else {
    alert('acess denidedd');
}

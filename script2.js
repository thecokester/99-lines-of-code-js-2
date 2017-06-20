// var friends = [ "Justin", "Cornelius", "Jermaine", "Lance", "Jermichal" ];
// for(var i = 0; i < friends.length; i++) {
// console.log(friends[i]+":");
//    for(var j = 99; j >= 1; j--) {
//         if (j > 2) {
//             console.log([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j-1) + ' lines of code in the file' );
//         } else if (j == 2) {
//             console.log([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j-1) + ' line of code in the file' );
//         } else if (j = 1) {
//             console.log([j] + ' line of code in the file, ' + [j] + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file' );
//         }
//     }
// }

var friends = [ "Justin", "Cornelius", "Jermaine", "Lance", "Jermichal" ];
        function singing () 
var btn = document.getElementById('my-btn');
btn.addEventListener('click', singing);

              for(var i = 0; i<friends.length; i++) {
                    var div = document.createElement('div')
                    var h3 = document.createElement('h3')
                    div.className = 'friends';
                    h3.innerHTML = friends[i];
                    document.body.appendChild(div);
                    div.appendChild(h3);
                    var para = document.createElement("p");
                    div.appendChild(para);

              for(var j = 99; j > 0; j--) {
                  var para = document.createElement()
                    if (j < 0) {
                      para.innerHTML = j + ' lines of code in the file,'+j+ ' lines of code;'+friends[i]+' strikes one out, clears it all out,'+j+' lines of code in the file'+j+' lines of code in the file,'+j+'lines of code;'+friends[i]+' strikes one out,clears it all out,'+j+' lines of code in the file.';
                    }
                    else if (j == 2) {
                        para.innerHTML = j +' lines of code in the file,'+j+ ' lines of code;'+friends[i]+' strikes one out, clears it all out,'+j+' lines of code in the file'+j+' lines of code in the file,'+j+'line of code;'+friends[i]+' strikes one out,clears it all out,'+j+' lines of code in the file.';
                    }
                    else {
                        para.innerHTML = j +' line of code in the file,'+j+ ' lines of code;'+friends[i]+' strikes one out, clears it all out,'+j+' line of code in the file'+j+' line of code in the file,'+j+'line of code;'+friends[i]+' strikes one out,clears it all out, no more lines of code in the file.';
                }
            
        };
    };
//    Variable Scope

   var david = 'stapleton';
   var justin = 'bieber';

   function myfirstFunction() {
       var david = 'beckham';
       var IwantToBeDavid = david;

       function mySecondFunction(david) {
           david = 'Chapelle';
       }

    //    Undeclared Variable 

    function checkMeOut() {
        undeclaredVariable = 'where\'s my var?';
        console.log(undeclaredVariable);
        
        checkMeOut();

        console.log(undeclaredVariable);
    }

   }

//    Function Expression & Function Decleration

//  Hoist me

    console.log(hoistme);
    console.log(meToo);

    var hoistme = 'meToo' ;
    var metoo = 'hoist me';

    // Immediatley invoked function expression

    (function() {
        var innerVariable = 'im inside an iffe';
        console.log(innerVariable);
        window.jQuery = 'hey i was resturned';
    })();

   
// Loop

for (var i = 0; i < 5; i++) {
    console.log(i);

}

// Set Time out Function 
  for (var i = 0; i < 5; i++) {
    setTimeout(function(){
        console.log(i);
    }, 100);
     
  }




  
    



// document.addEventListener('DOMContentLoaded', function(){
//     var button = document.createElement('button');
//     button.className = 'button';
//     button.innerText = 'Sing';
//     document.body.appendChild(button);

//     button.addEventListener ('click', function() {
//         for(var i = 0; i < friends.length; i++) {
// console.log(friends[i]+":");
// var div = document.createElement('div');
// div.className = 'box';
// h3.innerhtml = 
// var name = document.createElement('h3');
// var text = document.createTextNode(friends);
// name.appendChild(text);
// div.appendChild(name);
// document.body.appendChild(div);

// // div.textContent = "Justin";
// // div.setAttribute('class', 'note');
// document.body.appendChild(div);

//    for(var j = 99; j >= 1; j--) {
//         var p = document.createElement('p');
//         p.classname = 'lyrics';
//         if (j > 2) {
//             console.log([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j-1) + ' lines of code in the file' );
//         } else if (j == 2) {
//             console.log([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j-1) + ' line of code in the file' );
//         } else if (j = 1) {
//             console.log([j] + ' line of code in the file, ' + [j] + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file' );
            
//         }
//     }
// }
       
       // function singSong(){
        
    
// // Your existing code unmodified...
// var iDiv = document.createElement('div');
// iDiv.id = 'block';
// iDiv.className = 'block';
// document.getElementsByTagName('body')[0].appendChild(iDiv);

// // Now create and append to iDiv
// var innerDiv = document.createElement('div');
// innerDiv.className = 'block-2';

// // The variable iDiv is still good... Just append to it.
// iDiv.appendChild(innerDiv);
// // function singSong(){

// }
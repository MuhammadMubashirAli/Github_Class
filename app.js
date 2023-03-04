//alert("Hello World")

//for (var i = 10; i > 0; i--) {
// console.log(i) 
//} 

//
//var userName = prompt("Enter Your Name")
//
//for (var i = 0; i < userName.length; i++) {
// console.log(userName[i])
// if (userName[i] == " ") {
//  alert("please don't put space in your name")
// }
// else {
//  alert("username is valid")
// }
// break
//}

//var userName = prompt('Enter your Name')
//var firstLetters = userName[0]
//console.log(userName[0])
//
//for (i = 0; i < userName.length; i++) 
// if (userName[i] == ' '){
//  console.log(userName[i + 1])
//firstLetters = firstLetters + ' ' + userName[i + 1]
// }
 
//
//}

//console.log(firstLetters)
//
//var carInfo = {
//  nam : 'mehran',
//  model : 2005,
//  color : ['red', 'white']
//
//}

//var numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10]
//
//for (i = 0; i < numbers.length; i++) {
//  console.log(numbers[i])
//  if(numbers[i + 1]  ){
//    console.log('missing number', numbers[i] )
//  }
//
//}

//var msg = 'this is my upwork id you can contact me there'
//for (var i = 0; i < msg.length; i++) {
// console.log(msg.slice(i, i + 6))
// if (msg.slice(i, i + 6) === 'upwork') {
//  alert('Please dont use letter upwork')
// }
//}

//var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',]
//
//for (i = 0; i < weekDays.length; i++) {
//
// console.log(weekDays[i].slice(5, weekDays.length - 4))
//}


var str= prompt("Enter your name")
var words = str.split(" ")
var arr = []
for(var i=0; i<words.length; i++){
 var result = words[i][0].toUpperCase() + words[i].slice(1);
 arr.push(result)
}
console.log(arr.join(" "))


  



// Exercise 3
// alert("hi");

// Excercise 4
// var name = prompt("What's your name?");
// console.log(name);

// Excercise 5
// var movie = prompt("What movie do you want to see");
// var time = prompt("What time do you want to see the movie");
// console.log(movie);
// console.log(time);

// Excercise 6
// var movie = prompt("What movie do you want to see");
// var time = prompt("What time do you want to see the movie");
// console.log(movie);
// console.log(time);

// Excercise 7
// var password = prompt("Enter a password");
//  while (password.length >= 10){
//   password = prompt("Enter another password.");
//   }

//  console.log("Password was saved.");
 
// Excercise 8
// var partyguest = confirm("Wanna party?")
// var age = prompt("How old are you?");

// if (partyguest == true && age > 21){
//  alert("Welcome, grab whatever drank you want.");
// }
 
// else if (partyguest == true && age <21) {
//  alert("Our bad, you can dance but you can't drink");
// }

// else {
//  alert("Your kinda missing the biggest party of the century. No big deal.");
// }

// Explanation here:

// Excercise 9
// var groceries = ["spinach", "eggs", "cheese"];

// for (var i = 0; i < groceries.length; i++) {
//     console.log("I need to buy " + groceries[i]);
// }

// alert("You're done shopping.");

// Excercise 10

// var tina = ["Tina", "30", "woman", "kind", "weird"];


// console.log(tina[0] + " is a " + tina[1] + " year old " + tina[2] + " who is " + tina[3] + " but a little bit " + tina[4] +" (in a good way).");

// Excercise 11

// function CreateHeader(name){
//   return "<h1>" + name + "</h1>";
// }

// function CreateImage (image){
//   return "<img src= \"www.google.com\"" + image +"/>";
// }

// function CreatePara (age,gender,job){
//   return "<p>You are " + age + " years old and are a " + gender + " and you work as a " + job + ".</p>";
// }

// function CreateProfile (name,image,age,gender,job) {

// console.log(CreateHeader(name));
// console.log(CreateImage(image));
// console.log(CreatePara(age,gender,job));

// }

// Ruby code equivalent- don't need to use return in Ruby but have to in JS.


// def create_header(name)
//      "<h1> #{name} </h1>"
// end

// def create_image(image_file)
//     "<img src= \"www.google.com\" #{image_file}>"
// end

// def create_paragraph(age,gender,job)
//    "<p>You are #{age} years old and are a #{gender} and you work as a #{job}.</p>"

// end

// def create_profile(name,age,gender,job,image_file)
//    puts create_header(name)
//    puts create_image(image_file)
//    puts create_paragraph(age,gender,job)
// end

// Using selectors
// $("h1")
// $("div")
// $('div').first()
// $('.profilepic')
// $('.nav-items')

// 3 other selectors
// $("*")
// $("p:first")
// $("h1").hide();

// $(".wrapper").parent();
// $(".nav-items").children();

// $(document).ready(function() {
  // exercise 35
  // $('.main.card h1').click(function(){
  //   alert("Weinerschnitzel");
  // });
 // exercise 36
  // $('.main.card h1').click(function(){
  //   $('.main.card h1').append("!");
  // });
 // exercise 37
  // $('body').click(function() {
  //   $('body').css("background-color","blue");
  // });
 // exercise 38
  // $('.main.card').click(function(){
  //   var georgeCloney = $('.main.card').clone();
  //   $('.main.card').after(georgeCloney);
  // });
 // exercise 39 is incomplete 
  // $('.main.card').click(function(){
  //   $('body').click(function(){
  //     $('img.profilepic').hide();
  //   });
  // });
// exercise 40
  // $('img.profilepic').mousedown(function(){
  //   $('img.profilepic').hide();
  // });
  // $('img.profilepic').mouseup(function(){
  //   $('img.profilepic').hide();
  // });
  // $('img.profilepic').mouseover(function(){
  //   $('img.profilepic').hide();
  // });
  // $('img.profilepic').mouseout(function(){
  //   $('img.profilepic').hide();
  // });
// exercise 41
//   $(':submit').click(function() {
//    $('div#error_message').empty();
//    $('div#success_message').empty();
//    var charFind = document.getElementById("email").value
//    event.preventDefault();
//    if (document.getElementById("email").value == "") {
//      $('div#error_message').append("- Enter your email address.<br>");
//     } 
//    if (document.getElementById("password").value == "") {
//      $('div#error_message').append("- Enter your password.<br>");
//     } 
//    if (document.getElementById("email").value.length < 8) {
//      $('div#error_message').append("- Your email should be at least 8 characters.<br>");
//     } 
//    if (document.getElementById("password").value.length < 8) {
//      $('div#error_message').append("- Your password should be at least 8 characters.<br>");
//     } 
//    if (charFind.indexOf("@") == -1) {
//      $('div#error_message').append("- Your email should contain an '@' symbol.<br>");
//     }  
//    if (charFind.indexOf(".") == -1) {
//      $('div#error_message').append("- Your email should contain an '.' symbol.<br>");
//     }
//      if ($('div#error_message').html() == "") {
//         $('#success_message').append("- Your login is complete.")
//      }
//   }); 
// });





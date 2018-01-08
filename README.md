# Modal-OOP
Create Modal OOP

Free to use
This modal create with oop in javascsript
so you can change the text, function on the call button and also you can change the message on the modal

*************** GETTING STARTED ******************
include JQUERY
https://code.jquery.com/jquery-3.2.1.slim.min.js

include Boostrap
https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css
https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js

HOW TO USE
Create a variable
ex: var konfirmasi = Object.create(Jconfirm);
call function konfirmasi.show({});

******************* SETTINGS *********************
var konfirmasi = Object.create(Jconfirm);
konfirmasi.show({
  title: "Delete Wishlist", // Title Modal
  msg: "Are you sure want to delete?", // Messages Modal
  actionDismiss: "alert('Dismiss Action')", // Dismiss Action Button
  actionAccept: "alert('Accept Action ')", // Accept Action Button
  textDismiss: "No", // Text Dismiss Button 
  textAccept: "Yes, Save Changes" // Text Accept Button
})

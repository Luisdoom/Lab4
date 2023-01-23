$(document).ready()
{

  $("ButtonPost").click(TodoPost)
  $("ButtonClear").click(TodoClear)
  $("ButtonMark").click(TodoMark)
  $("ButtonDelete").click(TodoDelete)
  
 function TodoPost(){
   let todo=$("CajaTexto").val()
   alert(todo)   
 }
 function TodoClear(){}
 function TodoMark(){}
 function TodoDelete(){}
 
}
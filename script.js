$(document).ready();
{
  $("#ButtonPost").click(TodoPost);
  $("#ButtonClear").click(TodoClear);
  $("#ButtonMark").click(TodoMark);
  $("#ButtonDelete").click(TodoDelete);

  function TodoPost(e) {
    e.preventDefault();
    let todo = $("#CajaTexto").val();
    $("#todoList").append(
      `<input type="checkbox" name="caja"/> <lable>${todo}</lable> <br>   `
    );
  }
  function TodoMark() {
    let todos = $("[name='caja']");
    for (let i = 0; i < todos.length; i++) {
      todos[i].checked = true;
    }
  }
  function TodoClear() {
    let todos = $("[name='caja']");
    for (let i = 0; i < todos.length; i++) {
      todos[i].checked = false;
    }
  }
  function TodoDelete() {
    $("#todoList").html("");
  }
}

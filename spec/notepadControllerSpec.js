// 'use strict';

describe('notepadController', function() {
  //
  // it('instantiates a new notepad', function() {
  //   new NotepadController('test-div');
  //   expect(notepad).toBe.instanceOf(Notepad);
  // });
  //
  // it('displays the note creation form', function() {
  //   new NotepadController('test-div');
  //
  //   function convertPlainText(content) {
  //     return content.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  //   }
  //   var testDouble = document.getElementById('test-div');
  //   var form = '<form><input type="text" id="webnote" name="webnote"><input type="submit" id="add-note" value="add-note"></form>';
  //   expect(convertPlainText(testDouble.innerHTML)).toEqual(convertPlainText(form));
  // });

  it('displays a text area when the createNote button is clicked', function() {
    var notepadController = new NotepadController('test-div');
    notepadController.createTextArea('test-div');
    expect(document.getElementById('test-div').innerHTML).toEqual("<textarea class='text-edit' id='my-text'></textarea>");
  });

});

// describe('saveNote', function () {

//   var testDouble = document.getElementById('test-div');
//   var form = "<form><input type='text' id='webnote' name='webnote'><input type='submit' id='add-note' value='add-note'></form>";

//   it('saves a note with the given text', function () {
//     var notepad = new Notepad();
//     var inputField = document.getElementById("webnote");
//     inputField.textContent = 'this is a string';
//     document.getElementById("add-note").click();
//     expect(notepad.notes()).toInclude('this is a string');
//   });

// });

// describe('saveNote', function () {

//   var testDouble = document.getElementById('test-div');
//   var form = "<form><input type='text' id='webnote' name='webnote'><input type='submit' id='add-note' value='add-note'></form>";

//   it('saves a note with the given text', function () {
//     var notepad = new Notepad();
//     var inputField = document.getElementById("webnote");
//     inputField.textContent = 'this is a string';
//     document.getElementById("add-note").click();
//     expect(notepad.notes()).toInclude('this is a string');
//   });

// });

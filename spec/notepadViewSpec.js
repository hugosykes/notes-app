'use strict';

function convertPlainText(content) {
  return content.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
describe('notepadView', function() {

  it('renders the HTML for a list of notes', function() {
    var notepad = new Notepad();
    var view = new NotepadView(notepad);
    var note = new Note('ThisIsTwentySevenCharacters');
    notepad.addNote(note);
    expect(convertPlainText(view.renderFullList())).toInclude(convertPlainText('<ol><li><a id="note1" href="#1">ThisIsTwentySeven...</a></li></ol>'));
  });

  it('renders the HTML for a single note', function() {
    var notepad = new Notepad();
    var view = new NotepadView(notepad);
    var note = new Note('ThisIsTwentySevenCharacters');
    notepad.addNote(note);
    expect(view.renderSingleNote(1)).toEqual('<textarea class="text-edit" id="my-text">' + note.contents() + '</textarea>');
  });

  it

});

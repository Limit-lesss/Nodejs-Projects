const fs = require("fs");
const chalk = require("chalk");

//add notes
const addNotes = (title, body) => {
  const notes = loadNotes();
  if (duplicateNote(title)) {
    console.log(chalk.red("Title name already exit!\nTry new Title name"));
    return;
  }
  fs.writeFileSync(
    "./notes.json",
    JSON.stringify([...notes, { title: title, body: body }])
  );
  console.log(chalk.bgGreen("Successfully note added!"));
};
// find duplicate note present or not
const duplicateNote = (title) => {
  try {
    const notesJson = fs.readFileSync("./notes.json", "utf-8");
    const notes = JSON.parse(notesJson);
    const index = notes.findIndex((e) => e.title === title);
    if (index === -1) return false;
    return true;
  } catch {
    return false;
  }
};
// load notes
const loadNotes = () => {
  try {
    const notes = fs.readFileSync("./notes.json", "utf-8");
    return JSON.parse(notes);
  } catch {
    return [];
  }
};
//remove note
const removeNotes = (title) => {
  try {
    const notesJson = fs.readFileSync("./notes.json", "utf-8");
    const notes = JSON.parse(notesJson);
    const index = notes.findIndex((e) => e.title === title);
    if (index === -1) console.log(chalk.red("Sorry, No note found!"));
    else {
      fs.writeFileSync(
        "./notes.json",
        JSON.stringify(notes.filter((e) => e.title !== title))
      );
      console.log(chalk.bgGreen("Successfully note removed!"));
    }
  } catch {
    console.log(chalk.red("Sorry, No note found!"));
  }
};
// list all notes
const list = () => {
  try {
    const notes = loadNotes();
    if (notes.length === 0) console.log(chalk.red("Sorry, No note found!"));
    else console.log(notes);
  } catch {
    console.log(chalk.red("Sorry, No note found!"));
  }
};

const readNotes = (title) => {
  try {
    const notes = loadNotes();
    if (notes.length === 0) console.log(chalk.red("Sorry, No note found!"));
    else {
      const newNote = notes.filter((e) => e.title === title);
      newNote.length !== 0
        ? console.log(newNote)
        : console.log(chalk.red("Sorry, No note found!"));
    }
  } catch {
    console.log(chalk.red("Sorry, No note found!"));
  }
};
module.exports = { addNotes, removeNotes, readNotes, list };

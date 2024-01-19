const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

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
  console.log("Successfully note added!");
};
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

const loadNotes = () => {
  try {
    const notes = fs.readFileSync("./notes.json", "utf-8");
    return JSON.parse(notes);
  } catch {
    return [];
  }
};
const removeNotes = (title) => {
  try {
    const notesJson = fs.readFileSync("./notes.json", "utf-8");
    const notes = JSON.parse(notesJson);
    const index = notes.findIndex((e) => e.title === title);
    if (index === -1) console.log("Title name not found!");
    else notes.splice(index, 1);
  } catch {
    console.log("Note not found");
  }
};
module.exports = { getNotes, addNotes, removeNotes };

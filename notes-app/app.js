const chalk = require("chalk");
const yargs = require("yargs");
const { getNotes, addNotes, removeNotes } = require("./notes");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    addNotes(argv.title, argv.body);
  },
});
//create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    removeNotes(argv.title);
  },
});
// create read command
yargs.command({
  command: "read",
  describe: "read a note",
  handler: () => {
    console.log("Reading a note");
  },
});
//create list command
yargs.command({
  command: "list",
  describe: "list your notes",
  handler: () => {
    console.log("Listing all notes");
  },
});

yargs.parse();

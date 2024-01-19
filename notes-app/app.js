const chalk = require("chalk");
const yargs = require("yargs");
const { addNotes, removeNotes, readNotes, list } = require("./notes");

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
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    readNotes(argv.title);
  },
});
//create list command
yargs.command({
  command: "list",
  describe: "list your notes",
  handler: () => {
    list();
  },
});

yargs.parse();

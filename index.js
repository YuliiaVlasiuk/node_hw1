const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const contactService = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactService.listContacts();
      console.table(allContacts);
      break;
    case "get":
      const contactById = await contactService.getContactById(id);
      console.log(contactById);
      break;
    case "add":
      const newContact = await contactService.addContact(name, email, phone);
      console.log(newContact);
      break;
    case "remove":
      const deleteContact = await contactService.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const arr = hideBin(process.argv);

const { argv } = yargs(arr);
invokeAction(argv);

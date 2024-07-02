const {
  createFile,
  showFile,
  updateFile,
  deleteFile,
} = require("./moduloVerbos");

// createFile("Conteudo onicial arquivo criado com modulo fs");
// showFile();
// console.log("--------------------------");
// updateFile("Conteudo modificado....");
// showFile();
// console.log("--------------------------");
// deleteFile();

const start = async () => {
  await createFile("Conteudo inicial arquivo criado com modulo fs");
  await showFile();
  console.log("--------------------------");
  await updateFile("Conteudo modificado....");
  await showFile();
  console.log("--------------------------");
  await deleteFile();
};

start();


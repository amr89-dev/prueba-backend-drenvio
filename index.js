const server = require("./src/app");
const DB = require("./src/db/db");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const main = async () => {
  try {
    await DB();

    server.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

main();

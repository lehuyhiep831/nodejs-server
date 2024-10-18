// //#region Import
// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// //#endregion

// //#region Env config
// if (process.env.NODE_ENV === "development") {
//   dotenv.config({ path: ".env.development" });
// } else if (process.env.NODE_ENV === "production") {
//   dotenv.config({ path: ".env.production" });
// } else {
//   dotenv.config(); // Load the default .env file if no environment is specified
// }
// //endregion

// const app = express();
// const port = 3000; // You can choose any port

// // Setting CORS
// app.use(cors({ origin: process.env.WEB_URL }));

// // Define a route handler for the root endpoint
// app.get("/", (req, res) => {
//   res.send("Hello from Node.js API server!");
// });

// app.get("/items", (req, res) => {
//   const targetUrl = "https://api.warframe.market/v1/items";

//   fetch(targetUrl)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(
//           `Network response was not ok (status ${response.status})`
//         );
//       }
//       return response.json();
//     })
//     .then((data) => {
//       res.send(data);
//       // Process the data as needed
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
//   console.log(`Current environment ${process.env.NODE_ENV}`);
//   console.log(`Allowing requests from ${process.env.WEB_URL}`);
// });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/api/hello", (req, res) => {
  res.send("Hello from Node.js REST API!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

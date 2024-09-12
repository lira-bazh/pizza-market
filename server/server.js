import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { promises as fs } from "fs";

import { Html } from "./html.js";

const server = express();
const PORT = process.env.PORT || 8082;
const __dirname = process.cwd();
const fileData = `${__dirname}/server/db.json`;

const middleware = [
  cors(),
  cookieParser(),
  express.json({ limit: "50kb" }),
  express.static("public")
];

middleware.forEach((it) => server.use(it));

server.get("/api/data", (req, res) => {
  fs.readFile(fileData, { encoding: "utf8" }).then(
    (text) => {
      res.json(JSON.parse(text).pizzas);
    },
    (error) => {
      res.json(`${error}`);
    }
  );
});

server.get("/api/data/:fromID/:toID", (req, res) => {
  const { fromID, toID } = req.params;
  fs.readFile(fileData, { encoding: "utf8" }).then(
    (text) => {
      res.json(JSON.parse(text).pizzas.slice(fromID, toID));
    },
    (error) => {
      res.json(`${error}`);
    }
  );
});

server.get("/", (req, res) => {
  res.send("Express server");
});

server.get("/*", (req, res) => {
  const initialState = {
    location: req.url
  };

  res.send(
    Html({
      body: "",
      initialState
    })
  );
});

server.listen(PORT, () => {
  // console.log(`Serving at http://localhost:${PORT}`);
});

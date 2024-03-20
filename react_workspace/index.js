import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pckandpal@71",
  database: "reactschema",
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/new_table", (req, res) => {
  const q = "SELECT * FROM new_table";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/new_table", (req, res) => {
  const q = "INSERT INTO new_table(`Name`, `Age`) VALUES (?)";

  const values = [
    req.body.Name,
    req.body.Age
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/new_table/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM new_table WHERE id = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/new_table/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE new_table SET `Name`= ?, `Age`= ? WHERE id = ?";

  const values = [
    req.body.Name,
    req.body.Age
  ];

  db.query(q, [...values,bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8000, () => {
  console.log("Connected to backend.");
});
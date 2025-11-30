const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

// Kết nối PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "blogdb",
  password: "123456",
  port: 5432,
});

// API lấy danh sách bài viết
app.get("/posts", async (req, res) => {
  const result = await pool.query("SELECT * FROM posts ORDER BY date DESC");
  res.json(result.rows);
});

// API thêm bài viết
app.post("/posts", async (req, res) => {
  const { image, tag, title, desc, date } = req.body;

  await pool.query(
    "INSERT INTO posts (image, tag, title, desc, date) VALUES ($1,$2,$3,$4,$5)",
    [image, tag, title, desc, date]
  );

  res.json({ message: "Created" });
});

app.listen(4000, () => console.log("Server running on port 4000"));

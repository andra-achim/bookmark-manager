const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const database = require("./database");
const accessToken = require("./accessToken");
const authMiddleware = require("./authMiddleware");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signUp", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 4);
  await database.createUser(name, email, hashedPassword);
  res.json();
});

app.post("/signIn", async (req, res) => {
  const { email, password } = req.body;

  const user = await database.findUserByEmail(email);
  if (!user) {
    res.status(401).json({ message: "Invalid credentials." });
    return;
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    res.status(401).json({ message: "Invalid credentials." });
    return;
  }

  const authToken = accessToken.createAccessToken(user);
  res.json({ authToken, user });
});

app.get("/categories", authMiddleware, async (req, res) => {
  const categories = await database.listCategories(req.user.id);
  res.json(categories);
});

app.post("/categories", authMiddleware, async (req, res) => {
  const { name } = req.body;

  await database.createCategory(name, req.user.id);
  res.json();
});

app.delete("/categories/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;

  await database.deleteCategory(id, req.user.id);
  res.json();
});

app.get(
  "/categories/:categoryId/bookmarks",
  authMiddleware,
  async (req, res) => {
    const { categoryId } = req.params;
    const bookmarks = await database.listBookmarks(categoryId, req.user.id);
    res.json(bookmarks);
  }
);

app.post(
  "/categories/:categoryId/bookmarks",
  authMiddleware,
  async (req, res) => {
    const { categoryId } = req.params;
    const { title, url } = req.body;

    await database.createBookmark(title, url, categoryId, req.user.id);
    res.json();
  }
);

app.delete(
  "/categories/:categoryId/bookmarks/:id",
  authMiddleware,
  async (req, res) => {
    const { id } = req.params;

    await database.deleteBookmark(id, req.user.id);
    res.json();
  }
);

app.listen(8080);

const config = require("./config.js");
const knex = require("knex")(config);

exports.createUser = (name, email, password) =>
  knex("users").insert({ name, email, password });

exports.findUserByEmail = async (email) => {
  const users = await knex
    .select("id", "name", "email", "password")
    .where({ email })
    .from("users");

  return users.length === 0 ? undefined : users[0];
};

exports.listCategories = (userId) =>
  knex.select("id", "name").where({ userId }).from("categories");

exports.createCategory = (name, userId) =>
  knex("categories").insert({ name, userId });

exports.deleteCategory = (id, userId) =>
  knex("categories").where({ id, userId }).del();

exports.listBookmarks = (categoryId, userIdBookmark) =>
  knex
    .select("id", "title", "url")
    .where({ categoryId, userIdBookmark })
    .from("bookmarks");

exports.createBookmark = (title, url, categoryId, userIdBookmark) =>
  knex("bookmarks").insert({ title, url, categoryId, userIdBookmark });

exports.deleteBookmark = (id, userIdBookmark) =>
  knex("bookmarks").where({ id, userIdBookmark }).del();

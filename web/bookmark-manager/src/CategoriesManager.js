import React, { Component } from "react";
import { Link } from "react-router-dom";
import { listCategories, createCategory, deleteCategory } from "./categories";
import { deleteUser, deleteAuthToken } from "./session";

class CategoriesManager extends Component {
  constructor(props) {
    super(props);
    this.state = { inputCategoryValue: "", categories: [] };
  }

  listCategories = async () => {
    const categories = await listCategories();
    this.setState({ categories });
  };

  createCategory = async () => {
    const name = this.state.inputCategoryValue;
    await createCategory(name);
    await this.listCategories();
    this.setState({ inputCategoryValue: "" });
  };

  deleteCategory = async (id) => {
    await deleteCategory(id);
    const categories = await listCategories();
    this.setState({ categories });
  };

  onInputChange = (event) => {
    const inputCategoryValue = event.target.value;
    this.setState({ inputCategoryValue });
  };

  onRemoveCategoryClick = async (event, id) => {
    event.stopPropagation();
    event.preventDefault();
    await deleteCategory(id);
    await this.listCategories();
  };

  async componentDidMount() {
    const categories = await listCategories();
    this.setState({ categories });
  }

  onInputKeyPress = async (event) => {
    if (event.nativeEvent.keyCode === 13) {
      await createCategory(this.state.inputCategoryValue, false);
      await this.listCategories();
      this.setState({ inputCategoryValue: "" });
    }
  };

  logOut = () => {
    deleteUser();
    deleteAuthToken();
    this.props.history.push("/signIn");
  };

  render() {
    return (
      <div className="categoriesAndBookmarks">
        <button className="signOutButton" onClick={this.logOut}>
          Log out
        </button>
        <div className="addContainer">
          <h2 className="title">Add category</h2>
          <div className="inputAndButton">
            <input
              className="inputCategory"
              type="text"
              value={this.state.inputCategoryValue}
              onChange={this.onInputChange}
              onKeyPress={this.onInputKeyPress}
            />
            <button className="addCategoryButton" onClick={this.createCategory}>
              ADD
            </button>
          </div>
        </div>
        <div className="emptyContainer"></div>
        <div className="listContainer">
          <h1 className="title">CATEGORIES</h1>

          {this.state.categories.length === 0 && (
            <h3 className="emptyList">Please add categories</h3>
          )}
          <div className="categoryList">
            {this.state.categories.map((item) => (
              <Link
                className="categories"
                to={`/categories/${item.id}/bookmarks`}
                key={item.name}
              >
                {item.name}
                <button
                  className="binButton"
                  onClick={(event) =>
                    this.onRemoveCategoryClick(event, item.id)
                  }
                >
                  <img
                    className="binImage"
                    src="https://furtaev.ru/preview/trash_can_2_small.png"
                    alt="Delete"
                  ></img>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriesManager;

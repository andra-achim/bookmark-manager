import React, { Component } from "react";
import { listBookmarks, createBookmark, deleteBookmark } from "./bookmarks";
import { deleteUser, deleteAuthToken } from "./session";

class BookmarksManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBookmarkTitle: "",
      inputBookmarkUrl: "",
      bookmarks: [],
    };
  }

  listBookmarks = async () => {
    const bookmarks = await listBookmarks(this.props.match.params.categoryId);
    this.setState({ bookmarks });
  };

  createBookmark = async () => {
    const title = this.state.inputBookmarkTitle;
    const url = this.state.inputBookmarkUrl;
    await createBookmark(title, url, this.props.match.params.categoryId);
    await this.listBookmarks();
    this.setState({ inputBookmarkTitle: "" });
    this.setState({ inputBookmarkUrl: "" });
  };

  deleteBookmark = async (id) => {
    await deleteBookmark(this.props.match.params.categoryId, id);
    await this.listBookmarks();
  };

  onInputChangeTitle = (event) => {
    const inputBookmarkTitle = event.target.value;
    this.setState({ inputBookmarkTitle });
  };

  onInputChangeUrl = (event) => {
    const inputBookmarkUrl = event.target.value;
    this.setState({ inputBookmarkUrl });
  };

  async componentDidMount() {
    await this.listBookmarks();
  }

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
          <h2 className="title">Add bookmark</h2>
          <div className="inputsAndButton">
            <input
              className="inputTitle"
              type="text"
              placeholder="Title"
              value={this.state.inputBookmarkTitle}
              onChange={this.onInputChangeTitle}
            />

            <input
              className="inputUrl"
              type="text"
              placeholder="URL"
              value={this.state.inputBookmarkUrl}
              onChange={this.onInputChangeUrl}
            />
            <button className="addBookmarkButton" onClick={this.createBookmark}>
              ADD
            </button>
          </div>
        </div>
        <div className="emptyContainer"></div>
        <div className="listContainer">
          <h1 className="title">BOOKMARKS</h1>

          {this.state.bookmarks.length === 0 && (
            <h3 className="emptyList">Please add bookmarks</h3>
          )}

          <div className="bookmarks">
            {this.state.bookmarks.map((item) => (
              <div className="bookmarkTitle" key={item.title}>
                {item.title}
                <a
                  className="bookmarkUrl"
                  key={item.url}
                  href={item.url}
                  target="_blank"
                >
                  {item.url}
                </a>

                <button
                  className="deleteButton"
                  onClick={() => this.deleteBookmark(item.id)}
                >
                  <img
                    className="binImage"
                    src="https://furtaev.ru/preview/trash_can_2_small.png"
                    alt="Delete"
                  ></img>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default BookmarksManager;

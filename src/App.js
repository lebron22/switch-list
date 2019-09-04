import React, { Component } from "react";
import axios from "axios";

import PanelsList from "./components/PanelsList";
import Button from "./components/Button";
import Pagination from "./components/Pagination";
import PostsPerPageSelect from "./components/PostsPerPageSelect";

import "./styles/style.scss";
import ViewTools from "./components/ViewTools";

class App extends Component {
  state = {
    posts: [],
    currentPage: 1,
    postsPerPage: 5,
    showAll: false
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const posts = res.data.slice(0, 25).map(({ id, title, body }) => {
        return {
          id,
          title,
          body,
          isOpened: false
        };
      });
      this.setState({ posts });
    } catch (err) {
      alert(err);
    }
  };

  handleSwitchChange = panelId => {
    const posts = this.state.posts.map(post => {
      if (post.id === panelId) {
        return {
          ...post,
          isOpened: !post.isOpened
        };
      } else {
        return post;
      }
    });
    //CHECK IF ALL INPUTS ARE OPENED TO CHANGE SHOWALL BUTTON CONTENT
    const uncheckedInputs = posts.find(post => post.isOpened === false);
    this.setState({ posts, showAll: !uncheckedInputs });
  };

  handleAllPanelsButton = () => {
    const posts = this.state.posts.map(post => ({
      ...post,
      isOpened: !this.state.showAll
    }));
    this.setState(prevState => ({
      posts,
      showAll: !prevState.showAll
    }));
  };

  setCurrentPage = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };

  setNumberOfPostsPerPage = number => {
    const { posts, currentPage } = this.state;
    //Check if currentPage would not be empty
    if (currentPage * number > posts.length) {
      this.setState({
        postsPerPage: number,
        currentPage: Math.ceil(posts.length / number)
      });
    } else {
      this.setState({ postsPerPage: number });
    }
  };

  render() {
    const { showAll, posts, currentPage, postsPerPage } = this.state;

    //Pagination variables

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const postsToShow = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <>
        <ViewTools>
          <Button
            text={showAll ? "Collapse all" : "Expand all"}
            handleAllPanelsButton={this.handleAllPanelsButton}
          />
          <PostsPerPageSelect
            setNumberOfPostsPerPage={this.setNumberOfPostsPerPage}
          />
        </ViewTools>

        {posts.length ? (
          <>
            <PanelsList
              posts={postsToShow}
              handleSwitchChange={this.handleSwitchChange}
            />
            <Pagination
              currentPage={currentPage}
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              setCurrentPage={this.setCurrentPage}
            />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </>
    );
  }
}

export default App;

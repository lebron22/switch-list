import React, { Component } from 'react';
import axios from 'axios'

import PanelsList from './components/PanelsList';
import Button from './components/Button';

import './styles/style.scss'

class App extends Component {
  state = {
    posts: [],
    showAll: false
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const posts = res.data.slice(0, 8).map(({ id, title, body }) => {
        return {
          id,
          title,
          body,
          isOpened: false
        }
      })
      this.setState({ posts })
    }
    catch (err) {
      alert(err)
    }
  }

  handleSwitchChange = panelId => {
    const posts = this.state.posts.map(post => {
      if (post.id === panelId) {
        return {
          ...post,
          isOpened: !post.isOpened
        }
      } else {
        return post
      }
    })
    //CHECK IF ALL INPUTS ARE OPENED TO CHANGE SHOWALL BUTTON CONTENT
    const uncheckedInputs = posts.find(post => post.isOpened === false)
    this.setState({ posts, showAll: !uncheckedInputs })
  }

  handleAllPanelsButton = () => {
    const posts = this.state.posts.map(post => (
      {
        ...post,
        isOpened: !this.state.showAll
      }
    ))
    this.setState(prevState => ({
      posts,
      showAll: !prevState.showAll
    }))
  }

  render() {
    return (
      <>
        <Button text={this.state.showAll ? ('Hide all') : ('Show all')} handleAllPanelsButton={this.handleAllPanelsButton} />
        {this.state.posts.length ? (<PanelsList posts={this.state.posts} handleSwitchChange={this.handleSwitchChange} />) : (<div>Loading...</div>)}
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import PanelsList from './components/PanelsList';
import axios from 'axios'

import './styles/app.scss'

class App extends Component {
  state = {
    posts: [],
    showAll: false
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const posts = res.data.slice(0, 3).map(({ id, title, body }) => {
          return {
            id,
            title,
            body,
            isOpened: false
          }
        })
        this.setState({ posts })
      })
      .catch(err => alert(err))
  }

  handleCheckboxChange = panelId => {
    const posts = this.state.posts.map(({ id, title, body, isOpened }) => {
      if (id === panelId) {
        isOpened = !isOpened
      }
      return {
        id,
        title,
        body,
        isOpened
      }
    })
    //CHECK IF ALL INPUTS ARE OPENED TO CHANGE SHOWALL BUTTON CONTENT
    const uncheckedInputs = posts.find(post => post.isOpened === false)
    const showAll = uncheckedInputs !== undefined ? false : true
    //
    this.setState({ posts, showAll })
  }

  handleAllPanels = () => {
    const posts = this.state.posts.map(({ id, title, body, isOpened }) => {
      isOpened = !this.state.showAll
      return {
        id,
        title,
        body,
        isOpened
      }
    })
    this.setState(prevState => ({
      posts,
      showAll: !prevState.showAll
    }))
  }

  render() {
    return (
      <>
        <button className='panels__button' onClick={this.handleAllPanels}>
          {this.state.showAll ? ('Hide all') : ('Show all')}
        </button>
        {this.state.posts.length ? (
          <PanelsList posts={this.state.posts} handleCheckboxChange={this.handleCheckboxChange} />
        ) : (
            <div>Loading...</div>
          )}

      </>
    );
  }
}

export default App;

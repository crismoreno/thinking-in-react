import React from 'react'

import Navbar from './Navigations/Navbar'
import Menu from './Navigations/Menu'
import Header from './Header'
// import books from '../mocks/books'
import About from './About/About'
import Footer from './Footer/Footer'
import Books from './Books/Books'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      menu: { open: false }
    };
  }
  toggleMenu = () => {
    this.setState(state => ({
      menu: { open: !state.menu.open }
    }))
  }

  render() {
    return (
      <div id="page-wrap">
        <Menu
          pageWrapId="page-wrap"
          isOpen={this.state.menu.open}
          toggleMenu={this.toggleMenu}
        />

        <Navbar toggleMenu={this.toggleMenu} />

        <Header title="ReactJS Academy" />

        <Books/>

        <About/>
        <Footer/>
      </div>
    )
  }
}

export default App

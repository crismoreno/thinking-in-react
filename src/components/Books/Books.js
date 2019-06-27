import React from 'react'
import books from '../../mocks/books'


class Books extends React.Component {
    constructor() {
        super()
        this.state = {
          books: books,
          selectedFilter: 'All'
        }
    }
    selectFilter = filter => {
        this.setState({
          selectedFilter: filter,
          books:
            filter === 'All'
              ? books
              : books.filter(book => book.category === filter)
        })
    }
    render() {

    const filters = ['All', 'Design', 'Mobile', 'DevOps', 'Essentials']

    const tabItems = filters.map(filter => (
      <li
        className={filter === this.state.selectedFilter ? 'active' : ''}
        key={filter}
        onClick={() => this.selectFilter(filter)}
      >
        <a href="#0">{filter}</a>
      </li>
    ))
        return(
        <section id="books">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2>Books</h2>
                    <hr className="star-primary" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <ul className="nav nav-pills text-center">{tabItems}</ul>
                    </div>
                </div>
                <div className="row book-list">
                    {this.state.books.map(book => (
                    <div className="col-xs-6 col-sm-3" key={book.id}>
                        <div className="thumbnail">
                        <img alt="" className="img-responsive" src={book.cover} />
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        )
        
    }
}
export default Books
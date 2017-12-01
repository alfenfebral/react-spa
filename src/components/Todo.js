import React, { Component } from 'react'
import { Page, PageList, Pagination, PageLink, Table,  } from 'bloomer'
import 'bulma/css/bulma.css'
import PlayerAPI from '../api'

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      todos: PlayerAPI.all(),
      currentPage: 1,
      todosPerPage: 10
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { todos, currentPage, todosPerPage } = this.state;

    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
      return (
        <tr key={index}>
          <td>{todo.number}</td>
          <td>{todo.name}</td>
          <td>{todo.position}</td>
        </tr>
      )
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <Page key={number}>
          <PageLink 
          key={number} 
          id={number} 
          onClick={this.handleClick}
          >{number}
          </PageLink>
        </Page>
      );
    });

    return (
      <div>
        <Table isBordered isStriped isNarrow>
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {renderTodos}
          </tbody>
        </Table>
        <Pagination>
          <PageList>
            {renderPageNumbers}
          </PageList>
        </Pagination>
      </div>
    );
  }
}

export default TodoApp
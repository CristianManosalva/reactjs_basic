import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navegation';
import FormTasks from './components/FormTasks';
import { tasks } from './tasks.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
       tasks
    }
    this.addTask = this.addTask.bind(this);
  }

  addTask(task){
    this.setState({
      tasks : [...this.state.tasks, task]
    })
  }

  removeTask(index){
    console.log(index);
  }
  render() {

    const tasksComponent = this.state.tasks.map((task, i) => {
      return(
        <div className="col-md-4" key={i}>
            <div className="card mt-4">
              <div className="card-header">
                <h3>{task.title}</h3>
                <span className="badge badge-pill badge-danger ml-2">
                  {task.priority}
                </span>
              </div>
              <div className="card-body">
                <p>{task.description}</p>
              </div>
              <div className="card-footer">
                <p><mark>{task.responsible}</mark></p>
                <button className="btn btn-danger" onClick={this.removeTask.bind(this, i)}>
                  Delete
                </button>
              </div>
            </div>
        </div>
      )
    })

    return (
      <div className="App">
        <Navigation title="Program Tasks" numberTasks={this.state.tasks.length}/>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <img src={logo} className="App-logo" alt="logo" />
              <FormTasks onAddTask={this.addTask} />
            </div>
            <div className="col-md-9">
             <div className="row">
               { tasksComponent }
             </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React,{Component} from 'react';
import './App.css';
import Counter from './Counter';
import store from './store/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // console.log("inside handleChange event is----",event.target.value);
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    // event.preventDefault();
    console.log("handle submit is----",event);
   return fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(data => {
        let res={'results' :JSON.stringify(data),
      'json' : () => {return data;}}
      }).then(state => this.setState(state));
  }
  render() {
    return (
      <div className="App">
          <form id = "form" onClick={this.handleSubmit}>
            <label htmlFor="name">Enter your name: </label>
            <input
              id="inputField"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button id="btn" type="submit">Submit</button>
          </form>
          <p id="pTag">{this.state.greeting}</p>
          <div>
            <Counter store={store}/>
          </div>
      </div>
    );
  }
}
export default App;

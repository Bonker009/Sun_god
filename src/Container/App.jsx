import { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import "./App.css";
import Scroll from "../Components/Scroll";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      SearchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        this.setState({ robots: user });
      });
  }
  onSearchChange = (event) => {
    this.setState({ SearchField: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.SearchField.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robot Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robot={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}
export default App;

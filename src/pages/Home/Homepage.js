import { Component } from "react";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CardList from "../../components/CardList/CardList";
import "./Homepage.css";
import SearchBox from "../../components/SearchBox/SearchBox";
import {handy} from "../../utils/handy"
class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      handy: [],
      searchfield: "",
    };
  }
  componentDidMount() {
        this.setState({ handy: handy });
     
  }

  onValueChange = (value) => {
    this.setState({ searchfield: value });
  };

  resetInput = () => {
    this.setState({ searchfield: "" });
  };

  render() {
    const filteredHandy = this.state.handy.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="Header">
        <NavBar />
        <div className="responsive-searchbox">
          <SearchBox
            onValueChange={this.onValueChange}
            resetInput={this.resetInput}
          />
        </div>
        <div className="artisan">
          <CardList handy={filteredHandy} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Homepage;

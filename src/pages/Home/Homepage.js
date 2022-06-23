import { Component } from "react";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CardList from "../../components/CardList/CardList";
import "./Homepage.css";
import SearchBox from "../../components/SearchBox/SearchBox";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      handy: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://guarded-wildwood-57519.herokuapp.com/artisans")
      .then((response) => response.json())
      .then((artisans) => {
        this.setState({ handy: artisans });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ handy: [] });
      });
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

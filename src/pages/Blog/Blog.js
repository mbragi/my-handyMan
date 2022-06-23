import {Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';
// import { blogger } from '../../utils/blogger';
import BlogList from '../../components/BlogList/BlogList';
import Footer from '../../components/Footer/Footer';
import SearchBox from '../../components/SearchBox/SearchBox';


class Blog extends Component {
  constructor() {
    super()
    this.state ={
      blogger: [],
      searchfield:""
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {this.setState({blogger: posts}) })
  }

  onValueChange = (value) => {
    this.setState({ searchfield: value })
  }

  resetInput = () => {
    this.setState({searchfield:""})}
  
  render(){
    const filteredBlogger = this.state.blogger.filter(item => {
      return item.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
  
  
  return (
    <div>
      <Navbar/>
      <SearchBox onValueChange={this.onValueChange} resetInput={this.resetInput}/>
      <BlogList blogger={filteredBlogger}/>  
      <Footer/>
    </div>
  );
}
}

export default Blog;

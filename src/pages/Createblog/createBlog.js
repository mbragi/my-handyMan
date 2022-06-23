import React, { Component } from "react";
import CustomInput from "../../components/CustomInput/Custom-Input";
import CustomButton from "../../components/CustomButtton/Custom-button";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";





class createBlog extends Component{
    constructor() {
      super()
      this.state ={
        text: "",
        textarea:""
      }
    }
  
    onInputChange = (e) => {
  
      const { value, name } = e.target;
  
      this.setState({ [name]: value });
    }
  
    
  
  
    httpCreateBlogUser = (event)=> {
      event.preventDefault();
  
      console.log(this.state)
    
    }

    render() {
    return (
        <div>
            <Navbar/>
            <form onSubmit={this.httpCreateBlogUser}>
                <div>
                    <h1>Create Blog</h1>
                     <CustomInput type="text" placeholder='Blog Title' style={{width:"50%", height:"3rem"}}
                      onChange={this.onInputChange }
                      value ={this.state.text}
                      name="text"
                      />
                    <br/>
                    <textarea placeholder="story" style={{width:"50%", outline:"none", height:"20rem",borderRadius:"5px" }}
                      onChange={this.onInputChange }
                      value ={this.state.textarea}
                      name="textarea">
                      </textarea> 
                    <br/>
                    <CustomButton title="Create Blog" style={{width:"50%", height:"3rem" }}/>
                </div>
          </form>
          <Footer/>
        </div>
    );
    }

}

 export default createBlog;
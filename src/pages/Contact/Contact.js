import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CustomButton from "../../components/CustomButtton/Custom-button";
import './Contact.css';
import CustomInput from "../../components/CustomInput/Custom-Input";

class SbmContact extends Component{
  constructor() {
    super()
    this.state ={
      fullName: "",
      email:"",
      message:""
    }
  }

  onInputChange = (e) => {

    const { value, name } = e.target;

    this.setState({ [name]: value });
  }


  httpSbmContactUser = (event)=> {
    event.preventDefault();

    console.log(this.state)
  
  }

render() {
    return (
      <div>
          <Navbar />
            <div>
            <h1 className="contact">Contact</h1>
            </div>
          <form className="responsive-contact" onSubmit={this.httpSbmContactUser}>
            <CustomInput className='as' type="text" placeholder='Full Name' style={{ height:"3rem"}} 
            onChange={this.onInputChange }
            value ={this.state.fullName}
            name="fullName"/> 
            <CustomInput className='as' type="Email" placeholder='Email' style={{ height:"3rem"}} 
            onChange={this.onInputChange }
            value ={this.state.email}
            name="email" /> 
            <textarea className='as'  placeholder="Message" style={{ height:"9rem",outline:"none",borderRadius:"5px" }}
            onChange={this.onInputChange }
            value ={this.state.message}
            name="message"></textarea> 
          <div className='contact-btn'>
            <CustomButton className='as'  type="submit" title="Submit" style={{ height:"3rem"}}/> 
          </div>
          </form> 
        <Footer />
      </div>
  
    );
  }

}


export default SbmContact;
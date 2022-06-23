import React, { Component } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButtton/Custom-button";
import CustomInput from "../../components/CustomInput/Custom-Input";
import { path } from "../../routes";
import './Register.css'
import handyMan from "../../assets/Images/handyMan.jpg";

class Register extends Component{
  constructor() {
    super()
    this.state ={
      Fullname:"",
      email: "",
      PhoneNo: [""],
      password:"",
    }
  }

  onInputChange = (e) => {

    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  httpRegisterUser = (event)=> {
    event.preventDefault();
    alert("Registered Successfully");

    console.log(this.state)
  
  }
  

  render(){
    
    return (
      <div className='register'>
  
        <div className='home'>  
          <Link to={path.home}>
            <svg height="55" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="white" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(1 1)"><path d="m.5 9.5 9-9 9 9"/><path d="m2.5 7.5v7c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-7"/></g></svg>
          </Link>
        </div>
  
          <form onSubmit={this.httpRegisterUser} className='Register-form'>
          <h1>Register</h1>
          <div className = 'input'>
            <CustomInput type="Full Name"  placeholder='Full Name' style={{width:"16rem",padding:"8px"}}
            onChange={this.onInputChange }
            value ={this.state.Fullname}
            name="Fullname"/>
            
            <br/>
            <CustomInput type="Email"  placeholder='Email' style={{width:"16rem",padding:"8px"}}
            onChange={this.onInputChange }
            value ={this.state.email}
            name="email"/>
            <br/>
            <CustomInput type= "Phone No." placeholder='Phone No.' style={{width:"16rem",padding:"8px"}}
            onChange={this.onInputChange }
            value ={this.state.PhoneNo}
            name= {"PhoneNo"} />
            <br/>
            <CustomInput type="password" onChange={this.onInputChange }
            value ={this.state.password}
            name="password" placeholder='Password' style={{width:"16rem",padding:"8px"}}/>
            <br/>
            <CustomInput type="password" onChange={this.onInputChange }
            value ={this.state.password}
            name="password" placeholder='Confirm Password' style={{width:"16rem",padding:"8px"}}/>
            <br/>
            <CustomButton  type="submit"  title="Register" style={{width:"17rem",padding:"12px", height:"3rem"}}/>
             {/* <p>forgot password? </p> */}
            <Link to={path.login}><p>Already have an account? Login</p></Link>
            </div>
         </form>
      <div className='background-img'>
          <img src={handyMan} alt="artisan"/>
      </div>
      </div>
  
    );

  }
  
}

export default Register;
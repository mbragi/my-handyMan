import React, { Component } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButtton/Custom-button";
import CustomInput from "../../components/CustomInput/Custom-Input";
import { path } from "../../routes";
import handyMan2 from '../../assets/Images/handyMan2.jpeg'
import './Login.css'


class Login extends Component{
  constructor() {
    super()
    this.state ={
      email: "",
      password:""
    }
  }

  onInputChange = (e) => {

    const { value, name } = e.target;

    this.setState({ [name]: value });
  }
  
  httpLoginUser = (event)=> {
    event.preventDefault();

    console.log(this.state)
  }

  render () {
    return (
      <div className='login'>
          <div className='homebutton'>  
          <Link to={path.home}>
            <svg height="55" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="white" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(1 1)"><path d="m.5 9.5 9-9 9 9"/><path d="m2.5 7.5v7c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-7"/></g></svg>
          </Link>
          </div>
        <div className="form">
          <form onSubmit={this.httpLoginUser}>
              <h1>Login</h1>
                  <CustomInput type="Email" placeholder='Email' style={{width:"16rem",padding:"10px"}}
                  onChange={this.onInputChange }
                  value ={this.state.email}
                  name="email"
                  />
                  <br/>
                  <CustomInput type="password" placeholder='Password' style={{width:"16rem",padding:"10px"}}
                  name="password"
                  onChange={this.onInputChange }
                  value ={this.state.password}
                  />
                  <br/>
                  <Link to={path.home}>
                  <CustomButton type="submit" title="Login" style={{width:"17rem",padding:"12px", }}/>
                  </Link>
                      <p>forgot password?</p>
                  <p><Link to={path.register} >Don't have an account?Register</Link></p>
            </form>
        </div> 
          <div className='image'>
          <img src={handyMan2} alt="artisan"/>
          </div>
        </div>
    );
  }
}

export default Login;
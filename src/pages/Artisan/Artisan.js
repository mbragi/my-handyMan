import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CustomButton from "../../components/CustomButtton/Custom-button";
import CustomInput from "../../components/CustomInput/Custom-Input";
import './artisan.css'
// import {Cloudinary} from "./cloudinary-core";


class Artisan extends Component{
    constructor() { 
        super()
        this.state = {
            imageInput: undefined,
            Fullname: "",
            email: '',
            password:"",
            phoneNo: undefined,
            skill:"",
            officeAddress:"",
        }
    }

        onInputChange =(e)=>{
                const { value , name } = e.target
                this.setState({[name]: value})
                this.setState({imageInput: e.target.files[0]});
        }
        onUploadButton = ()=> {
            if (!this.state.imageInput) return;
            const file = this.state.imageInput;
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "my_preset")
            fetch('https://api.cloudinary.com/v1_1/mbrag/upload', {
                method: 'post',
                body: formData
            })
            .then(res => res.json())
            .then(data => {
                this.setState({imageInput:data})
            })
            .catch(err =>{
                console.log('error uploading image')
            })
        }
        httpCreateArtisan = (event) => {
            event.preventDefault();
            console.log(this.state)
        }
    render(){
            return(
        <div>
                <Navbar />
        <div className='master-form'>
        <div className='artisan-form'>
        <p id='arp'>Image Upload</p>
                <CustomInput onChange={this.onInputChange} className="ars-upload-input" type="file" placeholder='' style={{width:"90%", height:"2rem"}}/>
                <CustomButton className="ars-upload-button" title="upload" onClick={this.onUploadButton} style={{width:"25%", height:"2rem"}}/>
            <p id='arp'>Full Name</p>
                <CustomInput  type="Text" placeholder='' style={{width:"90%", height:"2rem"}} name='fullName'/>
            <p id='arp'>Phone Number</p>
                <CustomInput type="Text" placeholder='' style={{width:"90%", height:"2rem"}}name='phoneNo'/>
        </div>
        <div className='artisan-form1'>
            <p id='arp'>Email</p>
                <CustomInput  type="Email" placeholder='' style={{width:"90%", height:"2rem"}}name='email'/> 
            <p id='arp'>Office Address</p>
                <CustomInput  type="Text" placeholder='' style={{width:"90%", height:"2rem"}}name='officeAddress'/>
            <p id='arp'>Skill</p>
                <CustomInput  type="Text" placeholder='' style={{width:"90%", height:"2rem"}}name='skill'/>
            </div> 
            </div>
            <div className='artisan-btn'>
                <CustomButton
                className="submit-btn"
                type="Submit"
                title="submit"
                style={{width:"15%", height:"3rem"}}
                onClick={this.httpRegisterArtisan}
                />
        </div>
        
        <Footer />
        </div>

        );
    }
}

export default Artisan;
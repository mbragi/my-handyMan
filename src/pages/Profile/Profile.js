import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CustomButton from "../../components/CustomButtton/Custom-button";
import CustomInput from "../../components/CustomInput/Custom-Input";
import './Profile.css';

const Profile = () =>{
    return(
        <div>
        <Navbar />
        <div className='profil-image'>
        <img alt = "Profile Pic" src="https://picsum.photos/id/1005/400/250"/>
        </div>
        <div className='profile-form'>
            <p>Full Name</p>
            <CustomInput type="Text" placeholder='' style={{width:"90%", height:"2rem"}}/>
            <p>Username</p>
            <CustomInput type="Text" placeholder='' style={{width:"90%", height:"2rem"}}/>
            <p>Email</p>
            <CustomInput type="Email" placeholder='' style={{width:"90%", height:"2rem"}}/> 
        </div>
        <div className='profile-btn'>
        <CustomButton title="Done" style={{width:"10%", height:"2rem"}}/>
        </div>
        <Footer />
        </div>

    );
}

export default Profile;
import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import './AboutUs.css'
import Ham from '../../assets/Images/Ham.jpg';
import Back from '../../assets/Images/Back.jpg';
function Aboutus() {

    
    return (
        <div>
        <Navbar />
        
            <div className="work">
                    <div className="about">
                    <img className='home-image' src={Ham} alt ="backgroundpic"style={{height:'30%'}}/>
                  </div>
                  <div className="title1">  
                <h1>About Us</h1>
                <h2 className="header">MY HANDYMAN</h2>
                <p>
                MY HANDYMAN IS AN APPLICATION, WHICH WAS DESIGNED FOR THE PURPOSE OF GAINING EASY ACCESS TO WELL QUALIFIED HANDYMEN AROUND YOU,
                DEPENDING ON THE SKILL SET YOU'RE LOOKING FOR. MY HANDYMAN PLACES BOTH HANDYMEN AND CONSUMERS,
                 AT EACH OTHERS FINGERTOPS.</p>

                </div>
                 </div>
                
    <section class="section theme" id="services">
        <div class="title3">
          <h1>Our Services</h1>
        </div>
   
        <div class="services-center container">
          <div class="service" data-aos="fade-down" data-aos-duration="2000">
            <span><i class="fab fa-accusoft"></i></span>
            <h2>Web Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              exercitationem numquam porro asperiores neque architecto.
            </p>
          </div>
  
          <div class="service" data-aos="fade-up" data-aos-duration="2000">
            <span><i class="fas fa-chart-line"></i></span>
            <h2>Advertising</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              exercitationem numquam porro asperiores neque architecto.
            </p>
          </div>
  
          <div class="service" data-aos="fade-down" data-aos-duration="2000">
            <span><i class="fas fa-blender-phone"></i></span>
            <h2>Apps Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              exercitationem numquam porro asperiores neque architecto.
            </p>
            
          </div>
        </div>
      </section>

                 <div className='add'>
                 <div className="title2">
                 <h3>Our Team</h3>
                 </div>
                 <div className='team-card'>
                 <div>
                 <img src={Back}  alt ="" />
                 </div>
                   <p id='space'>
                     Name: Kevin Uyeh
                   </p>
                   <p id='space'>
                     Email:
                   </p>
                 </div>
                 <div className='team-card'>
                 <div>
                 <img src={Back}  alt ="" />
                 </div>
                   <p id='space'>
                     Name:  Kelvin Ahemen
                   </p>
                   <p id='space'>
                     Email:
                   </p>
                 </div>
                 <div className='team-card'>
                 <div>
                 <img src={Back}  alt ="" />
                 </div>
                   <p id='space'>
                     Name: Terdoo Silas
                   </p>
                   <p id='space'>
                     Email:
                   </p>
                 </div>
                 <div className='team-card'>
                 <div>
                 <img src={Back}  alt ="" />
                 </div>
                   <p id='space'>
                     Name: Goodnews Expot
                   </p>
                   <p id='space'>
                     Email:
                   </p>
                 </div>
                 <div className='team-card'>
                 <div>
                 <img src={Back}  alt ="" />
                 </div>
                   <p id='space'>
                     Name: Victor Weka
                   </p>
                   <p id='space'>
                     Email:
                   </p>
                 </div>
                 <div className='team-card'>
                 <div>
                 <img src={Back}  alt ="" />
                 </div>
                   <p id='space'>
                     Name: Benita Eve
                   </p>
                   <p id='space'>
                     Email:
                   </p>
                 </div>
                 <div className='team-card'>
                 <div>
                 <img src={Back}  alt ="" />
                 </div>
                   <p id='space'>
                     Name: Patrick Adam
                   </p>
                   <p id='space'>
                     Email:
                   </p>
                 </div>
                 <div className='team-card'>
                 <div>
                 <img src={Back}  alt ="" />
                 </div>
                   <p id='space'>
                     Name: Francis Ojay
                   </p>
                   <p id='space'>
                     Email:
                   </p>
                 </div>
                 <div className='team-card'>
                 <div>
                 <img src={Back}  alt ="" />
                 </div>
                   <p id='space'>
                     Name:Gar Manji Michael
                   </p>
                   <p id='space'>
                     Email:
                   </p>
                 </div>
                 </div>
                 
            <Footer />
        </div>
    );
}

export default Aboutus;
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './Termspage.css';
import work from '../../assets/Images/Work.jpg';



const Termspage = () => {
    return ( 
      <div>
        <Navbar/>
        
        <div className= "img">
            <img className='back-image' src={work} alt ="backgroundpic"style={{height:`10rem`}}/>
            <h1 className="term">Terms Of Use</h1>
        </div>  
        <div className="cons">
        <p id="div1">
          Please read carefully the following before "You" access or use the "Services" provided in www.myHandyMan.com ("Website" from now on). By accessing or using this "Website" you acknowledge that "You" have read, understood and accepted all
          the terms included here and in our "Privacy Policy". Furthermore, "You" are bound to comply with all laws and regulations regarding the use of this "Website". If, on the contrary, "You" are not in agreement with any of the terms below, please do not
          access, read, nor use the "Website" or its "Services" in any way</p>
                    
          <h3>Access and Use</h3>
            <p id="div1">
            This "Website" provides "You" with a "Service" that comprises analyzing, comparing and contrasting some specific features and tools these website builders provide. The intention is to provide "You" with resources and tools to decide which service
            better suits "Your" needs. The "Website", as well as the "Service", are owned, developed and provided solely by us</p>

          <h3>Intellectual Property</h3>
          <p id="div1">
          Intellectual property, or IP as it is commonly referred to, consists of all the pieces of your business that you or your employees have thought of. It’s the things that differentiate you from the competition that you came up with using your intellect – your brain.
          IP is the original concepts and ideas conceived of and developed by employees, or workers and advisors under contract to do so, that become corporate assets. 
          This includes things like: 

            inventions 
            </p>

          <h3>Third Party Complaint</h3>
            <p id="div1">
            A third-party complaint is a claim asserted by a defendant ("Third-party Plaintiff") against a nonparty (now a third-party defendant) who is or may be liable to the defendant for all or part of the claim it.
            Unlike a counterclaim or cross-claim which may be asserted in the responsive pleading, a third-party claim is asserted through the service of a summons and complaint by the defendant who for the purposes of the third-party claim is called the "Third-Party Plaintiff."
            The third-party complaint does not commence a new action and there no filing fee.  
            Upon the filing of a third-party complaint, It is the responsibility of the third-party plaintiff to serve the summons and complaint on the third-party defendant and on the first-party plaintiff.
            The third-party plaintiff must, by motion, obtain the court's approval if it files the third-party complaint more than 14 days after serving its original answer.</p>
        
        
         <h3>User Submissions</h3>
            <p id="div1">
            Application or submission with any Regulatory Authority, including authorizations, approvals or clearances arising from the foregoing, including Regulatory Approvals and any pricing or reimbursement approvals, as applicable,
            and all correspondence or communication with or from the relevant Regulatory Authority, as well as minutes of any material meetings, telephone conferences or discussions with the relevant Regulatory Authority, in each case, with respect to a Licensed Product.</p>
          
          
          <h3>Website Modification</h3>
            <p id="div1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima esse praesentium quo perspiciatis dicta ad, vero amet dolore similique facilis iure, sit nobis natus iusto, vel aliquid sapiente dignissimos optio aspernatur minus aperiam dolores hic?'
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima esse praesentium quo perspiciatis dicta ad, vero amet dolore similique facilis iure, sit nobis natus iusto, vel aliquid sapiente dignissimos optio aspernatur minus aperiam dolores hic?'
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima esse praesentium quo perspiciatis dicta ad, vero amet dolore similique facilis iure, sit nobis natus iusto, vel aliquid sapiente dignissimos optio aspernatur minus aperiam dolores hic?'</p>

          <h3>Modification to these Terms of Use</h3>
            <p id="div1">
            myHandyMan will have the right to modify and restate the terms and conditions of this Agreement, and such modification(s) will be effective immediately upon being posted on our Website www.myHandyMan.com,
            You will receive notice if modifications to the Agreement are made. myHandyMan will make note of the date of the last update to the Agreement on the first page of this Agreement. You are responsible for reviewing these terms and conditions regularly. 
            Your continued use of the Service after such modifications will be deemed to be Your conclusive acceptance of all modifications to this Agreement. If You are dissatisfied as a result of such modification(s),
            Your only recourse is to immediately discontinue use of the Service.</p>
  

          <h3>Questions and Doubts</h3>
            <p id="div1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima esse praesentium quo perspiciatis dicta ad, vero amet dolore similique facilis iure, sit nobis natus iusto, vel aliquid sapiente dignissimos optio aspernatur minus aperiam dolores hic?'
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima esse praesentium quo perspiciatis dicta ad, vero amet dolore similique facilis iure, sit nobis natus iusto, vel aliquid sapiente dignissimos optio aspernatur minus aperiam dolores hic?'
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima esse praesentium quo perspiciatis dicta ad, vero amet dolore similique facilis iure, sit nobis natus iusto, vel aliquid sapiente dignissimos optio aspernatur minus aperiam dolores hic?'</p>
        </div>
        <Footer/>
    </div>
    );

  }
  
  export default Termspage;

import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import './ViewBlog.css';

const viewBlog = () => {
    return(
      <div className = "view-blog"> 
       <Navbar/>
       <div className="top-card">
         <img className='view-blog-image' src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsb2clMjBiYWNrZ3JvdW5kJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=''/>
         <h1 className='image-title'>Some Title</h1>
        </div> 
        <div className="view-blog-main">
				<p className = "view-blog-summary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Minima esse praesentium quo perspiciatis dicta ad, 
         vero amet dolore similique facilis iure, sit nobis natus iusto,
          vel aliquid sapiente dignissimos optio aspernatur minus aperiam dolores hic? 
        </p>
        
        <p className="view-blog-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima esse praesentium quo perspiciatis dicta ad, vero amet dolore similique facilis iure, sit nobis natus iusto, vel aliquid sapiente dignissimos optio aspernatur minus aperiam dolores hic? 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima esse praesentium quo perspiciatis dicta ad, vero amet dolore similique facilis iure, sit nobis natus iusto, vel aliquid sapiente dignissimos optio aspernatur minus aperiam dolores hic? 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima esse praesentium quo perspiciatis dicta ad, vero amet dolore similique facilis iure, sit nobis natus iusto, vel aliquid sapiente dignissimos optio aspernatur minus aperiam dolores hic? 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima esse praesentium quo perspiciatis dicta ad, vero amet dolore similique facilis iure, sit nobis natus iusto, vel aliquid sapiente dignissimos optio aspernatur minus aperiam dolores hic? 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima esse praesentium quo perspiciatis dicta ad, vero amet dolore similique facilis iure, sit nobis natus iusto, vel aliquid sapiente dignissimos optio aspernatur minus aperiam dolores hic? 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima esse praesentium quo perspiciatis dicta ad, vero amet dolore similique facilis iure, sit nobis natus iusto, vel aliquid sapiente dignissimos optio aspernatur minus aperiam dolores hic?  
        </p>
        </div>
        <Footer/>
			</div>
  );
}

export default viewBlog;
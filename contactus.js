import React from "react";
import "./contactus.css";
import img1 from "./Vector1.png";
import img2 from "./Vector2.png";
import img3 from "./Vector3.png";
import img4 from "./Vector4.png";




const contactus = () => {
  return (
    <>


      <div className="row">
        <div className="col">
          <div className="left">
            <text className="txt">Contectus</text>
            <br/>
            <form className="form">  
              <text className="fname">Name<text className="redstar">*</text></text><br/><input className="inf" type="text" name="name" placeholder="Enter your full name" /><br/><br/>
              <text className="fname">Email<text className="redstar">*</text></text><br/><input className="inf" type="text" name="name" placeholder="Enter your email address" /><br/><br/>
              <text className="fname">Phaone<text className="redstar">*</text></text><br/><input className="inf" type="text" name="name" placeholder="Enter your phone number" /><br/><br/>
              <text className="fname">Message<text className="redstar">*</text></text><br/><textarea className="ftextarea" name="name" placeholder="Write a message" /><br/><br/>
              <button className="btn" type="button" ><text className="btntxt">Proceed</text></button>
            </form> 
          </div>
        </div>



        <div className="col">

          <div className="Add">
            
            <img src={img1} className="logo2" alt="logo"/>
            <img src={img4} className="logo4" alt="logo"/>
            <text className="addtxt1">Suite 19, NNPC Shopping Complex, Garki Ii Lagos</text><br></br>
            


            <br></br><img src={img2} className="logo2" alt="logo"/>
            <text className="addtxt2">08035877089</text><br></br>



            <br></br><img src={img3} className="logo3" alt="logo" />
            <text className="addtxt3">help@myinsurancecart.com</text><br></br>


            <p>
              <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.588548051917!2d3.438003513582264!3d6.446839495335927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4e780faad63%3A0x3cb0c7a1baf3d752!2sTango%20Towers!5e0!3m2!1sen!2sin!4v1653916891798!5m2!1sen!2sin" width="470px" height="300px" ></iframe>
              </div>
            </p>


          </div>


        </div>

      </div>
    </>
  )
}

export default contactus
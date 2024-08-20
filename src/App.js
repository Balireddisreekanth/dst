
import Navbar from "./navbar"
import "./App.css";
import { useState } from "react";
import { Carousel } from 'react-bootstrap';
import Footer from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css'; 
const App = () =>{
 
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Which courses can I get a scholarship on through Datapro?",
      answer: "Datapro offers scholarships on various courses including Advanced Programming, Data Analytics, and Machine Learning. Scholarships can cover up to 100% of the course fee.",
    },
    {
      question: "Can students in lower classes register for Datapro courses?",
      answer: "Students with a Bachelor's degree or higher, including graduates, can register for Datapro courses. Special programs are available tailored to different academic levels.",
    },
    {
      question: "I am a working professional. Can I apply for Datapro courses?",
      answer: "Absolutely. Datapro offers flexible online and evening classes suitable for working professionals. You can choose a program that fits your schedule.",
    },
    {
      question: "Are there practice materials available for Datapro courses?",
      answer: "Yes. Once enrolled, students can access a range of practice materials, including mock tests and sample projects, through their student portal.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
return(
   <div className="home-page">
    <Navbar/>
    <div className="usel">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="logo 03.png"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="banner-02.jpeg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="banner.jpeg"
          alt="third page"
        />
        
      </Carousel.Item>
    </Carousel>
    </div>
    <section id="scholarship" className="content-section scholarship-section">
                <h2>Datapro Scholarship Test 2024</h2>
                <div className="scholarship-details-box">
                    <p>
                        Datapro is excited to announce the launch of our Scholarship Test for 2024. 
                        This test is designed to identify and reward talented individuals who have a passion for technology 
                        and a drive to learn. The scholarship will cover up to 100% of the course fees for our top-rated 
                        software training programs.
                    </p>
                  
                    <p>
                        Don't miss this opportunity to enhance your skills and secure a brighter future. 
                        Register now and take the first step towards achieving your tech dreams with Datapro.
                    </p>
                    <a href="/register" className="content-button">Register for the Scholarship Test</a>
                </div>
            </section>
    <div className="content">
          
            <div className="exam-details">
      <div className="detail-item">
        <div className="icon">🕒</div>
        <div className="detail-text">
          <strong>Online Exam Timing</strong>
          <p><b><span>ExamDate:-</span>To Be Announced...</b></p>
          <p><b>Saturday</b></p>
          <p>02:00PM - 06:00PM (Students can take the exam anytime during the login window)</p>
          <p><b>Sunday</b></p>
          <p>10:00 AM - 01:00 PM</p>
        </div>
      </div>
      <div className="detail-item">
        <div className="icon">🕒</div>
        <div className="detail-text">
          <strong>Offline Exam Timing</strong>
          <p><b><span>ExamDate:-</span>To Be Announced...</b></p>
          <p><b>Saturday</b></p>
          <p>02:00 PM - 06:00 PM</p>
          <p><b>Sunday</b></p>
          <p>10:00 AM - 01:00 PM</p>
        </div>
      </div>
      
     
      <div className="detail-item">
        <div className="icon">🎓</div>
        <div className="detail-text">
          <strong>Eligibility</strong>
          <p>Any Graduates</p>
        </div>
      </div>
    </div>
            <div className="registration-steps">
      <h1 className="registration-title">How to Register</h1>
      <div className="steps-wrapper">
        <div className="step-card">
          <div className="step-number">1</div>
          <h2 className="step-title" style={{color:"white"}} >Submit your details  </h2>
          <p className="step-description">Fill the online form and submit</p>
        </div>
        <div className="step-card">
          <div className="step-number">2</div>
          <h2 className="step-title" style={{color:"white"}}>check your Email</h2>
          <p className="step-description">Check your hallTicketNumber</p>
        </div>
        <div className="step-card">
          <div className="step-number">3</div>
          <h2 className="step-title" style={{color:"white"}}>Registration Successful</h2>
          <p className="step-description">Login and Download your Admit card</p>
        </div>
      </div>
    </div>

           
        </div>
        <section id="about" className="content-section about-section">
                <h2>About Datapro</h2>
                <p>
                    Established in 1990, Datapro has been a pioneer in the Edutech industry for over 34 years. 
                    We specialize in providing comprehensive training in all software-related subjects, 
                    ranging from foundational courses to advanced programming and technology skills. 
                    Our mission is to empower students and professionals with the knowledge and skills 
                    they need to succeed in the rapidly evolving tech landscape.
                </p>
                
            </section>
        <div className="faq-container">
      <h2 className="pro" style={{color:"white"}}>Datapro Scholarship FAQ</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => handleToggle(index)}>
              {faq.question}
              <span className={`arrow ${activeIndex === index ? 'up' : 'down'}`}>&#9660;</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
   </div>
)
}

export default App
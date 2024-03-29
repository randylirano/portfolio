import React from "react";
import NavBar from "../components/NavBar";
import SkillStacksList from "../components/SkillStackList";
import Footer from "../components/Footer";
import ProfilePicture from "../images/profile.jpg";

const AboutPage = () => {
  const aboutContent = {
    "self_introduction": [
      "I recently graduated from Northeastern University Silicon Valley campus Align program with M.S in Computer Science. I got my bachelor’s degree in electrical engineering from the University of Washington in December 2016. Currently, I am actively looking for my first full-time position as a software engineer since I changed my field about 2 years ago. My most recent experience is my SWE intern with Interactive Brokers between June and August of 2021. There, I built a Python interface to retrieve users’ accounts and portfolio information via HTTP requests. I also created multiple major trading functionalities such as searching stock by symbol and placing orders using REST API endpoints. I conclude the project by building a centralized interface that was used by the API team to test current and new endpoints’ performance.",
      "I am actively trying to get better at time management because I believe it will allow me to stay organized when I need to work on multiple projects with various timelines and complexities. My past experiences taught me that I am a fast learner who could work independently on an individual project but also collaborate well in a group project. One of my weaknesses as pointed out by my internship manager is that I tend to under-sell myself because I always try to think about every detail in the development. I learned that although we need to have a step-by-step development plan, we don’t have to have the smallest details right away.",
      "I strongly believe that working on projects is the best way to grasp new knowledge and develop soft skills. Other than time management, my past projects also taught me to split each problem into smaller sub-problems; where I could develop a step-by-step solution for each sub-problem. Lastly, it teaches me to be resourceful and independent in solving problems that I encounter."
    ],
    "programming_language": ["Python", "Java", "Ruby", "HTML", "CSS", "JavaScript", "SQL"],
    "software_and_platform": ["Android Studio", "React", "Node.js", "SQLite", "MongoDB", "Redis", "Git", "Rest API"]
  };

  function renderSelfIntro() {
    return aboutContent["self_introduction"].map((intro, i) => (
      <p>{intro}</p>
    ));
  }

  return (
    <div className="container section-page">
      <NavBar />
      <h1>About</h1>

      <div className="row">
        <div className="section-heading">
          <h2>Introduction</h2>
        </div>

        <div className="col-4">
          <img className="img-fluid" src={ProfilePicture} alt="My profile picture." />
        </div>

        <div className="col-8">
          {renderSelfIntro()}
        </div>
      </div>

      <div className="row">
        <div className="section-heading">
          <h2>Skill Stack</h2>
        </div>

        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Programming Language
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <SkillStacksList inputList={aboutContent.programming_language}/>
              </div>
            </div>
          </div>
          
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Software and Platform
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                <SkillStacksList inputList={aboutContent.software_and_platform}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default AboutPage;

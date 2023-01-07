import mypic from "../images/mypic.jpeg";

const AboutMe = () => {
  return (
    <section id="main-home" className="main">

      <h1> Moussa </h1>
      <h2> Full Stack <br/>
        Web Developer</h2>
        <br/>
        <br/>
      <p> Welcome to my page!</p>

      <h3 className="aboutMe"> About me </h3>
      <p>
      Well rounded and results oriented International Trade and Web Development Professional, <br/>
      with a track record of success delivering projects and improving operational performance. <br/>
      <br/>Quickly adapts to any type of business environment, with a superior sense of organization, 
      <br/>a great ability to manage cross-functional teams. Speaks and writes fluently in French, <br/>
      English and Spanish.<br/>
      <br/>Constantly looking for excellence in the execution of operations <br/>
      and the achievement of pre-established objectives.
      </p>
      <br/>
      <p>Please don't hesitate to get in touch with me
      <br/> for web development job opportunities or
        potential collaborations.
      </p>
      <br/>
      <a href="https://drive.google.com/file/d/1c4-coe2J26VIoypSnF56vvZ9tOanyPjg/view?usp=sharing" target="_blank" noreferrer="true"> DOWNLOAD CV </a>
      
      <section>
        <div className="container">
          <div className="mypic">
            <img src={mypic} className="roundpic" alt=""/>
          </div>
        </div>
      </section>
    </section>
  )
};

export default AboutMe
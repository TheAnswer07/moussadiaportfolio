import imgBusinessSkills from "../images/businesskills.jpeg";
import imgTechSkills from "../images/techskills.jpeg";
import imgHobbies from "../images/hobbies.jpeg";

const Skills = () => {

    return (
        <>
            <section id="home" className="main">

                <div className="container">
                    <div className="row my-flex-card">

                        <div className="col-sm-10 col-md-8 col-lg-4">
                            <div className="card">
                                <img className="card-img" src={imgBusinessSkills} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h3>Business Skills</h3>
                                        <ul>
                                            <li>Business development</li>
                                            <li>Project management</li>
                                            <li>International negotiations</li>
                                            <li>Marketing and communication</li>
                                            <li>High-profile event management</li>
                                            <li>Cross-functional team leadership</li>
                                            <li>Problem solving</li>
                                            <li>Team management</li>
                                        </ul>
                                    </div>
                            </div>
                        </div>

                        <div className="col-sm-10 col-md-8 col-lg-4">
                            <div className="card">
                                <img className="card-img" src={imgTechSkills} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h3>Technical Skills</h3>
                                        <ul>
                                            <li>Web development fundamentals: HTML, CSS, & JavaScript</li>
                                            <li>React (Front-end JS)</li>
                                            <li>Node.js (Back-end)</li>
                                            <li>REST API development</li>
                                            <li>MySQL Relational DB</li>
                                            <li>Adobe Illustrator CS6</li>
                                            <li>Adobe Photoshop CS6</li>
                                            <li>Adobe inDesign CC 2018</li>
                                            <li>Billing and monitoring tools</li>
                                            {/* <li>Cybersource and PayPal</li>
                                            <li>Salesforce</li>
                                            <li>Monet</li>
                                            <li>Slack</li>
                                            <li>Paylocity</li>
                                            <li>ClearView</li> */}
                                        </ul>
                                    </div>
                            </div>
                        </div>

                        <div className="col-sm-10 col-md-8 col-lg-4">
                            <div className="card">
                                <img className="card-img" src={imgHobbies} alt="Card image cap" />
                                <div className="card-body">
                                    <h3>Languages</h3>
                                    <ul>
                                        <li>French: native</li>
                                        <li>English: fluent</li>
                                        <li>Spanish: fluent</li>
                                    </ul>

                                    <h3>Hobbies</h3>
                                    <ul>
                                        <li>Coding</li>
                                        <li>Playing basketball</li>
                                        <li>Traveling</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
export default Skills
import LogoB4UBoard from "../images/logo_B4UBoard.jpeg";
import LogoJobQuest from "../images/logo_JobQuest.jpeg";
import LogoEBC from "../images/logo_Expanding_Basketball_Cards.jpeg";

const Project = () => {

    return (

        <>
            <section id="home" className="main">

                <div className="container">
                    <div className="row my-flex-card">

                        <div className="col-sm-10 col-md-8 col-lg-4">
                            <div className="card">
                                <a href="https://jackyouk.github.io/B4UBoard/" className="card-link" target="_blank" noreferrer="true">
                                    <img className="card-img" src={LogoB4UBoard} alt="Card image cap" />
                                </a>
                                <div className="card-body">

                                    <h3>Before You Board (B4UBoard)</h3>

                                    <p>This is an interactive mobile-responsive Front-End Web App
                                        designed to make traveling safer and easier.
                                    </p>
                                    <p>The users of this app can plan their next trip searching
                                        for specific countries to
                                        have general and safety information that will
                                        provide with an overview of their next destinations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-10 col-md-8 col-lg-4">
                            <div className="card">
                                <a href="https://jobquest.herokuapp.com/" className="card-link" target="_blank" noreferrer="true">
                                    <img className="card-img" src={LogoJobQuest} alt="Card image cap" />
                                </a>
                                <div className="card-body">

                                    <h3>Job Quest</h3>

                                    <p>This application was created to aid throughout the job searching process once
                                        the Coding Bootcamp is completed.
                                    </p>
                                    <p>This app will help keep track of all the jobs
                                        that have been applied for, to ensure information accuracy and effective follow up
                                        with updates on the interviewing process and hiring process.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-10 col-md-8 col-lg-4">
                            <div className="card">
                                <a href="https://theanswer07.github.io/Expanding-Basketball-Cards/" className="card-link" target="_blank" noreferrer="true">
                                    <img className="card-img" src={LogoEBC} alt="Card image cap" />
                                </a>
                                <div className="card-body">

                                    <h3>Expanding Basketball Cards</h3>

                                    <p>This app has been created to have a nice platform
                                        as showcasing the beautiful game of Basketball as well
                                        as well selected/related pictures providing a pleasant
                                        feeling.
                                    </p>
                                    <p>The transitions of these different cards make
                                        the app very entertaining and enjoyable.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
export default Project
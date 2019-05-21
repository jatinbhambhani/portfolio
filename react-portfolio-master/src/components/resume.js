import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Jatin Bhambhani</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Innovative problem solver with extensive 4+ years of experience
              (in Australia and overseas) in Information technology with
              expertise in Microsoft Technologies, Asp.net, Data warehousing,
              React and Web API. Expert in advanced development methodologies,
              tools and processes contributing to the design and rollout of
              cutting-edge software applications. Possessed confidence,
              enthusiasm, excellent communication and time management skills.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>1/48, Kangaroo Road, Murrumbeena, Victoria 3163</p>
            <h5>Phone</h5>
            <p> (+61) 412-846-271 </p>
            <h5>Email</h5>
            <p> jatin.er10192@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2017}
              endYear={2018}
              schoolName="Monash University, Melbourne, Australia"
              schoolDescription="MASTER OF INFORMATION TECHNOLOGY"
            />

            <Education
              startYear={2010}
              endYear={2014}
              schoolName="Bharati Vidyapeeth University, India"
              schoolDescription="BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2018}
              jobName="FULL STACK PROGRAMER at MONASH UNIVERSITY"
              jobDescription=" - Responsibilities- * System Architecture (Designing the workflow and business logic on Model View Controller/MVC platform)
              * Software Engineer (Coding on Web application, it’s different modules  and Integrating and enhancing various web APIs - Facebook, Google Maps, openweather in C#, ASP.net MVC, React , JavaScript, jQuery, Bootstrap )
              * Deployment Engineer (Hosting and merging on azure platform)
              * Implementing Security (OAuth, Authorization and security keys).
              * Database Administration (Creating Hosting and merging SQL server database)
              * Ideation
              * Team Lead
              * Handling Leankit (Kanban Board)
              
              "
            />

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="WEB DEVELOPER at T.W GROUP"
              jobDescription=" - Responsibilities -
              * Creating and maintaining the web pages for the company using HTML, JavaScript, jQuery and React.
              * Adding the research data and creating new surveys for the conferences
              * Maintaining the existing data and forms
              * Work with stakeholders to ensure up to date data
              * Responsible to ensure validations of the algorithm implemented
              * Working closely with the executive chairman and the clients
              "
            />

            <Experience
              startYear={2016}
              endYear={2017}
              jobName="TECHNICAL CONSULTANT at GRIDINFOCOM"
              jobDescription=" - Responsibilities -
              * Developing attended and unattended bots. 
              * Requirement analysis, gathering and documentation for the project.
              * Automation and development for client CELLCOM & deutsche bank.
              * Automating modules on UI Path, Pega Studio, Blue Prism. 
              
              "
            />

            <Experience
              startYear={2015}
              endYear={2016}
              jobName="SOFTWARE ENGINEER at ENDEAVOUR SYSTEMS"
              jobDescription=" - Responsibilities -
              * Working for government projects of Income Tax (DVAT) and Water Management (DJB).
             * Writing stored procedure, Transaction Handling and clustering in database
              * Development on web forms on Asp.net in Visual studio 2012 and writing and optimizing queries on Microsoft SQL Server 
              * Database design and stored procedures
              * Worked intensely on the User Interface.
              * Developed Web Forms using HTML, C# & ASP.Net and developing web APIs.
              * Understanding predeveloped process, flow & structure of the module.
              * Requirement analysis, gathering and documentation for the project.
              * Developing modules on c#, ASP.Net, MySQL and Microsoft SQL Server and Hosting via FileZilla FTP on Azure
              "
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>

            <Skills skill="OO Programming" progress={80} />
            <Skills skill="Azure" progress={65} />
            <Skills skill="APIs " progress={70} />
            <Skills skill="C#" progress={85} />
            <Skills skill="C, C++" progress={70} />
            <Skills skill="ASP.NET MVC " progress={75} />
            <Skills skill="React" progress={60} />
            <Skills skill="javascript" progress={80} />
            <Skills skill="AJAX" progress={50} />
            <Skills skill="JQuery" progress={50} />
            <Skills skill="Bootstrap" progress={77} />
            <Skills skill="Core Java" progress={80} />
            <Skills skill="JavaEE" progress={69} />
            <Skills skill="JSP" progress={60} />
            <Skills skill="HTML/CSS" progress={85} />
            <Skills skill="Microsoft SQL Server" progress={80} />
            <Skills skill="NOSQL" progress={40} />
            <Skills skill="SQL" progress={70} />
            <Skills skill="RDBMS" progress={50} />
            <Skills skill="Big Data (Hadoop, Pig, Hive)" progress={40} />
            <Skills skill="Core Data" progress={30} />
            <Skills skill="Firebase" progress={50} />
            <Skills skill="Data warehouse " progress={50} />
            <Skills skill="Android " progress={55} />
            <Skills skill="Swift" progress={30} />
            <Skills skill="Web Services (REST, SOAP)" progress={75} />
            <Skills skill="Automation" progress={55} />
            <Skills skill="OpenSpan/ Pega" progress={55} />
            <Skills skill="Blue Prism" progress={50} />
            <Skills skill="UI Path" progress={55} />
            <Skills skill="STLC and Test Methodology" progress={70} />
            <Skills skill="Test Driven Development" progress={71} />
            <Skills skill="GIT/GitHub" progress={72} />
            <Skills skill="Unix" progress={30} />
            <Skills skill="Kanban board" progress={66} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

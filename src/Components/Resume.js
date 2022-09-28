import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h4>{education.school}</h4>
        <p className="education-info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        </div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><a href={work.link} target="_blank" className="link"> <h4>{work.company}</h4></a> 
            <p className="work-info">{work.title}<span>&bull;</span> <em className="date">{work.location}</em></p>
        </div>
      })
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
              <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {education}
                </div>
              </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
              <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row download">
          <div className="three columns header-col">
              <h1><span></span></h1>
          </div>

          <div className="nine columns main-col">
            <p className="download-info">
                <a href={resumeDownload} target="_blank" className="button"><i className="fa fa-download"></i>Download Resume</a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;

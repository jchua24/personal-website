import React, { Component } from 'react';

class Footer extends Component {

  render() {

    let year = new Date().getFullYear() 

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright {year} Joshua Chua</li>
           </ul>

        </div>
     </div>
  </footer>
    );
  }
}

export default Footer;

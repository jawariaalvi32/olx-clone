import React from 'react';
import  app  from '../images/phone-app.png';
import  appstore  from '../images/playstore_2x.png';
import  playstore  from '../images/playstore_2x.png';
import '../App.css';

class OlxApp extends React.Component {
    render() {
        return (
            <div className="container-fluid mt-5 p-20 bg-light">
                <div className="row">
                    <div className="col-md-4 col-xs-12">
                        <img src={ app } alt="Olx App"/>
                    </div>
                    <div className="col-md-4 col-xs-12 pl-5">
                        <h2>TRY THE OLX APP</h2>
                        <p>Buy, sell and find just about anything using the app on your mobile.</p>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <h6 className="p-4">GET YOUR APP TODAY</h6>
                        <div className="d-flex mt-2 mb-3">
                            <img src={ appstore } alt="appstoe" width="35%" className="mr-2"/>
                            <img src={ playstore } alt="play store" width="35%" />
                        </div>            
                    </div>
                </div>
            </div>
        )
    }
}

export default OlxApp;
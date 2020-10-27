import React from 'react';
import '../App.css';
import bannerimg from '../images/banner.jpg';


class Banner extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-center mt-5">
                <img src={bannerimg}  width="60%" alt="BAnner"/>

            </div>
        )
    }
}

export default Banner;
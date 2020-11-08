import React from 'react';
import '../App.css';
import { AiOutlineMobile } from 'react-icons/ai'
import { RiArrowDropRightLine } from 'react-icons/ri'
import { BiCar } from 'react-icons/bi'
import { BsHouseDoor } from 'react-icons/bs'

class Categories extends React.Component {
    
    render() {

        return (
            <div className="card" style={{width: '18rem'}}>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">< AiOutlineMobile /> Mobile < RiArrowDropRightLine className="float-right" size="32"/></li>
                <li className="list-group-item">< BiCar /> Vehicles < RiArrowDropRightLine className="float-right" size="32"/></li>
                <li className="list-group-item">< BsHouseDoor />Vestibulum at eros < RiArrowDropRightLine className="float-right" size="32"/></li>
                </ul>
            </div>

            
        )
    }
}

export default Categories;
import React from 'react';
import '../App.css';
import { AiOutlineMobile } from 'react-icons/ai'
import { RiArrowDropRightLine } from 'react-icons/ri'
import { BiCar } from 'react-icons/bi'
import { BsHouseDoor } from 'react-icons/bs'
import { getCategories } from '../store/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Categories extends React.Component {

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        console.log("LL",this.props.categories)
        return (
            <div className="card" style={{width: '18rem'}}>
                <h5 className="m-3 border-0">CHOOSE A CATEGORY</h5>
                <ul className="list-group list-group-flush">
                    <Link to="/sell">
                        {this.props.categories.map((category) => <div key={category}>
                            <li className="list-group-item">< AiOutlineMobile /> {category} < RiArrowDropRightLine className="float-right" size="32"/></li>
                        </div>)}
                    </Link>
                </ul>
            </div>

            
        )
    }
}



const mapStateToProps = (state) => ({
    categories : state.categories
})

const mapDispatchToProps = (dispatch) => ({
    getCategories: () => dispatch(getCategories()),
})

export default connect(mapStateToProps,mapDispatchToProps)(Categories);
import React from 'react'
import { connect } from 'react-redux'

import { setMenuState } from '../../actions/tourActions';

const mapStateToProps = (state) => {
    return {
        isSideMenuOpen: state.isSideMenuOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMenuState: (val) => dispatch(setMenuState(val))
    }
};

class AppHeaderNavigation extends React.Component {

    constructor(props) {
        super(props);
        this.toggleNavigation = this.toggleNavigation.bind(this);
    }

    toggleNavigation() {
        const setMenuState = this.props.isSideMenuOpen === true ? false : true;

        console.log(setMenuState);


        this.props.setMenuState(setMenuState);
    }

    render() {
        const style = {
            background: 'none',
            border: 'none'
        }
        return (
            <div className="app-navbar">
                <div className="container">
                    <div className="row">
                        <button
                            style={style}
                            onClick={this.toggleNavigation}>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderNavigation);
import React from 'react';
import { setMenuState } from '../../actions/tourActions';
import { connect } from 'react-redux';
import 'animate.css/animate.min.css';


const mapStateToProps = (state) => {
    return {
        isSideMenuOpen: state.isSideMenuOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMenuState: (val) => dispatch(setMenuState(val))
    }
}

class AppNavigation extends React.Component {

    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        const newState = this.props.isSideMenuOpen === true? false: true;
        this.props.setMenuState(newState);
    }

    render() {

        //console.log(this);
            return (
                <div
                    style={{
                        //background: 'red',
                        width: '100%',
                        height: '100%',
                        position: 'fixed',
                        top: 0,
                        zIndex: 100
                    }}
                    onClick={this.toggleMenu}
                    className={this.props.isSideMenuOpen === true ? 'sideNavWrapper animated slideInRight': 'sideNavWrapper close-sidenav'}>
                    <div className="app-side-nav">
                        <div className="section">
                            <div className="nav-header">
                                <button
                                    onClick={this.toggleMenu}
                                    className="btn-nav-close">
                                    Close <i className="fa fa-times" />
                                </button>
                            </div>
                            <div className="nav-item">
                                <i className="fa fa-user"></i>
                                My Account
                    </div>
                            <div className="nav-item">
                                <i className="fa fa-globe"></i>
                                My Tours
    
                    </div>
                            <div className="nav-item">
                                <i className="fa fa-question"></i>
                                Help
                    </div>
                            <div className="nav-item">
                                <i className="fa fa-lock"></i>
                                Signout
                    </div>
                        </div>
                    </div>
                </div>
            );
        }
    }



export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);
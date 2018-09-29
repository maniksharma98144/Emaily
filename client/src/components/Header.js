import React, { Component } from 'react';
import Payments from './Payments';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

class Header extends Component {
    renderContent = () => {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Sign In With Google</a></li>
            default:
                return (
                    <React.Fragment>
                        <li><Payments /></li>
                        <li style={{ margin: '0 10px' }}>Credits : {this.props.auth.credits}</li>
                        <li><a href="/api/logout">Logout</a></li>
                    </React.Fragment>
                )
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo"
                        style={{ marginLeft: "20px" }}>
                        <i class="material-icons">email</i>
                        Emaily
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}
export default connect(mapStateToProps)(Header);
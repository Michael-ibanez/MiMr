import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, deleteUser } from "../../actions/authActions";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      userEmail: "",
      error: {}
    };
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      let user = this.props.auth.user;
      this.setState({
        userName: user.name,
        userEmail: user.email
      });
    }
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onDeleteClick = e => {
    e.preventDefault();

    let User = {
      name: this.state.userName,
      email: this.state.userEmail
    };

    this.props.deleteUser(User);
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Welcome to your dashboard! Loook at your picture
              </p>
              <img
                src={user.profilePic}
                style={{ maxWidth: "30vw", maxHeight: "30vh" }}
                alt="You!"
              />
            </h4>

            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onDeleteClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Delete account
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, deleteUser }
)(Dashboard);

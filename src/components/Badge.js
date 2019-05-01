import React from "react";
import "./styles/Badge.css";
import headerLogo from "../images/header-logo.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={headerLogo} alt="header logo" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar "
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">
          <p>#platziconf</p>
        </div>
      </div>
    );
  }
}

export default Badge;

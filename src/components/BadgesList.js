import React from "react";

import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="BadgesList">
        {this.props.badges.map(badge => {
          return (
            <li className="BadgesListItem" key={badge.id}>
              <div className="col-4">
                <img
                  className="BadgesListItem__avatar"
                  src={badge.avatarUrl}
                  alt="avatar"
                />
              </div>

              <div className="col-8">
                <h6>
                  {badge.firstName} {badge.lastName}
                </h6>
                <p>@{badge.twitter}</p>
                <p>{badge.jobTitle}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;

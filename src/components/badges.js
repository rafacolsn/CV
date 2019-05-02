import React, { Component } from "react";
import { connexion, badgeName } from "../utils/database";

class Badge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false // to handle the datas loading
    };
  }

  async componentWillMount() {
    const response = await connexion();
    // await badgeName();
    this.setState({
      badges: response.result, // store the datas of badges
      loaded: true
    });
  }

  render() {
    const renderBadges = this.state.badges.map(el => {
      let date = el.issuedOn
      date.toLocaleDateString('fr-BE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
      return (
        <blockquote className="badgr-badge" key={el.entityId}>
          <a href={`https://api.badgr.io/public/assertions/${el.entityId}?v=1_1`} >
            <img
              width="120px"
              height="120px"
              src={el.image}
            />
          </a>
          <p className="badgr-badge-name">Node.js - level 1</p>
          <p className="badgr-badge-date">
            <strong>Awarded:</strong> {date}
          </p>
          <p>
            <a
              className="badgr-badge-verify"
              target="_blank"
              href={`https://badgecheck.io?url=https://api.badgr.io/public/assertions/${el.badgeclass}?v=1_1`}
            >
              VERIFY
            </a>
          </p>
          <script async="async" src="https://badgr.io/widgets.bundle.js" />
        </blockquote>
      );
    });

    return (
      this.state.loaded && <div className="badges-wrap">{renderBadges}</div>
    );
  }
}

export default Badge;

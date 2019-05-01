import React, { Component } from "react";
import { connexion, authentification } from "../utils/database";

class Badge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false // to handle the datas loading
    };
  }

  async componentWillMount() {
    const response = await connexion();
    this.setState({
      badges: response.result, // store the datas of badges
      loaded: true
    });
  }

  render() {
    const renderBadges = this.state.badges.map(el => {
      return (
        <div>
          <img src={el.image} />
        </div>
      );
    });

    return this.state.loaded && <div className="badges-card">{renderBadges}</div>;
  }
}

export default Badge;

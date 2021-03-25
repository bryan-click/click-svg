import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Svg, { Use, Defs } from "react-native-svg";
import { Types } from "./config";
import { RibbonAchieved } from "./definitions";

class Badge extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    containerStyle: PropTypes.object
  };

  render() {
    return (
      <View
        style={[
          {
            width: this.props.width,
            height: this.props.height,
            aspectRatio: 1.0
          },
          this.props.containerStyle
        ]}
      >
        {this.renderIllustration(this.props.type, this.props.width)}
      </View>
    );
  }

  renderIllustration(type) {
    switch (type) {
      case Types.RIBBON_ACHIEVED:
        return <RibbonAchieved width={this.props.width} />;
      default:
        return null;
    }
  }
}

Badge.Types = Types;
export default Badge;

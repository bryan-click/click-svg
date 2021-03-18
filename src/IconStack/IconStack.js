import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import Svg, { Use, Defs, Circle } from "react-native-svg";
import { Types } from "./config";

// 🧩 Iconography Click Design System
import { Icon } from "../Icon";
import { Types as Variants } from "../Icon/config.js";

class IconStack extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    containerStyle: PropTypes.object,
    color: PropTypes.string
  };

  render() {
    return (
      <View style={styles.stack}>
        <View style={styles.icon}>{this.renderStack(this.props.type)}</View>
        <View style={styles.circle}>
          <Svg width={24} height={24}>
            <Circle
              cx="12"
              cy="12"
              r="12"
              fill={
                this.props.type === Types.DONE
                  ? "#6DD400"
                  : this.props.color || "#FF6607"
              }
            />
          </Svg>
        </View>
      </View>
    );
  }

  renderStack(type) {
    switch (type) {
      case Types.DONE:
        return (
          <Icon width={12} height={12} color="white" type={Variants.CHECK} />
        );
      case Types.ACTION_RIGHT:
        return (
          <Icon
            width={12}
            height={12}
            color="white"
            type={Variants.CHEVRON_RIGHT}
          />
        );
      case Types.ACTION_LEFT:
        return (
          <Icon
            width={12}
            height={12}
            color="white"
            type={Variants.CHEVRON_LEFT}
          />
        );
      default:
        return null;
    }
  }
}

const styles = StyleSheet.create({
  stack: {
    alignItems: "center",
    justifyContent: "center",
    height: 24,
    width: 24
  },
  icon: {
    zIndex: 1
  },
  circle: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    top: 0,
    width: 24,
    height: 24,
    zIndex: 0
  }
});

IconStack.Types = Types;
export default IconStack;

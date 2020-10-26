import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Svg from "react-native-svg";
import { Types } from "./config";
import {
  Calendar,
  Chevron_Left,
  Chevron_Right,
  Eye_Close,
  Eye_Open,
  Graph_Line,
  Home,
  Phone,
  Supporter,
  Tools,
  User
} from "./definitions";
import { ICON_COLOR } from "./definitions/shared";

class Icon extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    containerStyle: PropTypes.object
  };

  render() {
    return (
      <View
        style={[
          {
            color: this.props.color || ICON_COLOR,
            width: this.props.width,
            height: this.props.height,
            alignContent: "center"
          },
          this.props.containerStyle
        ]}
      >
        {this.renderIcon(this.props.type, this.props.color)}
      </View>
    );
  }

  renderIcon(type) {
    switch (type) {
      case Types.CALENDAR:
        return <Calendar color={this.props.color || ICON_COLOR} />;
      case Types.CHEVRON_LEFT:
        return <Chevron_Left color={this.props.color || ICON_COLOR} />;
      case Types.CHEVRON_RIGHT:
        return <Chevron_Right color={this.props.color || ICON_COLOR} />;
      case Types.EYE_CLOSE:
        return <Eye_Close color={this.props.color || ICON_COLOR} />;
      case Types.EYE_OPEN:
        return <Eye_Open color={this.props.color || ICON_COLOR} />;
      case Types.GRAPH_LINE:
        return <Graph_Line color={this.props.color || ICON_COLOR} />;
      case Types.HOME:
        return <Home color={this.props.color || ICON_COLOR} />;
      case Types.PHONE:
        return <Phone color={this.props.color || ICON_COLOR} />;
      case Types.SUPPORTER:
        return <Supporter color={this.props.color || ICON_COLOR} />;
      case Types.TOOLS:
        return <Tools color={this.props.color || ICON_COLOR} />;
      case Types.USER:
        return <User color={this.props.color || ICON_COLOR} />;
      default:
        return null;
    }
  }
}

Icon.Types = Types;
export default Icon;

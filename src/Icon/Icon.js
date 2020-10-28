import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Svg from "react-native-svg";
import { Types } from "./config";
import {
  Alert,
  Calendar,
  Check,
  Chevron_Down,
  Chevron_Left,
  Chevron_Right,
  Chevron_Up,
  Circle_Dot,
  Circle_Hollow,
  Circle,
  Close,
  Eye_Close,
  Eye_Open,
  Graph_Line,
  Home,
  Phone,
  Square_Hollow,
  Square,
  Star_Hollow,
  Star,
  Supporter,
  Tools,
  User
} from "./definitions";

import {
  Breathing,
  Cigarette,
  Dosage,
  Journal,
  Mission,
  Outdoors,
  Quit_Aids,
  Target,
  Trophy
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
      case Types.ALERT:
        return <Alert color={this.props.color || ICON_COLOR} />;
      case Types.CALENDAR:
        return <Calendar color={this.props.color || ICON_COLOR} />;
      case Types.CHECK:
        return <Check color={this.props.color || ICON_COLOR} />;
      case Types.CHEVRON_DOWN:
        return <Chevron_Down color={this.props.color || ICON_COLOR} />;
      case Types.CHEVRON_LEFT:
        return <Chevron_Left color={this.props.color || ICON_COLOR} />;
      case Types.CHEVRON_RIGHT:
        return <Chevron_Right color={this.props.color || ICON_COLOR} />;
      case Types.CHEVRON_UP:
        return <Chevron_Up color={this.props.color || ICON_COLOR} />;
      case Types.CIRCLE_DOT:
        return <Circle_Dot color={this.props.color || ICON_COLOR} />;
      case Types.CIRCLE_HOLLOW:
        return <Circle_Hollow color={this.props.color || ICON_COLOR} />;
      case Types.CIRCLE:
        return <Circle color={this.props.color || ICON_COLOR} />;
      case Types.CLOSE:
        return <Close color={this.props.color || ICON_COLOR} />;
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
      case Types.SQUARE_HOLLOW:
        return <Square_Hollow color={this.props.color || ICON_COLOR} />;
      case Types.SQUARE:
        return <Square color={this.props.color || ICON_COLOR} />;
      case Types.STAR_HOLLOW:
        return <Star_Hollow color={this.props.color || ICON_COLOR} />;
      case Types.STAR:
        return <Star color={this.props.color || ICON_COLOR} />;
      case Types.SUPPORTER:
        return <Supporter color={this.props.color || ICON_COLOR} />;
      case Types.TOOLS:
        return <Tools color={this.props.color || ICON_COLOR} />;
      case Types.USER:
        return <User color={this.props.color || ICON_COLOR} />;
      case Types.BREATHING:
        return <Breathing color={this.props.color || ICON_COLOR} />;
      case Types.CIGARETTE:
        return <Cigarette color={this.props.color || ICON_COLOR} />;
      case Types.DOSAGE:
        return <Dosage color={this.props.color || ICON_COLOR} />;
      case Types.JOURNAL:
        return <Journal color={this.props.color || ICON_COLOR} />;
      case Types.MISSION:
        return <Mission color={this.props.color || ICON_COLOR} />;
      case Types.OUTDOORS:
        return <Outdoors color={this.props.color || ICON_COLOR} />;
      case Types.QUIT_AIDS:
        return <Quit_Aids color={this.props.color || ICON_COLOR} />;
      case Types.TARGET:
        return <Target color={this.props.color || ICON_COLOR} />;
      case Types.TROPHY:
        return <Trophy color={this.props.color || ICON_COLOR} />;
      default:
        return null;
    }
  }
}

Icon.Types = Types;
export default Icon;

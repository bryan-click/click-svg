import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Svg, { Use, Defs } from "react-native-svg";
import { Types } from "./config";
import {
  CalendarAchieved,
  CalendarLocked,
  CommitLocked,
  CommitAchieved,
  MissionAchieved,
  MissionLocked,
  RibbonAchieved,
  RibbonLocked,
  TrophyAchieved,
  TrophyLocked
} from "./definitions";

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
      case Types.CALENDAR_ACHIEVED:
        return <CalendarAchieved width={this.props.width} />;
      case Types.CALENDAR_LOCKED:
        return <CalendarLocked width={this.props.width} />;
      case Types.COMMIT_ACHIEVED:
        return <CommitAchieved width={this.props.width} />;
      case Types.COMMIT_LOCKED:
        return <CommitLocked width={this.props.width} />;
      case Types.MISSION_ACHIEVED:
        return <MissionAchieved width={this.props.width} />;
      case Types.MISSION_LOCKED:
        return <MissionLocked width={this.props.width} />;
      case Types.RIBBON_ACHIEVED:
        return <RibbonAchieved width={this.props.width} />;
      case Types.RIBBON_LOCKED:
        return <RibbonLocked width={this.props.width} />;
      case Types.TROPHY_ACHIEVED:
        return <TrophyAchieved width={this.props.width} />;
      case Types.TROPHY_LOCKED:
        return <TrophyLocked width={this.props.width} />;
      default:
        return null;
    }
  }
}

Badge.Types = Types;
export default Badge;

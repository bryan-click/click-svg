import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Svg from "react-native-svg";
import { Types } from "./config";
// 🧩 Iconography Click Design System
import {
  Admin,
  Alert,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleDot,
  CircleHollow,
  Circle,
  Close,
  EyeClose,
  EyeOpen,
  GraphLine,
  Home,
  Phone,
  SquareHollow,
  Square,
  StarHollow,
  Star,
  Supporter,
  Tools,
  User
} from "./definitions";

// 🧩 Iconography Clickotine®
import {
  Breathing,
  Cardio,
  Cigarette,
  Dosage,
  Journal,
  Kit,
  Lungs,
  MedicationList,
  Medication,
  Mission,
  NRTGum,
  NRTLozenge,
  NRTPatch,
  Outdoors,
  QuitAids,
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
      case Types.ADMIN:
        return <Admin color={this.props.color || ICON_COLOR} />;
      case Types.ALERT:
        return <Alert color={this.props.color || ICON_COLOR} />;
      case Types.CALENDAR:
        return <Calendar color={this.props.color || ICON_COLOR} />;
      case Types.CHECK:
        return <Check color={this.props.color || ICON_COLOR} />;
      case Types.CHEVRON_DOWN:
        return <ChevronDown color={this.props.color || ICON_COLOR} />;
      case Types.CHEVRON_LEFT:
        return <ChevronLeft color={this.props.color || ICON_COLOR} />;
      case Types.CHEVRON_RIGHT:
        return <ChevronRight color={this.props.color || ICON_COLOR} />;
      case Types.CHEVRON_UP:
        return <ChevronUp color={this.props.color || ICON_COLOR} />;
      case Types.CIRCLE_DOT:
        return <CircleDot color={this.props.color || ICON_COLOR} />;
      case Types.CIRCLE_HOLLOW:
        return <CircleHollow color={this.props.color || ICON_COLOR} />;
      case Types.CIRCLE:
        return <Circle color={this.props.color || ICON_COLOR} />;
      case Types.CLOSE:
        return <Close color={this.props.color || ICON_COLOR} />;
      case Types.EYE_CLOSE:
        return <EyeClose color={this.props.color || ICON_COLOR} />;
      case Types.EYE_OPEN:
        return <EyeOpen color={this.props.color || ICON_COLOR} />;
      case Types.GRAPH_LINE:
        return <GraphLine color={this.props.color || ICON_COLOR} />;
      case Types.HOME:
        return <Home color={this.props.color || ICON_COLOR} />;
      case Types.PHONE:
        return <Phone color={this.props.color || ICON_COLOR} />;
      case Types.SQUARE_HOLLOW:
        return <SquareHollow color={this.props.color || ICON_COLOR} />;
      case Types.SQUARE:
        return <Square color={this.props.color || ICON_COLOR} />;
      case Types.STAR_HOLLOW:
        return <StarHollow color={this.props.color || ICON_COLOR} />;
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
      case Types.CARDIO:
        return <Cardio color={this.props.color || ICON_COLOR} />;
      case Types.CIGARETTE:
        return <Cigarette color={this.props.color || ICON_COLOR} />;
      case Types.DOSAGE:
        return <Dosage color={this.props.color || ICON_COLOR} />;
      case Types.JOURNAL:
        return <Journal color={this.props.color || ICON_COLOR} />;
      case Types.KIT:
        return <Kit color={this.props.color || ICON_COLOR} />;
      case Types.LUNGS:
        return <Lungs color={this.props.color || ICON_COLOR} />;
      case Types.MEDICATION_LIST:
        return <MedicationList color={this.props.color || ICON_COLOR} />;
      case Types.MEDICATION:
        return <Medication color={this.props.color || ICON_COLOR} />;
      case Types.MISSION:
        return <Mission color={this.props.color || ICON_COLOR} />;
      case Types.NRT_GUM:
        return <NRTGum color={this.props.color || ICON_COLOR} />;
      case Types.NRT_LOZENGE:
        return <NRTLozenge color={this.props.color || ICON_COLOR} />;
      case Types.NRT_PATCH:
        return <NRTPatch color={this.props.color || ICON_COLOR} />;
      case Types.OUTDOORS:
        return <Outdoors color={this.props.color || ICON_COLOR} />;
      case Types.QUIT_AIDS:
        return <QuitAids color={this.props.color || ICON_COLOR} />;
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

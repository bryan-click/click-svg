import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Svg from "react-native-svg";
import { Types } from "./config";

// 🧩 Iconography Click Design System
import {
  Admin,
  Alert,
  ArrowLeft,
  ArrowRight,
  BookmarkHollow,
  Bookmark,
  Calendar,
  Check,
  Camera,
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
  Info,
  Options,
  Phone,
  SquareHollow,
  Square,
  StarHollow,
  Star,
  Supporter,
  ThumbsDown,
  ThumbsUp,
  Timer,
  Tools,
  User
} from "./definitions";

// 🧩 Iconography Clickotine®
import {
  AlarmClock,
  Apple,
  BandAid,
  Bar,
  Bottle,
  Breathing,
  Cardio,
  Carrot,
  Cigarette,
  Coach,
  Coffee,
  Community,
  Dosage,
  Drinking,
  Driving,
  Exercise,
  Family,
  Journal,
  Kit,
  Love,
  Lungs,
  Meal,
  MedicationList,
  Medication,
  Mindful,
  Mission,
  Nightlife,
  NRTGum,
  NRTLozenge,
  NRTPatch,
  Outdoors,
  QuitAids,
  Ribbon,
  Snack,
  Target,
  Thinking,
  Tooth,
  Trophy,
  Vape,
  Walk,
  Water
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
        return (
          <Admin
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.ALERT:
        return (
          <Alert
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.ARROW_LEFT:
        return (
          <ArrowLeft
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.ARROW_RIGHT:
        return (
          <ArrowRight
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.BOOKMARK_HOLLOW:
        return (
          <BookmarkHollow
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.BOOKMARK:
        return (
          <Bookmark
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.CALENDAR:
        return (
          <Calendar
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.CAMERA:
        return (
          <Camera
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.CHECK:
        return (
          <Check
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.CHEVRON_DOWN:
        return (
          <ChevronDown
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.CHEVRON_LEFT:
        return (
          <ChevronLeft
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.CHEVRON_RIGHT:
        return (
          <ChevronRight
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.CHEVRON_UP:
        return (
          <ChevronUp
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.CIRCLE_DOT:
        return (
          <CircleDot
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.CIRCLE_HOLLOW:
        return (
          <CircleHollow
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.CIRCLE:
        return (
          <Circle
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.CLOSE:
        return (
          <Close
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.EYE_CLOSE:
        return (
          <EyeClose
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.EYE_OPEN:
        return (
          <EyeOpen
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.GRAPH_LINE:
        return (
          <GraphLine
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.HOME:
        return (
          <Home
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.INFO:
        return (
          <Info
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.OPTIONS:
        return (
          <Options
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.PHONE:
        return (
          <Phone
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.SQUARE_HOLLOW:
        return (
          <SquareHollow
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.SQUARE:
        return (
          <Square
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.STAR_HOLLOW:
        return (
          <StarHollow
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.STAR:
        return (
          <Star
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.SUPPORTER:
        return (
          <Supporter
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.THUMBS_DOWN:
        return (
          <ThumbsDown
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.THUMBS_UP:
        return (
          <ThumbsUp
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.TIMER:
        return (
          <Timer
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.TOOLS:
        return (
          <Tools
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.USER:
        return (
          <User
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );

      case Types.ALARM_CLOCK:
        return (
          <AlarmClock
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.APPLE:
        return (
          <Apple
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.BAND_AID:
        return (
          <BandAid
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.BAR:
        return (
          <Bar
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.BOTTLE:
        return (
          <Bottle
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.BREATHING:
        return (
          <Breathing
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.CARDIO:
        return (
          <Cardio
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.CARROT:
        return (
          <Carrot
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.CIGARETTE:
        return (
          <Cigarette
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.COACH:
        return (
          <Coach
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.COFFEE:
        return (
          <Coffee
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.COMMUNITY:
        return (
          <Community
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.DOSAGE:
        return (
          <Dosage
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.DRINKING:
        return (
          <Drinking
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.DRIVING:
        return (
          <Driving
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.EXERCISE:
        return (
          <Exercise
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.FAMILY:
        return (
          <Family
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.JOURNAL:
        return (
          <Journal
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.KIT:
        return (
          <Kit
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.LOVE:
        return (
          <Love
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.LUNGS:
        return (
          <Lungs
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.MEAL:
        return (
          <Meal
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.MEDICATION_LIST:
        return (
          <MedicationList
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.MEDICATION:
        return (
          <Medication
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.MISSION:
        return (
          <Mission
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.NIGHTLIFE:
        return (
          <Nightlife
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.MINDFUL:
        return (
          <Mindful
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.NRT_GUM:
        return (
          <NRTGum
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.NRT_LOZENGE:
        return (
          <NRTLozenge
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.NRT_PATCH:
        return (
          <NRTPatch
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.OUTDOORS:
        return (
          <Outdoors
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.QUIT_AIDS:
        return (
          <QuitAids
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.RIBBON:
        return (
          <Ribbon
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.SNACK:
        return (
          <Snack
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.TARGET:
        return (
          <Target
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.THINKING:
        return (
          <Thinking
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.TOOTH:
        return (
          <Tooth
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.TROPHY:
        return (
          <Trophy
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.VAPE:
        return (
          <Vape
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.WALK:
        return (
          <Walk
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      case Types.WATER:
        return (
          <Water
            width={this.props.width}
            height={this.props.height}
            color={this.props.color || ICON_COLOR}
          />
        );
      default:
        return null;
    }
  }
}

Icon.Types = Types;
export default Icon;

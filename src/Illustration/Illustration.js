import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Svg, { Use, Defs } from "react-native-svg";
import { Types } from "./config";
import {
  GroupCelebrate,
  GroupClinic,
  GroupCounsel,
  GroupFriendship,
  GroupSupport,
  IndividualManDevice,
  IndividualManFinance,
  IndividualManStrength,
  IndividualNonBinaryCelebrate,
  IndividualNonBinaryDatetime,
  IndividualNonBinaryHealthworkerQuitAids,
  IndividualWomanDatetime,
  IndividualWomanHealthworkerQuitAids,
  IndividualStrength,
  IntrospectiveJournal,
  IntrospectiveTime,
  MilestoneLungRecovery,
  MilestoneRibbon,
  MilestoneTrophy
} from "./definitions";

class Illustration extends Component {
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
            aspectRatio: 1.5
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
      case Types.GROUP_CELEBRATE:
        return <GroupCelebrate width={this.props.width} />;
      case Types.GROUP_CLINIC:
        return <GroupClinic width={this.props.width} />;
      case Types.GROUP_COUNSEL:
        return <GroupCounsel width={this.props.width} />;
      case Types.GROUP_FRIENDSHIP:
        return <GroupFriendship width={this.props.width} />;
      case Types.GROUP_SUPPORT:
        return <GroupSupport width={this.props.width} />;
      case Types.INDIVIDUAL_MAN_DEVICE:
        return <IndividualManDevice width={this.props.width} />;
      case Types.INDIVIDUAL_MAN_FINANCE:
        return <IndividualManFinance width={this.props.width} />;
      case Types.INDIVIDUAL_MAN_STRENGTH:
        return <IndividualManStrength width={this.props.width} />;
      case Types.INDIVIDUAL_NONBINARY_CELEBRATE:
        return <IndividualNonBinaryCelebrate width={this.props.width} />;
      case Types.INDIVIDUAL_NONBINARY_DATETIME:
        return <IndividualNonBinaryDatetime width={this.props.width} />;
      case Types.INDIVIDUAL_NONBINARY_HEALTHWORKER_QUIT_AIDS:
        return (
          <IndividualNonBinaryHealthworkerQuitAids width={this.props.width} />
        );
      case Types.INDIVIDUAL_WOMAN_DATETIME:
        return <IndividualWomanDatetime />;
      case Types.INDIVIDUAL_WOMAN_HEALTHWORKER_QUIT_AIDS:
        return <IndividualWomanHealthworkerQuitAids width={this.props.width} />;
      case Types.INTROSPECTIVE_JOURNAL:
        return <IntrospectiveJournal width={this.props.width} />;
      case Types.INTROSPECTIVE_TIME:
        return <IntrospectiveTime width={this.props.width} />;
      case Types.MILESTONE_LUNG_RECOVERY:
        return <MilestoneLungRecovery width={this.props.width} />;
      case Types.MILESTONE_RIBBON:
        return <MilestoneRibbon width={this.props.width} />;
      case Types.MILESTONE_TROPHY:
        return <MilestoneTrophy width={this.props.width} />;
      default:
        return null;
    }
  }
}

Illustration.Types = Types;
export default Illustration;

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
  MilestoneRibbon
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
            height: this.props.height
          },
          this.props.containerStyle
        ]}
      >
        {this.renderIllustration(this.props.type)}
      </View>
    );
  }

  renderIllustration(type) {
    switch (type) {
      case Types.GROUP_CELEBRATE:
        return <GroupCelebrate />;
      case Types.GROUP_CLINIC:
        return <GroupClinic />;
      case Types.GROUP_COUNSEL:
        return <GroupCounsel />;
      case Types.GROUP_FRIENDSHIP:
        return <GroupFriendship />;
      case Types.GROUP_SUPPORT:
        return <GroupSupport />;
      case Types.INDIVIDUAL_MAN_DEVICE:
        return <IndividualManDevice />;
      case Types.INDIVIDUAL_MAN_FINANCE:
        return <IndividualManFinance />;
      case Types.INDIVIDUAL_MAN_STRENGTH:
        return <IndividualManStrength />;
      case Types.INDIVIDUAL_NONBINARY_CELEBRATE:
        return <IndividualNonBinaryCelebrate />;
      case Types.INDIVIDUAL_NONBINARY_DATETIME:
        return <IndividualNonBinaryDatetime />;
      case Types.INDIVIDUAL_NONBINARY_HEALTHWORKER_QUIT_AIDS:
        return <IndividualNonBinaryHealthworkerQuitAids />;
      case Types.INDIVIDUAL_WOMAN_DATETIME:
        return <IndividualWomanDatetime />;
      case Types.INDIVIDUAL_WOMAN_HEALTHWORKER_QUIT_AIDS:
        return <IndividualWomanHealthworkerQuitAids />;
      case Types.INTROSPECTIVE_JOURNAL:
        return <IntrospectiveJournal />;
      case Types.INTROSPECTIVE_TIME:
        return <IntrospectiveTime />;
      case Types.MILESTONE_LUNG_RECOVERY:
        return <MilestoneLungRecovery />;
      case Types.MILESTONE_RIBBON:
        return <MilestoneRibbon />;
      default:
        return null;
    }
  }
}

Illustration.Types = Types;
export default Illustration;

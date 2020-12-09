import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Svg, { Use, Defs } from "react-native-svg";
import { Types } from "./config";
import {
  CommunicationOutbound,
  DependencyLevelHigh,
  DependencyLevelLow,
  DependencyLevelModerate,
  DependencyLevelVeryHigh,
  DependencyLevelVeryLow,
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
  MilestonePostQuitDay1,
  MilestonePostQuitDay2,
  MilestonePostQuitDay3,
  MilestonePostQuitDay4,
  MilestonePostQuitDay5,
  MilestonePostQuitDay6,
  MilestonePostQuitWeek1,
  MilestonePostQuitWeek2,
  MilestonePostQuitWeek3,
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
      case Types.COMMUNICATION_OUTBOUND:
        return <CommunicationOutbound width={this.props.width} />;

      case Types.DEPENDENCY_LEVEL_HIGH:
        return <DependencyLevelHigh width={this.props.width} />;
      case Types.DEPENDENCY_LEVEL_LOW:
        return <DependencyLevelLow width={this.props.width} />;
      case Types.DEPENDENCY_LEVEL_MODERATE:
        return <DependencyLevelModerate width={this.props.width} />;
      case Types.DEPENDENCY_LEVEL_VERY_HIGH:
        return <DependencyLevelVeryHigh width={this.props.width} />;
      case Types.DEPENDENCY_LEVEL_VERY_LOW:
        return <DependencyLevelVeryLow width={this.props.width} />;

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

      case Types.MILESTONE_POST_QUIT_DAY_1:
        return <MilestonePostQuitDay1 width={this.props.width} />;
      case Types.MILESTONE_POST_QUIT_DAY_2:
        return <MilestonePostQuitDay2 width={this.props.width} />;
      case Types.MILESTONE_POST_QUIT_DAY_3:
        return <MilestonePostQuitDay3 width={this.props.width} />;
      case Types.MILESTONE_POST_QUIT_DAY_4:
        return <MilestonePostQuitDay4 width={this.props.width} />;
      case Types.MILESTONE_POST_QUIT_DAY_5:
        return <MilestonePostQuitDay5 width={this.props.width} />;
      case Types.MILESTONE_POST_QUIT_DAY_6:
        return <MilestonePostQuitDay6 width={this.props.width} />;

      case Types.MILESTONE_POST_QUIT_WEEK_1:
        return <MilestonePostQuitWeek1 width={this.props.width} />;
      case Types.MILESTONE_POST_QUIT_WEEK_2:
        return <MilestonePostQuitWeek2 width={this.props.width} />;
      case Types.MILESTONE_POST_QUIT_WEEK_3:
        return <MilestonePostQuitWeek3 width={this.props.width} />;

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

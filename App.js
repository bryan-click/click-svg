import * as React from "react";
import {
  View,
  Button,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Platform,
  TextInput,
  Text,
  SafeAreaView,
  StatusBar
} from "react-native";
import Constants from "expo-constants";
import { Icon } from "./src/Icon";
import { Illustration } from "./src/Illustration";

const App = () => {
  // 🖍 Override ICON_COLOR with a custom variable or pass a string to the 'color' prop
  const customColor = "#FF6607";

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            alignItems: "center"
          }}
        >
          <Text>Icons</Text>
          <Icon type={Icon.Types.ADMIN} />
          <Icon type={Icon.Types.ALERT} />
          <Icon type={Icon.Types.CALENDAR} />
          <Icon type={Icon.Types.CHECK} />
          <Icon type={Icon.Types.CHEVRON_DOWN} />
          <Icon type={Icon.Types.CHEVRON_LEFT} />
          <Icon type={Icon.Types.CHEVRON_RIGHT} />
          <Icon type={Icon.Types.CHEVRON_UP} />
          <Icon type={Icon.Types.CIRCLE_DOT} />
          <Icon type={Icon.Types.CIRCLE_HOLLOW} />
          <Icon type={Icon.Types.CIRCLE} />
          <Icon type={Icon.Types.CLOSE} />
          <Icon type={Icon.Types.EYE_CLOSE} />
          <Icon type={Icon.Types.EYE_OPEN} />
          <Icon type={Icon.Types.GRAPH_LINE} />
          <Icon type={Icon.Types.HOME} />
          <Icon type={Icon.Types.PHONE} />
          <Icon type={Icon.Types.SUPPORTER} />
          <Icon type={Icon.Types.SQUARE_HOLLOW} />
          <Icon type={Icon.Types.SQUARE} />
          <Icon type={Icon.Types.STAR_HOLLOW} />
          <Icon type={Icon.Types.STAR} />
          <Icon type={Icon.Types.TOOLS} />
          <Icon type={Icon.Types.USER} />
          <Text>Clickotine® Icons</Text>
          <Icon type={Icon.Types.BREATHING} />
          <Icon type={Icon.Types.CARDIO} />
          <Icon type={Icon.Types.CIGARETTE} />
          <Icon type={Icon.Types.DOSAGE} />
          <Icon type={Icon.Types.JOURNAL} />
          <Icon type={Icon.Types.KIT} />
          <Icon type={Icon.Types.LUNGS} />
          <Icon type={Icon.Types.MEDICATION_LIST} />
          <Icon type={Icon.Types.MEDICATION} />
          <Icon type={Icon.Types.MISSION} />
          <Icon type={Icon.Types.NRT_GUM} />
          <Icon type={Icon.Types.NRT_LOZENGE} />
          <Icon type={Icon.Types.NRT_PATCH} />
          <Icon type={Icon.Types.OUTDOORS} />
          <Icon type={Icon.Types.QUIT_AIDS} />
          <Icon type={Icon.Types.TARGET} />
          <Icon type={Icon.Types.TROPHY} />
          <Text>Clickotine® Illustrations</Text>
          <Illustration type={Illustration.Types.GROUP_CELEBRATE} />
          <Text>% as width prop</Text>
          <Illustration
            type={Illustration.Types.GROUP_CELEBRATE}
            width={"100%"}
          />
          <Text>number as width prop</Text>
          <Illustration type={Illustration.Types.GROUP_CELEBRATE} width={100} />
          <Illustration type={Illustration.Types.GROUP_CLINIC} />
          <Illustration type={Illustration.Types.GROUP_COUNSEL} />
          <Illustration type={Illustration.Types.GROUP_FRIENDSHIP} />
          <Illustration type={Illustration.Types.GROUP_SUPPORT} />

          <Illustration type={Illustration.Types.INDIVIDUAL_MAN_DEVICE} />
          <Illustration type={Illustration.Types.INDIVIDUAL_MAN_FINANCE} />
          <Illustration type={Illustration.Types.INDIVIDUAL_MAN_STRENGTH} />

          <Illustration
            type={Illustration.Types.INDIVIDUAL_NONBINARY_CELEBRATE}
          />
          <Illustration
            type={Illustration.Types.INDIVIDUAL_NONBINARY_DATETIME}
          />
          <Illustration
            type={
              Illustration.Types.INDIVIDUAL_NONBINARY_HEALTHWORKER_QUIT_AIDS
            }
          />

          <Illustration type={Illustration.Types.INDIVIDUAL_WOMAN_DATETIME} />
          <Illustration
            type={Illustration.Types.INDIVIDUAL_WOMAN_HEALTHWORKER_QUIT_AIDS}
          />
          <Illustration type={Illustration.Types.INTROSPECTIVE_JOURNAL} />
          <Illustration type={Illustration.Types.INTROSPECTIVE_TIME} />
          <Illustration type={Illustration.Types.MILESTONE_LUNG_RECOVERY} />
          <Illustration type={Illustration.Types.MILESTONE_POST_QUIT_DAY_1} />
          <Illustration type={Illustration.Types.MILESTONE_POST_QUIT_DAY_2} />
          <Illustration type={Illustration.Types.MILESTONE_POST_QUIT_DAY_3} />
          <Illustration type={Illustration.Types.MILESTONE_POST_QUIT_DAY_4} />
          <Illustration type={Illustration.Types.MILESTONE_POST_QUIT_DAY_5} />
          <Illustration type={Illustration.Types.MILESTONE_POST_QUIT_DAY_6} />

          <Illustration type={Illustration.Types.MILESTONE_POST_QUIT_WEEK_1} />
          <Illustration type={Illustration.Types.MILESTONE_POST_QUIT_WEEK_2} />
          <Illustration type={Illustration.Types.MILESTONE_POST_QUIT_WEEK_3} />

          <Illustration type={Illustration.Types.MILESTONE_RIBBON} />
          <Illustration type={Illustration.Types.MILESTONE_TROPHY} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "snow"
  },
  scrollView: {
    marginTop: Constants.statusBarHeight * 0,
    paddingHorizontal: 24
  }
});

export default App;

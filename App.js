import Constants from "expo-constants";
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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// 🥽 Click Design System - SVG Components
import { Icon } from "./src/Icon";
import { Illustration } from "./src/Illustration";

// 🧩 Icons
function Icons({ navigation }) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            alignItems: "center"
          }}
        >
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function IconScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Icons" component={Icons} />
    </Stack.Navigator>
  );
}

// 🖼 Illustrations
function Illustrations({ navigation }) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            alignItems: "center"
          }}
        >
          <Illustration type="blob_1" />
          <Illustration type="blob_2" />
          <Illustration type="blob_3" />
          <Illustration type="blob_4" />
          <Illustration type="blob_5" />
          <Illustration type="blob_6" />
          <Illustration type="blob_7" />
          <Illustration type="blob_8" />

          <Illustration type="communication_outbound" />

          <Illustration type="dependency_level_high" />
          <Illustration type="dependency_level_low" />
          <Illustration type="dependency_level_moderate" />
          <Illustration type="dependency_level_very_high" />
          <Illustration type="dependency_level_very_low" />

          <Illustration type="group_celebrate" />
          <Illustration type="group_celebrate_alt" />
          <Illustration type="group_clinic" />
          <Illustration type="group_counsel" />
          <Illustration type="group_counsel_alt" />
          <Illustration type="group_friendship" />
          <Illustration type="group_friendship_alt" />
          <Illustration type="group_support" />
          <Illustration type="group_support_alt" />

          <Illustration type="individual_man_device" />
          <Illustration type="individual_man_device_alt" />

          <Illustration type="individual_man_finance" />
          <Illustration type="individual_man_finance_alt" />

          <Illustration type="individual_man_strength" />
          <Illustration type="individual_man_strength_alt" />

          <Illustration type="individual_nonbinary_celebrate" />
          <Illustration type="individual_nonbinary_celebrate_alt" />
          <Illustration type="individual_nonbinary_datetime" />
          <Illustration type="individual_nonbinary_datetime_alt" />
          <Illustration type="individual_nonbinary_healthworker_quit_aids" />
          <Illustration type="individual_nonbinary_thinking" />
          <Illustration type="individual_nonbinary_thinking_alt" />

          <Illustration type="individual_woman_datetime" />
          <Illustration type="individual_woman_datetime_alt" />
          <Illustration type="individual_woman_healthworker_quit_aids" />

          <Illustration type="introspective_journal" />
          <Illustration type="introspective_time" />

          <Illustration type="milestone_lung_recovery" />
          <Illustration type="milestone_post_quit_day_1" />
          <Illustration type="milestone_post_quit_day_2" />
          <Illustration type="milestone_post_quit_day_3" />
          <Illustration type="milestone_post_quit_day_4" />
          <Illustration type="milestone_post_quit_day_5" />
          <Illustration type="milestone_post_quit_day_6" />

          <Illustration type="milestone_post_quit_week_1" />
          <Illustration type="milestone_post_quit_week_2" />
          <Illustration type="milestone_post_quit_week_3" />

          <Illustration type="milestone_ribbon" />
          <Illustration type="milestone_trophy" />

          <Illustration type="office" />
          <Illustration type="sitting_room" />
          <Illustration type="vaping" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function IllustrationScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Illustrations" component={Illustrations} />
    </Stack.Navigator>
  );
}

// 📺 Application Root View
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const customColor = "#FF6607"; // 🖍 Override ICON_COLOR with a custom variable or pass a string to the 'color' prop
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Illustrations" component={IllustrationScreen} />
        <Tab.Screen name="Icons" component={IconScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// 🎨 Stylesheet
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "snow" // 🖍 Override BG_COLOR with a custom variable or pass a string to the 'color' prop
  },
  scrollView: {
    marginTop: Constants.statusBarHeight * 0,
    paddingHorizontal: 24 // 📐 Override PADDING_X with a custom variable or pass a string to the 'space-x' prop
  }
});

export default App;

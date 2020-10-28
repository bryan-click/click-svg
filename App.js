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

const App = () => {
  // 🖍 Override ICON_COLOR with a custom variable or pass a string to the 'color' prop
  const customColor = "#FF6607";

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <View style={{ alignItems: "center" }}>
          <Text>Icons</Text>
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
          <Icon type={Icon.Types.CIGARETTE} />
          <Icon type={Icon.Types.DOSAGE} />
          <Icon type={Icon.Types.JOURNAL} />
          <Icon type={Icon.Types.MISSION} />
          <Icon type={Icon.Types.OUTDOORS} />
          <Icon type={Icon.Types.QUIT_AIDS} />
          <Icon type={Icon.Types.TARGET} />
          <Icon type={Icon.Types.TROPHY} />
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
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 24
  }
});

export default App;

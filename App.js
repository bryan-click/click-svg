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
  SafeAreaView,
  StatusBar
} from "react-native";
import Constants from "expo-constants";
import { Icon } from "./src/Icon";

const App = () => {
  // 🖍 Override ICON_COLOR with a custom variable or pass a string to the 'color' prop
  const customColor = "#FF6607";

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={styles.scrollView}>
            <View style={{ alignItems: "center" }}>
              <Icon type={Icon.Types.CALENDAR} color={customColor} />
              <Icon type={Icon.Types.CHEVRON_LEFT} color={"cadetblue"} />
              <Icon type={Icon.Types.CHEVRON_RIGHT} color={"#ccee00"} />
              <Icon type={Icon.Types.EYE_CLOSE} />
              <Icon type={Icon.Types.EYE_OPEN} />
              <Icon type={Icon.Types.GRAPH_LINE} />
              <Icon type={Icon.Types.HOME} />
              <Icon type={Icon.Types.PHONE} />
              <Icon type={Icon.Types.SUPPORTER} />
              <Icon type={Icon.Types.TOOLS} />
              <Icon type={Icon.Types.USER} />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight * 2
  },
  safeAreaView: {
    flex: 1
  },
  scrollView: {
    paddingHorizontal: 24,
    backgroundColor: "snow"
  }
});

export default App;

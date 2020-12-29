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
  const IconList = () => {
    const icons = Icon.Types;
    const icon = Object.entries(icons).map(([key, value]) => {
      return (
        <View key={key} style={{ alignItems: "center", marginBottom: 48 }}>
          <Icon type={value} />
          <View
            style={{
              alignItems: "center",
              paddingVertical: 4,
              paddingHorizontal: 8,
              marginTop: 8,
              borderRadius: 3,
              backgroundColor: "black"
            }}
          >
            <Text
              id={key}
              style={{
                color: "salmon",
                fontSize: 10,
                textAlign: "center"
              }}
            >
              {`<Icon type="${value}" />`}
            </Text>
          </View>
        </View>
      );
    });
    return <View>{icon}</View>;
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            alignItems: "center"
          }}
        >
          <IconList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function IconScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="🧩 Icons" component={Icons} />
    </Stack.Navigator>
  );
}

// 🖼 Illustrations
function Illustrations({ navigation }) {
  const IllustrationList = () => {
    const illustrations = Illustration.Types;
    const illustration = Object.entries(illustrations).map(([key, value]) => {
      return (
        <View key={key} style={{ alignItems: "center", marginBottom: 48 }}>
          <Illustration type={value} />
          <View
            style={{
              alignItems: "center",
              paddingVertical: 4,
              paddingHorizontal: 8,
              marginTop: 8,
              borderRadius: 3,
              backgroundColor: "black"
            }}
          >
            <Text
              id={key}
              style={{
                color: "salmon",
                fontSize: 10,
                textAlign: "center"
              }}
            >
              {`<Illustration type="${value}" />`}
            </Text>
          </View>
        </View>
      );
    });
    return <View>{illustration}</View>;
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            alignItems: "center"
          }}
        >
          <IllustrationList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function IllustrationScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="🖼 Illustrations" component={Illustrations} />
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
        <Tab.Screen name="🖼 Illustrations" component={IllustrationScreen} />
        <Tab.Screen name="🧩 Icons" component={IconScreen} />
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

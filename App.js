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
import { IconStack } from "./src/IconStack";
import { Badge } from "./src/Badge";
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

// 🎀 Icon Stack
function IconStacks({ navigation }) {
  const IconStackList = () => {
    const iconstacks = IconStack.Types;
    const stack = Object.entries(iconstacks).map(([key, value]) => {
      return (
        <View key={key} style={{ alignItems: "center", marginBottom: 48 }}>
          <IconStack type={value} />
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
              {`<IconStack type="${value}" />`}
            </Text>
          </View>
        </View>
      );
    });
    return <View>{stack}</View>;
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            alignItems: "center"
          }}
        >
          <IconStackList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function IconStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="🎀 Icon Stack" component={IconStacks} />
    </Stack.Navigator>
  );
}

// 🎖 Badge
function Badges({ navigation }) {
  const BadgeList = () => {
    const iconstacks = Badge.Types;
    const stack = Object.entries(iconstacks).map(([key, value]) => {
      return (
        <View key={key} style={{ alignItems: "center", marginBottom: 48 }}>
          <Badge type={value} />
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
              {`<Badge type="${value}" />`}
            </Text>
          </View>
        </View>
      );
    });
    return <View>{stack}</View>;
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            alignItems: "center"
          }}
        >
          <BadgeList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function BadgeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="🎖 Badges" component={Badges} />
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
        <Tab.Screen name="🧩 Icons" component={IconScreen} />
        <Tab.Screen name="🎀 Icon Stacks" component={IconStackScreen} />
        <Tab.Screen name="🎖 Badges" component={BadgeScreen} />
        <Tab.Screen name="🖼 Illustrations" component={IllustrationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// 🎨 Stylesheet
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#FFFFFF" // 🖍 Override BG_COLOR with a custom variable or pass a string to the 'color' prop
  },
  scrollView: {
    marginTop: Constants.statusBarHeight * 0,
    paddingHorizontal: 24 // 📐 Override PADDING_X with a custom variable or pass a string to the 'space-x' prop
  }
});

export default App;

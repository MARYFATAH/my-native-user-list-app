import React, { useState, useEffect } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Pressable,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ScrollViewSample } from "./components/ScrollViewSample";
import FlatListSample from "./components/FlatListSample";

export default function App() {
  const [users, setUsers] = useState([]);
  const [showFlatList, setShowFlatList] = useState(false);
  const [showScrollView, setShowScrollView] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const data = await response.json();
      setUsers(data.results);
      console.log(users);
    } catch (error) {
      console.error(error);
    }
  }

  function showFlatListFunction() {
    setShowFlatList(true);
    setShowScrollView(false);
  }

  function showScrollViewFunction() {
    setShowFlatList(false);
    setShowScrollView(true);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <Text style={styles.headerText}>My New Project</Text>
          <Button title="Get users" onPress={getData} />
          {showScrollView && <ScrollViewSample users={users} />}
          {showFlatList && <FlatListSample users={users} />}
          <Pressable onPress={showScrollViewFunction} style={styles.pressable}>
            <Text>Show ScrollViewSample</Text>
          </Pressable>
          <Pressable onPress={showFlatListFunction} style={styles.pressable}>
            <Text>Show FlatListSample</Text>
          </Pressable>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "lightgrey",
  },
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
  },
  pressable: {
    backgroundColor: "lightblue",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
});

import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

export function ScrollViewSample({ users }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerText}>Users in ScrollView</Text>
        {users.map((user) => (
          <View style={styles.itemContainer} key={user.login.uuid}>
            <Image
              onPress={() => console.log("pressed")}
              source={{ uri: user.picture.thumbnail }}
              style={styles.thumbnail}
            />
            <View style={styles.textContainer}>
              <Text style={styles.nameText}>
                Name: {user.name.first} {user.name.last}
              </Text>
              <Text style={styles.emailText}>Email: {user.email}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 20,
    alignItems: "center",
  },
  innerContainer: {
    alignItems: "center",
    maxWidth: "95%",
    minWidth: "95%",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "lightblue",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    justifyContent: "center",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  emailText: {
    fontSize: 14,
    color: "#666",
  },
});

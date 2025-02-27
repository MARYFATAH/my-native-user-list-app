import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

export default function FlatListSample({ users }) {
  return (
    <FlatList
      data={users}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: item.picture.thumbnail }}
            style={styles.thumbnail}
          />
          <View style={styles.textContainer}>
            <Text style={styles.emailText}>{item.email}</Text>
            <Text style={styles.nameText}>
              {item.name.first} {item.name.last}
            </Text>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.login.uuid}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    alignItems: "center",
    padding: 10,
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
    maxWidth: "95%",
    minWidth: "95%",
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
  emailText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  nameText: {
    fontSize: 14,
    color: "#666",
  },
});

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Image } from "expo-image";
import Nav from "../components/Nav";
import ResourceComments from "../components/ResourceComments";
import { dateFormatter } from "../utils/utils";

export const ResourcePage = ({ navigation, route }) => {
  const { resource } = route.params;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // Adjust this offset if needed
    >
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.infoTitle}>{resource.resource_name}</Text>
          <Text style={styles.infoDescription}> {resource.description}</Text>
          <Text style={styles.infoAuthor}>Added by: {resource.username}</Text>
          <Text style={styles.infoQuality}>Quality: {resource.condition}%</Text>
          <Text style={styles.infoDate}>Date Uploaded: {resource.created_at}</Text>
          <Text style={styles.infoAbundance}>Abundance: {resource.depletion}%</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={resource.img_url}
            contentFit="scale-down"
            transition={1000}
          />
        </View>
        <Nav
          showSearchButton={false}
          showResourceNav={true}
          navigation={navigation}
          currentResource={resource}
        />
        <View style={styles.comments}>
          <ResourceComments resource_id={resource.resource_id} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff68f", // added this line
  },
  info: {
    marginTop: 25,
    padding: 20,
    backgroundColor: "#fff68f",
    borderRadius: 10,
    textAlign: "center",
  },
  infoTitle: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#492c03", 
    textAlign: "center",
  },
  infoDescription: {
    fontSize: 16,
    color: "#492c03", 
    textAlign: "center",

  },
  infoAuthor: {
    fontSize: 15,
    color: "#492c03", 
    marginBottom: 5,
    textAlign: "center",

  },
  infoQuality: {
    fontSize: 15,
    color: "#492c03", 
    textAlign: "center",

  },
  infoDate: {
    fontSize: 15,
    color: "#492c03",
    textAlign: "center",

  },
  infoAbundance: {
    fontSize: 15,
    color: "#492c03", 
    textAlign: "center",

  },
  imageContainer: {
    height: "38%",
    backgroundColor: "#fff68f",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: "#fff68f",
    contentFit: "cover",
  },
  comments:{
    height: "50%",
    width: "100%",
  }
});

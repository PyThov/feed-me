import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { LargeButton, Separator } from "./common/components";
import { AsyncGetRestaurants } from "./common/utils";
import EditRestaurant from "./components/EditRestaurant";
import PickRestaurant from "./components/PickRestaurant";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header1Text: {
    fontSize: 32,
    fontWeight: "600",
    color: "white",
  },
  largeButton: {
    fontSize: 24,
    padding: 4
  }
})

export default function Main(){
  const [pickVisible, setPickVisible] = useState(false)
  const [editVisible, setEditVisible] = useState(false)
  const [discoverVisible, setDiscoverVisible] = useState(false)
  const [restaurants, setRestaurants] = useState(new Set<string>()) // TODO: Initialize restaurants from datastore
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    AsyncGetRestaurants().then((result) => {
      setRestaurants(result || new Set<string>())
    })
    setDataLoaded(true)
  }

  return (    
      <View style={styles.container}>
        <View style={{backgroundColor: "#42608c", width: "100%", alignItems: "center"}}>
          <Text style={styles.header1Text}>Feed Me</Text>
        </View>
          <Separator />
          <LargeButton text={"Pick a restaurant"} onClick={() => setPickVisible(true)}/>
          <PickRestaurant visible={pickVisible} setVisible={setPickVisible} restaurants={restaurants} />
          <Separator />
          <LargeButton text={"Edit Restaurants"} onClick={() => setEditVisible(true)} />
          <EditRestaurant visible={editVisible} setVisible={setEditVisible} setRestaurants={setRestaurants} restaurants={restaurants}/>
          <Separator />
          {/* <LargeButton text={"Discover"} onClick={() => console.log("discover restaurants")} /> */}
      </View>
  )
}

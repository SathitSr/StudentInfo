import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Header from "../../../components/Header";
import Container from "../../../components/Container";
import Items from "../component/Items";
import { Ionicons } from "@expo/vector-icons";

const Detail = ({ route }) => {
  const { userInfo } = route.params;
  const [edits, setEdits] = useState(false);

  const editFrom = () => {
    setEdits(true);
  };

  const submitFrom = () => {
    setEdits(false);
    console.log("check update from");
  };

  const deleteUser = () => {
    setEdits(false);
    console.log("check delete from");
  };

  return (
    <Container>
      <Header title={"Studen Detail"} back={true} />
      <View style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Image
            style={{ width: 100, height: 100, borderRadius: 80 }}
            source={{ uri: userInfo.avatar }}
          />
        </View>
        <View style={{ flex: 1, padding: 10 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#F6F1F1",
              borderRadius: 15,
              padding: 15,
              paddingTop: 30,
            }}
          >
            <TouchableOpacity
              style={{ alignItems: "flex-end" }}
              onPress={() => deleteUser()}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="md-trash-outline" size={16} color="#FC2947" />
                <Text style={{ color: "#FC2947" }}>Delete</Text>
              </View>
            </TouchableOpacity>

            <Items info={userInfo.name} type={"Name"} edit={edits} />
            <Items info={userInfo.username} type={"User Name"} edit={edits} />
            <Items info={userInfo.email} type={"E-mail"} edit={edits} />
            <Items info={userInfo.phone} type={"Phone"} edit={edits} />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: "5%",
          width: "80%",
          justifyContent: "center",
          alignSelf: "center",
        }}
        onPress={() => (!edits ? editFrom() : submitFrom())}
      >
        <View
          style={{
            backgroundColor: edits ? "#57C5B6" : "#A9907E",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              padding: 10,
              fontSize: 16,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Edit
          </Text>
        </View>
      </TouchableOpacity>
    </Container>
  );
};

export default Detail;

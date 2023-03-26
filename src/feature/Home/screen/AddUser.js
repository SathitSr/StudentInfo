import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Header from "../../../components/Header";
import Container from "../../../components/Container";
import Items from "../component/Items";

const AddUser = () => {
  const [images, setImages] = useState(
    "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
  );

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const changeData = () => {
    console.log("check data");
  };

  return (
    <Container>
      <Header title={"Add User"} back={true} />
      <View style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#F6F1F1",
            borderRadius: 15,
            padding: 15,
          }}
        >
          <View
            style={{ marginTop: 20, alignItems: "center", marginBottom: 20 }}
          >
            <Image
              style={{ width: 100, height: 100, borderRadius: 50 }}
              source={{ uri: images }}
            />
          </View>
          <Items
            info={name}
            type={"Name : "}
            action={setName}
            editable={true}
            placeholders={"name"}
          />
          <Items
            info={userName}
            type={"User Name : "}
            action={setUserName}
            editable={true}
            placeholders={"user name"}
          />
          <Items
            info={email}
            type={"E-mail : "}
            action={setEmail}
            editable={true}
            placeholders={"email"}
          />
          <Items
            info={phone}
            type={"Phone : "}
            action={setPhone}
            editable={true}
            placeholders={"phone"}
          />
          <Items
            info={images}
            type={"Avatar : "}
            action={setImages}
            editable={true}
            placeholders={"avatar"}
          />
        </View>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: "5%",
            width: "80%",
            justifyContent: "center",
            alignSelf: "center",
          }}
          onPress={() => {
            console.log("name : ", name);
            console.log("user name : ", userName);
            console.log("phone : ", phone);
            console.log("email : ", email);
            console.log("save");
          }}
        >
          <View
            style={{
              backgroundColor: "#57C5B6",
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
              Save
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default AddUser;

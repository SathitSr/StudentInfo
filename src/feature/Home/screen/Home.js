import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import Header from "../../../components/Header";
import Container from "../../../components/Container";
import ListStudents from "../component/ListStudens";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getStudentData();
  }, []);

  const getStudentData = () => {
    axios.get("http://localhost:3500/api/people/get").then(function (response) {
      setData(response.data);
    });
  };

  console.log("check data : ", data);

  return (
    <Container>
      <Header title={"Studen"} />
      <View style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListStudents item={item} />}
        />
      </View>
    </Container>
  );
};

export default Home;

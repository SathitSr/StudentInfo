import { AntDesign } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ListStudents = (props) => {
  const navigation = useNavigation();
  const { item } = props;
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        backgroundColor: "#F6F1F1",
        marginBottom: 5,
        padding: 10,
        flexDirection: "row",
        borderRadius: 15,
      }}
      onPress={() =>
        navigation.navigate("Detail", {
          userInfo: item,
        })
      }
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 25 }}
          source={{ uri: item.avatar }}
        />
      </View>
      <View
        style={{
          flex: 3,
          alignItems: "flex-start",
          justifyContent: "center",
          marginLeft: 10,
        }}
      >
        <Text>{item.name}</Text>
      </View>
      <View
        style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}
      >
        <AntDesign name="right" size={16} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default ListStudents;

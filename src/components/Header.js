import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Header = (props) => {
  const navigation = useNavigation();
  const { title, back, plus } = props;
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: "100%",
        backgroundColor: "#159895",
        flexDirection: "row",
      }}
    >
      <Pressable style={{ width: "10%" }} onPress={() => navigation.goBack()}>
        {back ? <AntDesign name="left" size={18} color="white" /> : null}
      </Pressable>

      <View
        style={{ width: "80%", justifyContent: "center", alignItems: "center" }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          }}
        >
          {title}
        </Text>
      </View>
      <Pressable
        style={{ width: "10%" }}
        onPress={() => navigation.navigate("AddUser")}
      >
        {plus ? <AntDesign name="plus" size={18} color="white" /> : null}
      </Pressable>
    </View>
  );
};

export default Header;

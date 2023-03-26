import { View, Text } from "react-native";
const Header = (props) => {
  const { title } = props;
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: "100%",
        backgroundColor: "#159895",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
        {title}
      </Text>
    </View>
  );
};

export default Header;

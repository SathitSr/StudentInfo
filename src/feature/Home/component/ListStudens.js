import { View, Text, Image } from "react-native";
const ListStudents = (props) => {
  const { item } = props;
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#c4c4c4",
        marginBottom: 5,
        padding: 10,
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 25 }}
          source={{ uri: item.avatar }}
        />
      </View>
      <View style={{ flex: 3 }}>
        <Text>{item.name}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>{item.name}</Text>
      </View>
    </View>
  );
};

export default ListStudents;

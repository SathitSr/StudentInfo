import { View, Text, TextInput } from "react-native";
const Items = (props) => {
  const { info, type, edit, placeholders, action } = props;
  return (
    <View style={{ flexDirection: "row", marginBottom: 15 }}>
      <Text style={{ fontSize: 14 }}>{type} &ensp; </Text>
      <TextInput
        style={{ fontSize: 14 }}
        editable={edit}
        onChangeText={action}
        placeholder={placeholders}
        value={info}
      />
    </View>
  );
};

export default Items;

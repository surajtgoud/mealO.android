import { View } from "react-native";

const Dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? "#80C241" : "#C1C1C1";
  return (
    <View
      style={{
        width: 24,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

export default Dots;

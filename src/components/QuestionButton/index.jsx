import { Button, ButtonText } from "./styles";
import { Picker } from "@react-native-picker/picker";
import { Controller } from "react-hook-form";
import { PickerContainer, ErrorText } from "./styles";

export const QuestionButton = ({ onPress, text, activeOpacity }) => {
    return (
    <Button activeOpacity={activeOpacity || 0.8} onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

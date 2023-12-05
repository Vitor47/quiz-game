import { Button, ButtonText } from "./styles";

export const QuestionButton = ({ onPress, text, activeOpacity }) => {
  return (
    <Button activeOpacity={activeOpacity || 0.8} onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

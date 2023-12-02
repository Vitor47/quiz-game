import { Button, Button2, Button3, ButtonText } from "./styles";

export const LevelButton = ({ onPress, text, activeOpacity }) => {
  return (
    <Button activeOpacity={activeOpacity || 0.8} onPress={onPress}>
      <Button2></Button2>
      <Button3></Button3>
    </Button>
  );
};

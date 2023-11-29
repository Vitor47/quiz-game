import { useNavigation } from "@react-navigation/native";
import { Container, ScrollViewContent, HeaderImg } from "./styles";
import questionsImage from "../../../assets/images/questions.png";
import { Baloon } from "../../components/Baloon";

export default function Start() {
  return (
    <Container>
      <ScrollViewContent>
        <HeaderImg source={questionsImage} />
        <Baloon title="Quiz Game" text="The best quiz game around"></Baloon>
      </ScrollViewContent>
    </Container>
  );
}

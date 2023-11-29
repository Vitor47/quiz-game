import { useNavigation } from "@react-navigation/native";
import { Container, ScrollViewContent, HeaderImg, IconPass } from "./styles";
import questionsImage from "../../../assets/images/questions.png";
import { Baloon } from "../../components/Baloon";
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function Start() {
  const navigation = useNavigation();
  return (
    <Container>
      <ScrollViewContent>
        <HeaderImg source={questionsImage} />
        <Baloon title="Quiz Game" text="The best quiz game around"></Baloon>
        <IconPass onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-right" size={30} color="#fff" />
        </IconPass>
      </ScrollViewContent>
    </Container>
  );
}

import { ContainerBaloon, TitleBaloon, TextBaloon } from "./styles";

export const Baloon = ({ title, text }) => {
  return (
    <ContainerBaloon>
      <TitleBaloon>{title}</TitleBaloon>
      <TextBaloon>{text}</TextBaloon>
    </ContainerBaloon>
  );
};

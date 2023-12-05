import { ContainerBaloon, TitleBaloon, TextBaloon } from "./styles";

export const Baloon = ({ title, text }) => {
  const hasText = text && text.trim() !== "";

  return (
    <ContainerBaloon>
      <TitleBaloon hasText={hasText}>{title}</TitleBaloon>
      {hasText && <TextBaloon>{text}</TextBaloon>}
    </ContainerBaloon>
  );
};

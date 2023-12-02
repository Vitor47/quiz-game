import styled from "styled-components/native";

export const ContainerBaloon = styled.View`
  width: 100%;
  top: 90px;
  height: 280px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: #fff;
  backdrop-filter: blur(26.5px);
`;

export const TitleBaloon = styled.Text`
  color: #280a82;
  text-align: center;
  top: 50px;
  font-size: 28px;
  font-style: normal;
  font-weight: 900;
  line-height: 36px;
  text-transform: uppercase;
  padding: 22px;
`;

export const TextBaloon = styled.Text`
  color: #a7a7a7;
  text-align: center;
  top: 50px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

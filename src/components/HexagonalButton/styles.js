// clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  height: 75px;
  width: 50px;
  top: 120px;
  border-radius: 10px;
  left: 40%;
  background-color: #aa8dff;
`;

export const Button2 = styled.TouchableOpacity`
  height: 75px;
  width: 50px;
  border-radius: 10px;
  transform: rotate(60deg);
  background-color: #aa8dff;
`;

export const Button3 = styled.TouchableOpacity`
  height: 75px;
  width: 50px;
  bottom: 75px;
  border-radius: 10px;
  transform: rotate(-60deg);
  background-color: #aa8dff;
`;

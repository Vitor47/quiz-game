import styled from "styled-components/native";

export const ContainerBaloon = styled.View`
    width: 100%;
    height: 280px;
    flex-shrink: 0;
    border-radius: 40px;
    border: 2px solid rgba(255, 255, 255, 0.20);
    background: #FFF;
    backdrop-filter: blur(26.5px);
`

export const TitleBaloon = styled.Text`
    color: #280A82;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 900;
    line-height: 36px;
    text-transform: uppercase;
    padding: 22px;
`;

export const TextBaloon = styled.Text`
    color: #A7A7A7;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
`;
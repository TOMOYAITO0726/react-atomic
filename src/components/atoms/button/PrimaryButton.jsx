import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
    const { children } = props;
    return <SButton>{children}</SButton>;  
};
//BaseButtonで基となるスタイルを適用、上塗りも可
const SButton = styled(BaseButton)`  
background-color: #40514e;
`;
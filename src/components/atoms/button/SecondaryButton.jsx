import styled from "styled-components";
import { BaseButton } from "./BaseButton";


export const SecondaryButton = (props) => {
    const { children, onClick } = props;
    return <SButton onClick={onClick}>{children}</SButton>;  
};//<SButoon></SButoon>コンポーネントがレンダリングされている

const SButton = styled(BaseButton)`
background-color: #11999e;
`;
//<SButoon></SButoon>コンポーネントは、<BaseButton></BaseButton>コンポーネントを子要素として受け取る。
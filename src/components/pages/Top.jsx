import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { useSetRecoilState} from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
    const history = useHistory();//historyオブジェクトを取得
    //const { setUserInfo } = useContext(UserContext);//UserContextの値を取得
    const setUserInfo = useSetRecoilState(userState); //値は参照しないが更新のみ行う
    //更新関数のみ渡しているため再レンダリングを防いでくれる
    const onClickAdmin = () => {
        setUserInfo({ isAdmin: true });//isAdminプロパティがtrueになる
        history.push("/users");
    }
    const onClickGeneral = () =>  {
        setUserInfo({ isAdmin: false });
        history.push("/users");
    }

    return (
        <SContainer>
            <h2>TOPページです</h2>
            <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
            <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
        </SContainer>
    );
};

const SContainer = styled.div`
    text-align: center;
`
import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisims/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
//import { useLocation } from "react-router-dom";

const users = [...Array(10).keys()].map(((val)=>{
    return {
    id:val,
    name: `いとと${val}`,
    image: "https://source.unsplash.com//%E5%86%99%E7%9C%9F/%E6%9C%A8%E3%81%AE%E9%9A%A3%E3%81%AB%E7%AB%8B%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E5%B0%8F%E3%81%95%E3%81%AA%E7%99%BD%E3%81%84%E7%8A%AC-KnSYF3b4KcM",  
    email: "1111@example.com",
    phone:"000-000-000",
    company: {
      name:"テスト株式会社"
    },
     website:"https://qiita.com/"
    }
}))


export const Users = () => {
    //const { state } = useLocation();//stateプロパティ{ isAdmin: true }を取得するにはuseLoactionを使う
    //const isAdmin = state ? state.isAdmin :false;//stateオブジェクトが存在するかどうかをチェックする。（管理者かどうかをチェックする）
    const { userInfo, setUserInfo } = useContext(UserContext);
    const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });//isAdminプロパティの状態が切り替わる
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <br />
            <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
            <SUserArea>
            {users.map((user) => (
                <UserCard key={user.id} user={user}  />
            ))}
            </SUserArea>
        </SContainer>
    );
};

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`;
const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`
import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";
import { memo } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

export const UserIconWithName = memo((props) => { //ユーザーのアイコンと名前のセット
    console.log(`UserIconWithName`);
    const { image, name } = props;
    //const { userInfo } = useContext(UserContext);
    const userInfo = useRecoilValue(userState);
    console.log("!!!");
    console.log(userInfo);//isAdminプロパティを確認,管理者状態で入ればtrue
    const isAdmin = userInfo ? userInfo.isAdmin : false;
    return (
        <SContainer>
            <SImg height={160} width={160}
            src={image}
            alt={name}/>
            <SName>{name}</SName> 
            {isAdmin && <SEdit>編集</SEdit>}{/*//isAdminがtrueなら編集リンク表示 */}
        </SContainer>
    );
});

const SContainer = styled.div`
    text-aligh: center;
`;
const SImg = styled.img`
    border-radius: 50px;
`;
const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
`;
const SEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
`
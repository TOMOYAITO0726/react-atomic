import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisims/user/UserCard";

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
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </SContainer>
    );
};

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`;
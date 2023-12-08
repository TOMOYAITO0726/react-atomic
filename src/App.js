import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisims/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";
import { DefaultLayout } from "./components/templates/DefaultLayout";

const user = {
  name: "いとと",
  image: "https://source.unsplash.com//%E5%86%99%E7%9C%9F/%E6%9C%A8%E3%81%AE%E9%9A%A3%E3%81%AB%E7%AB%8B%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E5%B0%8F%E3%81%95%E3%81%AA%E7%99%BD%E3%81%84%E7%8A%AC-KnSYF3b4KcM",  
  email: "1111@example.com",
  phone:"000-000-000",
  company: {
    name:"テスト株式会社"
  },
   website:"https://qiita.com/"
};

export default function App() {
    return (
      <BrowserRouter>
        <DefaultLayout>
            <PrimaryButton>テスト</PrimaryButton>
            <SecondaryButton>検索</SecondaryButton>
            <br />
            <SearchInput />
            <UserCard user={user}/>
        </DefaultLayout>
      </BrowserRouter>
        
    );
}
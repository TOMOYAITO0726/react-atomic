import React, { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext({});//UserContextは、状態の共有に使用されるコンテキスト
                                            //デフォルトでは空のオブジェクトであるが、UserProviderを使用して任意の値を設定できる
export const UserProvider = (props) => {//UserContextはProviderとConsumerコンポーネントを所持している
    const { children } = props;
    const [userInfo, setUserInfo] = useState(null);
    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    );
};
    //UserContextに、userInfo, setUserInfoを設定する
    //childrenプロパティでラップされていない場合、UserContextにuserInfoとsetUserInfoを設定することができない
    //つまり子要素のRouterコンポーネントに渡すことができなくなる
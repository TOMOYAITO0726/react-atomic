import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";
import { memo } from "react";


export const UserCard = memo((props) => {
    console.log(`UserCard`);

    const { user } = props;
    return (
        <Card>
            <SDL>
                <UserIconWithName image={user.image} name={user.name} />
                <dl>
                <dt>メール</dt>
                <dd>{user.emai}</dd>
                <dt>TEL</dt>
                <dd>{user.phone}</dd>
                <dt>会社名</dt>
                <dd>{user.company.name}</dd>
                <dt>WEB</dt>
                <dd>{user.website}</dd>
                </dl>
            </SDL>
        </Card>
    );
});

const SDL = styled.dl`
    text-aligh: left;
    margin-bottom: 0px;
    dt {
        float: left;
    }
    dd {
        padding-left: 32px;
        padding-bottom: 8px;
        overflow-wrap: break-word;  //はみだした要素を折り返す
    }
`

//overflow-wrap: break-word;  //はみだした要素を折り返す
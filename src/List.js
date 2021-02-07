import styled from "styled-components";
import {TabBodyContainer} from "./components/tab-body-container"

const ListItem = styled.div`
  padding 8px 16px;
   &:nth-child(n + 1) {
    border-bottom: 1px solid #d9dbde;
  }
`;

export const List = ({ langs }) => {
  return (
    <TabBodyContainer title="取り扱い言語リスト" >
      {langs.map((lang, index) => {
        return <ListItem key={index}>{lang}</ListItem>;
      })}
    </TabBodyContainer>
  );
};

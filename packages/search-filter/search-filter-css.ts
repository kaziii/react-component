import styled from "styled-components";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

export const SearchInput = styled.div`
  display: flex;

  /* border: solid 1px #cccccc; */
  width: 400px;
`;

export const LeftDrop = styled.div`
  display: flex;
  align-items: center;
  width: 64px;
  cursor: pointer;
  border-left: solid 1px #ccc;
  border-top: solid 1px #ccc;
  border-bottom: solid 1px #ccc;
  justify-content: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;
export const RightInput = styled(Input)`
  border: solid 1px #ccc;
  width: 295px;
  border-right: none;
`;

export const Px12Text = styled.span`
  font-size: 12px;
  color: #666666;
  font-weight: 400;
`;
export const DownOutlinedIcon = styled(DownOutlined)`
  font-size: 12px;
  color: #666666;
  font-weight: 400;
  margin-right: 5px;
`;

export const UpOutlinedIcon = styled(UpOutlined)`
  font-size: 12px;
  color: #3c55d8;
  font-weight: 400;
  margin-right: 5px;
`;

export const ShortcutStyled = styled.div`
  display: flex;
  gap: 4px;
  padding: 18px 0;
`;
interface ShortcutItemProps {
  checked: Boolean;
}

export const ShortcutItem = styled.div.attrs((props: ShortcutItemProps) => {
  checked: props.checked || false;
})`
  padding: 4px;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => (props.checked ? "#3C55D8" : "#00000099")};
  cursor: pointer;
`;

export const DropDownPanel = styled.div`
  background-color: white;
`;

export const DropDownPanelLable = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #000000;
`;
export const DropDownPanelValue = styled.div`
  display: flex;
  margin-left: 13px;
`;
export const DropDownPanelItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

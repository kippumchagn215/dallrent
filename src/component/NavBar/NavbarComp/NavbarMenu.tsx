import React from "react";
import { SetStateAction } from "react";
import { Dispatch } from "react";
interface props {
  value: string;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}
const Menu = (props: props) => {
  return (
    <a
      className={props.active}
      onClick={(event) => {
        event.preventDefault();
        props.setActive(props.value);
      }}
      href=""
    >
      {props.value}
    </a>
  );
};
export default Menu;

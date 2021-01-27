import React, { useRef, useState } from "react";
import { CgOverflow } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { guestInfo, selectOptionState, setoption } from "../../redux/search";
import "./SearchBar.css";

const SearchBar = () => {
  const [screensize, setScreenSize] = useState<number>(window.innerWidth);
  window.addEventListener("resize", () => setScreenSize(window.innerWidth));
  const [location, setLocation] = useState<string>("");
  const [datestart, setDateStart] = useState<string>("");
  const [contracttype, setContractType] = useState<string>("");
  const [guests, setGuests] = useState<number>(0);
  const dispatch = useDispatch();
  const coption = useSelector(selectOptionState);
  const chosenOption: guestInfo = {
    location,
    datestart,
    contracttype,
    guests,
  };
  const passOption = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setoption(chosenOption));
  };
  const onlyNumber = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // html div element is type of element keydown is attached to
    if (event.key === "e" || event.key === "+" || event.key === "-") {
      event.preventDefault();
    }
  };

  return (
    <form onSubmit={passOption}>
      <div className="searchBar">
        <span className="searchBarMenu">Location:</span>
        <input
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            setLocation(event.target.value)
          }
          list="location"
          className="searchInput"
          required
        ></input>
        <datalist id="location">
          <option>Addison</option>
          <option>Arlington</option>
          <option>Allen</option>
          <option>Richardson</option>
          <option>Carrolton</option>
          <option>Coppell</option>
          <option>Plano</option>
          <option>Denton</option>
          <option>Euless</option>
          <option>Farmers Branch</option>
          <option>Flower Mound</option>
          <option>Frisco</option>
          <option>Dallas</option>
          <option>Grapevine</option>
          <option>Farmers Branch</option>
        </datalist>
        <span className="searchBarMenu">Date Start:</span>
        <input
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            setDateStart(event.target.value)
          }
          type="date"
          className="searchInput"
          required
        ></input>
        {screensize < 800 ? <br></br> : null}
        <span className="searchBarMenu">Contract Type:</span>
        <input
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            setContractType(event.target.value)
          }
          list="contract-option"
          className="searchInput"
          required
        ></input>
        <datalist id="contract-option">
          <option>Month-to-Month</option>
          <option>6-Month</option>
          <option>Yearly</option>
        </datalist>
        <span className="searchBarMenu">Guests:</span>
        <input
          className="searchInput"
          type="number"
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            setGuests(parseInt(event.target.value))
          }
          onKeyDown={onlyNumber}
          required
        ></input>
        <button className="searchButton">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};
export default SearchBar;

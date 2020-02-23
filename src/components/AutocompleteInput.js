import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import get from "lodash/get";

import Suggestions from "./Suggestions";
import { breakPoints } from "../utils/layout";

const AutocompleteInput = ({ suggestions }) => {
  const [keyword, setKeyword] = useState("");
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const _onChange = event => {
    const newKeyword = get(event, "target.value", "");
    setKeyword(newKeyword);

    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(newKeyword.toLowerCase()) > -1
    );
    setFilteredSuggestions(filteredSuggestions);
    setShowSuggestions(true);
    setActiveSuggestion(0);
  };

  const _onClickSuggestions = event => {
    const clikedItem = get(event, "target.innerText", "");
    setKeyword(clikedItem);
    setShowSuggestions(false);
    setFilteredSuggestions([]);
    setActiveSuggestion(0);
  };

  const _onKeyDown = event => {
    const keyCode = parseInt(get(event, "keyCode", 0), 10);
    if (keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setKeyword(filteredSuggestions[activeSuggestion]);
    } else if (keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    } else if (keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  return (
    <Wrapper>
      <Input
        type="text"
        onChange={_onChange}
        onKeyDown={_onKeyDown}
        value={keyword}
        placeholder="Try Vietnam"
      />
      {showSuggestions && keyword.trim() ? (
        <Suggestions
          data={filteredSuggestions}
          onClick={_onClickSuggestions}
          activeSuggestion={activeSuggestion}
        />
      ) : null}
    </Wrapper>
  );
};

AutocompleteInput.propTypes = {
  suggestions: PropTypes.array
};

AutocompleteInput.defaultProps = {
  suggestions: []
};

export default AutocompleteInput;

const Wrapper = styled.div`
  width: calc(100% - 40px);
  margin: 0 auto;
  
   @media screen and (min-width: ${breakPoints.tabletL}px) {
    width: 600px;
  }
`;

const Input = styled.input`
  border: 0;
  width: 100%;
  min-height: 20px;
  padding: 20px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 5px;
  outline: none;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
`;

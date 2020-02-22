import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import get from "lodash/get";

import Suggestions from "./Suggestions";

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
      />
      {showSuggestions && keyword.trim() ? (
        <Suggestions data={filteredSuggestions} onClick={_onClickSuggestions} activeSuggestion={activeSuggestion}  />
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

const Wrapper = styled.div``;

const Input = styled.input`
  border: 1px solid #999;
  padding: 0.5rem;
  width: 300px;
`;

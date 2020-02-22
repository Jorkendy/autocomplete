import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Suggestions = ({ data, onClick, activeSuggestion }) => {
  return data.length > 0 ? (
    <SuggestionsWrapper>
      {data.map((item, i) => (
        <SuggestionItem isActive={activeSuggestion === i} onClick={onClick} key={i}>{item}</SuggestionItem>
      ))}
    </SuggestionsWrapper>
  ) : (
    <NoSuggestionsWrapper>
      <em>No suggestions, you're on your own!</em>
    </NoSuggestionsWrapper>
  );
};

Suggestions.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func,
  activeSuggestion: PropTypes.number
};

Suggestions.defaultProps = {
  data: [],
  onClick: null,
  activeSuggestion: 0
};

export default Suggestions;

const SuggestionsWrapper = styled.ul`
  border: 1px solid #999;
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  max-height: 143px;
  overflow-y: auto;
  padding-left: 0;
  width: calc(300px + 1rem);
`;

const NoSuggestionsWrapper = styled.div`
  color: #999;
  padding: 0.5rem;
`;

const SuggestionItem = styled.li`
  padding: 0.5rem;

  &:hover {
    background-color: #008f68;
    color: #fae042;
    cursor: pointer;
    font-weight: 700;
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid #999;
  }

  ${props =>
    props.isActive
      ? `
  background-color: #008f68;
    color: #fae042;
    cursor: pointer;
    font-weight: 700;
  }
  `
      : ``}
`;

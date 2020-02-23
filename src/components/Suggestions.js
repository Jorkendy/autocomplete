import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Suggestions = ({ data, onClick, activeSuggestion }) => {
  return data.length > 0 ? (
    <SuggestionsWrapper>
      {data.map((item, i) => (
        <SuggestionItem
          isActive={activeSuggestion === i}
          onClick={onClick}
          key={i}
        >
          {item}
        </SuggestionItem>
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
  max-height: 143px;
  overflow-y: auto;
  padding-left: 0;
  width: 100%;
  margin: 0 auto;
`;

const NoSuggestionsWrapper = styled.div`
  color: #fff;
  padding: 0.5rem;
`;

const SuggestionItem = styled.li`
  padding: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #999;
    color: #fff;
    cursor: pointer;
    font-weight: 700;
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid #999;
  }

  ${props =>
    props.isActive
      ? `
  background-color: #9e9e9e;
    color: #000;
    cursor: pointer;
    font-weight: 700;
  `
      : ``}
`;

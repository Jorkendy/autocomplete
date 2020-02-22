import React from "react";
import styled from "styled-components";

import AutocompleteInput from "./components/AutocompleteInput";
import Header from "./components/Header";
import backgroundImg from "./assets/images/background.jpg";

const App = () => {
  return (
    <HeaderSection>
      <Header />
      <Background>
        <img src={backgroundImg} alt="" />
      </Background>
      <Search>
        <AutocompleteInput
          suggestions={[
            "Angular",
            "React",
            "Vue",
            "NextJs",
            "NodeJS",
            "Javasript"
          ]}
        />
      </Search>
    </HeaderSection>
  );
};

export default App;

const HeaderSection = styled.div`
  height: 100vh;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Search = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  top: 200px;
`;

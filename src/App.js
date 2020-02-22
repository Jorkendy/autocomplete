import React from "react";

import AutocompleteInput from "./components/AutocompleteInput";

const App = () => {
  return (
    <AutocompleteInput
      suggestions={[
        "Alligator",
        "Bask",
        "Crocodilian",
        "Death Roll",
        "Eggs",
        "Jaws",
        "Reptile",
        "Solitary",
        "Tail",
        "Wetlands"
      ]}
    />
  );
};

export default App;

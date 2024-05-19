import React from "react";
import CharacterList from "./CharacterList";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden mt-2 p-3">
      <div className="mr-5 shadow-lg border-spacing-12">
        <h1 className="text-2xl  font-thin">Rick and Morty list</h1>

        <CharacterList />
      </div>
      <div className="p-5 mx-5">{children}</div>
    </div>
  );
}

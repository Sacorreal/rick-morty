import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
        species
      }
    }
  }
`;

export default function CharacterList() {
  const [sortOrder, setSortOrder] = useState("asc");
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const sortedCharacters = [...data.characters.results].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <>
      <div className="flex justify-items-start space-x-24 my-4 p-5">
        <h1 className="font-thin text-1xl">Characters</h1>
        <button
          className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          Sort {sortOrder === "asc" ? "Z-A" : "A-Z"}
        </button>
      </div>
      {sortedCharacters.map((character) => (
        <Link to={`/character/${character.id}`} key={character.id}>
          <CharacterCard character={character} />
        </Link>
      ))}
    </>
  );
}

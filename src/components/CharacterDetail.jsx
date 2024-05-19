import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useParams } from "react-router-dom";
const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      image
      species
      status
      gender
      origin {
        name
      }
      location {
        name
      }
    }
  }
`;

export default function CharacterDetail() {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p className="text-3xl font-bold">Select a character for more details</p>
    );

  const handleCommentSubmit = () => {
    setComments([...comments, comment]);
    setComment("");
  };

  const { name, image, species, status, gender, origin } = data.character;

  return (
    <div>
      <img src={image} alt={name} className="rounded-full w-20 h-20" />
      <h2 className="font-bold text-2xl mb-2">{name}</h2>
      <p className="font-semibold">Species</p>
      <p>{species}</p>
      <br />
      <p className="font-semibold">Status</p>
      <p>{status}</p>
      <br />
      <p className="font-semibold">Gender</p>
      <p>{gender}</p>
      <br />
      <p className="font-semibold">Origin</p>
      <p>{origin.name}</p>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
        className="border p-2 mt-4 w-full"
      />
      <button
        onClick={handleCommentSubmit}
        className="mt-2 bg-purple-300  p-2 rounded"
      >
        Submit
      </button>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Comments: </h2>
        {comments.map((c, index) => (
          <p key={index}>{c}</p>
        ))}
      </div>
    </div>
  );
}

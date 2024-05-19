import Favorite from "./Favorite";

export default function CharacterCard({ character }) {
  return (
    <div className="flex items-center justify-between  hover:bg-purple-200 rounded-md my-3 p-3  ">
      <img className="w-10 h-10 rounded-full" src={character.image} alt="" />
      <div className="font-medium ">
        {character.name}
        <div className="text-sm text-gray-500 ">{character.species}</div>
      </div>
      <div>
        <Favorite />
      </div>
    </div>
  );
}

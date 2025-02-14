import React,{useState} from "react";

const categories = [
  { id: 1, name: "Gold", image: "https://picsum.photos/200/200" },
  { id: 2, name: "Diamond", image: "https://picsum.photos/200/200" },
  { id: 3, name: "Earrings", image: "https://picsum.photos/200/200" },
  { id: 4, name: "Rings", image: "https://picsum.photos/200/200" },
  { id: 5, name: "Valentine", image: "https://picsum.photos/200/200" },
  { id: 6, name: "Collections", image: "https://picsum.photos/200/200" },
  { id: 7, name: "Wedding", image: "https://picsum.photos/200/200" },
  { id: 8, name: "More", image: "https://picsum.photos/200/200" },
];

function DropDownMenu() {
  return (
    <div className="absolute top-32 md:top-36 left-0 z-50 w-full bg-white shadow-lg  p-2 flex items-center gap-4 ">
      {categories.map((category) => (
        <div key={category.id} className="flex flex-col items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
          <img src={category.image} alt={category.name} className="w-40 h-40 object-cover rounded-md" />
          <p className="text-sm font-medium mt-1">{category.name}</p>
        </div>
      ))}
    </div>
  );
}

export default DropDownMenu;

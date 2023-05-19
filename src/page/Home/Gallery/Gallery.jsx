import React from "react";

const Gallery = () => {
  const gallery = [
    {
      id: "1",
      img: "https://i.ibb.co/5sCcVT0/dinosaur.jpg",
    },
    {
      id: "2",
      img: "https://i.ibb.co/gT87BWs/dinosaur1.jpg",
    },
    {
      id: "3",
      img: "https://i.ibb.co/FVrGjdk/dinosaur2.jpg",
    },
    {
      id: "4",
      img: "https://i.ibb.co/s1ppw3y/taddey.jpg",
    },
    {
      id: "5",
      img: "https://i.ibb.co/9HVrHbT/taddey2.jpg",
    },
    {
      id: "6",
      img: "https://i.ibb.co/YNGXC07/tadey1.jpg",
    },
    {
      id: "7",
      img: "https://i.ibb.co/12gGCxv/unicorn.jpg",
    },
    {
      id: "8",
      img: "https://i.ibb.co/G2y4Srz/unicorn1.jpg",
    },
  ];

  return (
    <div className="toy-container">
      <div className="flex justify-center mb-2">
        <figure className="border rounded-full p-4">
          <img className="animate-pulse" src="https://i.ibb.co/s2J1Hf5/seperator.png" alt="" />
        </figure>
      </div>
      <h2 className="text-center text-4xl font-bold">Our Gallery</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-12  ">
        {gallery?.map((image) => (
          <div className="border rounded-lg " key={image.id}>
            <img className="lg:h-[300px] rounded-lg w-full" src={image?.img} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

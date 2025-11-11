interface CardProps {
  image: string;
  numbers: string | number;
  onClick: () => void;
}

export default function Card({ image, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className=" justify-center flex bg-gray-300 rounded-xl 
      last:[grid-column:1/4] last:h-[40%] "
    >
      <img className="shadow-2xl  rounded-xl  cursor-pointer hover:scale-110 transition duration-300   " src={image} alt="card" />
    </div>
  );
}

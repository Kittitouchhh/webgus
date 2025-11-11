import Card from "../components/card";
import { useState, useEffect } from "react";
import { SlActionUndo } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { FaRegHandPointDown } from "react-icons/fa";

export default function Minigame() {
    const [number, setNumber] = useState<number[]>([]);
    const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
    const navigate = useNavigate();

    const cards = [...Array.from({ length: 9 }, (_, i) => i + 1), 0];

    useEffect(() => {
        generateRandom();
    }, []);

    const generateRandom = () => {
        const newRandom = Array.from({ length: 4 }, () =>
            Math.floor(Math.random() * 10)
        );
        setRandomNumbers(newRandom);
        console.log("สุ่มได้เลข:", newRandom.join(""),);
    };

    const handleClick = (num: number) => {
        if (number.length >= 4) return;

        const updated = [...number, num];
        setNumber(updated);


        if (updated.length === 4) {
            setTimeout(() => {
                const isCorrect = updated.every((val, i) => val === randomNumbers[i]);

                if (isCorrect) {
                    alert("ถูกต้อง! กำลังไปหน้าถัดไป...");
                    navigate("/Home");
                } else {
                    alert("ผิด! ลองใหม่อีกครั้ง");
                    setNumber([]);
                }
            }, 200);
        }
    };

    const removeLastNumber = () => {
        setNumber((prev) => prev.slice(0, -1));
    };

    return (
        <div>
            <div className="">
                <div className="w-100% whitespace-nowrap mx-5 ">
                    <h1 className="text-[32px] font-bold text-center mt-5 px-5  ">Welcome to </h1>
                    <h1 className="text-[42px] font-bold text-center  px-5 "> Gussuke  Web</h1>
                </div>

                <div className="m-auto my-5 text-white justify-center text-[28px] bg-black rounded w-40 text-center">
                    {randomNumbers.join(" ")}
                    <div className="flex justify-center"><FaRegHandPointDown /></div>
                    
                </div>

                <div className="flex justify-center ">
                    <div className="justify-items-center  w-[60%] ml-11 ">
                        <div className="w-[100%] h-[35px] text-center text-xl font-bold text-black flex items-center justify-center border border-blue-400 rounded">
                            {number.length > 0 ? number.join(" ") : `key password `}
                        </div>
                    </div>
                    <div
                            onClick={removeLastNumber}
                            className="justify-items-center w-10 cursor-pointer hover:scale-120
                            bg-blue-300  mx-3 rounded-xl"
                        >
                            <button className="justify-items-center w-full mt-2 ">
                                <SlActionUndo className=" cursor-pointer" />
                            </button>
                        </div>
                </div>

                <div className="w-[60%] m-auto my-5 p-3 ">
                    <div className="gap-3 grid grid-cols-3 justify-center">
                        {cards.map((num) => (
                            <Card
                                key={num}
                                image="/photo/gus.jpg"
                                numbers={num}
                                onClick={() => handleClick(num)}

                            />
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
}

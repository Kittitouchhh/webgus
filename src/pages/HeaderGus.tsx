export default function HeaderGus() {
    return (
        <div className="grid grid-cols-2 ">
            <div className="bg-black  w-1/1 ">
                <div className="bg-white w-full h-50 md:h-80 lg:h-100  m-5 ">
                    <img
                        src="/photo/gussunobg.png"
                        alt=""
                        className=" h-full m-auto "
                    />
                </div>
            </div>
            <div className="w-1/1  text-center text-[24px]  font-bold mr-7 m-auto
            md:text-[36px] xl:text-[48px]
            ">
                <h1 className="mr-5"> 
                    Guss 
                    KITTITOUCH 
                    SAKULSAKPINIT  </h1>
            </div>
        </div>
    );
}
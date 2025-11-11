import Header from "../components/header"

export default function Profile() {
    return (
        <>
            <Header />
            <div>
                <div className="w-80 h-80 my-5 m-auto ">
                    <img src="/photo/pfig.jpg" alt="Gus" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-100">
                    <div className="w-4/5 h-full m-auto bg-blue-300 p-3 text-center rounded shadow-lg border border-blue-800 ">
                        <p className="text-[20px] font-bold lg:text-[30px] ">ประวัติส่วนหัว เอ้ย ส่วนตัว</p>
                        <p className="text-[20px] mt-3 lg:text-[30px] ">ชื่อเล่น: กัส</p>
                        <p className="text-[20px] bg-blue-800 text-white lg:text-[30px]  ">ชื่อ : นายกิตติธัช สกุลศักดิ์พินิจ</p>
                        <p className="text-[20px] lg:text-[30px]  ">เกิดวันที่: 17 ธันวาคม พ.ศ.2547</p>
                    </div>
                    <div className="w-[95%] h-full m-auto mt-3 lg:mt-0 bg-red-400 p-2 text-center rounded shadow-lg border border-red-800 ">
                        <div className="lg:h-full lg:text-[30px]">
                            <p className="text-[20px] lg:text-[30px] font-bold ">ประวัติการศึกษา</p>
                            <p className="text-[20px] lg:text-[30px] mt-1">อนุบาล : โรงเรียนนวพัฒวิทยา</p>
                            <p className="text-[20px] lg:text-[30px]  ">ประถม :โรงเรียนเทพสัมฤทธิ์วิทยา</p>
                            <p className="text-[15px] lg:text-[30px]  text-center">มัธยมศึกษา : โรงเรียนราชนันทาจารย์ สามเสนวิทยาลัย๒</p>
                            <div className="bg-red-200 rounded">
                                <p className="text-[17px] lg:text-[25px] font-bold mt-3 ">ปริญญาตรี : มหาวิทยาลัยธุรกิจบัณฑิตย์</p>
                                <p className="text-[15px] lg:text-[25px]  ">คณะ วิศวกรรมคอมพิวเตอร์</p>
                                <p className="text-[17px] lg:text-[20px] ">(ทุนเรียนฟรี100% 4ปี)</p>
                            </div>

                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}
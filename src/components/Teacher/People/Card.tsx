import Image from "next/image";

const Card = () => {
    return (
        <div className="flex items-center gap-4 md:px-[30px] py-2 w-full">

            {/* Profile Image */}
            <div className="flex-shrink-0">
                <div className="rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                        src="/images/person-2.jpg"
                        alt="Muhammad Affan"
                        width={90}
                        height={90}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Profile Info */}



            <div className="flex flex-col justify-center items-start min-w-0">
                {/* <div className="relative flex flex-row flex-nowrap justify-center items-center gap-[10px]">
                <h4 className="text-white text-md font-bold leading-tight truncate">Mdfu ifuiods ff dsfidsopfi ad Affan</h4>
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                </div> */}
                <div className="relative flex flex-row flex-nowrap justify-center items-center gap-[10px] min-w-0 w-full">
                    <h4 className="text-white text-[15px] font-bold leading-tight truncate w-0 flex-grow">
                        Mdfu ifuiods ff dsfidsopfi ad Affan
                    </h4>
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                </div>

                <p className="text-sm text-pink-text break-words">@muhammad_affan</p>
            </div>

        </div>
    );
};
export default Card;
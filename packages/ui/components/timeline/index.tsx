import { FC } from "react";
import Box from "@mui/material/Box"

type TimelineItemProps = {
    title: string;
    description: string;
};
type TimelineProps = {
    items: TimelineItemProps[];
};
export const Timeline: FC<TimelineProps> = ({ items }) => {

    return (
        <Box className="container mx-auto">
            {items.map((item, index) => (
                <Box key={index} className="flex flex-row pb-[37px] small:pb-[20px] relative gap-[20px]">
                    <Box className="absolute top-4 left-[-20px] transform -translate-x-1/2 w-[17px] h-[17px] border-2 rounded-full z-10 bg-white border-[#147bd1]"></Box>
                    {index !== items.length - 1 && (
                        <Box className="absolute top-4 left-[-20px] transform -translate-x-1/2 border-l-2 border-dashed border-black h-full z-9"></Box>
                    )}
                    <Box className="flex flex-col flex-grow ml-4">
                        <Box className="flex flex-col">
                            <span className="text-[24px] small:text-[35px] font-medium">{item.title}</span>
                            <p className="text-[20px] small:text-[24px] text-gray-600  ">{item.description}</p>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

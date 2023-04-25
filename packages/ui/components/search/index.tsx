import { ISearchProps } from "./search.types"
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from "react";
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"


export const CustomSearch: React.FC<ISearchProps> = ({ placeholder, onSearch, variant, className }) => {
    const [searchText, setSearchText] = useState("")

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchText(value);
        onSearch(value);
    };

    const handleClearSearch = () => {
        if (searchText) {
            setSearchText("");
            onSearch("");
        }
    };

    switch (variant) {
        case "basic": {
            return (
                <Box className="flex flex-row items-center gap-2.5">
                    <Input
                        className={`border-solid border border-black  p-2 ${className}`}
                        disableUnderline
                        inputProps={{ className: "p-0" }}
                        placeholder={placeholder}
                        onChange={handleInputChange}
                        value={searchText}
                    />
                    <Button variant="contained" sx={{ borderRadius: 0, backgroundColor: " #1976d2 !important" }}>Search</Button>
                </Box>
            )
        }

        case "mid": {
            return (
                <Input
                    className={`border-solid border border-black w-[424px] p-3 ${className}`}
                    disableUnderline
                    inputProps={{ className: "p-0" }}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                    value={searchText}
                    endAdornment={<EndAdornment variant="mid" isClearActive={Boolean(searchText)} clearSearch={handleClearSearch} />}
                />
            )
        }

        case "adv": {
            return (
                <Input
                    className={`w-80 p-3 bg-black text-white font-style: italic h-12 ${className}`}
                    disableUnderline
                    inputProps={{ className: "p-0" }}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                    value={searchText}
                    endAdornment={<EndAdornment variant="adv" isClearActive={Boolean(searchText)} clearSearch={handleClearSearch} />}
                />
            )
        }

        default: {
            return <></>
        }
    }

}

const EndAdornment = ({ isClearActive, clearSearch, variant }: { isClearActive: boolean, clearSearch: () => void, variant: string }) => {

    switch (variant) {
        case "mid": {
            return (<>
                {isClearActive ?
                    <Box className="py-0 px-5">
                        <Box onClick={clearSearch} className="cursor-pointer">
                            <ClearIcon fontSize="small" />
                        </Box>
                    </Box> : null
                }
                <Box className="text-slate-300">
                    |
                </Box>
                <Box>
                    <Box className="pl-5 pr-2"><SearchIcon fontSize="small" /></Box>
                </Box>
            </>
            )
        }
        case "adv": {
            return (
                <Box onClick={clearSearch} className="cursor-pointer text-3xl/[24px]" >
                    <ClearIcon fontSize="inherit" style={{ fontWeight: 400 }} />
                </Box>)
        }
        default: {
            return <></>
        }
    }

}

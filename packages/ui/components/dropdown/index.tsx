import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image'


export const CountryMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const countryMenu: country[] = [
        { "name": "Australia", "image": "https://www.hydrafacial.com/static/media/Austria.6799689b0516ec74979d16e7c2333515.svg" },
        { "name": "China", "image": "https://www.hydrafacial.com/static/media/China.8c9967ca53cfc86f4a8c7b21ea9c7d32.svg" },
        { "name": "EMEA", "image": "	https://www.hydrafacial.com/static/media/EMEA.308da3285152dfa36fc5816c3991fc80.svg" },
        { "name": "France", "image": "https://www.hydrafacial.com/static/media/France.568d05946ada069e0debedf71453f667.svg" },
        { "name": "Germany", "image": "https://www.hydrafacial.com/static/media/Germany.27cf7b8d91e3ddb213b39a4aa44a2126.svg" },
        { "name": "Japan", "image": "https://www.hydrafacial.com/static/media/Japan.96109fee42e7b9f81520a406eac8e56d.svg" },
        { "name": "Korea", "image": "https://www.hydrafacial.com/static/media/Korea.b36b4891ce9c8afc8de79f36c4a5ca60.svg" },
        { "name": "Mexico", "image": "https://www.hydrafacial.com/static/media/Mexico.93dbb8831139b4d72d571ac21c0fdcd6.svg" },
        { "name": "Spain", "image": "https://www.hydrafacial.com/static/media/Spain.85f40bd20023fedfd082864af2837cf3.svg" },
        { "name": "United Kingdom", "image": "https://www.hydrafacial.com/static/media/UnitedKingdom.7acacd0da4c31d592942c276f5d304ab.svg" },

    ]
    type country = {
        name: string,
        image: string
    }

    return (
        <React.Fragment>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className=' px-6 py-2 flex flex-row items-center gap-2.5'
            >
                <Image alt='' width={16} height={17} src={"https://hydrafacialemea.com/wp-content/uploads/2023/03/world.svg"} />
                <span className='text-black font-aktivBold'
                >US & CANADA</span>
                {open && <div style={{

                    position: 'absolute',
                    backgroundColor: "#ccc",
                    height: "20px",
                    width: "20px",
                    transform: "rotate(45deg)",
                    left: "1.5rem",
                    bottom: "-1rem"
                }}
                >

                </div>}
            </Button>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    "className": "p-0"
                }}
            >
                {countryMenu.map((country, index) => {
                    return (
                        <MenuItem key={index} onClick={handleClose} className='flex flex-row gap-2 items-center justify-start w-[150px] hover:border-l-4 hover:border-solid hover:border-[#4493c7] border-l-4 border-solid border-transparent'>
                            <span>
                                <Image alt='' width={23} height={17} src={country.image} />
                            </span>
                            <span className='text-sm'>{country.name}</span>
                        </MenuItem>)
                })}

            </Menu >
        </React.Fragment>
    );
}
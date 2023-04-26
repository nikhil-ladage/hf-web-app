import Box from '@mui/material/Box'
import { CustomSearch } from '../search'

export const FindAHydrafacialist = () => {
    return (
        <Box className="w-full flex flex-col items-center py-[40px] small:py-[90px] px-[20px]">
            <h2 className='text-[35px] small:text-[48px]'>Find a Hydrafacialist</h2>
            <p className='text-[20px] pt-[10px] pb-[20px] text-center  small:text-[24px] small:pb-[40px] small:pt-[16px]'>Explore our network of licensed providers to get a consultation or treatment near you.</p>
            <Box>
                <p className='pb-1 font-bold'>
                    LOCATION
                </p>
                <CustomSearch variant='basic' onSearch={() => console.log("successfull")} className='px-[16px] py-[12px] small:w-[280px] w-[220px]' placeholder='Add a city or zip code' />
            </Box>
        </Box>)
}
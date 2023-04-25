/* eslint-disable react/no-unescaped-entities */
import Box from '@mui/material/Box'
import { Timeline } from '../timeline'
import { Fragment } from 'react';


export const Milestone = () => {
  const items = [
    {
      title: "Cleanse",
      description: "Deeply cleanses and exfoliates with a gentle peel to uncover a new layer of skin.",
    },
    {
      title: "Extract",
      description: "Removes impurities from pores with painless gentle suction.",
    },
    {
      title: "Hydrate",
      description: "Saturates the skin’s surface with intense moisturizers and nourishing, personalized ingredients.",
    },
  ];
  return (
    <Fragment>
      <Box className="
      relative 
      flex 
      flex-col
      xsmall:flex-row 
      ">
        <Box className="
        bg-white 
        h-full 
        absolute left-[115px] top-0 
        z-0 
        w-[calc(100%_-_115px)] 
        hidden 
        xsmall:block"></Box>
        <Box className="basis-6/12 ">
          <img
            alt=''
            className="relative small:top-[100px]"
            src="https://images.contentstack.io/v3/assets/blt504d36ed00347088/blte6057a91e8651e03/637f181b29381510675684ba/client_homepage_3steps.jpg" />
        </Box>
        <Box className="
        py-[40px]
        px-[20px]
        z-10
        xsmall:basis-6/12 
        xsmall:pt-[90px] 
        xsmall:px-[50px] 
        xsmall:pb-[10px] 
        ">
          <h2 className="text-[35px] small:text-[48px] ">Easy as 1, 2, 3</h2>
          <Box>
            <p className="text-[20px] small:text-[24px]">Every Hydrafacial treatment starts with three simple steps–from there, we'll personalize the experience based on your skin goals.</p>
          </Box>
          <Box className="pl-[50px] small:pt-[20px] pt-[45px]">
            <Box>
              <Timeline items={items} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>

  )
}

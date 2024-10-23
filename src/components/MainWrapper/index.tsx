import React from 'react';
interface MainWrappenProps {
  children: React.ReactNode; 
}
export default function MainWrapper({children}: MainWrappenProps){

    return(
        <main className='flex place-items-center justify-around max-[1100px]:flex-col max-[1100px]:gap-2 h-full  w-full'>
            {children}
        </main>


    )
}
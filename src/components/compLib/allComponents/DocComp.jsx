import React from 'react'

const DocComp = () => {
    return (
        <div className='relative mx-15 h-screen [calc(100%-240px)]  '>
            <h1 className='mt-10 mb-15 font-bold text-5xl' >Introduction</h1>
            <p className='font-normal text-xl mb-10'>Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source. </p>
            <p className='font-thin text-xl'>
            This is  a component library. It's a collection of re-usable components that you can copy and paste into your apps.
            </p>
    
            <h4 className='text-bold text-3xl mt-10'> What do you mean by a component library?</h4>
           <p className='font-thin text-xl mt-10'>I mean you do install it as a dependency. It is available or distributed via npm.</p>
        </div>
      )
    
}

export default DocComp
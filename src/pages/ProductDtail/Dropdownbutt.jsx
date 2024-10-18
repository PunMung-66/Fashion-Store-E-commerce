import React from 'react'

function Dropdownbutt({ children, setslectedQuantity, setToggle }) {
  return (
    <div className='hover:bg-primary-300 p-3' onClick={
        () => {
            setslectedQuantity(children);
            setToggle(false);
        }
    }>
        {children}
    </div>
  )
}

export default Dropdownbutt
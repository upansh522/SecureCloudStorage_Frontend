import React from 'react'

const Buttons = (prop) => {
  return (
    <button className="px-8 py-2 rounded-md bg-blue-600 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-600">
  {prop.Name}
</button>
  )
}

export default Buttons

import React from 'react'

export const MobileToggle = () => {
  return (

    {const toggle = () => {
      setIsOpen(!isOpen)
    }
  
    useEffect(() => {
      const hideMenu = () => {
        if (window.innerWidth > 768 && isOpen) {
          setIsOpen(false)
          console.log('i resized here')
        }
      }
      window.addEventListener('resize', hideMenu)
    })
  )
}

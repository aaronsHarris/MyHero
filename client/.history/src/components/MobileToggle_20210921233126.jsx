i

export const MobileToggle = () => {
  return (
    <div>
    const toggle = () => {
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
      <div/
  )
}

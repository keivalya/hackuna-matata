import React, { useState, useEffect, useRef } from 'react'
import Globe from 'vanta/dist/vanta.globe.min'

const GlobeBackground = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        Globe({
          el: myRef.current,
        }),
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <div className='vantajs' ref={myRef}>
      {children}
    </div>
  )
}
export default GlobeBackground

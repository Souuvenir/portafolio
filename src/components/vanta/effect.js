import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'


const MyComponent = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 500.00,
        minWidth: 1800.00,
        scale: 0.5,
        scaleMobile: 1.00,
        color: 0x483f59,
        backgroundColor: 0xBCA2F2,
        points: 13.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div style={{height: '800px'}}ref={myRef}>
    <h1 className='align'>
        Portafolio
    </h1>
    <h1 className='align'>
        Nathalia Busnego
    </h1>
  </div>
}
export default MyComponent;
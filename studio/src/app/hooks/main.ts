import { useLayoutEffect, useState, useEffect } from 'react'

export const userHome = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']

export const useWindowSize = () => {
    const [size, setSize] = useState([0, 0])

    useLayoutEffect(() => {
      const updateSize = () => setSize([window.innerWidth, window.innerHeight])
      window.addEventListener('resize', updateSize)
      updateSize();
      return () => window.removeEventListener('resize', updateSize)
    }, [])

    return size
}

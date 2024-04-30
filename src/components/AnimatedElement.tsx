import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const AnimatedElement: React.FC = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const [visible, setVisible] = useState(true)

  const secondsToReappear = 30000

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAudio(new Audio('/assets/meow.mp3'))
    }

    const animate = () => {
      const newTop = Math.floor(Math.random() * (window.innerHeight - 50))
      const newLeft = Math.floor(Math.random() * (window.innerWidth - 50))

      setPosition({ top: newTop, left: newLeft })
      setTimeout(animate, secondsToReappear)
    }

    const toggleVisibility = () => setVisible((prev) => !prev)

    const interval = setInterval(() => {
      toggleVisibility()
      animate()
    }, secondsToReappear)

    return () => clearInterval(interval)
  }, [])

  const handleOnClick = () => {
    if (audio) audio.play()
  }

  if (!visible) return null

  return (
    <Box
      as={motion.div}
      onClick={handleOnClick}
      animate={{ top: `${position.top}px`, left: `${position.left}px` }}
      transitionDuration="1"
      transitionTimingFunction="ease-in-out"
      position="absolute"
      width="24px"
      height="24px"
      bgImage="url('/assets/orange-cat.png')"
      bgSize="cover"
      bgPosition="center"
    />
  )
}

export default AnimatedElement

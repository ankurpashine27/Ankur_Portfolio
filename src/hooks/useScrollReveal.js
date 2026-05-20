export function useScrollReveal(direction = 'up', delay = 0) {
  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 60 }
      case 'down':
        return { opacity: 0, y: -60 }
      case 'left':
        return { opacity: 0, x: -60 }
      case 'right':
        return { opacity: 0, x: 60 }
      default:
        return { opacity: 0, y: 60 }
    }
  }

  const variants = {
    hidden: getInitial(),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return {
    variants,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount: 0.2 },
  }
}

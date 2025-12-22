import { motion, useTransform, useSpring } from "motion/react"

type Props = {
  word: string
  scrollYProgress: any
  start: number
  end: number
}

export default function AnimatedWord({ word, scrollYProgress, start, end }: Props) {
  const rawProgress = useTransform(scrollYProgress, [start, end], [0.1, 1])
  const progress = useSpring(rawProgress, { stiffness: 100, damping: 20 })

  return (
    <motion.span
      className="text-4xl leading-[1.4] inline-block mr-4"
      style={{ opacity: progress }}
    >
      {word}
    </motion.span>
  )
}
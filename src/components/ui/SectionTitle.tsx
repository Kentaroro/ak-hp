import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const SectionTitle = ({ children, className = '' }: Props) => {
  return (
    <h2
      className={`text-3xl md:text-4xl font-bold tracking-widest mb-10 ${className}`}
    >
      {children}
    </h2>
  )
}

export default SectionTitle

import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Container = ({ children, className = '' }: Props) => {
  return (
    <div className={`max-w-5xl mx-auto px-6 md:px-10 ${className}`}>
      {children}
    </div>
  )
}

export default Container

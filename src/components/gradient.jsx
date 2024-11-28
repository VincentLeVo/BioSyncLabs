import { clsx } from 'clsx'

export function Gradient({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-[linear-gradient(130deg,var(--tw-gradient-stops))] from-[#203c8a] from-[12%] via-[#7babfd] via-[40%] to-transparent sm:bg-[linear-gradient(80deg,var(--tw-gradient-stops))]',
      )}
    />
  )
}

export function HeroGradient({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-[linear-gradient(130deg,var(--tw-gradient-stops))] from-[#0d1939] from-[12%] via-[#203c8a] via-[40%] to-transparent sm:bg-[linear-gradient(80deg,var(--tw-gradient-stops))]',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0',
          'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#18337f] from-[28%] via-[#7babfd] via-[70%] to-[#b3cfff]',
          'blur-5xl rotate-[-11deg] rounded-full',
        )}
      />
    </div>
  )
}

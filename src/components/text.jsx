import { clsx } from 'clsx'
import { FadeIn } from './fadein'

export function Heading({
  className,
  as: Element = 'h2',
  dark = false,
  ...props
}) {
  return (
    <FadeIn>
      <Element
        {...props}
        data-dark={dark ? 'true' : undefined}
        className={clsx(
          className,
          'max-w-xl text-pretty bg-clip-text text-3xl/normal font-medium tracking-tight text-transparent sm:text-5xl/tight',
          dark
            ? 'bg-gradient-to-r from-cyan-200 to-blue-200'
            : 'bg-gradient-to-r from-blue-400 to-blue-700',
        )}
      />
    </FadeIn>
  )
}

export function Subheading({
  className,
  as: Element = 'h2',
  dark = false,
  ...props
}) {
  return (
    <FadeIn>
      <Element
        {...props}
        data-dark={dark ? 'true' : undefined}
        className={clsx(
          className,
          'font-mono text-sm font-semibold uppercase tracking-widest text-slate-600 data-[dark]:text-gray-400',
        )}
      />
    </FadeIn>
  )
}

export function Lead({ className, ...props }) {
  return (
    <p
      className={clsx(className, 'text-2xl font-medium text-gray-500')}
      {...props}
    />
  )
}

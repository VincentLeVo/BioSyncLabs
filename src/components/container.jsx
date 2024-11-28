import { clsx } from 'clsx'

export function Container({ className, children }) {
  return (
    <div className={clsx(className, 'px-4 lg:px-6')}>
      <div className="mx-auto max-w-2xl lg:max-w-7xl">{children}</div>
    </div>
  )
}

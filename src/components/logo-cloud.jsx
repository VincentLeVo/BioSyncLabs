import { clsx } from 'clsx'
import { FadeInStagger } from './fadein'

export function LogoCloud({ className }) {
  return (
    <FadeInStagger
      className={clsx(
        className,
        'flex flex-wrap justify-center gap-x-5 gap-y-6 md:justify-evenly',
      )}
    >
      <img
        alt="Logo"
        src="/logo-cloud/logoipsum-1.svg"
        className="h-9 sm:h-8 lg:h-9"
      />
      <img
        alt="Logo"
        src="/logo-cloud/logoipsum-2.svg"
        className="h-9 sm:h-8 lg:h-9"
      />
      <img
        alt="Logo"
        src="/logo-cloud/logoipsum-3.svg"
        className="h-9 sm:h-8 lg:h-9"
      />
      <img
        alt="Logo"
        src="/logo-cloud/logoipsum-4.svg"
        className="h-9 sm:h-8 lg:h-9"
      />
      <img
        alt="Logo"
        src="/logo-cloud/logoipsum-5.svg"
        className="h-9 sm:h-8 lg:h-9"
      />
    </FadeInStagger>
  )
}

import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import { Link } from './link'

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center px-9 py-4',
    'rounded-2xl border border-transparent bg-blue-800 shadow-md',
    'whitespace-nowrap text-base font-medium text-white',
    'data-[disabled]:bg-gray-950 data-[hover]:bg-blue-900 data-[disabled]:opacity-40',
  ),
  secondary: clsx(
    'relative inline-flex items-center justify-center px-9 py-4',
    'rounded-2xl border border-transparent bg-blue-50/40 shadow-md ring-1 ring-[#D15052]/15',
    'after:absolute after:inset-0 after:rounded-2xl after:shadow-[inset_0_0_2px_1px_#ffffff4d]',
    'whitespace-nowrap text-base font-medium text-gray-900',
    'data-[disabled]:bg-white/15 data-[hover]:bg-blue-50/50 data-[disabled]:opacity-40',
  ),
  outline: clsx(
    'inline-flex items-center justify-center px-9 py-4',
    'rounded-2xl border border-transparent shadow ring-1 ring-black/10',
    'whitespace-nowrap text-sm font-medium text-gray-900',
    'data-[disabled]:bg-transparent data-[hover]:bg-gray-50 data-[disabled]:opacity-40',
  ),
}

export function Button({ variant = 'primary', className, ...props }) {
  className = clsx(className, variants[variant])

  if (typeof props.href === 'undefined') {
    return <Headless.Button {...props} className={className} />
  }

  return <Link {...props} className={className} />
}

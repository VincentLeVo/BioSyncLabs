'use client'
import clsx from 'clsx'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { Bars2Icon, ChevronDownIcon } from '@heroicons/react/24/solid'
import {
  BeakerIcon,
  BugAntIcon,
  FingerPrintIcon,
  FaceSmileIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from './logo'

const solutions = [
  {
    name: 'Blood Testing',
    description:
      'A complete blood test that covers a wide range of health indicators.',
    href: '/services/comprehensive-blood-panel',
    icon: BeakerIcon,
  },
  {
    name: 'Allergy Testing',
    description: 'A detailed allergy panel that tests for common allergens.',
    href: '/services/allergy-test-panel',
    icon: BugAntIcon,
  },
  {
    name: 'HPV Testing',
    description: 'A screening test for the Human Papillomavirus (HPV)',
    href: '/services/hpv-testing',
    icon: FingerPrintIcon,
  },
  {
    name: 'Thyroid Testing',
    description: 'A blood test to evaluate the health of the thyroid',
    href: '/services/thyroid-function-test',
    icon: FaceSmileIcon,
  },
]

const links = [
  { href: '/faq', label: 'FAQ' },
  { href: '/company', label: 'Company' },
  { href: '/blog', label: 'Blog' },
]

function DesktopNav() {
  let desktopLinkStyle =
    'text-md flex items-center rounded-lg px-6 py-4 font-medium text-gray-950 bg-blend-multiply duration-300 ease-in data-[hover]:bg-black/[10%] dark:text-gray-100'

  return (
    <nav className="relative hidden lg:flex">
      <Popover className="flex gap-6">
        <PopoverButton className={clsx(desktopLinkStyle)}>
          Services
        </PopoverButton>
        <PopoverPanel
          anchor="bottom"
          transition
          className="transition duration-200 ease-in-out data-[closed]:-translate-y-4 data-[closed]:opacity-0"
        >
          <div className="max-w-lg flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-950/10">
            <div className="p-5">
              {solutions.map(({ name, description, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  className="flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 ease-in hover:bg-slate-200/50"
                >
                  <Icon className="h-6 w-6 text-slate-500" />
                  <div>
                    <p className="text-lg font-medium text-gray-950 dark:text-gray-100">
                      {name}
                    </p>
                    <p className="text-sm text-gray-500">{description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center divide-x divide-gray-600 bg-slate-200 p-3 hover:bg-slate-300">
              <Link
                className="text-md font-semibold text-gray-900"
                href="/services"
              >
                View All Services
              </Link>
            </div>
          </div>
        </PopoverPanel>
      </Popover>

      {links.map(({ href, label }) => (
        <div key={href} className="relative flex">
          <Link href={href} className={desktopLinkStyle}>
            {label}
          </Link>
        </div>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg ring-1 ring-gray-900 data-[hover]:bg-black/5 lg:hidden dark:ring-gray-200"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6 text-gray-950 dark:text-gray-100" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        <div>
          <Disclosure>
            <DisclosureButton className="flex items-center gap-x-2 text-base font-medium text-gray-950 dark:text-gray-100">
              Services
              <ChevronDownIcon className="h-3 w-3 text-gray-950 dark:text-gray-100" />
            </DisclosureButton>
            <DisclosurePanel
              transition
              className="mt-2 transition duration-300 ease-in data-[closed]:-translate-y-6 data-[closed]:opacity-0"
            >
              <div className="flex flex-col bg-gray-50/5">
                {solutions.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    className="flex items-center rounded-lg px-4 py-3 text-gray-950 dark:text-gray-100"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </DisclosurePanel>
          </Disclosure>
        </div>

        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link
              href={href}
              className="text-base font-medium text-gray-950 dark:text-gray-100"
            >
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner, dark = false }) {
  return (
    <Disclosure as="header" className="pt-8 sm:pt-12">
      <div className="relative">
        <div className="relative flex justify-between">
          <div className="relative flex gap-6">
            <div className="py-3">
              <Link href="/" title="Home">
                <Logo className="h-9 text-slate-900 dark:text-slate-100" />
              </Link>
            </div>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          <MobileNavButton />
        </div>
      </div>
      <MobileNav />
    </Disclosure>
  )
}

import { clsx } from 'clsx'

export function Screenshot({ width, height, src, className }) {
  return (
    <div
      style={{ '--width': width, '--height': height }}
      className={clsx(
        className,
        'relative aspect-[var(--width)/var(--height)] [--radius:theme(borderRadius.xl)]',
      )}
    >
      <div className="absolute -inset-[var(--padding)] rounded-[calc(var(--radius)+var(--padding))] shadow-sm ring-1 ring-black/5 [--padding:theme(spacing.2)]" />
      <img
        alt=""
        src={src}
        className="h-full rounded-[var(--radius)] ring-1 ring-black/10"
      />
      <div className="absolute inset-0 z-10 size-full bg-gradient-to-t from-white to-90% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%]" />
    </div>
  )
}

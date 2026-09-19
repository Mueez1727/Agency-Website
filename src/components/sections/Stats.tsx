import { cn } from '../../lib/cn'
import { stats } from '../../data/stats'

export function Stats() {
  return (
    <section className="border-b border-line bg-white" aria-label="Studio statistics">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={cn(
              'flex min-h-[132px] flex-col items-center justify-center px-4 py-8 text-center sm:min-h-[148px] sm:px-6',
              index % 2 === 1 && 'border-l border-line',
              index >= 2 && 'border-t border-line lg:border-t-0',
              index === 2 && 'lg:border-l',
            )}
          >
            <p className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{stat.value}</p>
            <p className="mt-2 max-w-[12rem] text-xs font-medium text-muted sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

import type { Project } from '../../data/projects'
import { cn } from '../../lib/cn'

type ProjectMockupProps = {
  project: Project
  className?: string
  compact?: boolean
}

export function ProjectMockup({ project, className, compact = false }: ProjectMockupProps) {
  return (
    <div className={cn('overflow-hidden rounded-[1.4rem]', className)} aria-hidden="true">
      {project.theme === 'fitness' ? <FitZoneMock compact={compact} /> : null}
      {project.theme === 'restaurant' ? <BellaMock compact={compact} /> : null}
      {project.theme === 'hotel' ? <StayNestMock compact={compact} /> : null}
      {project.theme === 'retail' ? <RetailMock compact={compact} /> : null}
    </div>
  )
}

function FitZoneMock({ compact }: { compact: boolean }) {
  return (
    <div className="h-full bg-[#0c1410] p-4 text-white">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-emerald-200/70">
        <span>FitZone</span>
        <span>Memberships</span>
      </div>
      <p className="mt-4 text-xl font-semibold tracking-tight">Train with intention.</p>
      <p className="mt-1 text-[11px] text-emerald-100/60">Plans, trainers, and a gym built around results.</p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {['Starter', 'Plus', 'Elite'].map((plan, index) => (
          <div key={plan} className={cn('rounded-xl border border-white/8 bg-white/5 p-2.5', index === 1 && 'bg-emerald-400/15')}>
            <p className="text-[10px] text-white/50">{plan}</p>
            <p className="mt-1 text-sm font-semibold">{['$29', '$49', '$79'][index]}</p>
          </div>
        ))}
      </div>
      {!compact ? (
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-white/5 p-3">
            <p className="text-[10px] text-white/45">Facilities</p>
            <p className="mt-1 text-xs">Weights · Cardio · Studio</p>
          </div>
          <div className="rounded-xl bg-white/5 p-3">
            <p className="text-[10px] text-white/45">Next class</p>
            <p className="mt-1 text-xs">HIIT · 6:30 PM</p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

function BellaMock({ compact }: { compact: boolean }) {
  return (
    <div className="h-full bg-[#f6efe6] p-4 text-[#3a2618]">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#8a5a36]">
        <span>Bella Table</span>
        <span>Reserve</span>
      </div>
      <p className="mt-4 text-xl font-semibold tracking-tight">Seasonal plates, quiet evenings.</p>
      <div className="mt-4 space-y-2">
        {[
          ['House focaccia', '$8'],
          ['Citrus salad', '$14'],
          ['Slow pasta', '$22'],
        ].map(([item, price]) => (
          <div key={item} className="flex items-center justify-between rounded-xl bg-white/70 px-3 py-2 text-xs">
            <span>{item}</span>
            <span className="font-semibold">{price}</span>
          </div>
        ))}
      </div>
      {!compact ? (
        <div className="mt-4 rounded-xl bg-[#3a2618] px-3 py-2.5 text-xs text-[#f6efe6]">
          Table for 2 · Friday 7:30 PM
        </div>
      ) : null}
    </div>
  )
}

function StayNestMock({ compact }: { compact: boolean }) {
  return (
    <div className="h-full bg-[#111827] p-4 text-white">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-amber-200/70">
        <span>StayNest</span>
        <span>Rooms</span>
      </div>
      <p className="mt-4 text-xl font-semibold tracking-tight">A quieter stay in the city.</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {['Garden Suite', 'City Loft'].map((room) => (
          <div key={room} className="rounded-xl border border-white/8 bg-white/5 p-3">
            <div className="mb-3 h-12 rounded-lg bg-gradient-to-br from-slate-600 to-slate-800" />
            <p className="text-xs font-medium">{room}</p>
            <p className="mt-1 text-[10px] text-white/50">King bed · City view</p>
          </div>
        ))}
      </div>
      {!compact ? (
        <div className="mt-4 flex items-center justify-between rounded-xl bg-amber-200/10 px-3 py-2 text-xs text-amber-100">
          <span>Check availability</span>
          <span>Inquire</span>
        </div>
      ) : null}
    </div>
  )
}

function RetailMock({ compact }: { compact: boolean }) {
  return (
    <div className="h-full bg-[#f8fafc] p-4 text-slate-800">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-slate-400">
        <span>RetailFlow</span>
        <span>POS</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          ['Today', '$1,280'],
          ['Orders', '34'],
          ['Low stock', '6'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-slate-200 bg-white p-2.5">
            <p className="text-[10px] text-slate-400">{label}</p>
            <p className="mt-1 text-sm font-semibold">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 space-y-1.5">
        {['Cotton tee · 2', 'Ceramic mug · 1', 'Tote bag · 1'].map((row) => (
          <div key={row} className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-xs ring-1 ring-slate-200">
            <span>{row}</span>
            <span className="text-slate-400">In cart</span>
          </div>
        ))}
      </div>
      {!compact ? (
        <div className="mt-3 rounded-xl bg-slate-900 px-3 py-2 text-center text-xs font-medium text-white">
          Complete sale
        </div>
      ) : null}
    </div>
  )
}

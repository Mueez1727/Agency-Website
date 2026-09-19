export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] pt-[4.75rem] sm:pt-20">
      <div
        className="absolute left-0 top-0 z-0 w-[min(100%,240px)] rounded-2xl border border-white/12 bg-white/8 p-3.5 shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:left-2"
        aria-hidden="true"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-accent/20 text-accent">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path d="M4 8h16" stroke="currentColor" strokeWidth="1.7" />
                <path d="M8 13h5M8 16h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </span>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">Inquiry</p>
          </div>
          <span className="rounded-full bg-accent/18 px-2 py-0.5 text-[10px] font-semibold text-accent">New</span>
        </div>
        <p className="mt-3 text-sm font-semibold tracking-tight text-white">New website request</p>
        <p className="mt-1 text-xs text-white/55">Restaurant · Landing page</p>
      </div>

      <div className="relative z-10 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#11141b] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="ml-2 flex-1 rounded-full bg-white/6 px-3 py-1 text-[11px] text-white/40">
            app.itechdev.studio/dashboard
          </div>
        </div>
        <div className="grid grid-cols-[88px_1fr] sm:grid-cols-[104px_1fr]">
          <aside className="space-y-2 border-r border-white/8 p-3 text-[11px] text-white/45">
            {['Overview', 'Sales', 'Customers', 'Inventory'].map((item, index) => (
              <div
                key={item}
                className={`rounded-lg px-2 py-1.5 ${index === 0 ? 'bg-white/8 text-white' : ''}`}
              >
                {item}
              </div>
            ))}
          </aside>
          <div className="p-4">
            <div className="grid grid-cols-3 gap-2">
              {[
                ['Revenue', '$12.4k'],
                ['Orders', '86'],
                ['Visits', '1.2k'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-white/5 p-2.5">
                  <p className="text-[10px] text-white/40">{label}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex h-24 items-end gap-1.5 rounded-xl bg-white/4 px-3 py-3">
              {[40, 62, 48, 78, 55, 88, 70].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-accent/30 to-accent"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="mt-3 space-y-1.5">
              {['Landing page · In review', 'POS dashboard · Build', 'Booking flow · Planned'].map((row) => (
                <div key={row} className="flex items-center justify-between rounded-lg bg-white/4 px-3 py-2 text-[11px] text-white/65">
                  <span>{row}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 right-0 z-20 w-[150px] overflow-hidden rounded-[1.6rem] border border-white/15 bg-[#0c0e13] p-2 shadow-2xl sm:right-[-8px] sm:w-[168px] float-slow">
        <div className="rounded-[1.2rem] bg-[#151821] p-3">
          <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-white/10" />
          <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">Customer app</p>
          <p className="mt-2 text-sm font-semibold text-white">Book a visit</p>
          <div className="mt-3 space-y-1.5">
            {['Today · 4:00 PM', 'Trainer · Assigned', 'Plan · Plus'].map((item) => (
              <div key={item} className="rounded-lg bg-white/5 px-2 py-1.5 text-[10px] text-white/65">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg bg-accent px-2 py-1.5 text-center text-[11px] font-semibold text-white">
            Confirm
          </div>
        </div>
      </div>
    </div>
  )
}

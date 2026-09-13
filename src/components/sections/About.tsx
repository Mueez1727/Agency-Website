import { Avatar } from '../visuals/Avatar'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const founders = [
  {
    name: 'Mueez Ahmad',
    role: 'Co-Founder & Developer',
    image: '/images/mueez.jpg',
    bio: 'Focuses on software development, web applications, business systems, and turning product requirements into practical digital tools.',
  },
  {
    name: 'M. Haris',
    role: 'Co-Founder & Developer',
    image: '/images/haris.jpg',
    bio: 'Focuses on software development, application development, client solutions, and building products that match how a business actually operates.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Meet the People Behind ITechDev"
            subtitle="ITechDev is a small software development studio founded by Mueez Ahmad and M. Haris. We work directly with businesses to design and build modern digital products that solve real business problems."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {founders.map((founder, index) => (
            <Reveal key={founder.name} delay={index === 0 ? 1 : 2}>
              <article className="overflow-hidden rounded-3xl border border-line bg-paper">
                <div className="grid gap-0 sm:grid-cols-[180px_1fr]">
                  <Avatar name={founder.name} src={founder.image} className="h-56 w-full sm:h-full" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold tracking-tight text-ink">{founder.name}</h3>
                    <p className="mt-1 text-sm font-medium text-accent">{founder.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{founder.bio}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

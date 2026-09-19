import { founders } from '../../data/founders'
import { Avatar } from '../visuals/Avatar'
import { LinkedInIcon } from '../visuals/SocialIcons'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

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
        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
          {founders.map((founder, index) => (
            <Reveal key={founder.name} delay={index === 0 ? 1 : 2} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper p-6 text-center sm:p-8">
                <Avatar
                  name={founder.name}
                  src={founder.image}
                  className="mx-auto h-36 w-36 shrink-0 overflow-hidden rounded-2xl sm:h-40 sm:w-40"
                />
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">{founder.name}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{founder.role}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{founder.bio}</p>
                <div className="mt-6 flex justify-center">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${founder.name} on LinkedIn`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink/70 transition hover:border-ink/15 hover:text-ink"
                  >
                    <LinkedInIcon size={16} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

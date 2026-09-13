import { faqs } from '../../data/faqs'
import { FAQItem } from '../ui/FAQItem'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-paper py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions businesses usually ask"
            subtitle="Clear answers before the first conversation. If something is missing, send a project request and we will walk through it."
          />
        </Reveal>
        <Reveal delay={2}>
          <div className="rounded-3xl border border-line bg-white px-5 sm:px-7">
            {faqs.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

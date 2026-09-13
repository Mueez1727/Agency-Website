import { ChevronDown } from 'lucide-react'
import { useId, useState } from 'react'
import { cn } from '../../lib/cn'

type FAQItemProps = {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const buttonId = useId()

  return (
    <div className="border-b border-line last:border-b-0">
      <h3 className="text-base font-semibold">
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left text-ink"
        >
          <span>{question}</span>
          <ChevronDown
            size={18}
            aria-hidden="true"
            className={cn('shrink-0 text-muted transition duration-200', open && 'rotate-180')}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="pb-5 text-sm leading-relaxed text-muted"
      >
        {answer}
      </div>
    </div>
  )
}

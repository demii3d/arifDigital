import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useId, useState } from 'react'
import type { FormEvent } from 'react'
import { PageHero } from '../components/ui/PageHero'
import { services } from '../data/services'
import { site } from '../data/site'
import { useSeo } from '../hooks/useSeo'

interface Values {
  name: string; email: string; company: string; type: string; budget: string; message: string
}
type Errors = Partial<Record<keyof Values, string>>

const empty: Values = { name: '', email: '', company: '', type: '', budget: '', message: '' }
const projectTypes = [...services.map((s) => s.title), 'Something else']
const budgets = ['Under £5,000', '£5,000 – £15,000', '£15,000 – £40,000', '£40,000+', 'Not sure yet']

function validate(v: Values): Errors {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.'
  if (!v.email.trim()) e.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (!v.type) e.type = 'Please choose a project type.'
  if (v.message.trim().length < 20) e.message = 'Please describe your project in at least 20 characters.'
  return e
}

const field =
  'mt-2 block min-h-12 w-full rounded-md border bg-surface px-4 py-3 text-base text-bone placeholder:text-mute/60 transition-colors focus:border-accent focus:outline-none focus-visible:outline-none'

function FieldShell({ id, label, optional, error, children }: { id: string; label: string; optional?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label} {optional && <span className="font-normal text-mute">(optional)</span>}
      </label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-2 text-sm text-red-300">{error}</p>}
    </div>
  )
}

export default function Contact() {
  useSeo({
    title: 'Contact — Start a Project',
    description: 'Start a project with ARIF Digital Solutions. Tell us about your idea and we will help shape the right approach.',
    path: '/contact',
  })
  const uid = useId()
  const [values, setValues] = useState<Values>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({})
  const [done, setDone] = useState(false)

  const set = (k: keyof Values) => (ev: { target: { value: string } }) => {
    const next = { ...values, [k]: ev.target.value }
    setValues(next)
    if (touched[k]) setErrors(validate(next))
  }
  const blur = (k: keyof Values) => () => {
    setTouched((t) => ({ ...t, [k]: true }))
    setErrors(validate(values))
  }

  const submit = (ev: FormEvent) => {
    ev.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    setTouched({ name: true, email: true, type: true, message: true })
    const first = Object.keys(errs)[0]
    if (first) {
      document.getElementById(`${uid}-${first}`)?.focus()
      return
    }
    // Frontend-only demo: nothing is transmitted anywhere.
    setDone(true)
  }

  const reset = () => { setValues(empty); setErrors({}); setTouched({}); setDone(false) }

  const bind = (k: keyof Values) => {
    const err = touched[k] ? errors[k] : undefined
    const id = `${uid}-${k}`
    return {
      err,
      id,
      props: {
        id, value: values[k], onChange: set(k), onBlur: blur(k),
        'aria-invalid': err ? true : undefined,
        'aria-describedby': err ? `${id}-err` : undefined,
        className: `${field} ${err ? 'border-red-400' : 'border-line-strong'}`,
      },
    }
  }

  const f = {
    name: bind('name'), email: bind('email'), company: bind('company'),
    type: bind('type'), budget: bind('budget'), message: bind('message'),
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Tell us about your <span className="serif-i text-accent">next project.</span></>}
        text="Share a few details about what you are building. Even a rough idea is enough to start a useful conversation."
      />

      <section aria-label="Project enquiry" className="py-16 sm:py-24">
        <div className="wrap grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-24">
          <div>
            <AnimatePresence mode="wait" initial={false}>
              {done ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  role="status"
                  className="rounded-lg border border-line-strong bg-surface p-8 sm:p-12"
                >
                  <CheckCircle2 size={36} className="text-accent" aria-hidden />
                  <h2 className="display mt-6 text-3xl sm:text-4xl">Enquiry form validated</h2>
                  <p className="mt-4 max-w-md text-mute">
                    Thank you, {values.name.split(' ')[0]}. This is a front-end demonstration: <strong className="text-bone">your enquiry has not been sent or stored anywhere.</strong> Once the site is connected to a delivery service, this is where confirmation will appear.
                  </p>
                  <button type="button" onClick={reset} className="mt-8 inline-flex min-h-12 items-center rounded-full border border-line-strong px-6 text-sm font-semibold transition-colors hover:border-bone hover:bg-bone hover:text-ink">
                    Start a new enquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  noValidate
                  onSubmit={submit}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FieldShell id={f.name.id} label="Full name" error={f.name.err}>
                          <input type="text" autoComplete="name" placeholder="Jane Smith" required {...f.name.props} />
                        </FieldShell>
                    <FieldShell id={f.email.id} label="Email address" error={f.email.err}>
                          <input type="email" autoComplete="email" placeholder="jane@company.com" required {...f.email.props} />
                        </FieldShell>
                  </div>
                  <FieldShell id={f.company.id} label="Company name" optional error={f.company.err}>
                          <input type="text" autoComplete="organization" placeholder="Company Ltd" {...f.company.props} />
                        </FieldShell>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FieldShell id={f.type.id} label="Project type" error={f.type.err}>
                          <select required {...f.type.props}>
                          <option value="">Select a type</option>
                          {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                        </FieldShell>
                    <FieldShell id={f.budget.id} label="Estimated budget" optional error={f.budget.err}>
                          <select {...f.budget.props}>
                          <option value="">Select a range</option>
                          {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                        </select>
                        </FieldShell>
                  </div>
                  <FieldShell id={f.message.id} label="Project description" error={f.message.err}>
                          <textarea rows={6} placeholder="What are you trying to build, and what does success look like?" required {...f.message.props} />
                        </FieldShell>
                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                    <button
                      type="submit"
                      className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-bone"
                    >
                      Submit enquiry
                    </button>
                    <p className="text-xs text-mute">Demo form: submissions are validated in your browser only and are not delivered.</p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <aside aria-label="Contact information" className="lg:pt-2">
            <h2 className="eyebrow">Contact details</h2>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {[
                { Icon: Mail, label: 'Email', value: site.contact.email },
                { Icon: Phone, label: 'Phone', value: site.contact.phone },
                { Icon: MapPin, label: 'Location', value: site.contact.location },
                { Icon: Clock, label: 'Hours', value: site.contact.hours },
              ].map(({ Icon, label, value }) => (
                <li key={label} className="flex items-start gap-4 py-5">
                  <Icon size={18} aria-hidden className="mt-0.5 shrink-0 text-accent" />
                  <div><p className="text-xs uppercase tracking-widest text-mute">{label}</p><p className="mt-1">{value}</p></div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-mute">Contact details are placeholders and will be updated before launch.</p>

            <h2 className="eyebrow mt-12">What happens next</h2>
            <ol className="mt-5 space-y-4 text-sm leading-relaxed text-mute">
              <li><span className="font-semibold text-bone">1. Review.</span> We read your brief and note questions.</li>
              <li><span className="font-semibold text-bone">2. Conversation.</span> A short call to explore goals and scope.</li>
              <li><span className="font-semibold text-bone">3. Proposal.</span> A clear approach, timeline and estimate.</li>
            </ol>
          </aside>
        </div>
      </section>
    </>
  )
}

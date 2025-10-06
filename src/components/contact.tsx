

// 'use client'

// import { useAnimation } from 'framer-motion'
// import { motion } from 'framer-motion'
// import { useEffect, useRef } from 'react'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
// import { Button } from '@/components/ui/button'
// import { useInView } from "react-intersection-observer" 

// const fadeInVariant = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } as const,
//   exit: { opacity: 0, y: -40, transition: { duration: 0.4, ease: 'easeIn' } } as const,
// }

// export default function ContactMe() {
//   const controls = useAnimation()
//   const [ref, inView] = useInView({ threshold: 0.2 })

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible")
//     } else {
//       controls.start("hidden")
//     }
//   }, [controls, inView])


//   return (
//     <motion.section
    
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={fadeInVariant}
//       id="contact"
//       className="py-16 px-4 sm:px-8 md:px-16 lg:px-32 bg-background text-foreground"
//     >
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Me</h2>
//         <form className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block mb-1 text-sm font-medium">
//               Name
//             </label>
//             <Input type="text" id="name" placeholder="Your name" />
//           </div>
//           <div>
//             <label htmlFor="email" className="block mb-1 text-sm font-medium">
//               Email
//             </label>
//             <Input type="email" id="email" placeholder="you@example.com" />
//           </div>
//           <div>
//             <label htmlFor="message" className="block mb-1 text-sm font-medium">
//               Message
//             </label>
//             <Textarea id="message" placeholder="Your message..." rows={5} />
//           </div>
//           <Button type="submit" className="w-full md:w-auto">
//             Send Message
//           </Button>
//         </form>
//       </div>
//     </motion.section>
//   )
// }

'use client'

import { useAnimation, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import emailjs from 'emailjs-com'

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } as const,
  exit: { opacity: 0, y: -40, transition: { duration: 0.4, ease: 'easeIn' } } as const,
}

export default function ContactMe() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2 })

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (inView) controls.start('visible')
    else controls.start('hidden')
  }, [controls, inView])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const result = await emailjs.send(
        'service_vdrrd07',     // 🔁 Replace with your actual service ID
        'template_f66vogk',    // 🔁 Replace with your template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        't4JO-jq4dg83nUugn'      // 🔁 Replace with your public key
      )
      console.log(result.text)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInVariant}
      id="contact"
      className="py-16 px-4 sm:px-8 md:px-16 lg:px-32 bg-background text-foreground"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium">Message</label>
            <Textarea
              id="message"
              placeholder="Your message..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <Button type="submit" className="w-full md:w-auto" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </Button>

          {/* Status Message */}
          {status === 'success' && (
            <p className="text-green-600 text-sm pt-2">Message sent successfully! ✅</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-sm pt-2">Something went wrong. Try again. ❌</p>
          )}
        </form>
      </div>
    </motion.section>
  )
}


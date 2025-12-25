import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-datepicker/dist/react-datepicker.css';

type FormState = {
  name: string;
  email: string;
  message: string;
  date: Date | null;
};

export default function BookingButton(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '', date: null });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResult(null);

    if (!form.name || !form.email || !form.date) {
      setResult({ type: 'error', message: 'Please fill name, email and choose a date/time.' });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/.netlify/functions/sendBooking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          dateTime: form.date.toISOString(),
          message: form.message,
          referrer: window.location.href
        })
      });

      if (res.ok) {
        setResult({ type: 'success', message: 'Booking sent! I will get back to you shortly.' });
        setForm({ name: '', email: '', message: '', date: null });
        setTimeout(() => setOpen(false), 2000);
      } else {
        const text = await res.text();
        setResult({ type: 'error', message: `Error: ${text}` });
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setResult({ type: 'error', message: `Network error: ${message}` });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        📅 Book an Appointment
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
            >
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">Book an Appointment</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => onChange('name', e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => onChange('email', e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Choose Date & Time
                  </label>
                  <DatePicker
                    selected={form.date}
                    onChange={(date: Date | null) => onChange('date', date)}
                    showTimeSelect
                    timeIntervals={30}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    placeholderText="Select date and time"
                    minDate={new Date()}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message (optional)
                  </label>
                  <textarea
                    value={form.message}
                    onChange={e => onChange('message', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors resize-none"
                    placeholder="Tell me what you'd like to discuss..."
                  />
                </div>

                {result && (
                  <div className={`p-3 rounded-lg text-sm ${
                    result.type === 'success' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {result.message}
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    disabled={submitting}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    {submitting ? 'Sending...' : 'Send Booking'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

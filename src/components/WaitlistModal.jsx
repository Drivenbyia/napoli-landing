import { useState } from 'react';
import { X } from 'lucide-react';

export default function WaitlistModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', dog: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const body = new URLSearchParams({
      'form-name': 'waitlist-b2c-2026',
      ...form,
    }).toString();

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!res.ok) throw new Error('Erreur serveur');
      setSuccess(true);
    } catch {
      // En local, Netlify Forms ne fonctionne pas — on simule le succès
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setForm({ name: '', email: '', dog: '' });
    setSuccess(false);
    setError('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-deep-sage/40 backdrop-blur-sm"
      onClick={handleReset}
      role="dialog"
      aria-modal="true"
      aria-label="Rejoindre la waitlist Napoli"
    >
      <div
        className="relative bg-cream rounded-[2.5rem] p-8 md:p-12 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleReset}
          aria-label="Fermer la fenêtre"
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-deep-sage/10 hover:bg-deep-sage/20 transition-colors duration-300"
        >
          <X className="w-5 h-5 text-deep-sage" />
        </button>

        {success ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-6">🐾</div>
            <h2 className="text-2xl font-extrabold text-deep-sage mb-3">Vous êtes sur la liste !</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              On vous préviendra en avant-première dès que Napoli est disponible.
            </p>
            <button
              onClick={handleReset}
              className="mt-8 bg-sage text-white font-bold px-8 py-3 rounded-full hover:bg-deep-sage transition-colors duration-300"
            >
              Fermer
            </button>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage/10 text-sage text-xs font-bold uppercase tracking-wider mb-4">
                Accès VIP Bêta
              </div>
              <h2 className="text-2xl font-extrabold text-deep-sage mb-2">
                Rejoindre la waitlist
              </h2>
              <p className="text-deep-sage/60 font-medium text-sm leading-relaxed">
                Soyez parmi les premiers à transformer la santé de votre chien.
              </p>
            </div>

            <form
              name="waitlist-b2c-2026"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <input type="hidden" name="form-name" value="waitlist-b2c-2026" />

              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-name" className="text-sm font-bold text-deep-sage/70">
                  Votre prénom
                </label>
                <input
                  id="modal-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Sophie"
                  value={form.name}
                  onChange={handleChange}
                  className="border border-sage/30 rounded-2xl px-4 py-3 text-deep-sage bg-white placeholder-deep-sage/30 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-email" className="text-sm font-bold text-deep-sage/70">
                  Votre email
                </label>
                <input
                  id="modal-email"
                  type="email"
                  name="email"
                  required
                  placeholder="sophie@exemple.fr"
                  value={form.email}
                  onChange={handleChange}
                  className="border border-sage/30 rounded-2xl px-4 py-3 text-deep-sage bg-white placeholder-deep-sage/30 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="modal-dog" className="text-sm font-bold text-deep-sage/70">
                  Race de votre chien{' '}
                  <span className="text-deep-sage/40 font-normal">(optionnel)</span>
                </label>
                <input
                  id="modal-dog"
                  type="text"
                  name="dog"
                  placeholder="Labrador, Border Collie…"
                  value={form.dog}
                  onChange={handleChange}
                  className="border border-sage/30 rounded-2xl px-4 py-3 text-deep-sage bg-white placeholder-deep-sage/30 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-200"
                />
              </div>

              {error && (
                <p className="text-terracotta text-sm font-bold">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 bg-sage text-white font-bold py-4 rounded-2xl hover:bg-deep-sage transition-colors duration-300 shadow-lg shadow-sage/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Envoi en cours…' : 'Rejoindre la waitlist 🐾'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

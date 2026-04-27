import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Home from './Home';

function renderHome() {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
}

describe('Home — CTAs principaux', () => {
  it('affiche le bouton CTA "Télécharger" principal', () => {
    renderHome();
    const btns = screen.getAllByRole('button', { name: /télécharger/i });
    expect(btns.length).toBeGreaterThanOrEqual(1);
  });

  it('affiche le mockup iPhone', () => {
    renderHome();
    expect(
      screen.getByAltText('Application Napoli sur iPhone')
    ).toBeInTheDocument();
  });

  it('contient un unique <h1>', () => {
    renderHome();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });
});

describe('Home — Waitlist & badge VIP', () => {
  it('affiche le badge "Accès VIP Bêta" dans le hero', () => {
    renderHome();
    expect(screen.getByText(/accès vip bêta/i)).toBeInTheDocument();
  });

  it('ouvre la modale waitlist au clic sur "Télécharger"', () => {
    renderHome();
    const btn = screen.getAllByRole('button', { name: /télécharger/i })[0];
    fireEvent.click(btn);
    expect(screen.getAllByText(/rejoindre la waitlist/i).length).toBeGreaterThanOrEqual(1);
  });

  it('affiche le badge "Accès VIP Bêta" dans la modale ouverte', () => {
    renderHome();
    const btn = screen.getAllByRole('button', { name: /télécharger/i })[0];
    fireEvent.click(btn);
    const badges = screen.getAllByText(/accès vip bêta/i);
    expect(badges.length).toBeGreaterThanOrEqual(2);
  });
});

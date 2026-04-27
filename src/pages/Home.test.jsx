import { render, screen } from '@testing-library/react';
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

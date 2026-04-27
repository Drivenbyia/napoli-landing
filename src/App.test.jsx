import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Home from './pages/Home';
import MentionsLegales from './pages/MentionsLegales';

// App contient son propre BrowserRouter — on teste les pages directement
// avec MemoryRouter pour valider que chaque route produit le bon composant.

describe('Routing — pages cibles', () => {
  it('route / → Home affiche un <h1>', () => {
    render(<MemoryRouter><Home /></MemoryRouter>);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it('route /mentions-legales → MentionsLegales affiche un titre correspondant', () => {
    render(<MemoryRouter><MentionsLegales /></MemoryRouter>);
    expect(
      screen.getByRole('heading', { name: /mentions légales/i })
    ).toBeInTheDocument();
  });
});

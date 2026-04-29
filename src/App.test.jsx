import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Home from './pages/Home';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import CGU from './pages/CGU';

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

  it('route /politique-confidentialite → PolitiqueConfidentialite affiche un titre correspondant', () => {
    render(<MemoryRouter><PolitiqueConfidentialite /></MemoryRouter>);
    expect(
      screen.getByRole('heading', { name: /politique de confidentialité/i })
    ).toBeInTheDocument();
  });

  it('route /cgu → CGU affiche un titre correspondant', () => {
    render(<MemoryRouter><CGU /></MemoryRouter>);
    expect(
      screen.getByRole('heading', { name: /conditions générales d'utilisation/i })
    ).toBeInTheDocument();
  });
});

describe('Footer — liens légaux présents sur toutes les pages', () => {
  const pages = [
    { name: 'Home', Component: Home },
    { name: 'MentionsLegales', Component: MentionsLegales },
    { name: 'PolitiqueConfidentialite', Component: PolitiqueConfidentialite },
    { name: 'CGU', Component: CGU },
  ];

  pages.forEach(({ name, Component }) => {
    it(`${name} contient au moins un lien vers /politique-confidentialite`, () => {
      render(<MemoryRouter><Component /></MemoryRouter>);
      const links = screen.getAllByRole('link', { name: /politique de confidentialité/i });
      expect(links.length).toBeGreaterThan(0);
    });

    it(`${name} contient au moins un lien vers /cgu`, () => {
      render(<MemoryRouter><Component /></MemoryRouter>);
      const links = screen.getAllByRole('link', { name: /cgu/i });
      expect(links.length).toBeGreaterThan(0);
    });
  });
});

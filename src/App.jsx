import logo from './logo.svg';
import './App.css';
import klasy from './db';
import { Component } from 'react/cjs/react.production.min';
import ListaUczniow from './ListaUczniow'
import { useState } from 'react';
import react from 'react';

function App() {
  const [wyswietloneListyUczniow, setWyswietloneListyUczniow] = useState([])

  const toggleListaUcznow = (nazwaKlasy) => {
    if (wyswietloneListyUczniow.includes(nazwaKlasy)) {
      const noweWyswietloneListyUczniow = wyswietloneListyUczniow.filter(nazwa => nazwa !== nazwaKlasy)
      setWyswietloneListyUczniow(noweWyswietloneListyUczniow)
    }
    else {
      setWyswietloneListyUczniow([...wyswietloneListyUczniow, nazwaKlasy])
    }
  }

  return (
    <div id="lista">
      <ul style={{
        marginTop: '0',
        paddingTop: '20px',
        paddingBottom: '20px',
        fontSize: '1.5rem',
        fontFamily: 'Sans-Serif',
        border: '1px solid whitesmoke',
        listStyleType: 'none'
      }} className='mainUl'>
        {klasy.map(klasa => (
          <li key={klasa.nazwa}>
            {klasa.nazwa} <button onClick={() => toggleListaUcznow(klasa.nazwa)}>rozwiń</button>
            <ListaUczniow
              uczniowie={klasa.uczniowie}
              isShown={wyswietloneListyUczniow.includes(klasa.nazwa)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
export default function() {

  var songs = [
    'Total Eclipse of Descartes',
    'Don’t You (Foucault About Me)',
    'U Kant Touch This',
    'Hit Me Baby Wittgenstein',
    'Camus Feel the Love Tonight?',
    'Get the Party Sartred',
    'Forever Jung',
    'I Kissed Hegel (And I Liked It)',
    'Ain’t No Montaigne High Enough',
    'Pop, Locke & Drop It',
    'Bataille Will Always Love You',
    'My Milkshake Brings All the Baudrillard',
    'Rousseau Vain (You Probably Think This Song is About You)',
    'Love Voltaire Us Apart',
    'Psycho Schiller'
  ];

  var index = Math.floor(Math.random() * songs.length);

  $('.song').text(songs[index]);
}

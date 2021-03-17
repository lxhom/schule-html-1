window.onload = () => {
  let tick = 0;
  let text = `An sich

Sei dennoch unverzagt! Gib dennoch unverloren!
Weich keinem Glücke nicht, steh höher als der Neid,
vergnüge dich an dir und acht es für kein Leid,
hat sich gleich wider dich Glück, Ort und Zeit verschworen.

Was dich betrübt und labt, halt alles für erkoren;
nimm dein Verhängnis an. Laß alles unbereut.
Tu, was getan muß sein, und eh man dir's gebeut.
Was du noch hoffen kannst, das wird noch stets geboren.

Was klagt, was lobt man noch? Sein Unglück und sein Glücke
ist ihm ein jeder selbst. Schau alle Sachen an:
dies alles ist in dir. Laß deinen eitlen Wahn,

und eh du fürder gehst, so geh in dich zurücke.
Wer sein selbst Meister ist und sich beherrschen kann,
dem ist die weite Welt und alles untertan.

- Paul Fleming
`;

  let setTexts = text => {
    document.querySelector("#text").innerText = text;
    document.title = text;
  }

  let tickFunction = () => {
    setTexts(text.substr(0, tick));
    tick++;
  }

  setInterval(tickFunction, 50)
}

let switchTheme = () => {
  document.documentElement.classList.toggle("dark-mode");
}

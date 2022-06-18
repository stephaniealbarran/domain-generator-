let createDomain = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["nutria", "alpaca"];
  let dom = [".com", ".es", ".org"];


  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let h = 0; h < dom.length; h++) {
          console.log(pronoun[i] + adj[j] + noun[k] + dom[h]);
        }
      }
    }
  }
};
createDomain()
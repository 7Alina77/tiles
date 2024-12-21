const cardImages = [
  {'src': '../images/sea1.jpg'},
  {'src': '../images/sea2.jpg'},
  {'src': '../images/sea3.jpg'},
  {'src': '../images/sea4.jpg'},
  {'src': '../images/sea5.jpg'},
  {'src': '../images/sea6.jpg'},
  {'src': '../images/sea7.jpg'},
  {'src': '../images/sea8.jpg'},
];

export function randomizeCards() {
  const randomizedCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random(), isOpen: false, isMatch: false}))
    return randomizedCards;
}
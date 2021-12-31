const subLists = document.querySelectorAll(".js-accordion__control")

function handleAccordionClick() {
  if(this.style.getPropertyValue('--js-accordionControlPseudoElRotation') === '180deg') {
    this.style.setProperty('--js-accordionControlPseudoElRotation', '0deg');
  } else {
    this.style.setProperty('--js-accordionControlPseudoElRotation', '180deg');
  };
  accordionItem = this.querySelector(".js-accordion__item");
  accordionItem.classList.toggle("is-collapsed")

}

subLists.forEach(list => {
  list.addEventListener("click", handleAccordionClick)
});
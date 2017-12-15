export const vesselStateReasons = [
  {
    id: 1,
    description: 'Personell',
    help_text: 'Mangler bemanning'
  },
  {
    id: 2,
    description: 'Teknisk planlagt',
    help_text: 'Planlagt vertkstedsopphold etc.'
  },
  {
    id: 3,
    description: 'Teknisk uforutsett',
    help_text: 'Teknisk Uforutsett (Uforutsette tekniske problemer'
  },
  {
    id: 4,
    description: 'Hviletid',
    help_text: 'Pålagt hvile'
  },
  {
    id: 5,
    description: 'Operasjonelt',
    help_text: 'Is- og snøforhold'
  }
]

export const getStateReason = id => {
  return vesselStateReasons[id - 1]
}

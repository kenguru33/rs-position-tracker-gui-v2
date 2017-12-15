import deepFreeze from 'deep-freeze'

/**
 * Array of all the vessel states
 */
export const vesselStates = [
  {
    id: 1,
    description: 'Operativ',
    help_text: 'Fartøyet er operativ',
    color: '#4CAF50'
  },
  {
    id: 2,
    description: 'Beredskap',
    help_text: 'Fartøyet er operativ innen maks 30 minutter',
    color: '#FF9800'
  },
  {
    id: 3,
    description: 'UAD',
    help_text: 'Fartøyet er ute av drift',
    color: '#f44336'
  }

  /* {
    id: 4,
    description: 'UAD',
    help_text: 'Ute av drift',
    color: '#f44336'
  },
  {
    id: 5,
    description: 'UAD',
    help_text: 'Ute av drift',
    color: '#f44336'
  },
  {
    id: 6,
    description: 'UAD',
    help_text: 'Ute av drift',
    color: '#f44336'
  },
  {
    id: 7,
    description: 'UAD',
    help_text: 'Operative innen maks 30 minutter',
    color: '#f44336'
  } */
]

export const vesselState = deepFreeze({
  operativ: {id: 1, description: 'Operativ', color: '#4CAF50', helpText: 'Fartøyet er operativ'},
  beredskap: {id: 2, description: 'Beredskap', color: '#FF9800', helpText: 'Fartøyet er operativ innen maks 30 minutter'},
  uad: {id: 3, description: 'Ute av drift', color: '#f44336', helpText: 'Fartøyet er ute av drift'}
})

export const vesselStateReason = deepFreeze({
  personell: {id: 1, description: 'Personell', helpText: 'Mangler bemanning'},
  tekniskPlanlagt: {id: 2, description: 'Teknisk planlagt', helpText: 'Planlagt verkstedsopphold etc.'},
  tekniskUforutsett: {id: 3, description: 'Teknisk uforutsett', helpText: 'Uforutsatte tekniske problemer'},
  hviletid: {id: 4, description: 'Hviletid', helpText: 'Pålagt hvile'},
  Operasjonelt: {id: 5, description: 'Operasjonelt', helpText: 'Is- og snøforhold etc.'}
})

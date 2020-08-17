let moods = []

export const getMoods = () => {
  return fetch ("http://localhost:8088/moods")
  .then(r => r.json())
  .then(pmoods => {
    moods = pmoods
  })
}

export const useMoods = () => moods.slice()

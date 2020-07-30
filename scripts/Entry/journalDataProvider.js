let entries = []

export const getEntries = () => {
  return fetch ("http://localhost:8088/entries")
    .then(res => res.json())
    .then(parsedEntries => {
      entries = parsedEntries
    })
}

export const useJournalEntries = () => {
  const sortedByDate = entries.sort(
    (currentEntry, nextEntry) =>
        Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}


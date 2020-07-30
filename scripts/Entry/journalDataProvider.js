let entries = []

const eventHub = document.querySelector(".eventHub")

const dispatchStateChangeEvent = () => {
  eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

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

export const saveJournalEntry = (entryObj) => {
  fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(entryObj)
  })
  .then(getEntries)
  .then(dispatchStateChangeEvent)
}


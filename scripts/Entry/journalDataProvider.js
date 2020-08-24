let entries = []

const eventHub = document.querySelector(".eventHub")

const dispatchStateChangeEvent = () => {
  const entryStateChangeEvent = new CustomEvent("journalStateChanged")
  
  eventHub.dispatchEvent(entryStateChangeEvent)
}

export const getEntries = () => {
  return fetch ("http://localhost:8088/entries?_expand=instructor&_expand=mood")
    .then(res => res.json())
    .then(parsedEntries => {
      entries = parsedEntries
    })
}

export const useJournalEntries = () => {
  const sortedByDate = entries.sort(
    (currentEntry, nextEntry) =>
        Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
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

export const deleteJournalEntry = (entryId) => {
  return fetch(`http://localhost:8088/entries/${entryId}`, {
    method: "DELETE"
  })
  .then(getEntries)
  .then(dispatchStateChangeEvent)
  .catch(
    (error) => {
      console.log(error)
    }
  )
}

export const editEntry = (entry) => {
  return fetch(`http://localhost:8088/entries/${entry.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entry)
  })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}


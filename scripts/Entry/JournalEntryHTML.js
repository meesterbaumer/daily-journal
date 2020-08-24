import { deleteJournalEntry } from "./JournalDataProvider.js"

const eventHub = document.querySelector(".eventHub")

eventHub.addEventListener("click", event => {
  if (event.target.id.startsWith("journalEntry__delete--")) {
    const [a, id] = event.target.id.split("--")

    deleteJournalEntry(id)
  }
})

eventHub.addEventListener("click", event => {
  if (event.target.id.startsWith("editEntry--")) {
    const [a, id] = event.target.id.split("--")
    const editEntryClicked = new CustomEvent("editEntryClicked", {
      detail: {
        entryId: parseInt(id)
      }
    })
    eventHub.dispatchEvent(editEntryClicked)
  }
})

/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
  return `
  <article id="entry--${entry.id}" class="journalEntry" >
    <div class="journalContentLeft">
      <h3 class="journalEntry__date">Date: ${entry.date}</h3>
      <h4 class="journalEntry__concepts">Concepts Covered: ${entry.concept}</h4>
      <h4 class="journalEntry__instructor">Instructor: ${entry.instructor.firstName} ${entry.instructor.lastName}</h4>
      <div class="journalEntry__text" >${entry.entry}</div>
      <div class="journalEntry__mood" >Daily Mood:  ${entry.mood.label}</div>
      <h4 class="journalEntry__author" >by: Michael Baumer</h4>
    <div class="journalContentRight" >
        <aside class="entryOptions" >
          <button id="editEntry--${entry.id}" class="journalEntry__edit" >Edit</button>
          <button class="journalEntry__delete" id="journalEntry__delete--${entry.id}">Delete</button>
        </aside>
    </div>
  </article>      
  `
}
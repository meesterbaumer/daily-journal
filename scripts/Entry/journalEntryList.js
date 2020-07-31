/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntryHTML.js"

const eventHub = document.querySelector(".eventHub")
const contentTarget = document.querySelector("#entryLog")

eventHub.addEventListener("journalStateChanged", () => {
  const newEntries = useJournalEntries()
  render(newEntries)
})


export const EntryList = () => {
  getEntries()
    .then(() => {
      const allEntries = useJournalEntries()
      render(allEntries)
    })
}

const render = (entryArr) => {
  let entryHTMLRepresentations =""
    for (const entry of entryArr) {
        
        entryHTMLRepresentations += JournalEntryComponent(entry)
    }
  contentTarget.innerHTML = `
    <div class="importedEntries" >
    ${entryHTMLRepresentations}
    </div>
  `
}


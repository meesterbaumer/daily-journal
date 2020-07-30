/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntryHTML.js"

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
  entryLog.innerHTML += `
    <div class="importedEntries" >
    ${entryHTMLRepresentations}
    </div>
  `
}


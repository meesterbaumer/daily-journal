import { saveJournalEntry } from "./JournalDataProvider.js"

const entryLocation = document.querySelector(".entryFormContainer")
const eventHub = document.querySelector(".eventHub")

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "subButton") {
    
    const journalDate = document.querySelector("#journalDate")
    const journalConcepts = document.querySelector("#conceptsCovered")
    const journalEntry = document.querySelector("#journalEntry")
    const journalMood = document.querySelector("#dailyMood")

    const newEntry = {
      date: journalDate.value,
      concept: journalConcepts.value,
      entry: journalEntry.value,
      mood: journalMood.value
    }
    saveJournalEntry(newEntry)
  }
})

export const RenderForm = () => {
  entryLocation.innerHTML = `
  <div class="entryForm">
    <fieldset class="formField" >
      <label for="journalDate">Date of entry</label>
      <input type="date" name="journalDate" id="journalDate">
    </fieldset>
    <fieldset class="formField" >
      <label for="conceptsCovered">Concepts covered</label>
      <input type="text" name="conceptsCovered" id="conceptsCovered">
    </fieldset>
    <fieldset class="formField" >
      <label for="journalEntry">Journal Entry</label>
      <textarea name="journalEntry" id="journalEntry" cols="30" rows="2">Type your journal entry here</textarea>
    </fieldset>
    <fieldset class="formField" >
      <label for="dailyMood">Mood for the day</label>
      <select name="dailyMood" id="dailyMood">
        <option value="overjoyed">Overjoyed</option>
        <option value="happy">Happy</option>
        <option value="meh">Meh...</option>
        <option value="sad">Sad</option>
        <option value="miserable">Miserable</option>
      </select>
    </fieldset>
    <button class="submit--button" id="subButton" type="submit">Record Journal Entry</button>
  </div>
`
}
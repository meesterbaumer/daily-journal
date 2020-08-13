/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
  return `
  <article id="entry--${entry.id}" class="journalEntry" >
    <div class="journalContentLeft" >
      <h3 class="journalEntry__date" >Date: ${entry.date}</h3>
      <h4 class="journalEntry__concepts" >Concepts Covered: ${entry.concept}</h4>
      <div class="journalEntry__text" >${entry.entry}</div>
      <div class="journalEntry__mood" >Daily Mood:  ${entry.mood.label}</div>
      <h4 class="journalEntry__author" >by: Michael Baumer</h4>
    </div>
    <div class="journalContentRight" >
        <aside class="entryOptions" >
          <button class="journalEntry__edit" >edit</button>
          <button class="journalEntry__delete" >delete</button>
        </aside>
    </div>
  </article>      
  `
}
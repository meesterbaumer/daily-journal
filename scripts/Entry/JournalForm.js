const entryLocation = document.querySelector(".entryFormContainer")

export const RenderForm = () => {
  entryLocation.innerHTML = `
  <form class="entryForm" action="">
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
    <button class="submit--button" type="submit">Record Journal Entry</button>
  </form>
`
}
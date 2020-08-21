import { saveJournalEntry, useJournalEntries } from "./JournalDataProvider.js"
import { getMoods, useMoods } from "./MoodProvider.js";
import { getInstructors, useInstructors } from "./instructorProvider.js";

const entryLocation = document.querySelector(".entryFormContainer")
const eventHub = document.querySelector(".eventHub")

export const renderEntryForm = () => {
  getMoods()
    .then(getInstructors)
    .then(() => {
      const moods = useMoods()
      const instructors = useInstructors()
      renderForm(moods, instructors)
    })
  
}

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "subButton") {
    
    const journalDate = document.querySelector("#journalDate")
    const journalConcepts = document.querySelector("#conceptsCovered")
    const journalEntry = document.querySelector("#journalEntry")
    const journalMood = document.querySelector("#dailyMood")
    const journalInstructor = document.querySelector("#instructor")

    const journalMoodId = parseInt(journalMood.value)
    const journalInstructorId = parseInt(journalInstructor.value)

    if (journalMoodId !== 0 && journalInstructorId !== 0) {

      const newEntry = {
        date: journalDate.value,
        concept: journalConcepts.value,
        entry: journalEntry.value,
        moodId: journalMood.value,
        instructorId: journalInstructor.value
      }
      saveJournalEntry(newEntry)
      journalDate.value=""
      journalConcepts.value=""
      journalEntry.value=""
      journalMood.value=""
      journalInstructor.value=""

    }
    else {
      window.alert("Be sure to select a mood & instructor before saving")
    }

  }
})

export const renderForm = (moods, instructors) => {
  entryLocation.innerHTML = `
  <div class="entryForm">
    <fieldset class="formField" >
      <label for="journalDate">Date of entry</label>
      <input type="date" name="journalDate" id="journalDate">
    </fieldset>
    <fieldset class="formField" >
      <label for="conceptsCovered">Concepts covered</label>
      <input type="text" name="conceptsCovered" placeholder="ex. JavaScript, CSS" id="conceptsCovered">
    </fieldset>
    <fieldset class="formField" >
      <label for="journalEntry">Journal Entry</label>
      <textarea name="journalEntry" id="journalEntry" cols="70" placeholder="Type your journal entry here." rows="6"></textarea>
    </fieldset>
    <fieldset class="formField" >
      <label for="dailyMood">Mood for the day</label>
      <select name="dailyMood" id="dailyMood">
        <option value="0">Select your mood</option>
        ${
          moods.map(
            (mood) => {
              return `<option value=${mood.id}>${mood.label}</option>`
            }
          ).join("")
        }
      </select>
      <label for="instructor">Instructor</label>
      <select name="instructor" id="instructor">
        <option value="0">Select your instructor</option>
        ${
          instructors.map(
            (instructor) => {
              return `<option value=${instructor.id}>${instructor.firstName}${instructor.lastName}</option>`
            }
          ).join("")
        }
      </select>
    </fieldset>
    <button class="submit--button" id="subButton" type="submit">Record Journal Entry</button>
  </div>
`
}
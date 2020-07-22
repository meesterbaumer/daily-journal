/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
  {
      id: 1,
      date: "07/24/2025",
      concept: "HTML & CSS",
      entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
      mood: "overjoyed"
  },
  {
    id: 2,
    date: "07/26/2025",
    concept: "Flexbox",
    entry: "We learned how to use flexbox to manipulate code in our HTML",
    mood: "happy"
  },
  {
    id: 3,
    date: "07/26/2025",
    concept: "javascript",
    entry: "Today we learned how javascript allows us to interact with our page.",
    mood: "happy"
  }
]

/*
  You export a function that provides a version of the
  raw data in the format that you want
*/
export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
      (currentEntry, nextEntry) =>
          Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}
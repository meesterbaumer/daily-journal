let instructors = []

export const useInstructors = () => instructors.slice()

export const getInstructors = () => {
  return fetch("http://localhost:8088/instructors")
  .then(res => res.json())
  .then(data => instructors = data)

}
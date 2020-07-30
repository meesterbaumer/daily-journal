import { FormHTMLConverter } from "./formHTMLConverter.js"

const entryLocation = document.querySelector(".entryFormContainer")

export const RenderForm = () => {
  entryLocation.innerHTML = FormHTMLConverter()
}
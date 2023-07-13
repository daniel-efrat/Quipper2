import { NoteForm } from "./NoteForm"
import Logo from "./assets/quipper-logo.png"


export function NewNote({ onSubmit, onAddTag, availableTags }) {
  return (
    <>
      <img width="200px" src={Logo} alt="" />

      <h3 className="mb-4">Create Snippet</h3>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  )
}

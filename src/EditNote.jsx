import { NoteForm } from "./NoteForm"
import { useNote } from "./NoteLayout"

export function EditNote({ onSubmit, onAddTag, availableTags }) {
  const note = useNote()
  return (
    <>
      <h1 className="mb-4">Edit</h1>
      <NoteForm
        isEditing={true}
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  )
}

import { NoteForm } from "./NoteForm"
import Logo from "./assets/quipper-logo.png"
import { useContext } from "react"
import { TopContext } from "./Top" // assuming you have exported the context from Top.js

export function NewNote({ onSubmit, onAddTag, availableTags }) {
  const { agentName, clientName, caseId, issue } = useContext(TopContext) // access values from context

  return (
    <>
      <img width="200px" src={Logo} alt="" />

      <h3 className="mb-4">Create Snippet</h3>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
        agentName={agentName}
        clientName={clientName}
        caseId={caseId}
        issue={issue}
      />
    </>
  )
}

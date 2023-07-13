import React, { useState, useMemo } from "react"
import "./styles/mm.css"

const MM = ({ name, agentName, caseId, issue }) => {
  const [searchText, setSearchText] = useState("")

  const snippets = useMemo(
    () => [
      {
        title: "Chat Start",
        content: `
                    Hello ${name},
                    My name is ${agentName} from the Meta Pro support team.
                    Your case ID for future reference: ${caseId}.
                    I see that you're reaching out regarding ${issue},
                    I'd be happy to look into that for you.
                `,
      },
      {
        content: "Could you please tell me your Ad Account ID?",
      },
      {
        content: `Thank you ${name}, please allow me 2-3 minutes to take a look at the Account on my end. I'll be right back!`,
      },
      {
        content: `Thank you for waiting ${name}, could I call you at _________?`,
      },
    ],
    [name, caseId, issue, agentName]
  )
  const filteredSnippets = snippets.filter((snippet) =>
    snippet.content.toLowerCase().includes(searchText.toLowerCase())
  )

  const copyToClipboard = (content) => {
    const el = document.createElement("textarea")
    el.value = content
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
  }

  return (
    <div dir="ltr">
      {/* Input for searching */}
      <div className="w-250 m-auto">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search..."
          className="w-250 p-2 m-2 border search_input"
        />
      </div>
      <div className="d-flex w-100 p-6">
        {/* Loop through filtered text snippets */}
        {filteredSnippets.map((snippet, index) => (
          <div
            key={index}
            className="d-flex flex-column w-25 p-2 m-2 text-right min-h-230 boxi"
            style={{ minHeight: "230px", wordWrap: "break-word" }}
          >
            <div className="box-body">
              <div dangerouslySetInnerHTML={{ __html: snippet.content }} />
            </div>
            <button
              onClick={() => copyToClipboard(snippet.content)}
              className="mt-4 copyBtn blueBtn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#ffffff"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MM

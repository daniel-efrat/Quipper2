// components/MainComponent.js
"use client"

import MM from "./MM"
// import MF from "./MF"
// import FM from "./FM"
// import FF from "./FF"
import "./styles/Top.css"
import React, { useState, useRef } from "react"

const Top = () => {
  const [agentName, setAgentName] = useState("")
  const [clientName, setClientName] = useState("")
  const [caseId, setCaseId] = useState("")
  const [issue, setIssue] = useState("")

  return (
    <div dir="ltr" className="relative">
      <div className="topFormInner">
      
        <div className="names">
          <div className="p-4 agentName">
            <label htmlFor="agentName">
              Agent name:
            </label>
            <input
              value={agentName}
              onChange={(e) => setAgentName(e.target.value)}
              name="agentName"
              type="text"
              className="mx-2"
            />
          </div>
          <div className="p-4 clientName">
            <label htmlFor="client">
             Client name:
            </label>
            <input
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              name="client"
              type="text"
              className="mx-2"
            />
          </div>
        </div>

        <div className="case">
          <div className="p-4 caseNumber">
            <label htmlFor="caseId">Case ID:</label>
            <input
              value={caseId}
              onChange={(e) => setCaseId(e.target.value)}
              name="caseId"
              type="text"
              className="mx-2"
            />
          </div>
          <div className="caseIssue p-4">
            <label htmlFor="issue">Issue:</label>
            <input
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              name="issue"
              type="text"
              className="mx-2"
            />
          </div>
        </div>
      </div>
     
        <MM
          name={clientName}
          caseId={caseId}
          issue={issue}
          agentName={agentName}
        />
    </div>
  )
}

export default Top

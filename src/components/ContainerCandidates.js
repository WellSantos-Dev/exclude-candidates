import { Header } from "./Header"
import data from '../data'
import { Candidate } from "./Candidate"
import { useEffect, useState } from "react"

export const ContainerCandidates = () => {
  const [ candidates, setCandidates ] = useState([])

  useEffect(() => {
    setCandidates(data)
  }, [])

  const excludeCandidates = (id) => {
    const NewCandidates = candidates.filter((cand) => cand.id !== id);
    setCandidates(NewCandidates)
  }

  if(candidates.length == 0) {
    return <main className="flex items-center justify-center flex-col">
      <div className="w-20 h-20 animate-spin bg-white mb-8 flex items-center justify-center rounded-full">:(</div>
      <h1>Not found candidates</h1>
    </main>
  }

  return (
    <div className="bg-white rounded-md p-24 flex items-center flex-col">
      <Header />
      <div className="flex flex-wrap max-w-80 items-center justify-center" >
        {candidates.map((candidate) => (
          <Candidate candidate={candidate} name={candidate.name} {...candidate} key={candidate.id} excludeCandidates={excludeCandidates}/>
        ))}
      </div>
    </div>
  )
}
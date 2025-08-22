import React from 'react'
import { IdeaFinder } from '../components/IdeaFinder'
/**
 * Bosswallah Frontend Exercise (15–20 min)
 *
 * Scenario:
 *  - Users are aspiring entrepreneurs. They search for a business idea and quickly submit their interest.
 *  - We want a responsive, snappy UX: debounce search, filter by budget, and capture a "lead".
 *
 * Your TODOs are inside <IdeaFinder />. Keep it clean and readable.
 */
export default function App(){
  return (
    <div className="container" style={{maxWidth:860, margin:'0 auto'}}>
      <h1>Bosswallah – Idea Finder</h1>
      <p className="muted">Search business ideas, filter by budget, and submit your interest.</p>
      <IdeaFinder />
    </div>
  )
}
import React from 'react'
import './match.css'

import { MatchResult, MatchSquad } from '../../components/index'

const MatchDetail = () => {
  return (
    <div className='section__padding'>
      <MatchResult />
      <MatchSquad />
    </div>
  )
}

export default MatchDetail
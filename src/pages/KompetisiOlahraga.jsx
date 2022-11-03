import React from 'react'

import { Olahraga, Jadwal} from '../containers/index'
import { g1, g2, g3, g4, g5, g6, g7, g8 } from '../components/department/imports'

const KompetisiOlahraga = () => {
  return (
    <div>
      <Olahraga />
      <Jadwal/>
    </div>
  )
}

export default KompetisiOlahraga
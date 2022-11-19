import React from 'react'
import './matchSquad.css'

const MatchSquad = () => {
  return (
    <div className='spirit__match-squad'>
        <p>SUSUNAN PEMAIN</p>
        <div className='spirit__squad-detail'>
            <div className='spirit__squad-team'>
                <div className='spirit__squad-dept'>
                    <p>G1 STATISTIKA</p>
                </div>
                <p>20 Bambang Sudrajat</p>
                <p>20 Bambang Sudrajat</p>
                <p>20 Bambang Sudrajat</p>
                <p>20 Bambang Sudrajat</p>
                <p>20 Bambang Sudrajat</p>
                <p>20 Bambang Sudrajat</p>
            </div>

            <p>VS</p>

            <div className='spirit__squad-team'>
                <div className='spirit__squad-dept'>
                    <p>G2 GFM</p>
                </div>
                <p>20 Bambang Sudrajat</p>
            </div>
        </div>
    </div>
  )
}

export default MatchSquad
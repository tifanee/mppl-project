import React from 'react'
import { Link } from 'react-router-dom'
import './pressReleaseCard.css'
import {tes1} from '../../assets/tes/imports'

const PressReleaseCard = ({data}) => {
  return (
    <div className='spirit__PR-list-card'>
        <div className='spirit__PR-image'>
            <img src={data.cover_image} alt="" />
        </div>
        <div className='spirit__PR-desc'>
            <div className='spirit__title-credit'>
                <h2>{data.title}</h2>
                <div className='spirit__credit'>
                    <p>oleh</p>
                    <p className='spirit__credit-name'>{data.author}</p>
                </div>
            </div>
            <div className='spirit__PR-detail'>
                <p>{data.published_date}</p>
                <Link to={`/press-release/${data._id}`}>
                    <div className='spirit__PR-detail-link'>
                        <p>Baca Selengkapnya</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PressReleaseCard
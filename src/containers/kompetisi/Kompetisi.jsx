import React, { useState } from 'react'

import './kompetisi.css'
import { Article, ButtonSlider } from '../../components'
import olahragaImage from '../../assets/kompetisi/kompetisi-olahraga.jpeg'
import seniImage from '../../assets/kompetisi/kompetisi-seni.jpeg'

const kompetisiData = [
  {
    type: 'Olahraga',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    kompetisiImage: olahragaImage,
    contentLink: '/kompetisi-olahraga'
  },
  {
    type: 'Seni',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    kompetisiImage: seniImage,
    contentLink: '/kompetisi-seni'
  }
]

const Kompetisi = () => {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if(slideIndex !== kompetisiData.length) {
      setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === kompetisiData.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if(slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1) {
      setSlideIndex(kompetisiData.length)
    }
  }

  const moveDot = index => {
      setSlideIndex(index)
  }

  return (
    <div className='spirit__content section__padding' id='kompetisi'>
      <div className='spirit__heading'>
        <h1>KOMPETISI</h1>
      </div>

      <div className='spirit__kompetisi-content'>
        <ButtonSlider moveSlide={prevSlide} direction='prev' />
        <div className='spirit__kompetisi_slider-container'>
          {kompetisiData.map((item, index) => {
            return (
              <div key={item.type} className={slideIndex === index + 1 ? 'kompetisi-slide active-anim' : 'kompetisi-slide'}>
                {slideIndex === index + 1 && (
                  <>
                    <div className='spirit__article-heading'>
                      <h2>{item.type}</h2>
                    </div>
                    <div className='spirit__kompetisi-article'>
                      <Article text={item.text} contentImage={item.kompetisiImage} contentLink={item.contentLink} />
                    </div>
                  </>
                )}
              </div>
            )
          })}

          <div className="container-dots">
            {Array.from({length: 2}).map((item, index) => (
                <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                ></div>
            ))}
          </div>
        </div>
        <ButtonSlider moveSlide={nextSlide} direction='next' />
      </div>
    </div>
  )
}

export default Kompetisi
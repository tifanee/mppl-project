import React, { useState } from 'react'

import './kompetisi.css'
import { Article, ButtonSlider } from '../../components'
import olahragaImage from '../../assets/kompetisi/kompetisi-olahraga.jpeg'
import seniImage from '../../assets/kompetisi/kompetisi-seni.jpeg'

const kompetisiData = [
  {
    type: 'Olahraga',
    text: 'Kompetisi olahraga dan seni terbesar di FMIPA sudah di depan mata. Gimana nih persiapan setiap departemen kalian? Pasti sudah mempersiapkan yang terbaik dong dan sudah pasti siap untuk menjadi sang juara! Salah satu cabang yang diperlombakan dalam SPIRIT 2022 ini adalah cabang olahraga. Cabang olahraga dalam SPIRIT 2022 ini terbagi lagi menjadi dua, yaitu SPORT dan E-SPORT. Jangan lupa persiapkan jagoan departemenmu, ya! Sampai jumpa!',
    kompetisiImage: olahragaImage,
    contentLink: '/kompetisi-olahraga'
  },
  {
    type: 'Seni',
    text: 'Kompetisi olahraga dan seni terbesar di FMIPA sudah di depan mata. Gimana nih persiapan setiap departemen kalian? Pasti sudah mempersiapkan yang terbaik dong dan sudah pasti siap untuk menjadi sang juara! Salah satu cabang yang diperlombakan dalam SPIRIT 2022 ini adalah cabang seni. Jangan lupa persiapkan jagoan departemenmu, ya! Sampai jumpa!',
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
                      <Article text={item.text} contentImage={item.kompetisiImage} contentLink={item.contentLink} key={item.type} />
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
                    key={index + 1}
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
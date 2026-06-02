import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { slides, meta } from './data/slides.js'

const base = import.meta.env.BASE_URL || '/'
const asset = (src) => {
  if (!src) return ''
  if (/^https?:\/\//i.test(src) || src.startsWith('data:')) return src
  return base + src.replace(/^\//, '')
}

function App() {
  const [active, setActive] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [music, setMusic] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      const next = Math.round(progress * (slides.length - 1))
      setActive(Math.max(0, Math.min(slides.length - 1, next)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const progress = useMemo(() => `${((active + 1) / slides.length) * 100}%`, [active])

  const toggleMusic = async () => {
    const audio = document.getElementById('music')
    if (!audio) return
    if (audio.paused) {
      await audio.play().catch(() => null)
      setMusic(!audio.paused)
    } else {
      audio.pause()
      setMusic(false)
    }
  }

  const goTo = (index) => {
    const section = document.getElementById(`slide-${index}`)
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      {!loaded && (
        <div className="loader">
          <div className="loader-heart">♡</div>
          <p>{meta.loaderText}</p>
        </div>
      )}

      <audio id="music" src={asset(meta.musicSrc)} loop preload="none" />
      <button className={`music ${music ? 'is-playing' : ''}`} onClick={toggleMusic} aria-label="Включить музыку">♪</button>

      <div className="progress"><span style={{ width: progress }} /></div>

      <div className="backgrounds" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            className={`bg ${index === active ? 'active' : ''}`}
            key={slide.title}
            style={{ backgroundImage: `linear-gradient(180deg, rgba(5,4,8,.48), rgba(5,4,8,.70)), url(${asset(slide.image)}), ${slide.fallback}` }}
          />
        ))}
      </div>

      <div className="dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={index === active ? 'active' : ''}
            onClick={() => goTo(index)}
            aria-label={`Экран ${index + 1}`}
          />
        ))}
      </div>

      {slides.map((slide, index) => (
        <section id={`slide-${index}`} className="slide" key={slide.title}>
          <div className={`text-card ${index === active ? 'active' : ''}`}>
            {slide.subtitle && <p className="eyebrow">{slide.subtitle}</p>}
            <h1>{slide.title}</h1>
            <div className="line" />
            <p className="copy">{slide.text}</p>
            {index === 0 && <button className="cta" onClick={() => goTo(1)}>Начать ↓</button>}
            {index === slides.length - 1 && <button className="cta" onClick={() => goTo(0)}>Вернуться в начало ↑</button>}
          </div>
        </section>
      ))}
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)

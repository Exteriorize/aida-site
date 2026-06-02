import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const memories = [
  ['Наш первый день', 'Момент, который хочется помнить всегда.', '/photos/photo1.jpg'],
  ['Тёплый вечер', 'С тобой даже обычный день становится особенным.', '/photos/photo2.jpg'],
  ['Просто мы', 'В этом кадре осталось моё счастье.', '/photos/photo3.jpg'],
  ['Наша прогулка', 'Ты — лучшее, что случалось со мной.', '/photos/photo4.jpg'],
  ['Маленькое счастье', 'Каждое воспоминание с тобой бесценно.', '/photos/photo5.jpg'],
  ['Наши мечты', 'Я хочу собрать с тобой ещё тысячи таких моментов.', '/photos/photo6.jpg'],
]

const phrases = [
  'Ты — мой самый любимый человек.',
  'Рядом с тобой мне спокойно и по-настоящему тепло.',
  'Когда я думаю о счастье, я думаю о тебе.',
  'С тобой я хочу делить не только дни, но и целую жизнь.',
]

function App() {
  const playMusic = () => {
    const audio = document.getElementById('song')
    if (audio) audio.paused ? audio.play() : audio.pause()
  }

  return (
    <main>
      <audio id="song" src="/music/song.mp3" />
      <button className="music" onClick={playMusic}>♪</button>

      <section className="hero">
        <div className="shine" />
        <p className="label">для моей Аиды</p>
        <h1>Аида, это история о нас</h1>
        <p className="subtitle">О любви, воспоминаниях, моментах счастья и мечтах, которые я хочу разделить только с тобой.</p>
        <a href="#memories" className="button">Открыть нашу историю</a>
      </section>

      <section id="memories" className="section">
        <p className="label">наши воспоминания</p>
        <h2>Моменты, которые хочется сохранить</h2>
        <div className="grid">
          {memories.map(([title, text, img]) => (
            <article className="card" key={title}>
              <div className="photo" style={{ backgroundImage: `url(${img})` }}>
                <span>♡</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section soft">
        <p className="label">милые слова</p>
        <h2>Фразы, которые я хочу сказать тебе</h2>
        <div className="phrases">
          {phrases.map((phrase) => <div className="phrase" key={phrase}>“{phrase}”</div>)}
        </div>
      </section>

      <section className="piter">
        <p className="label">наша мечта</p>
        <h2>Наш будущий Питер</h2>
        <p className="wide">Я представляю, как однажды мы будем гулять по улицам Петербурга, пить кофе у окна, любоваться огнями города, строить наши планы и чувствовать, что это и есть наша новая глава. Питер для меня — это не просто город, а мечта о будущем, в котором есть мы.</p>
        <div className="plans">
          <div><b>Переехать в Питер</b><span>Начать новую главу нашей жизни в городе мечты.</span></div>
          <div><b>Найти нашу квартиру</b><span>Создать место, где будет уют, любовь и ощущение дома.</span></div>
          <div><b>Гулять вечером вдвоём</b><span>Мосты, Невский, кофе, дождь и мы.</span></div>
          <div><b>Строить будущее</b><span>Делать шаги к нашей общей жизни.</span></div>
        </div>
      </section>

      <section className="section letter">
        <p className="label">письмо</p>
        <h2>Для тебя</h2>
        <p>Аида, я хотел сделать для тебя что-то особенное — место, где можно сохранить частичку наших чувств, воспоминаний и мечтаний. Ты стала для меня очень важным человеком, рядом с которым я чувствую тепло, спокойствие и счастье. Мне хочется, чтобы у нас впереди было ещё много прекрасных моментов, поездок, смеха, объятий и общих историй. Я очень дорожу тобой и тем, что между нами есть. И мне хочется верить, что однажды все наши мечты, включая Питер, станут реальностью.</p>
        <strong>С любовью.</strong>
      </section>

      <section className="final">
        <h2>Это только начало нашей истории</h2>
        <p>Самое красивое у нас ещё впереди.</p>
        <a href="#top" className="button">Вернуться в начало</a>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)

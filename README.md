# 💌 Аида, это история о нас

Романтический сайт-подарок для Аиды: воспоминания, нежные фразы, мечты о Питере и письмо.

## Запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```

## Куда добавлять фотографии

Фотографии загружай в папку:

```text
public/photos
```

В коде уже прописаны такие имена:

```text
photo1.jpg
photo2.jpg
photo3.jpg
photo4.jpg
photo5.jpg
photo6.jpg
```

То есть, например, файл должен лежать так:

```text
public/photos/photo1.jpg
```

А путь в коде будет:

```text
/photos/photo1.jpg
```

## Куда добавлять музыку

Музыку положи сюда:

```text
public/music/song.mp3
```

Кнопка музыки находится внизу справа. Музыка запускается только по нажатию.

## Публикация на GitHub Pages

В проекте уже есть `.github/workflows/deploy.yml` и в `vite.config.js` указан:

```js
base: '/aida-site/'
```

Чтобы сайт появился на GitHub Pages:

1. Открой репозиторий на GitHub.
2. Перейди в **Settings → Pages**.
3. В разделе **Build and deployment** выбери **Source: GitHub Actions**.
4. После этого workflow опубликует сайт.

Адрес будет примерно такой:

```text
https://exteriorize.github.io/aida-site/
```

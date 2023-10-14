# Магазин Единороги и Цветы

- Хранение и расположение файлов:
  - Медиа файлы хранятся в директории `media/`, т.е. картинки и тд
  - Стили и js код в директории `static/`
  - Вертка главного экрана хранится в `backend/main_screen/templates/index.html`

- Изменение и доработка лендинга:
  - Чтобы добавить что-либо загружаем файлы в директории указанные выше и добавляем путь вида `./static/` или `./media/`
```html
<link rel="stylesheet" href="./static/florist.css">
<link rel="stylesheet" href="./static/florist-media.css">
<link rel="icon" href="./media/favicon.jpg" type="image/x-icon">
```

- Работа с сервером:
    - Вход на сервер либо через панель в браузере, либо через терминал на маке/убунту:
    ```sh
    ssh root@81.163.31.184
    root@81.163.31.184's password: # вводим пароль
    ```
    - Когда осуществили вход переходим в директорию нашего проекта:
    ```sh
    cd ../../opt/Unicorn-and-Flowers/
    # проверяем что мы на месте командой ls
    ls
    # видим наш проект
    README.md  backend  db_data  docker-compose.prod.yml  docker-compose.yml  media  nginx  nginx_ssl  static
    ```
    - Запускаем скрипт для обновления контейнеров:
    ```sh
    ./deploy.sh
    # видим как наши контейнеры пересобираются
    ```

UF
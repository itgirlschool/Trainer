style ===> scss
(в компоненте родитель должен иметь в названии имя компонента, остольные все стили должны быть вложены в этот класс)
vars.scss ==> храним переменные
template.scss ===> храним миксины и шаблоны.

архитектура папок

api --> храним все обращения к серверу
common --> шаблонные функции
assets --> картинки(svg,webp)
public --> шрифты(шрифты храняться локально, подключается через стили)
page ---> глобальные страницы
store ---> стэйтменеджеры и миделваеры к ним
style ---> глобальные стили
Components ---> компоненты

Бибилотеки
Для стилей используем https://ant.design/
Для валидации https://www.react-hook-form.com/
роутинг https://reactrouter.com/en/main
StateManager https://redux-toolkit.js.org/introduction/getting-started

Правило работы с гитом
-Для каждой задачи создается отдельная ветка(ветка должны быть названа в соответствии с названием задачи)
-После принтия ПР , ветка удаляется, работу продолжать в ней мы больше не можем

- Пр должен быть оформлен с описанием и по возможности в него мы вкладываем скрины
- Ревьером назначам меня
  -ПР самстоятельно заливать в дев вы не можете!!!!
  -коммиты пишем на английском (описание на русском)

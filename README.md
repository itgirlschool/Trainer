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

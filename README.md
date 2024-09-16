# Магазинчик Пиццы

Посетить: <a href="https://pizza-market-cyan.vercel.app/">pizza-market-cyan.vercel.app</a>

<img src="https://github.com/lira-bazh/pizza-market/blob/master/screen.png" width="350">

Стэк: Typescript, React, Redux-toolkit

### Фишки

+ Для удобства работы со списоком планка с фильтрами и корзиной прилипает сверху страницы во время прокрутки.
+ В узком варианте кнопка корзины фиксируется в правом нижнем углу, а фильтры остаются сверху (**адаптивная верстка**).
+ Пиццы можно фильтровать по типу.
+ При прокрутке страницы вниз реализована подгрузка новых пицц (**infinite scroll**).
+ Можно выбрать толщину теста, размер пиццы - от этого изменяется цена. Не для всех пицц доступны все настройки.
+ На основной странице видно какие пиццы уже добавлены в корзину.
+ В корзине видно отдельными позициями какие пиццы были выбраны, их общее количество и полная стоимость заказа.

### Как запустить?
    npm install
    npm run dev
Запускается по адресу http://localhost:8081

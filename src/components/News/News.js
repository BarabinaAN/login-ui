import React from 'react'
import './News.scss'

const News = () => {
   return (
      <section className='first-screen px-4 py-5'>
         <h1 className='mb-4'>Новости</h1>
         <article>
            <h2>Заголовок</h2>
            <p>
               Разнообразный и богатый опыт консультация с широким активом 
               позволяет выполнять важные задания по разработке новых 
               предложений. Повседневная практика показывает, что 
               реализация намеченных плановых заданий позволяет оценить 
               значение новых предложений. Повседневная практика показывает, 
               что новая модель организационной деятельности позволяет 
               выполнять важные задания по разработке дальнейших направлений 
               развития.
            </p>
            <p>
               Дата публикации: <time datetime="2012-12-30"> 30.08.2020</time>
            </p>
         </article>
      </section>
   )
}

export default News
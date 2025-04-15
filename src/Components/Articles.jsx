import React from 'react'

const Articles = () => {
  return (
    <div>
      <section id="articles" className="articles">
            <h2>Latest Articles</h2>
            <div className="articles-grid">
                <article className="article-card">
                    <div className="article-image">
                        <img src="img/food.webp" loading='lazy' alt="Article about nutrition" />
                    </div>
                    <div className="article-content">
                        <h3>The Importance of Fruits and Vegetables in Your Diet</h3>
                        <p>Learn about the health benefits of fruits and vegetables and how to incorporate them into your daily diet</p>
                        <button className="read-more">Read More</button>
                    </div>
                </article>
                <article className="article-card">
                    <div className="article-image">
                        <img src="img/sport.webp" alt="Article about sleep" />
                    </div>
                    <div className="article-content">
                        <h3>Healthy Sleep and Its Impact on Overall Health</h3>
                        <p>Your comprehensive guide to improving sleep quality and getting adequate rest</p>
                        <button className="read-more">Read More</button>
                    </div>
                </article>
            </div>
        </section>
    </div>
  )
}

export default Articles;

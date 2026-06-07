import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Photos } from '../../../../photo';
import styles from '../News/News.module.scss';

function News() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3030/api/news')
            .then((res) => res.json())
            .then((data) => {
                setNews(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching news:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (!news.length) return null;

    const activeNews = news[activeIndex];

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? news.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === news.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className={styles.News}>
            <div className={styles.container}>
                <div className={styles.navigation}>
                    <NavLink to="/" className={styles.newsNavLink}>
                        Главная
                    </NavLink>

                    <div className={styles.line} />

                    <NavLink to="/news" className={styles.newsNavLink}>
                        Новости
                    </NavLink>

                    <div className={styles.line} />

                    <p className={styles.NewsCurrentTitle}>{activeNews.title}</p>
                </div>

                <div className={styles.body}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <p>{activeNews.title}</p>
                        </div>
                    </div>

                    <div className={styles.topNews}>
                        <div className={styles.NewsText}>
                            <h2>
                                <span>#Новости</span>&nbsp;&nbsp;&nbsp;17.01.22
                            </h2>

                            <p className={styles.text}>
                                Повседневная практика показывает, что реализация намеченных плановых
                                заданий играет важную роль в формировании систем массового участия.
                                Задача организации, в особенности же рамки и место обучения кадров
                                требуют определения и уточнения новых предложений. С другой стороны
                                постоянный количественный рост и сфера нашей активности способствует
                                подготовки и реализации новых предложений.
                            </p>
                        </div>

                        <div className={styles.image}>
                            <img src={Photos.Veget} alt="" />
                        </div>
                    </div>

                    <div className={styles.bottomNews}>
                        <div className={styles.image}>
                            <img src={Photos.Veget} alt="" />
                        </div>

                        <div className={styles.NewsText}>
                            <p className={styles.text}>
                                Повседневная практика показывает, что реализация намеченных плановых
                                заданий играет важную роль в формировании систем массового участия.
                                Задача организации, в особенности же рамки и место обучения кадров
                                требуют определения и уточнения новых предложений. С другой стороны
                                постоянный количественный рост и сфера нашей активности способствует
                                подготовки и реализации новых предложений.
                            </p>
                        </div>
                    </div>

                    <p className={styles.textBottom}>
                        Повседневная практика показывает, что реализация намеченных плановых заданий
                        играет важную роль в формировании систем массового участия. Задача
                        организации, в особенности же рамки и место обучения кадров требуют
                        определения и уточнения новых предложений. С другой стороны постоянный
                        количественный рост и сфера нашей активности способствует подготовки и
                        реализации новых предложений.
                    </p>

                    <div className={styles.buttons}>
                        <button onClick={handlePrev}>Предыдущая новость</button>

                        <button onClick={handleNext}>Следующая новость</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default News;

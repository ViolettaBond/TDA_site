import { useState } from 'react';
import styles from './SaleItems.module.scss';

import morkovImg from '../../assets/morkov.svg';
import tomatoImg from '../../assets/tomato.svg';

const imagesMap = {
    1: morkovImg,
    2: tomatoImg,
    3: tomatoImg,
    4: tomatoImg,
    5: tomatoImg,
};

export default function SaleItems({ products }) {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!products || products.length === 0) return null;

    const next = () => {
        setActiveIndex((prev) => (prev + 1) % products.length);
    };

    const prev = () => {
        setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
        <section className={styles.saleItems}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Акционные товары</h2>
                    <p className={styles.link}>Смотреть все</p>
                </div>

                {/* MAP, но показываем только active */}
                {products.map((item, index) => {
                    if (index !== activeIndex) return null;

                    return (
                        <div key={item.id} className={styles.body}>
                            <div className={styles.leftBody}>
                                <div className={styles.text}>
                                    <h3 className={styles.subtitle}>{item.name}</h3>

                                    <p className={styles.description}>{item.description}</p>

                                    <div className={styles.sales}>
                                        <p className={styles.newPrice}>{item.price} ₽/кг</p>
                                        {item.price_old && (
                                            <p className={styles.oldPrice}>{item.price_old} ₽/кг</p>
                                        )}
                                    </div>

                                    <div className={styles.button}>
                                        <button className={styles.addCart}>В корзину</button>
                                        <button className={styles.moreDetails}>Подробнее</button>
                                    </div>
                                </div>

                                <div className={styles.controls}>
                                    <button onClick={prev} className={styles.arrow}>
                                        ‹
                                    </button>
                                    <button onClick={next} className={styles.arrow}>
                                        ›
                                    </button>
                                </div>
                            </div>

                            <div className={styles.rightBody}>
                                <img src={imagesMap[item.id]} alt={item.name} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

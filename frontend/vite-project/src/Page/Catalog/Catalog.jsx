import styles from '../Catalog/Catalog.module.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import milk from '../../assets/milk.jpg';
import meat from '../../assets/meat.jpg';
import vegetables from '../../assets/veget_popul.jpg';
import berries from '../../assets/berries.jpg';

const categories = [
    { id: 1, title: 'Молочная продукция', image: milk },
    { id: 2, title: 'Мясная продукция', image: meat },
    { id: 3, title: 'Овощи', image: vegetables },
    { id: 4, title: 'Ягоды', image: berries },
    { id: 5, title: 'Молочная продукция', image: milk },
    { id: 6, title: 'Мясная продукция', image: meat },
    { id: 7, title: 'Овощи', image: vegetables },
    { id: 8, title: 'Ягоды', image: berries },
    { id: 9, title: 'Молочная продукция', image: milk },
    { id: 10, title: 'Мясная продукция', image: meat },
    { id: 11, title: 'Овощи', image: vegetables },
    { id: 12, title: 'Ягоды', image: berries },
];
export default function Catalog() {
    const [activePage, setActivePage] = useState(0);

    return (
        <>
            <section className={styles.catalogHeader}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <NavLink to="/">Главная</NavLink>
                        <div className={styles.divided}></div>
                        <NavLink to="/catalog">Каталог</NavLink>
                    </div>
                </div>
            </section>

            <section className={styles.catalog}>
                <div className={styles.title}>
                    <h1>Каталог</h1>
                </div>

                <div className={styles.grid}>
                    {categories.map((category) => (
                        <div key={category.id}>
                            <div className={styles.card}>
                                <div className={styles.image}>
                                    <img src={category.image} />
                                </div>
                                <div className={styles.title}>{category.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

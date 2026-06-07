import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { Photos } from '../../../../photo';

function Header() {
    const [selectedCity, setSelectedCity] = useState('г. Владивосток');
    const [isOpen, setIsOpen] = useState(false);
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const cities = ['г. Владивосток', 'г. Москва', 'г. Новосибирск'];

    const handleCitySelect = (city) => {
        setSelectedCity(city);
        setIsOpen(false);
    };

    useEffect(() => {
        fetch('http://localhost:3030/api/categories')
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Ошибка загрузки категорий:', error);
                setLoading(false);
            });
    }, []);

    const toggleCatalog = () => {
        setIsCatalogOpen(!isCatalogOpen);
    };

    const closeCatalog = () => {
        setIsCatalogOpen(false);
    };

    return (
        <>
            <section className={styles.Header}>
                <div className={styles.HeaderBlock}>
                    <div className={styles.HeaderTDA_Block}>
                        <NavLink to={'/'}>
                            <img src={Photos.TDAlogo} alt="TDA Logo" className={styles.TDAlogo} />
                        </NavLink>

                        <div className={styles.InputSearch}>
                            <input type="text" placeholder="Поиск" />
                            <button>
                                <img src={Photos.Search} alt="Search" />
                            </button>
                        </div>

                        <div className={styles.ChoiceCity}>
                            <div className={styles.PhotoNav}>
                                <img src={Photos.Navigation} alt="Navigation" />
                            </div>

                            <div className={styles.FilialSelector}>
                                <label className={styles.Label}>Выберите филиал:</label>

                                <div className={styles.CityDropdown}>
                                    <button
                                        className={styles.CityButton}
                                        onClick={() => setIsOpen(!isOpen)}>
                                        <span>{selectedCity}</span>
                                        <span
                                            className={`${styles.Arrow} ${isOpen ? styles.ArrowOpen : ''}`}>
                                            <img src={Photos.ArrowDown} alt="Arrow" />
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className={styles.CityList}>
                                            {cities.map((city) => (
                                                <div
                                                    key={city}
                                                    className={`${styles.CityItem} ${selectedCity === city ? styles.Active : ''}`}
                                                    onClick={() => handleCitySelect(city)}>
                                                    <span>{city}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className={styles.OurPhone}>
                            <div className={styles.PhotoPhone}>
                                <img src={Photos.Phone} alt="Phone" />
                            </div>

                            <div className={styles.NumberPhone}>
                                <span>+7 (123) 456-78-90</span>
                                <span>+7 (123) 456-78-90</span>
                            </div>
                        </div>

                        <div className={styles.ContactUs}>
                            <button>
                                <img src={Photos.Mail} alt="Mail" />
                                <span className={styles.Divider}></span>
                                <span className={styles.ButtonText}>Написать нам</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.HeaderList}>
                    <nav className={styles.CategoryNav}>
                        <button
                            className={`${styles.CatalogButton} ${isCatalogOpen ? styles.CatalogButtonActive : ''}`}
                            onClick={toggleCatalog}>
                            <span className={styles.BurgerIcon}>{isCatalogOpen ? '✕' : '≡'}</span>
                            <span className={styles.Divider}></span>
                            <span onClick={(e) => e.stopPropagation()}>
                                <NavLink to={'/catalog'}>Каталог</NavLink>
                            </span>
                        </button>

                        {isCatalogOpen && (
                            <div className={styles.CatalogMenu}>
                                <div className={styles.CatalogOverlay} onClick={closeCatalog}></div>
                                <div className={styles.CatalogDropdown}>
                                    {loading ? (
                                        <div className={styles.Loading}>Загрузка...</div>
                                    ) : (
                                        <ul className={styles.CatalogList}>
                                            {categories.map((category) => (
                                                <li key={category.id}>
                                                    <NavLink
                                                        to={`/category/${category.id}`}
                                                        onClick={closeCatalog}>
                                                        {category.name}
                                                    </NavLink>
                                                    <img src={Photos.ChevronLeft} alt="" />
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        )}

                        <ul className={styles.CategoryList}>
                            <li>
                                <a href="#">Молочная продукция</a>
                            </li>
                            <li>
                                <a href="#">Мясная продукция</a>
                            </li>
                            <li>
                                <a href="#">Напитки</a>
                            </li>
                            <li>
                                <a href="#">Бакалея</a>
                            </li>
                            <li>
                                <a href="#">Грибы</a>
                            </li>
                            <li>
                                <a href="#">Крупы</a>
                            </li>
                            <li>
                                <a href="#">Овощи</a>
                            </li>
                            <li>
                                <a href="#">Ягоды</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    );
}

export default Header;

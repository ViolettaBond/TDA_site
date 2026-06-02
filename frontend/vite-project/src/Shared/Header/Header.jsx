import { useState } from 'react';
import styles from './Header.module.scss';
import { Photos } from '../../../../photo';

function Header() {
    const [selectedCity, setSelectedCity] = useState('г. Владивосток');
    const [isOpen, setIsOpen] = useState(false);
    const cities = ['г. Владивосток', 'г. Москва', 'г. Новосибирск'];

    const handleCitySelect = (city) => {
        setSelectedCity(city);
        setIsOpen(false);
    };

    return (
        <>
            <section className={styles.Header}>
                <div className={styles.HeaderBlock}>
                    <div className={styles.HeaderTDA_Block}>
                        <img src={Photos.TDAlogo} alt="" className={styles.TDAlogo} />

                        <div className={styles.InputSearch}>
                            <input type="text" placeholder="Поиск" />
                            <button>
                                <img src={Photos.Search} alt="" />
                            </button>
                        </div>

                        <div className={styles.ChoiceCity}>
                            <div className={styles.PhotoNav}>
                                <img src={Photos.Navigation} alt="" />
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
                                            <img src={Photos.ArrowDown} alt="" />
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
                                <img src={Photos.Phone} alt="" />
                            </div>

                            <div className={styles.NumberPhone}>
                                <span>+7 (123) 456-78-90</span>
                                <span>+7 (123) 456-78-90</span>
                            </div>
                        </div>

                        <div className={styles.ContactUs}>
                            <button>
                                <img src={Photos.Mail} alt="" />
                                <span className={styles.Divider}></span>
                                <span className={styles.ButtonText}>Написать нам</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.HeaderList}>
                    <nav className={styles.CategoryNav}>
                        <button className={styles.CatalogButton}>
                            <span className={styles.BurgerIcon}>≡</span>
                            <span className={styles.Divider}></span>
                            <span>Каталог</span>
                        </button>

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

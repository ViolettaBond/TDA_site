import styles from '../Footer/Footer.module.scss';
import { NavLink } from 'react-router-dom';
import { Photos } from '../../../../photo';

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <div className={styles.logo}>
                            <img src={Photos.TDAlogo} alt="" />
                        </div>

                        <div className={styles.footerContent}>
                            <div className={styles.aboutCompany}>
                                <h3>О компании</h3>

                                <ul>
                                    <li>
                                        <NavLink to="/news">Новости</NavLink>
                                    </li>
                                    <li>Контакты</li>
                                    <li>Пользовательское соглашение</li>
                                    <li>Политика обработки персональных данных</li>
                                </ul>
                            </div>

                            <div className={styles.toBuyers}>
                                <h3>Покупателям</h3>

                                <ul>
                                    <li>Доставка и оплата</li>
                                    <li>Как вернуть</li>
                                    <li>Как заказать</li>
                                    <li>Программа лояльности</li>
                                    <li>Вопросы и ответы</li>
                                    <li>Юридическим лицам</li>
                                </ul>
                            </div>

                            <div className={styles.mailing}>
                                <h3>Подписаться на рассылку актуальных новостей:</h3>

                                <div className={styles.subscribeForm}>
                                    <input type="text" placeholder="Email" />

                                    <button>
                                        <img src={Photos.Mail} alt="" />

                                        <span className={styles.Divider}></span>

                                        <span className={styles.ButtonText}>Подписаться</span>
                                    </button>
                                </div>

                                <h4>Заказывайте товары круглосуточно и задавайте вопросы</h4>

                                <p className={styles.phoneNumber}>8 800 123-45-67</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.divided}></div>

                    <div className={styles.footerBottom}>
                        <p>© Интернет-магазин «TDA»</p>

                        <div className={styles.socials}>
                            <div className={styles.socialNetwork}>
                                <img className={styles.icon} src={Photos.Twitter} alt="" />
                            </div>

                            <div className={styles.socialNetwork}>
                                <img className={styles.icon} src={Photos.Facebook} alt="" />
                            </div>

                            <div className={styles.socialNetwork}>
                                <img className={styles.icon} src={Photos.Vk} alt="" />
                            </div>

                            <div className={styles.socialNetwork}>
                                <img className={styles.icon} src={Photos.Insta} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

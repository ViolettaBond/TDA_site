import styles from '../Homepage/Homepage.module.scss';
import { useState, useEffect } from 'react';
import { Photos } from '../../../../photo';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import CircularSlider from '../../Shared/CircularSlider/CircularSlider';

import 'swiper/css';
import 'swiper/css/navigation';
import CategoriesSlider from '../../Shared/CategoriesSlider/CategoriesSlider';
import SalesItemSlider from '../../Shared/SalesItemSlider/SalesItemSlider';

function Homepage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3030/api/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <section className={styles.ProductsSlider}>
                <div className={styles.sliderContainer}>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        loop={true}
                        slidesPerView="auto"
                        spaceBetween={20}
                        className={styles.mySwiper}>
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className={styles.HoverSliderCart}>
                                    <div className={styles.imageWrapper}>
                                        <img
                                            src={product.image || Photos.Ketchup}
                                            alt={product.name}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = Photos.Ketchup;
                                            }}
                                        />
                                    </div>

                                    <div className={styles.tariffItem}>
                                        <div className={styles.tariffTextIcon}>
                                            <p className={styles.name}>{product.name}</p>
                                        </div>

                                        <div className={styles.priceBlock}>
                                            {product.price_old && (
                                                <p className={styles.OldPrice}>
                                                    {product.price_old}₽
                                                </p>
                                            )}

                                            <div className={styles.PriceImage}>
                                                <p className={styles.Price}>{product.price}₽</p>

                                                <div className={styles.ImgShopBag}>
                                                    <img src={Photos.ShopBag} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="swiper-button-prev-custom">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M15 19L8 12L15 5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="swiper-button-next-custom">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M9 5L16 12L9 19"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </section>

            <section className={styles.CirSlide}>
                <CircularSlider />
            </section>

            <section className={styles.popularCategory}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Популярные категории</h2>
                    <p className={styles.link}>Смотреть все</p>
                </div>
                <div className={styles.slider}>
                    <CategoriesSlider />
                </div>
            </section>

            <SalesItemSlider products={products} />
        </>
    );
}

export default Homepage;

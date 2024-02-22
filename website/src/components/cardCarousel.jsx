import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const CardCarousel = ({ entries }) => {
    return (
        <div className='card-carousel'>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper w-75"
            >
                {entries.map((entry) => (
                    <SwiperSlide
                        key={entry.title}
                        className={`rounded-3 ${entry.link ? 'clickable-slide' : ''} ${entry.imageLink ? 'image-slide' : ''}`}
                        // If entry has an external link, open it in a new tab on click
                        onClick={() => entry.link && window.open(entry.link, '_blank')}
                        aria-label={entry.link ? `${entry.link} (opens in new tab)` : ""}
                        rel={entry.link ? "noopener noreferrer" : ""}
                        // If entry has an image, set the slide's background image to it
                        style={entry.imageLink ? { backgroundImage: `url(${entry.imageLink})` } : {}}
                    >
                        <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100 p-3">
                            <h2>{entry.title}</h2>
                            <h3>{entry.start} {entry.end && <> &mdash; {entry.end}</>}</h3>
                            <p>{entry.content}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default CardCarousel;

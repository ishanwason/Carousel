import React, { useState } from 'react';
import './style.css';

const Slider = (props) => {
    const [slide, setSlide] = useState(0)
    const images = ['https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg',
        'https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg',
        'https://wowslider.com/sliders/demo-5/data/images/sweden.jpg',
        'https://mobirise.com/bootstrap-carousel/assets2/images/mitchel-lensink-205264-2000x1333.jpg',
        'https://jssors8.azureedge.net/demos/image-slider/img/px-fun-man-person-2361598-image.jpg',
        'https://wowslider.com/sliders/demo-44/data1/images/bridge.jpg',
    ]
    const handleLeft = () => {
        (slide === 0) ? setSlide(- 100 * (images.length - 1)) : setSlide(100 + slide)
    }
    const handleRight = () => {
        (slide === (-100 * (images.length - 1))) ? setSlide(0) : setSlide(slide - 100);
    }
    const handleBulletChange = (index) => {
        setSlide(-(index * 100))
    }
    const handleDrag = (e) => {
        e.preventDefault();
        e.dataTransfer.setDragImage(new Image(), 0, 0);
        setSlide((-Math.ceil(e.pageX / 100) * 100) % 500);
    }
    const getBulletColor = (index) => {
        console.log(-(slide / 100) === index)
        if ((-slide / 100) === index)
            return { color: 'white', fontSize: '15px' }
        return { fontSize: '15px' }
    }

    return (
        <div className='slider-screen'>
            {!!images.length && images.map((item, index) => (
                <img src={item} className="image-display" onDragOver={e => handleDrag(e)} style={{ transform: `translateX(${slide}%)` }} key={index} />
            ))}
            <button className="align-left-button" disabled={!images.length} onClick={handleLeft}>
                <span className="material-icons icon-resize" >keyboard_arrow_left</span>
            </button>
            <button className="align-right-button" disabled={!images.length} onClick={handleRight}>
                <span className="material-icons icon-resize">keyboard_arrow_right</span>
            </button>
            <ul className="align-bullets">
                {!!images.length && images.map((item, index) => (
                    <li key={index} className="list-item" onClick={() => handleBulletChange(index)}>
                        <span class="material-icons" style={getBulletColor(index)}>lens</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Slider
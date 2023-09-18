import './featuredProperties.css';

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img 
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                    alt="" 
                    className="fpImg" 
                />
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice">Starting from $120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img 
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o="
                    alt="" 
                    className="fpImg" 
                />
                <span className="fpName">Comfort Suites Airport</span>
                <span className="fpCity">Austin</span>
                <span className="fpPrice">Starting from $140</span>
                <div className="fpRating">
                    <button>9.3</button>
                    <span>Exceptional</span>
                </div>
            </div>
            <div className="fpItem">
                <img 
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/189901067.webp?k=480b709db194e982ef71b3adcfcd7d1635b42b5968be0a5d8c1fa2c80996e9b1&o="
                    alt="" 
                    className="fpImg" 
                />
                <span className="fpName">Four Seasons Hotel</span>
                <span className="fpCity">Lisbon</span>
                <span className="fpPrice">Starting from $99</span>
                <div className="fpRating">
                    <button>8.8</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img 
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/219678884.webp?k=157c38ddc243fa7cb18562a9eb64197bba6c5ed52adfd792a1d623b8bef28144&o="
                    alt="" 
                    className="fpImg" 
                />
                <span className="fpName">Hilton Garden Inn</span>
                <span className="fpCity">Berlin</span>
                <span className="fpPrice">Starting from $105</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties;
import { useEffect, useState } from "react";
import "./styles.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            console.log("Fetching images...");
            const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await res.json();
            console.log("Fetched data:", data);

            if (data.length > 0) {
                setImages(data);
            } else {
                setErrorMessage("No images found");
            }
            setLoading(false);
        } catch (error) {
            setErrorMessage(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url) fetchImages(url);
    }, [url, page, limit]);

    useEffect(() => {
        console.log("Fetched images:", images);
    }, [images]);

    if (loading) return <div>Loading Data...</div>;
    if (errorMessage) return <div>Error found | {errorMessage}</div>;

    return (
        <div className="container">
            {/* Left Arrow */}
            <BsArrowLeftCircleFill 
                onClick={handlePrevious} 
                className="arrow left" 
            />

            {/* Image Display */}
            {images && images.length ? (
                images.map((imageItem, index) => (
                    <img 
                        key={imageItem.id} 
                        src={imageItem.download_url} 
                        className={currentSlide === index ? "current-image" : "current-image hide-current-image"} 
                        alt="random" 
                    />
                ))
            ) : (
                <p>No images available</p>
            )}

            {/* Right Arrow */}
            <BsArrowRightCircleFill 
                onClick={handleNext} 
                className="arrow right" 
            />

            {/* Circle Indicators */}
            <span className="circle-indicators">
                {images && images.length > 0 ? (
                    images.map((_, index) => (
                        <button 
                            key={index} 
                            className={currentSlide === index ? "current-indicator" : "current-indicator hide-current-indicator"} 
                            onClick={() => setCurrentSlide(index)}  // ✅ Fixed the click event
                        />
                    ))
                ) : null}
            </span>
        </div>
    );
}

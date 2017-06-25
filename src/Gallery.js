import React from "react";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";
import img9 from "./images/9.jpg";
import img10 from "./images/10.jpg";
import img11 from "./images/11.jpg";
import img12 from "./images/12.jpg";
import img13 from "./images/13.jpg";
import img14 from "./images/14.jpg";
import img15 from "./images/15.jpg";
import img16 from "./images/16.jpg";
import img17 from "./images/17.jpg";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Gallery.css";

const images = [
	{ original: img1 },
	{ original: img2 },
	{ original: img3 },
	{ original: img4 },
	{ original: img5 },
	{ original: img6 },
	{ original: img7 },
	{ original: img8 },
	{ original: img9 },
	{ original: img10 },
	{ original: img11 },
	{ original: img12 },
	{ original: img13 },
	{ original: img14 },
	{ original: img15 },
	{ original: img16 },
	{ original: img17 }
];

const Gallery = () =>
	<div>
		<ImageGallery showFullscreenButton={false} showPlayButton={false} autoPlay={true} showThumbnails={false} items={images} slideInterval={2000} />
	</div>;

export default Gallery;

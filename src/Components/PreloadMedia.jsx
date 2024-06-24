/*
   Copyright (C), 2023-2024, Valentin Henriques 
   Author: Valentin Henriques
   FileName: SectionTitle.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import {useState} from 'react'
import Loader from './Loader';

const PreloadMedia = ({images, children}) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    setLoaded(true);
  }

  const imageElements = images.map((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = onLoad;
    return img;
  });

  return loaded ? children : <Loader />
}

export default PreloadMedia;
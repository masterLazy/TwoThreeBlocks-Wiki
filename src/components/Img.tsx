/**
 * Copyright 2025 masterLazy

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */
import React from 'react';

import styles from './Img.module.css';

interface Img {
    src: string;
    alt?: string;
    invertable?: boolean;
    maxHeight: string;
    children: React.ReactNode;
}

export default function Img({
    src, alt, invertable = false, maxHeight = '23rem', children
}: Img) {
    const imgStyle = {
        '--mlazy-img-max-height': maxHeight,
        '--mlazy-img-dark-filter': invertable ?
            'brightness(0.89) invert(1) hue-rotate(180deg)' : 'none',
    } as React.CSSProperties;
    return (
        <div className={styles.imageContainer} style={imgStyle}>
            <div className={styles.imageWrapper} style={imgStyle}>
                <img className={styles.image} src={src} alt={alt} />
            </div>
            {children}
        </div>
    );
};
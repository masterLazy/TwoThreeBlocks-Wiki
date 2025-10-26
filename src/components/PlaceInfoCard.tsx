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

import styles from './PlaceInfoCard.module.css';

interface PlaceInfoCard {
    builder: string;
    overworld?: string;
    nether?: string;
    theEnd?: string;
}

export default function PlaceInfoCard({
    builder, overworld, nether, theEnd
}: PlaceInfoCard) {
    // 渲染单个坐标的辅助函数
    const renderCoordinate = (coord: string | undefined, dimension: string) => {
        if (!coord) return null;
        const [x, y, z] = coord.split(',');
        return (
            <div className={styles.line}>
                <span className={styles.title}>{dimension}</span>
                <code>{x} </code>
                <code>{y} </code>
                <code>{z} </code>
            </div>
        );
    };
    return (
        <div className={styles.card}>
            <div className={styles.line}>
                <span className={styles.title}>建造者</span>
                <code>{builder}</code>
            </div>
            {(overworld || nether || theEnd) && (<hr />)}

            {overworld && renderCoordinate(overworld, '主世界')}
            {nether && renderCoordinate(nether, '下界')}
            {theEnd && renderCoordinate(theEnd, '末地')}

            {!overworld && !nether && !theEnd && (
                <div className={styles.line}>
                    <span className={styles.noData}><em>无坐标信息</em></span>
                </div>
            )}
        </div>
    );
}
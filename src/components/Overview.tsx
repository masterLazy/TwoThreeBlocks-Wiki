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

import styles from './Overview.module.css';

export default function Overview() {
    return (
        <div className={styles.card}>
            <div className={styles.line}>
                <span className={styles.title}>TwoThreeBlocks</span><span> 服务器</span>
            </div>
            <hr />
            <div className={styles.line}>
                <span className={styles.title}>MC 版本</span>
                <span>1.21.4 Java Edition</span>
            </div>
            <div className={styles.line}>
                <span className={styles.title}>游戏模式</span>
                <span>生存</span>
            </div>
            <div className={styles.line}>
                <span className={styles.title}>需要的 mod</span>
                <span>无</span>
            </div>
            <div className={styles.line}>
                <span className={styles.title}>正版验证</span>
                <span>无，使用登录保护 mod</span>
            </div>
        </div>
    );
}
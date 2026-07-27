import { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import { intToChinese } from '@site/src/utils/intToChinese';

import styles from './AnniversaryModal.module.css';

export default function AnniversaryModal() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const today = new Date();
        const isAnniversary = today.getMonth() === 6 && today.getDate() === 27;
        if (!isAnniversary) return;

        const timer = setTimeout(() => setShow(true), 600);
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    const nth = new Date().getFullYear() - 2024;
    const yearLabel = intToChinese(nth) + '周年生日';

    return (
        <div className={styles.banner}>
            <div className={styles.bannerInner}>
                <span className={styles.bannerIcon}>🎉</span>
                <span className={styles.bannerText}>
                    今天是 TTB <strong>{yearLabel}</strong>！{' '}
                    <Link to="/docs/guide/alpha" className={styles.bannerLink}>
                        我要加入 →
                    </Link>
                </span>
            </div>
        </div>
    );
}

import { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { anniversaryYears } from '@site/src/data/anniversary';

import styles from './anniversary.module.css';

// ── Intersection Observer hook ──
function useFadeIn(threshold = 0.15) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, isVisible] as const;
}

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const [ref, isVisible] = useFadeIn();
    return (
        <div
            ref={ref}
            className={`${styles.fadeIn} ${isVisible ? styles.fadeInVisible : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

export default function Anniversary() {
    // Immersive page setup
    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        if (navbar) navbar.classList.add('navbar--immersive');
        document.body.classList.add('page--immersive');
        return () => {
            const nav = document.querySelector('.navbar');
            if (nav) nav.classList.remove('navbar--immersive');
            document.body.classList.remove('page--immersive');
        };
    }, []);

    return (
        <Layout description="TwoThreeBlocks 二三方块服务器周年庆典">
            <main>
                {/* ═══════════════ HERO ═══════════════ */}
                <section className={styles.hero}>
                    <div className={styles.stars} />
                    <div className={styles.heroBg} />
                    <div className={styles.heroOverlay} />
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>今年是<br />TwoThreeBlocks 成立第 {new Date().getFullYear() - 2024} 年</h1>
                        <p className={styles.heroSubtitle}>
                            TwoThreeBlocks 诞生于 <strong>2024.07.27</strong>
                            <br />
                            每年的这一天，就是我们共同的纪念日
                        </p>
                    </div>
                    <div className={styles.scrollIndicator}>
                        <span>向下滚动</span>
                        <div className={styles.scrollArrow}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </section>

                {/* ═══════════════ YEAR SECTIONS ═══════════════ */}
                {anniversaryYears.map((yearData) => (
                    <section key={yearData.year} className={styles.yearSection}>
                        <FadeInSection>
                            <div className={styles.sectionInner}>
                                <h2 className={styles.yearTitle}>
                                    🎂 {yearData.label}
                                    <span className={styles.separator}>｜</span>
                                    {yearData.year}
                                </h2>
                                <div className={styles.yearDivider} />

                                {/* Photos */}
                                <div className={styles.photoGrid}>
                                    {yearData.photos.map((photo, i) => (
                                        <div key={i} className={styles.photoCard}>
                                            <img src={photo.src} alt={`${yearData.label} - ${yearData.year}`} draggable={false} />
                                        </div>
                                    ))}
                                </div>

                                {/* Attendees */}
                                <div className={styles.attendeesSection}>
                                    <p className={styles.attendeesTitle}>
                                        参加人员（共 {yearData.attendees.length} 人）
                                    </p>
                                    <div className={styles.attendeesList}>
                                        {yearData.attendees.map((name, i) => (
                                            <span key={i} className={styles.attendeePill}>
                                                {name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    </section>
                ))}

                {/* ═══════════════ FOOTER NOTE ═══════════════ */}
                <FadeInSection>
                    <section className={styles.yearSection} style={{ paddingTop: 0 }}>
                        <div className={styles.sectionInner}>
                            <p style={{ textAlign: 'center', color: 'var(--ifm-color-emphasis-500)', fontSize: '0.9rem' }}>
                                新的周年庆照片和人员名单将在这里不断更新……
                            </p>
                        </div>
                    </section>
                </FadeInSection>
            </main>
        </Layout>
    );
}

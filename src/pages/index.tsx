import { useEffect, useRef, useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const photos = [
  { src: require('@site/src/assets/anniversary/2025-3.webp').default, title: '✨ 一周年庆合照（2025）' },
  { src: require('@site/src/assets/sky.webp').default, title: '出生点的天空' },
  { src: require('@site/src/assets/校友亭.webp').default, title: '校友亭' },
  { src: require('@site/src/assets/coast.webp').default, title: '信标 · 水岸 · 樱花' },
  { src: require('@site/src/assets/anniversary/2025-1.webp').default, title: '🎉 周年庆合影' },
  { src: require('@site/src/assets/anniversary/2025-2.webp').default, title: '🎂 周年庆留念' },
];

const sponsors = [
  { rank: 1, name: '🐢 man' },
  { rank: 2, name: 'White_Amperi' },
  { rank: 3, name: 'lemoncola_87' },
  { rank: 4, name: 'unbreaking_III' },
  { rank: 5, name: 'msterLazy' },
  { rank: 6, name: 'underlined_' },
  { rank: 6, name: 'Redstone__Brain' },
  { rank: 7, name: 'asdmtxr' },
];

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

// ── Auto-scrolling gallery (CSS marquee) ──
function PhotoGallery() {
  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.galleryTrack}>
        {[...photos, ...photos].map((photo, i) => (
          <div key={i} className={styles.galleryCard}>
            <img src={photo.src} alt={photo.title} draggable={false} />
            <div className={styles.galleryOverlay}>
              <span>{photo.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Animated counter ──
function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [ref, isVisible] = useFadeIn(0.5);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1500;
    const step = 16;
    const totalSteps = duration / step;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <span ref={ref} className={styles.counter}>
      {count}{suffix}
    </span>
  );
}

export default function Home() {
  // Immersive page: navbar solid color + body flag for footer
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
    <Layout description="TwoThreeBlocks 二三方块服务器官方 Wiki — 一个公益的 Minecraft Java Edition 服务器">
      <main>
        {/* ═══════════════ HERO ═══════════════ */}
        <section className={styles.hero}>
          <div className={styles.stars} />
          <div className={styles.heroBg} />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <ThemedImage
              alt="TTB Logo"
              sources={{
                light: useBaseUrl('/img/title-text-dark.svg'),
                dark: useBaseUrl('/img/title-text-light.svg'),
              }}
              className={styles.heroLogo}
            />
            <p className={styles.heroSubtitle}>
              TwoThreeBlocks · 二三方块服务器官方 Wiki
            </p>
            <div className={styles.heroCta}>
              <Link to={useBaseUrl('/docs/guide/alpha')} className={styles.ctaPrimary}>
                立即加入服务器
              </Link>
              <Link to={useBaseUrl('/docs/intro')} className={styles.ctaSecondary}>
                服务器概述
              </Link>
            </div>
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

        {/* ═══════════════ INTRODUCTION ═══════════════ */}
        <section className={styles.contentSection}>
          <FadeInSection>
            <div className={styles.sectionInner}>
              <p className={styles.introText}>
                TwoThreeBlocks (TTB) 是一个公益的 Minecraft Java Edition 服务器，
                由一群热爱 Minecraft 的玩家成立。
              </p>
              <p className={styles.introText}>
                加入 TTB，无需正版，没有门槛，和小伙伴们一起自由畅快游玩 Minecraft。
              </p>
            </div>
          </FadeInSection>
        </section>

        {/* ═══════════════ STATS ═══════════════ */}
        <section className={styles.statsSection}>
          <FadeInSection>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>
                  <AnimatedCounter end={2024} />.<AnimatedCounter end={7} />
                </span>
                <span className={styles.statLabel}>成立时间</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}><AnimatedCounter end={2} suffix="+" /></span>
                <span className={styles.statLabel}>运行周年</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}><AnimatedCounter end={30} suffix="+" /></span>
                <span className={styles.statLabel}>白名单成员</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}><AnimatedCounter end={7} suffix=" 天" /></span>
                <span className={styles.statLabel}>不间断运行</span>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* ═══════════════ FEATURES ═══════════════ */}
        <section className={styles.featuresSection}>
          <FadeInSection>
            <Heading as="h2" className={styles.sectionTitle}>
              <strong>服务器特色</strong>
              <span className={styles.separator}>｜</span>
              Features
            </Heading>
          </FadeInSection>
          <FadeInSection delay={150}>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                    <path d="M9 7h1" />
                    <path d="M9 11h1" />
                    <path d="M9 15h1" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>免费畅玩</h3>
                <p className={styles.featureDesc}>
                  无需购买正版，零门槛免费加入。完全公益服务器，费用由捐赠者和腐竹承担。
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>自研登录系统</h3>
                <p className={styles.featureDesc}>
                  LazyLogin 保障账户安全，密码哈希存储，管理员也无法获取你的密码。
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>人性化机制</h3>
                <p className={styles.featureDesc}>
                  死亡不掉落、单人跳过夜晚、经验无吸收冷却，畅快游玩无压力。
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>下界冰道交通</h3>
                <p className={styles.featureDesc}>
                  发达冰道网覆盖全图，快速抵达各大农场、生物群系与重要地点。
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>公共设施完善</h3>
                <p className={styles.featureDesc}>
                  出生点周边齐全工业体系：刷铁塔、交易所、高速熔炉、全物品仓库等。
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>完善皮肤支持</h3>
                <p className={styles.featureDesc}>
                  正版离线玩家均可自由更换皮肤，支持 Steve 与 Alex 双模型。
                </p>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* ═══════════════ GALLERY ═══════════════ */}
        <section className={styles.gallerySection}>
          <FadeInSection>
            <Heading as="h2" className={styles.sectionTitle}>
              <strong>画廊</strong>
              <span className={styles.separator}>｜</span>
              Gallery
            </Heading>
          </FadeInSection>
          <FadeInSection delay={150}>
            <PhotoGallery />
          </FadeInSection>
        </section>

        {/* ═══════════════ SPONSORS ═══════════════ */}
        <section className={styles.sponsorSection}>
          <FadeInSection>
            <Heading as="h2" className={styles.sectionTitle}>
              <strong>赞助榜</strong>
              <span className={styles.separator}>｜</span>
              Sponsors
            </Heading>
            <p className={styles.updateNote}>
              <i>最后于 <strong>2025年12月12日</strong> 更新</i>
            </p>
          </FadeInSection>
          <FadeInSection delay={150}>
            <div className={styles.sponsorList}>
              {sponsors.map((s, i) => (
                <div
                  key={i}
                  className={styles.sponsorItem}
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <span className={styles.sponsorRank}>{s.rank}</span>
                  <span className={styles.sponsorName}>{s.name}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
          <FadeInSection delay={300}>
            <div className={styles.sponsorFooter}>
              <p>
                由衷感谢所有赞助者对 TwoThreeBlocks 的支持 ❤。
                此榜单不是完整的赞助者列表，你可以在这里查看所有的赞助者：
                <Link to="/docs/category/赞助者名单"> 赞助者名单</Link>。
                赞助榜和赞助者名单不是实时更新的，请谅解。
              </p>
              <p>
                如果你想赞助我们，请查看：<Link to="/docs/donate">赞助 TTB</Link>。
              </p>
            </div>
          </FadeInSection>
        </section>

        {/* ═══════════════ LICENSE ═══════════════ */}
        <FadeInSection>
          <section className={styles.licenseSection}>
            <div className={styles.sectionInner}>
              <hr />
              <p className={styles.license}>
                如无特殊说明，本站中的内容采用{' '}
                <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                  CC BY-NC-SA 4.0
                </a>
                （署名—非商业性使用—相同方式共享 4.0 协议国际版）公开许可。
              </p>
            </div>
          </section>
        </FadeInSection>
      </main>
    </Layout>
  );
}

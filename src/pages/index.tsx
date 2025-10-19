import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout description='Description will go into a meta tag in <head />'>
            <main>
                <div className={styles.header}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '1rem'
                    }}>
                        <ThemedImage
                            alt='TTB Logo'
                            sources={{
                                light: useBaseUrl('/img/title-text-light.svg'),
                                dark: useBaseUrl('/img/title-text-dark.svg'),
                            }}
                            width='600em'
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}>
                        <p>Two Three Blocks ·  二三方块服务器官方 Wiki</p>
                    </div>
                    <div className={styles.linkCardContainer}>
                        <Link to={useBaseUrl('/docs/guide/alpha')}
                            className={styles.linkCard}>
                            👋 立即加入服务器！
                        </Link>
                        <Link to={useBaseUrl('/docs/intro')}
                            className={styles.linkCard}>
                            📔 服务器概述
                        </Link>
                    </div>
                </div>
                <div className={styles.body}>
                    <div style={{
                        minWidth: '50%',
                        maxWidth: '90%',
                        textAlign: 'center',
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            textAlign: 'left',
                        }}>
                            <div>
                                <p>Two Three Blocks (TTB) 是一个公益的 Minecraft Java Edition 服务器，由一群热爱 Minecraft 的玩家成立。</p>
                                <p>加入 TTB，无需正版，没有门槛，和小伙伴们一起自由畅快游玩 Minecraft。</p>
                            </div>
                        </div>
                        <Heading as='h2' id='画廊' style={{ padding: '1rem' }}>画廊</Heading>
                        <div className={styles.photoCardContainer}>
                            <div className={styles.photoCard}>
                                <img src={useBaseUrl('/img/cover.webp')} />
                                <div className={styles.photoCardContent}>
                                    <h3>✨ 一周年庆合照（2025）</h3>
                                </div>
                            </div>
                            <div className={styles.photoCard}>
                                <img src={useBaseUrl('/img/sky.webp')} />
                                <div className={styles.photoCardContent}>
                                    <h3>出生点的天空</h3>
                                </div>
                            </div>
                            <div className={styles.photoCard}>
                                <img src={useBaseUrl('/img/place/校友亭.webp')} />
                                <div className={styles.photoCardContent}>
                                    <h3>校友亭</h3>
                                </div>
                            </div>
                            <div className={styles.photoCard}>
                                <img src={useBaseUrl('/img/coast.webp')} />
                                <div className={styles.photoCardContent}>
                                    <h3>信标 · 水岸 · 樱花</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout >
    );
}

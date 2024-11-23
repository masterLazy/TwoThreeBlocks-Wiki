import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        了解详情
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            description="Description will go into a meta tag in <head />">
            <main>
                <div style={{
                    height: '40em',
                    width: 'auto',
                    overflow: 'hidden',
                    backgroundImage: 'linear-gradient(to top, rgba(48, 56, 70, 1), rgba(48, 56, 70, 0)), url(\'https://i.ibb.co/s3n4x7n/ttb.jpg\')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <center>
                        <h1 style={{
                            margin: '1em 1em 1em 1em',
                            fontSize: '5em',
                            fontFamily: 'MonaBold',
                            color: 'aliceblue',
                            textShadow: '2px 2px 32px rgb(48, 56, 70, 1)'
                        }}>
                            Two Three Blocks
                        </h1>
                        <p style={{
                            fontSize: '2em',
                            fontFamily: 'MonaBold, SourceHanSans',
                            fontWeight: 'lighter',
                            textShadow: '2px 2px 32px rgb(48, 56, 70, 1)',
                            fontFamily: 'MonaBold, SourceHanSans',
                            color: 'aliceblue',
                        }}>{siteConfig.tagline}</p>
                        <div className={styles.buttons}>
                            <Link
                                className="button button--secondary button--lg"
                                to="/docs/intro"
                                style={{
                                    fontFamily: 'SourceHanSans',
                                    fontWeight: 'normal'
                                }}>
                                了解详情
                            </Link>
                        </div>
                    </center>
                </div>
                <div style={{
                    overflow: 'hidden',
                    backgroundColor: 'rgb(48, 56, 70)',
                    padding: '0em 8em 0em 8em',
                    fontSize: '2em',
                    fontFamily: 'MonaBold, SourceHanSans',
                    fontWeight: 'lighter',
                    textShadow: '2px 2px 32px rgb(48, 56, 70, 1)',
                    fontFamily: 'MonaBold, SourceHanSans',
                    color: 'aliceblue'
                }}>
                    <p>在这里，</p>
                    <p>体验一起 Minecraft 的乐趣。</p>
                    <p>TTB 欢迎你的加入。</p>
                </div>
            </main>
        </Layout >
    );
}

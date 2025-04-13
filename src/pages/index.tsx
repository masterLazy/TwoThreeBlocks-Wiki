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
                <Heading as="h1" className="hero__title" style={{
                    fontStyle: 'italic',
                    fontWeight: 'lighter',
                }}>
                    TwoThreeBlocks
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
            <HomepageHeader />
            <main>
                <center>
                    <div style={{
                        height: '40em',
                        width: 'auto',
                        overflow: 'hidden',
                        backgroundImage: 'url(\'img/cover-1.webp\')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <h1 style={{
                            color: 'white',
                            margin: '2em',
                            fontWeight: 'lighter',
                            fontSize: '3em',
                            float: 'left'
                        }}>出生点光景</h1>
                    </div>
                    <div style={{
                        height: '40em',
                        width: 'auto',
                        overflow: 'hidden',
                        backgroundImage: 'url(\'img/校友亭.webp\')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <h1 style={{
                            color: 'white',
                            margin: '2em',
                            fontWeight: 'lighter',
                            fontSize: '3em',
                            float: 'right'
                        }}>校友亭</h1>
                    </div>
                    <div style={{
                        height: '40em',
                        width: 'auto',
                        overflow: 'hidden',
                        backgroundImage: 'linear-gradient(to top, rgba(48, 56, 70, 1), rgba(48, 56, 70, 0)), url(\'img/cover-2.webp\')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <h1 style={{
                            color: 'white',
                            margin: '2em',
                            fontWeight: 'lighter',
                            fontSize: '3em',
                            float: 'left'
                        }}>加入我们，一起玩。</h1>
                    </div>
                </center>
            </main>
        </Layout >
    );
}

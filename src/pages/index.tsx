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
                    fontFamily: 'MonaBold, Times New Roman'
                }}>
                    Two Three Blocks
                </Heading>
                <p className="hero__subtitle" style={{
                    fontFamily: 'MonaBold, Times New Roman, SourceHanSans'
                }}>{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro" style={{
                            fontFamily: 'SourceHanSans'
                        }}>
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
                        backgroundImage: 'linear-gradient(to top, rgba(48, 56, 70, 1), rgba(48, 56, 70, 0)), url(\'https://i.ibb.co/X5SbPf7/2024-09-15-22-56-25.png\')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    </div>
                </center>
            </main>
        </Layout >
    );
}

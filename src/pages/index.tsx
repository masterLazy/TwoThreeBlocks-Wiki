import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description='Description will go into a meta tag in <head />'>
      <main>
        <div className={styles.header}>
          <div className={styles.headerContainer}>
            <ThemedImage
              alt='TTB Logo'
              sources={{
                light: useBaseUrl('/img/title-text-light.svg'),
                dark: useBaseUrl('/img/title-text-dark.svg'),
              }}
              width='600em'
            />
            <p>
              TwoThreeBlocks · 二三方块服务器官方 Wiki
            </p>
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
        </div>
        <div className={styles.body}>

          <div className={styles.textContainer}>
            <p>TwoThreeBlocks (TTB) 是一个公益的 Minecraft Java Edition 服务器，由一群热爱 Minecraft 的玩家成立。</p>
            <p>加入 TTB，无需正版，没有门槛，和小伙伴们一起自由畅快游玩 Minecraft。</p>
            <Heading as='h2' id='画廊'>
              <strong>画廊</strong><span className={styles.separator}>|</span>Gallery
            </Heading>
          </div>

          <div className={styles.photoContainer}>
            <div className={styles.photo}>
              <img src={require('@site/src/assets/anniversary/2025-3.webp').default} />
              <div className={styles.photoContent}>
                <h3>✨ 一周年庆合照（2025）</h3>
              </div>
            </div>
            <div className={styles.photo}>
              <img src={require('@site/src/assets/sky.webp').default} />
              <div className={styles.photoContent}>
                <h3>出生点的天空</h3>
              </div>
            </div>
            <div className={styles.photo}>
              <img src={require('@site/src/assets/校友亭.webp').default} />
              <div className={styles.photoContent}>
                <h3>校友亭</h3>
              </div>
            </div>
            <div className={styles.photo}>
              <img src={require('@site/src/assets/coast.webp').default} />
              <div className={styles.photoContent}>
                <h3>信标 · 水岸 · 樱花</h3>
              </div>
            </div>
          </div>

          <div className={styles.textContainer}>
            <Heading as='h2' id='赞助榜'>
              <strong>赞助榜</strong><span className={styles.separator}>|</span>Sponsors
            </Heading>
          </div>

          <div className={styles.sponsorContainer}>
            <div className={styles.sponsor}>
              <h3>#1</h3> 🐢 man
            </div>
            <div className={styles.sponsor}>
              <h3>#2</h3> White_Amperi
            </div>
            <div className={styles.sponsor}>
              <h3>#3</h3> lemoncola_87
            </div>
            <div className={styles.sponsor}>
              <h3>#4</h3> unbreaking_III
            </div>
            <div className={styles.sponsor}>
              <h3>#5</h3> msterLazy
            </div>
            <div className={styles.sponsor}>
              <h3>#6</h3> underlined_
            </div>
            <div className={styles.sponsor}>
              <h3>#6</h3> Redstone__Brain
            </div>
            <div className={styles.sponsor}>
              <h3>#7</h3> asdmtxr
            </div>
            <p style={{ fontSize: '95%' }}>
              <i>最后于 <strong>2025年12月12日</strong> 更新</i>
            </p>
          </div>

          <div className={styles.textContainer}>
            <p>
              由衷感谢所有赞助者对 TwoThreeBlocks 的支持 ❤。
              此榜单不是完整的赞助者列表，你可以在这里查看所有的赞助者：
              <Link to='/docs/category/赞助者名单'>赞助者名单</Link>。
              赞助榜和赞助者名单不是实时更新的，请谅解。
            </p>
            <p>
              如果你想赞助我们，请查看：<Link to='/docs/donate'>赞助 TTB</Link>。
            </p>
            <hr />
            <p>
              如无特殊说明，本站中的内容采用 <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY-NC-SA 4.0</a>
              （署名—非商业性使用—相同方式共享 4.0 协议国际版）公开许可。
            </p>
          </div>
        </div>
      </main>
    </Layout >
  );
}

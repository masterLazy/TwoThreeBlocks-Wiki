import React from 'react';
import styles from './QQGroupCard.module.css';

interface QQGroupCardProps {
    avatarUrl?: string;
    groupName: string;
    groupNumber: string;
    description: string;
    joinLink: string;
}

export default function QQGroupCard({
    groupName = '二三方块人交流会',
    groupNumber = '488943940',
    description = '一个 Minecraft 玩家团体',
    joinLink = 'https://qm.qq.com/q/7ZjpDLT6De',
    avatarUrl = 'https://p.qlogo.cn/gh/488943940/488943940/'
}: QQGroupCardProps) {
    return (
        <div className={styles.card} onClick={() => window.open(joinLink, '_blank')}>
            <div className={styles.content}>
                <img src={avatarUrl} alt={groupName} className={styles.avatar} />
                <div className={styles.info}>
                    <h3 className={styles.name}>{groupName}</h3>
                    <p className={styles.line}>群号: {groupNumber}</p>
                    <p className={styles.line}>{description}</p>
                </div>
            </div>
        </div>
    );
}
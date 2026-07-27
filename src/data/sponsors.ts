/**
 * 赞助榜数据
 *
 * 修改方法：
 * - 添加赞助者：在数组末尾追加 { rank, name }
 * - 调整排名：修改 rank 值，同名次可并列
 * - 删除赞助者：直接移除对应对象
 * - 更新日期：修改 sponsorUpdateDate 即可
 */

export interface Sponsor {
    /** 排名（数字），同名次可并列 */
    rank: number;
    /** 玩家名称 */
    name: string;
}

export const sponsorUpdateDate = '2025年12月12日';

export const sponsors: Sponsor[] = [
    { rank: 1, name: '🐢 man' },
    { rank: 2, name: 'White_Amperi' },
    { rank: 3, name: 'lemoncola_87' },
    { rank: 4, name: 'unbreaking_III' },
    { rank: 5, name: 'msterLazy' },
    { rank: 6, name: 'underlined_' },
    { rank: 6, name: 'Redstone__Brain' },
    { rank: 7, name: 'asdmtxr' },
];

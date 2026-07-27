/**
 * 周年庆典数据
 *
 * 添加新年份的方法：
 * 1. 将照片放入 src/assets/anniversary/（WebP 格式，无损压缩）
 * 2. 在此数组末尾添加一个新的 AnniversaryYear 对象（只需填 year）
 * 3. 更新参加人员名单
 *
 * 中文标签（如"一周年"）和英雄页面的年份文本会根据 year 字段自动计算。
 * 服务器成立于 2024 年，因此 year - 2024 = 第 N 周年。
 */

export interface AnniversaryPhoto {
    /** webpack 图片引用的返回值 */
    src: string;
}

export interface AnniversaryYear {
    /** 年份，如 2025 */
    year: number;
    /** 该年份的照片列表 */
    photos: AnniversaryPhoto[];
    /** 参加人员（按字典序排列） */
    attendees: string[];
}

export const anniversaryYears: AnniversaryYear[] = [
    {
        year: 2026,
        photos: [
            { src: require('@site/src/assets/anniversary/2026-1.webp').default },
            { src: require('@site/src/assets/anniversary/2026-2.webp').default },
            { src: require('@site/src/assets/anniversary/2026-3.webp').default },
            { src: require('@site/src/assets/anniversary/2026-4.webp').default },
        ],
        attendees: [
            "4inLuv_",
            "Hanayuki_Core",
            "LeaDer_LD",
            "LoveHanley",
            "MeihuaCN",
            "Robot6CHc66",
            "White_Amperi",
            "Xe_Q0522",
            "d4vt",
            "man",
            "msterLazy",
            "unbreaking_III",
            "xmj110226"
        ]
    },
    {
        year: 2025,
        photos: [
            { src: require('@site/src/assets/anniversary/2025-1.webp').default },
            { src: require('@site/src/assets/anniversary/2025-2.webp').default },
            { src: require('@site/src/assets/anniversary/2025-3.webp').default },
        ],
        attendees: [
            'Creeperiiii',
            'd4vt',
            'Ender_Analyst',
            'LeaDer_LD',
            'lemoncola_87',
            'liqing2233',
            'LoveHanley',
            'MeihuaCN',
            'msterLazy',
            'sin_zri',
            'unbreaking_III',
            'underlined_',
        ],
    },
];

/**
 * 周年庆典数据
 *
 * 添加新年份的方法：
 * 1. 将照片放入 src/assets/anniversary/（WebP 格式，无损压缩）
 * 2. 在此数组末尾添加一个新的 AnniversaryYear 对象
 * 3. 更新参加人员名单
 */

export interface AnniversaryPhoto {
    /** webpack 图片引用的返回值 */
    src: string;
}

export interface AnniversaryYear {
    /** 年份，如 2025 */
    year: number;
    /** 显示的标签，如 "一周年"，程序会自动拼接 🎂 + separator + 年份 */
    label: string;
    /** 该年份的照片列表 */
    photos: AnniversaryPhoto[];
    /** 参加人员（按字典序排列） */
    attendees: string[];
}

export const anniversaryYears: AnniversaryYear[] = [
    {
        year: 2025,
        label: '一周年',
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

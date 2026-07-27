/**
 * 将 1-999 的整数转换为中文数字。
 *
 * 示例：
 *   1  → "一"
 *   10 → "十"
 *   11 → "十一"
 *   20 → "二十"
 *   100 → "一百"
 *   101 → "一百零一"
 *   999 → "九百九十九"
 */
const digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];

export function intToChinese(n: number): string {
    if (n < 0 || n > 999) {
        throw new Error(`intToChinese 只支持 1-999，收到了 ${n}`);
    }
    if (n === 0) return '零';

    const units = n % 10;
    const tens = Math.floor(n / 10) % 10;
    const hundreds = Math.floor(n / 100);

    let result = '';

    // 百位
    if (hundreds > 0) {
        result += digits[hundreds] + '百';
        if (tens === 0 && units > 0) result += '零';
    }

    // 十位
    if (tens > 0) {
        // 只有十位是 1 且没有百位时省略"一"（如"十"而非"一十"）
        if (hundreds > 0 || tens > 1) result += digits[tens];
        result += '十';
    }

    // 个位
    if (units > 0) {
        result += digits[units];
    }

    return result;
}

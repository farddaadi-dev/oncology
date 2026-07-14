export function toPersianDigits(
    number: number | string
): string {

    return number
        .toString()
        .replace(
            /\d/g,
            (digit: string) =>
                "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]
        );

}
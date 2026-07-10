export function getReadingTime(content?: string): string {

    function toPersianNumber(number: number) {
        return number.toString().replace(/\d/g, d => 
          "۰۱۲۳۴۵۶۷۸۹"[Number(d)]
        );
      }

    if (!content) {
      return "۱ دقیقه مطالعه";
    }
  
    const words = content
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .length;
  
    const minutes = Math.max(1, Math.ceil(words / 180));
  
    return `${toPersianNumber(minutes)} دقیقه مطالعه`;
  
  }
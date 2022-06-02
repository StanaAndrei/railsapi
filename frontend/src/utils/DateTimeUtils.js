export default class DateTimeUtils {
    static formatDateRo(date) {
        date = date.toString();
        date = date.replace('GMT+0300 (Eastern European Summer Time)', '');
        return date;
    }
}
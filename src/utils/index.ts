import { v4 as uuidv4 } from 'uuid';
import parsePhoneNumber from 'libphonenumber-js';
import { format } from 'date-fns'

const uuid = () => {
    return uuidv4 as unknown as string;
}
const formatPhoneNumber = (phone: string) => {
    const phoneNumber = parsePhoneNumber(phone);
    return phoneNumber?.formatInternational()
}
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
const formatNumber = (val: number | string | undefined | null, digit?: number | undefined) => {
    if (typeof val === 'string' || !val) {
        return 0;
    } else {
        let parseNumber = digit ? val.toFixed(digit) : val;
        let sign = 1;
        if (parseNumber < 0) {
            sign = -1;
            parseNumber = -parseNumber;
        }
        let num = parseNumber.toString().includes('.') ? parseNumber.toString().split('.')[0] : parseNumber.toString();
        let len = num.toString().length;
        let result = '';
        let count = 1;

        for (let i = len - 1; i >= 0; i--) {
            result = num.toString()[i] + result;
            if (count % 3 === 0 && count !== 0 && i !== 0) {
                result = ',' + result;
            }
            count++;
        }
        if (parseNumber.toString().includes('.')) {
            result = result + '.' + parseNumber.toString().split('.')[1];
        }
        return sign < 0 ? '-' + result : result;
    }
}

const formatDateToString = (date: Date, formatString?: string) => {
    return format(date, !formatString ? 'dd/MM/yyyy' : formatString);
}
export { uuid, formatPhoneNumber, scrollToTop, formatNumber, formatDateToString };
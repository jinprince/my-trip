import dayjs from "dayjs";

export function formateDate(date){
    return dayjs(date).format('MM月DD日')
};
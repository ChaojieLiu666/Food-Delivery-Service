export function convertToDollars(cents) {
    return (cents / 100).toFixed(2);
}

export function dateToUrl(date_req) {
    return [date_req.getFullYear(), '-',
        date_req.getMonth() < 9 ? 0 : '', date_req.getMonth() + 1, '-',
        date_req.getDate() < 10 ? 0 : '', date_req.getDate()].join('');
}
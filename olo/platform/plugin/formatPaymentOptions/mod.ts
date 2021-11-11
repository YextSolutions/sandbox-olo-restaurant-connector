export function formatPaymentOptions(paymentOptions: string) {
    if (paymentOptions != "") {
        return paymentOptions.replaceAll(" ", "").replaceAll("/",",").toUpperCase()
    }
    return ""
}
export function formatPaymentOptions(paymentOptions: string) {
    if (paymentOptions != "") {
        return JSON.stringify(paymentOptions.replace(" ", "").toUpperCase().split("/"))
    }
    return ""
}
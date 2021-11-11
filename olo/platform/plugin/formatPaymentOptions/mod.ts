export function formatPaymentOptions(paymentOptions: string) {
    if (paymentOptions != "") {
        return paymentOptions.replace(" ", "").toUpperCase().split("/")
    }
    return ""
}
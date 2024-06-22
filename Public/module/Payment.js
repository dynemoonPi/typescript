var Payment = /** @class */ (function () {
    function Payment(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return "recipient: ".concat(this.recipient, ", ").concat(this.details, ", ").concat(this.amount);
    };
    return Payment;
}());
export { Payment };

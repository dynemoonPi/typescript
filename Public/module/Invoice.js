var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return ("Invoice: ".concat(this.client, ",").concat(this.details, ",").concat(this.amount));
    };
    return Invoice;
}());
export { Invoice };

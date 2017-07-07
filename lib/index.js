"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
    function Main(rules) {
        _classCallCheck(this, Main);

        this.total = 0;
        this.rules = rules;
        this.items = [];
    }

    _createClass(Main, [{
        key: "scan",
        value: function scan(item) {
            this.items.push(item);

            if (this.isMultibuySale(item)) {
                this.total = this.generateMultibuyPrice(item);
            } else {
                this.total += prices[item];
            }
        }
    }, {
        key: "isMultibuySale",
        value: function isMultibuySale(item) {
            var saleQuantity = this.rules[item][0];
            return (this.items.join('').match(new RegExp("" + item, "g")) || []).length == saleQuantity;
        }
    }, {
        key: "generateMultibuyPrice",
        value: function generateMultibuyPrice(item) {
            var priceBeforeSale = this.rules[item][0] - 1;
            var salePrice = this.rules[item][1];

            return this.total - priceBeforeSale * prices[item] + salePrice;
        }
    }]);

    return Main;
}();

exports.default = Main;


var prices = {
    A: 50,
    B: 30,
    C: 20,
    D: 15
};
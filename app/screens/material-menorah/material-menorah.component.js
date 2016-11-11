System.register(['angular2/core', 'angular2/router', '../../services/message-bus/message-bus.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, message_bus_service_1;
    var MaterialMenorahComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (message_bus_service_1_1) {
                message_bus_service_1 = message_bus_service_1_1;
            }],
        execute: function() {
            MaterialMenorahComponent = (function () {
                function MaterialMenorahComponent(_messageBusService, _router) {
                    var _this = this;
                    this._messageBusService = _messageBusService;
                    this._router = _router;
                    this.title = 'light the menorah';
                    this.candles = {
                        candle0: {
                            number: 0,
                            isLit: false,
                            isShamas: false,
                        },
                        candle1: {
                            number: 1,
                            isLit: false,
                            isShamas: false,
                        },
                        candle2: {
                            number: 2,
                            isLit: false,
                            isShamas: false,
                        },
                        candle3: {
                            number: 3,
                            isLit: false,
                            isShamas: false,
                        },
                        candle4: {
                            number: 4,
                            isLit: false,
                            isShamas: false,
                        },
                        candle5: {
                            number: 5,
                            isLit: false,
                            isShamas: false,
                        },
                        candle6: {
                            number: 6,
                            isLit: false,
                            isShamas: false,
                        },
                        candle7: {
                            number: 7,
                            isLit: false,
                            isShamas: false,
                        },
                        candle8: {
                            number: 8,
                            isLit: false,
                            isShamas: true,
                        },
                    };
                    setTimeout(function () {
                        _this._messageBusService.messageBus.onMessage = function (event) {
                            var payload = JSON.parse(event["data"]);
                            _this.toggleCandle(payload.candleNumber);
                            console.log(payload);
                        };
                        _this.toggleCandle(8);
                    }, 3000);
                }
                MaterialMenorahComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this._messageBusService.messageBus.onMessage = function (event) {
                            var payload = JSON.parse(event["data"]);
                            console.log(payload);
                        };
                    }, 3000);
                };
                MaterialMenorahComponent.prototype.toggleCandle = function (candleNumber) {
                    for (var candle in this.candles) {
                        if (this.candles[candle].number === candleNumber) {
                            this.candles[candle].isLit = !this.candles[candle].isLit;
                        }
                    }
                };
                MaterialMenorahComponent.prototype.toggleAll = function () {
                    for (var key in this.candles) {
                        this.candles[key].isLit = !this.candles[key].isLit;
                    }
                };
                MaterialMenorahComponent = __decorate([
                    core_1.Component({
                        selector: 'material-menorah',
                        templateUrl: 'app/screens/material-menorah/material-menorah.component.html',
                        styleUrls: ['app/screens/material-menorah/material-menorah.component.css']
                    }), 
                    __metadata('design:paramtypes', [message_bus_service_1.MessageBusService, router_1.Router])
                ], MaterialMenorahComponent);
                return MaterialMenorahComponent;
            }());
            exports_1("MaterialMenorahComponent", MaterialMenorahComponent);
        }
    }
});
//# sourceMappingURL=material-menorah.component.js.map
import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { MessageBusService } from '../../services/message-bus/message-bus.service';

@Component({
  selector: 'material-menorah',
  templateUrl: 'app/screens/material-menorah/material-menorah.component.html',
  styleUrls: ['app/screens/material-menorah/material-menorah.component.css']
})

export class MaterialMenorahComponent implements OnInit {
  public title: any;
  public candles: any;

  constructor(private _messageBusService: MessageBusService, private _router: Router) {
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

    setTimeout(() => {
      this._messageBusService.messageBus.onMessage = (event) => {
        var payload = JSON.parse(event["data"]);
        this.toggleCandle(payload.candleNumber);
        console.log(payload);
      }
      this.toggleCandle(8);
    }, 3000);
  }

  ngOnInit() {
    setTimeout(() => {
      this._messageBusService.messageBus.onMessage = (event) => {
        var payload = JSON.parse(event["data"]);
        console.log(payload);
      }
    }, 3000);
  }

  toggleCandle(candleNumber) {
    for(var candle in this.candles) {
      if(this.candles[candle].number === candleNumber) {
        this.candles[candle].isLit = !this.candles[candle].isLit;
      }
    }
  }

  toggleAll() {
    for(var key in this.candles){
      this.candles[key].isLit = !this.candles[key].isLit;
    }

  }
}

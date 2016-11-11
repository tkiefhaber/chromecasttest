import { Component, OnInit, provide } from 'angular2/core';
import { MessageBusService } from './services/message-bus/message-bus.service';
import { CastReceiverManagerService } from './services/cast-receiver-manager/cast-receiver-manager.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from 'angular2/router';

import { _settings } from './settings';

import { MaterialMenorahComponent } from './screens/material-menorah/material-menorah.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS,
//      provide(Cast, {useExisting: cast}),
      MessageBusService,
      CastReceiverManagerService]

})
@RouteConfig([
  {
    path: '/MaterialMenorah',
    name: 'MaterialMenorah',
    component: MaterialMenorahComponent,
    useAsDefault: true
  },
])
export class AppComponent implements OnInit {
  title = "Angular 2 Receiver";
  constructor(private _messageBusService: MessageBusService, private _router: Router) { }

  ngOnInit() {
    console.log('ngOnInit');
    this._messageBusService.init();

    this._messageBusService.messageBus.onMessage = (event) => {
      console.log("messageBus.onMessage: " + JSON.stringify(event["data"]));
      var payload = JSON.parse(event["data"]);

      switch (payload.command)
      {
        case 'nav':
          var routerLink = [payload.page];

          if (payload.message != undefined) {
            routerLink.push({message: payload.message});
          }
          this._router.navigate(routerLink);
          break;
        case 'version':
          this._messageBusService.messageBus.broadcast(_settings.version);
          break;
      }

     }

     this._messageBusService.manager.start({statusText: "Application is starting"});

  }
}

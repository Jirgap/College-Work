import { Component, Fragment, h } from '@stencil/core';

@Component({
  tag: 'app-detail',
  styleUrl: 'app-detail.css',
  // shadow: true,
})
export class AppDetail {
  render() {
    return (
      <Fragment>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-titel>Detail</ion-titel>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            <p>
                This is a test
            </p>
        </ion-content>

      </Fragment>
    );
  }

}

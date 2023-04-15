import { Component, Fragment, h, State } from '@stencil/core';
import { Todo } from '../../interfaces/todo';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
  // shadow: true,
})
export class PageHome {

  @State() todos: Todo[] = [];

  componentWillLoad() {
    this.todos = [
      {id: "1", title: "First todo", description: "First todo description"},
      {id: "2", title: "Second todo", description: "Second todo description"},
      {id: "3", title: "Third todo", description: "Third todo description"},
      {id: "4", title: "Fourth todo", description: "Fourth todo description"},
      {id: "5", title: "Fifth todo", description: "Fifth todo description"}
    ];

    console.log(this.todos);
  }

  render() {
    return (
      <Fragment>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Todo</ion-title>
                <ion-buttons slot="end">
                  <ion-button>
                    <ion-icon slot="icon-only" name="add"></ion-icon>
                  </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <ion-list lines="none">
          {
            this.todos.map(todo => (
            <div class="todo-container" key={todo.id}>
              <ion-checkbox></ion-checkbox>
              <ion-label>{todo.title}</ion-label>
              <ion-item button href={`/${todo.id}`}></ion-item>
            </div>
            ))
          }
          </ion-list>
        </ion-content>

      </Fragment>
    );
  }

}

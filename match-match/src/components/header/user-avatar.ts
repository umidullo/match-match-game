import './user-avatar.scss';
import { BaseComponent } from '../base-component';

export class UserAvatar extends BaseComponent {
  constructor() {
    super('div', ['avatar']);
  }
}

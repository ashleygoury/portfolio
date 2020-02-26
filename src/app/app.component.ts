import {Component} from '@angular/core';
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faGitlab,
  faMedium,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faAngular
} from '@fortawesome/free-brands-svg-icons';

import {faCircle, faAt, faCertificate, faTrophy, faBars} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faGitlab = faGitlab;

  scrollOnTop() {
    document.documentElement.scrollTop = 0;
  }
}

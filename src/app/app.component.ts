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
  faMedium = faMedium;
  faHtml5 = faHtml5;
  faCss3Alt = faCss3Alt;
  faJsSquare = faJsSquare;
  faReact = faReact;
  faAngular = faAngular;
  faCircle = faCircle;
  faAt = faAt;
  faCertificate = faCertificate;
  faTrophy = faTrophy;
  faBars = faBars;

  scrollOnTop() {
    document.documentElement.scrollTop = 0;
  }
}

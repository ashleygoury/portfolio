import {Component, OnInit} from '@angular/core';
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faGitlab,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faAngular,
  faJava,
  faVuejs
} from '@fortawesome/free-brands-svg-icons';

import {faCircle, faAt, faCertificate, faTrophy, faBars} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faGitlab = faGitlab;
  faHtml5 = faHtml5;
  faCss3Alt = faCss3Alt;
  faAngular = faAngular;
  faJsSquare = faJsSquare;
  faJava = faJava;
  faCertificate = faCertificate;
  faVuejs = faVuejs;

  constructor() {
  }

  ngOnInit() {
  }

}

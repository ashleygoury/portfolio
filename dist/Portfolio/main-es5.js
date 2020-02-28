function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n  <app-nav-menu></app-nav-menu>\r\n  <router-outlet></router-outlet>\r\n  <!--  Home-->\r\n  <section id=\"home\">\r\n    <!--    Video Background-->\r\n    <video loop muted autoplay id=\"video-background\">\r\n      <source src=\"../assets/img/video-background.mp4\" type=\"video/mp4\">\r\n    </video>\r\n    <div class=\"video-overlay\"></div>\r\n\r\n    <h1 class=\"main-title\">Ashley Goury</h1>\r\n    <!--    Social Icons-->\r\n    <div class=\"social-icons\">\r\n      <a href=\"https://github.com/ashleygoury\" target=\"_blank\" rel=\"noopener\">\r\n        <fa-icon [icon]=\"faGithub\" title=\"Github\"></fa-icon>\r\n      </a>\r\n      <a href=\"https://www.linkedin.com/in/ashley-goury/\" target=\"_blank\" rel=\"noopener\">\r\n        <fa-icon [icon]=\"faLinkedin\" title=\"Linkedin\"></fa-icon>\r\n      </a>\r\n      <a href=\"https://www.facebook.com/ashley2705\" target=\"_blank\" rel=\"noopener\">\r\n        <fa-icon [icon]=\"faFacebook\" title=\"Facebook\"></fa-icon>\r\n      </a>\r\n      <a href=\"https://gitlab.com/ashleygoury\" target=\"_blank\" rel=\"noopener\">\r\n        <fa-icon [icon]=\"faGitlab\" title=\"Gitlab\"></fa-icon>\r\n      </a>\r\n    </div>\r\n  </section>\r\n\r\n  <!--  About-->\r\n  <div class=\"background\">\r\n    <section id=\"about\">\r\n      <div class=\"card\">\r\n        <img src=\"../assets/img/ashley-goury.jpg\" alt=\"Picture of Me\" class=\"about-img\">\r\n        <div class=\"card-body\">\r\n          <h1 class=\"card-title\">About</h1>\r\n          <p class=\"card-text\">Hi, my name is Ashley Goury. I am currently doing an internship at ATT-Soft as a web\r\n            developer in Montreal. I am a Full-Stack Developer. </p>\r\n          <a routerLink=\"/resume\" routerLinkActive=\"active\" (click)=\"scrollOnTop()\">\r\n            <div class=\"card-button\">View Resume</div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>\r\n\r\n\r\n  <!--  Projects-->\r\n  <section id=\"projects\">\r\n    <h1 class=\"projects-title\">Click to View Projects</h1>\r\n    <div class=\"projects\">\r\n      <div class=\"project-group-1\">\r\n        <article class=\"project-item\">\r\n          <div class=\"project-img\">\r\n            <a href=\"https://github.com/ashleygoury/TicTacToe\"><img src=\"../assets/img/TicTacToe.png\" alt=\"Project\"></a>\r\n          </div>\r\n          <div class=\"project-caption\">\r\n            <h4 class=\"project-title\"><a href=\"https://github.com/ashleygoury/TicTacToe\">Tic Tac Toe</a></h4>\r\n            <h6 class=\"github-link\"><a href=\"https://github.com/ashleygoury/TicTacToe\" title=\"View Github Repository\">Github</a>\r\n            </h6>\r\n          </div>\r\n        </article>\r\n        <article class=\"project-item\">\r\n          <div class=\"project-img\">\r\n            <a href=\"https://github.com/ashleygoury/PakingApp\"><img src=\"../assets/img/parkingFinder.png\" alt=\"Project\"></a>\r\n          </div>\r\n          <div class=\"project-caption\">\r\n            <h4 class=\"project-title\"><a href=\"https://github.com/ashleygoury/PakingApp\">Parking finder</a></h4>\r\n            <h6 class=\"github-link\"><a href=\"https://github.com/ashleygoury/PakingApp\" title=\"View Github Repository\">Github</a>\r\n            </h6>\r\n          </div>\r\n        </article>\r\n        <article class=\"project-item\">\r\n          <div class=\"project-img\">\r\n            <a href=\"https://github.com/ashleygoury/Dice\"><img src=\"../assets/img/dice.png\" alt=\"Project\"></a>\r\n          </div>\r\n          <div class=\"project-caption\">\r\n            <h4 class=\"project-title\"><a href=\"https://github.com/ashleygoury/Dice\">Dice</a></h4>\r\n            <h6 class=\"github-link\"><a href=\"https://github.com/ashleygoury/Dice\"\r\n                                       title=\"View Github Repository\">Github</a></h6>\r\n          </div>\r\n        </article>\r\n      </div>\r\n      <div class=\"project-group-2\">\r\n        <article class=\"project-item\">\r\n          <div class=\"project-img\">\r\n            <a href=\"https://github.com/ashleygoury/collect_data_backend\"><img src=\"../assets/img/backend.png\"\r\n                                                                               alt=\"Project\"></a>\r\n          </div>\r\n          <div class=\"project-caption\">\r\n            <h4 class=\"project-title\"><a href=\"https://github.com/ashleygoury/collect_data_backend\">Collect data</a>\r\n            </h4>\r\n            <h6 class=\"github-link\"><a href=\"https://github.com/ashleygoury/collect_data_backend\"\r\n                                       title=\"View Github Repository\">Github</a></h6>\r\n          </div>\r\n        </article>\r\n        <article class=\"project-item\">\r\n          <div class=\"project-img\">\r\n            <a href=\"https://github.com/ashleygoury/animation\"><img src=\"../assets/img/animation.png\"\r\n                                                                               alt=\"Project\"></a>\r\n          </div>\r\n          <div class=\"project-caption\">\r\n            <h4 class=\"project-title\"><a href=\"https://github.com/ashleygoury/animation\">Tic-Tac-Toe(animation)</a>\r\n            </h4>\r\n            <h6 class=\"github-link\"><a href=\"https://github.com/ashleygoury/animation\"\r\n                                       title=\"View Github Repository\">Github</a></h6>\r\n          </div>\r\n        </article>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!--  Contact-->\r\n  <div class=\"background\">\r\n    <section id=\"contact\">\r\n      <a href=\"mailto:ashleygoury@outlook.com\" class=\"contact-mail\" rel=\"noopener\" title=\"Clcik to Send Email\">\r\n        <img src=\"../assets/img/business-card.png\" alt=\"Business Cards\" class=\"business-card\">\r\n      </a>\r\n    </section>\r\n  </div>\r\n\r\n  <!--  Footer-->\r\n  <section id=\"footer\">\r\n    <div class=\"footer-icons\">\r\n      <a href=\"https://github.com/ashleygoury\" target=\"_blank\" rel=\"noopener\">\r\n        <fa-icon [icon]=\"faGithub\" title=\"Github\"></fa-icon>\r\n      </a>\r\n      <a href=\"https://www.linkedin.com/in/ashley-goury/\" target=\"_blank\" rel=\"noopener\">\r\n        <fa-icon [icon]=\"faLinkedin\" title=\"Linkedin\"></fa-icon>\r\n      </a>\r\n      <a href=\"https://www.facebook.com/ashley2705\" target=\"_blank\" rel=\"noopener\">\r\n        <fa-icon [icon]=\"faFacebook\" title=\"Facebook\"></fa-icon>\r\n      </a>\r\n      <a href=\"https://gitlab.com/ashleygoury\" target=\"_blank\" rel=\"noopener\">\r\n        <fa-icon [icon]=\"faGitlab\" title=\"Gitlab\"></fa-icon>\r\n      </a>\r\n      <p class=\"footer-text\">Ashley Goury - 2020</p>\r\n    </div>\r\n  </section>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavMenuNavMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--Hamburger menu-->\n<div class=\"container\" id=\"menu-bars\" (click)=\"Toogle()\">\n  <div class=\"bar1\"></div>\n  <div class=\"bar2\"></div>\n  <div class=\"bar3\"></div>\n</div>\n\n<!--Mobile navigation-->\n<nav class=\"mobile-nav\" id=\"mobile-nav\">\n  <ul class=\"nav-items\" (click)=\"Toogle()\">\n    <li style=\"padding-top: 48px\"></li>\n    <a href=\"#home\">\n      <li>Home</li>\n    </a>\n    <a href=\"#about\">\n      <li>About</li>\n    </a>\n    <a href=\"#projects\">\n      <li>Projects</li>\n    </a>\n    <a href=\"#contact\">\n      <li>Contact</li>\n    </a>\n  </ul>\n</nav>\n\n<!--Desktop navigation-->\n<div class=\"sidebar-container\" (mouseover)=\"SidebarOn()\" (mouseout)=\"SidebarOff()\">\n  <p class=\"sidebar-toggle\" id=\"sidebar-toggle\">Menu</p>\n  <ul class=\"sidebar-items desktop-nav display-none\" id=\"desktop-nav\">\n    <a href=\"#home\">\n      <li>Home</li>\n    </a>\n    <a href=\"#about\">\n      <li>About</li>\n    </a>\n    <a href=\"#projects\">\n      <li>Projects</li>\n    </a>\n    <a href=\"#contact\">\n      <li>Contact</li>\n    </a>\n  </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResumeResumeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"resume-wrapper\">\n  <div class=\"background\"></div>\n  <!-- Navigation  ----------------------------------------------------------->\n  <nav class=\"resume-nav\" id=\"resume-nav\">\n    <ul>\n      <li class=\"logo\"><a href=\"#\">\n        <div class=\"img-logo\">\n          <img class=\"rounded-img\" src=\"../../assets/img/ashley-goury.jpg\" alt=\"Ashley Goury\"\n               title=\"Visit Ashley Goury\"/>\n        </div>\n      </a></li>\n      <li><a href=\"/resume#intro\">About</a></li>\n      <li><a href=\"/resume#experience\">Experience</a></li>\n      <li><a href=\"/resume#education\">Education</a></li>\n      <li><a href=\"/resume#skills\">Skills</a></li>\n    </ul>\n  </nav>\n  <!-- About ----------------------------------------------------------------->\n  <section id=\"intro\">\n    <div class=\"about-content content-padding\">\n      <h1 class=\"main-title title\"><strong>Ashley\n        <span class=\"red\">Goury</span></strong>\n      </h1>\n      <div class=\"sub-title title\">Montreal · Laurentides · Laval <br>\n        <a href=\"mailto:contact@jacinto.design\">ashleygoury@outlook.com</a>\n      </div>\n      <p class=\"main-text main\">I am currently doing an internship at ATT-Soft as a Web Developer. I am very\n        hardworking, honest, punctual, motivated and a good timekeeper, always willing to learn new skills.\n      </p>\n      <ul class=\"social-icons\">\n        <li class=\"icons no-margin-left\">\n          <a href=\"https://github.com/ashleygoury\" target=\"_blank\" rel=\"noopener\" title=\"Github\">\n            <fa-layers [fixedWidth]=\"true\">\n              <fa-icon [icon]=\"faGithub\" title=\"Github\" class=\"circle red\"></fa-icon>\n            </fa-layers>\n          </a>\n        </li>\n        <li class=\"icons\">\n          <a href=\"https://www.linkedin.com/in/ashley-goury/\" target=\"_blank\" rel=\"noopener\" title=\"LinkedIn\">\n            <fa-layers [fixedWidth]=\"true\">\n              <fa-icon [icon]=\"faLinkedin\" title=\"Linkedin\" class=\"circle red\"></fa-icon>\n            </fa-layers>\n          </a>\n        </li>\n        <li class=\"icons\">\n          <a href=\"https://www.facebook.com/ashley2705\" target=\"_blank\" rel=\"noopener\" title=\"Linkedin\">\n            <fa-layers [fixedWidth]=\"true\">\n              <fa-icon [icon]=\"faFacebook\" title=\"Facebook\" class=\"circle red\"></fa-icon>\n            </fa-layers>\n          </a>\n        </li>\n        <li class=\"icons\">\n          <a href=\"hhttps://gitlab.com/ashleygoury\" target=\"_blank\" rel=\"noopener\" title=\"Medium\">\n            <fa-layers [fixedWidth]=\"true\">\n              <fa-icon [icon]=\"faGitlab\" title=\"Gitlab\" class=\"circle red\"></fa-icon>\n            </fa-layers>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </section>\n  <!-- Experience  ------------------------------------------------------------>\n  <section id=\"experience\">\n    <div class=\"experience-content content-padding\">\n      <h2 class=\"section-title title\">Experience</h2>\n\n      <div class=\"item-wrapper\">\n        <article class=\"item\">\n          <h3 class=\"item-title title\">Data entry operator</h3>\n          <h4 class=\"item-subtitle title\">CIBC</h4>\n          <p class=\"item-text main\">▪ Enter, update and verify alphanumeric data in the computerized system.<br>\n            ▪ Check the integrity, accuracy and confidentiality of the data entered and meet deadlines required.\n          </p>\n        </article>\n        <div class=\"item-right\">\n          <p class=\"item-date main red align\">October - December 2013</p>\n        </div>\n      </div>\n\n      <div class=\"item-wrapper\">\n        <article class=\"item\">\n          <h3 class=\"item-title title\">Forklift driver</h3>\n          <h4 class=\"item-subtitle title\">Groupe robert</h4>\n          <p class=\"item-text main\">▪ Load and unload trucks.<br> ▪ Prepared pallets by following prescribed stacking\n            arrangement and properly tagging pallets.<br>▪ Uses equipment and tools to increase productivity, efficiency\n            and safety.\n          </p>\n        </article>\n        <div class=\"item-right\">\n          <p class=\"item-date main red align\">August 2016 - Present</p>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- Education ------------------------------------------------------------->\n  <section id=\"education\">\n    <div class=\"education-content content-padding\">\n      <h2 class=\"section-title title\">Education</h2>\n\n      <div class=\"item-wrapper\">\n        <article class=\"item\">\n          <h3 class=\"item-title title\">Collège de Maisonneuve</h3>\n          <h4 class=\"item-subtitle title\">DEC en informatique de gestion (Computer science)</h4>\n          <p class=\"item-text main small-text\">3800 Sherbrooke St E, Montreal, QC H1X 2A2</p>\n        </article>\n        <div class=\"item-right\">\n          <p class=\"item-date main red align\">August 2016 to Present</p>\n        </div>\n      </div>\n\n      <div class=\"item-wrapper\">\n        <article class=\"item\">\n          <h3 class=\"item-title title\">High school</h3>\n          <h4 class=\"item-subtitle title\">Professor B. Bissondoyal College, Flacq (Mauritius)</h4>\n          <p class=\"item-text main small-text\">General</p>\n        </article>\n        <div class=\"item-right\">\n          <p class=\"item-date main red align\">March 2009 to Nov. 2012</p>\n        </div>\n      </div>\n\n    </div>\n\n  </section>\n  <!-- Skils ------------------------------------------------------------------>\n  <section id=\"skills\">\n    <div class=\"skills-content content-padding\">\n      <h2 class=\"section-title title\">Skills</h2>\n      <ul class=\"skill-icons red\">\n        <li class=\"icons no-margin-left\">\n          <fa-icon [icon]=\"faHtml5\" class=\"skill-icon\" title=\"HTML5\"></fa-icon>\n        </li>\n        <li class=\"icons\">\n          <fa-icon [icon]=\"faCss3Alt\" class=\"skill-icon\" title=\"CSS\"></fa-icon>\n        </li>\n        <li class=\"icons\">\n          <fa-icon [icon]=\"faJsSquare\" class=\"skill-icon\" title=\"Javascript\"></fa-icon>\n        </li>\n        <li class=\"icons\">\n          <fa-icon [icon]=\"faAngular\" class=\"skill-icon\" title=\"Angular\"></fa-icon>\n        </li>\n        <li class=\"icons\">\n          <fa-icon [icon]=\"faJava\" class=\"skill-icon\" title=\"Java\"></fa-icon>\n        </li>\n        <li class=\"icons\">\n          <fa-icon [icon]=\"faVuejs\" class=\"skill-icon\" title=\"VueJS\"></fa-icon>\n        </li>\n      </ul>\n\n      <h4 class=\"item-subtitle title\">Specializations</h4>\n      <div class=\"list\">\n        <div class=\"list-item\">\n          <fa-icon [icon]=\"faCertificate\" class=\"trophy\"></fa-icon>\n          <p class=\"main indent\">C#</p>\n        </div>\n        <div class=\"list-item\">\n          <fa-icon [icon]=\"faCertificate\" class=\"trophy\"></fa-icon>\n          <p class=\"main indent\">MySQL</p>\n        </div>\n        <div class=\"list-item\">\n          <fa-icon [icon]=\"faCertificate\" class=\"trophy\"></fa-icon>\n          <p class=\"main indent\">Android Studio</p>\n        </div>\n        <div class=\"list-item\">\n          <fa-icon [icon]=\"faCertificate\" class=\"trophy\"></fa-icon>\n          <p class=\"main indent\">Adobe XD</p>\n        </div>\n        <div class=\"list-item\">\n          <fa-icon [icon]=\"faCertificate\" class=\"trophy\"></fa-icon>\n          <p class=\"main indent\">Responsive Design</p>\n        </div>\n        <div class=\"list-item\">\n          <fa-icon [icon]=\"faCertificate\" class=\"trophy\"></fa-icon>\n          <p class=\"main indent\">Progressive Web App Development</p>\n        </div>\n        <div class=\"list-item\">\n          <fa-icon [icon]=\"faCertificate\" class=\"trophy\"></fa-icon>\n          <p class=\"main indent\">Git</p>\n        </div>\n      </div>\n\n    </div>\n  </section>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resume/resume.component */
    "./src/app/resume/resume.component.ts");

    var routes = [{
      path: 'resume',
      component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "section {\r\n  min-height: 100vh;\r\n  overflow-x: hidden;\r\n  height: auto;\r\n  position: relative;\r\n  font-family: \"Segoe UI\", sans-serif;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n/* -- Home Section ---------------------------------- */\r\n\r\n#home {\r\n  background-color: black;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n/* Video Background */\r\n\r\n#video-background {\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: 100vw;\r\n  height: auto;\r\n}\r\n\r\nvideo {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.video-overlay {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: rgba(0, 0, 0, .5);\r\n}\r\n\r\n/*Main Title*/\r\n\r\n@font-face {\r\n  font-family: alex-brush;\r\n  src: url('alex-brush.ttf');\r\n}\r\n\r\n.main-title {\r\n  position: absolute;\r\n  top: 30%;\r\n  color: white;\r\n  font-family: alex-brush, sans-serif;\r\n  font-size: 5rem;\r\n}\r\n\r\n/*Social Icons*/\r\n\r\n.social-icons {\r\n  position: absolute;\r\n  top: 55%;\r\n}\r\n\r\n.social-icons fa-icon {\r\n  font-size: 3rem;\r\n  color: white;\r\n  padding: 7.5px 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.social-icons fa-icon:hover {\r\n  color: dimgray;\r\n  background-color: white;\r\n}\r\n\r\n/*About*/\r\n\r\n.background {\r\n  position: relative;\r\n  min-height: 100vh;\r\n  height: auto;\r\n  background-color: #fbf9fd;\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23000000' fill-opacity='0.04' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\r\n}\r\n\r\n.card {\r\n  position: relative;\r\n  top: 5vh;\r\n  height: auto;\r\n  width: 40vw;\r\n  margin: 0 auto;\r\n  background-color: rgba(255, 255, 255, .8);\r\n  padding: 3rem 1.5rem;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n}\r\n\r\n.about-img {\r\n  height: 35vh;\r\n  margin: 0 auto;\r\n  border-radius: 50%;\r\n  box-shadow: 2px 5px 10px 4px rgba(0, 0, 0, .25);\r\n}\r\n\r\n.card-body {\r\n  padding: 0 1.2rem;\r\n}\r\n\r\n.card-title {\r\n  text-align: center;\r\n  font-weight: 500;\r\n  font-size: 2.5rem;\r\n  width: 100%;\r\n  padding-bottom: 25px;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.card-text {\r\n  font-size: 1.3rem;\r\n  margin-top: 0;\r\n  text-align: justify;\r\n}\r\n\r\n.card-button {\r\n  text-align: center;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  background-color: royalblue;\r\n  padding: .5rem;\r\n  margin-top: 3vh;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0.3rem rgba(0, 0, 0, .65);\r\n}\r\n\r\n.card-button:active {\r\n  -webkit-transform: translate(0, .3rem);\r\n          transform: translate(0, .3rem);\r\n  box-shadow: 0 0.1rem rgba(0, 0, 0, .65);\r\n}\r\n\r\n/*Projects*/\r\n\r\n#projects {\r\n  background-color: black;\r\n}\r\n\r\n.projects {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  margin: 0 10%;\r\n}\r\n\r\n.projects-title {\r\n  color: white;\r\n  font-size: 2.5rem;\r\n  font-weight: 500;\r\n  text-align: center;\r\n}\r\n\r\n.project-group-1 {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.project-group-2 {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  margin-bottom: 10vh;\r\n}\r\n\r\n.project-img img {\r\n  height: 325px;\r\n  /*width: 325px;*/\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.project-img img:hover {\r\n  -webkit-transform: scale(0.97);\r\n          transform: scale(0.97);\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.project-item {\r\n  text-align: center;\r\n}\r\n\r\n.project-title {\r\n  font-size: 1.4rem;\r\n  font-weight: 500;\r\n  margin: 0 auto;\r\n}\r\n\r\n.project-title a:hover {\r\n  color: rgb(201, 22, 22);\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.github-link {\r\n  font-size: 1.1rem;\r\n  font-weight: 500;\r\n  margin-top: 1vh;\r\n}\r\n\r\n.github-link a:hover {\r\n  color: rgb(201, 22, 22);\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n/*Contact*/\r\n\r\n#contact {\r\n  /*background-color: black;*/\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n/*.contact-mail {*/\r\n\r\n/*  position: absolute;*/\r\n\r\n/*  color: white;*/\r\n\r\n/*  height: 100px;*/\r\n\r\n/*  font-family: alex-brush, sans-serif;*/\r\n\r\n/*  font-size: 4rem;*/\r\n\r\n/*  margin-top: 10vh;*/\r\n\r\n/*  z-index: 2;*/\r\n\r\n/*  transition: 0.5s, ease-in-out;*/\r\n\r\n/*}*/\r\n\r\n.contact-mail:hover {\r\n  text-decoration: underline;\r\n  -webkit-transition: 0.5s, ease-in-out;\r\n  transition: 0.5s, ease-in-out;\r\n}\r\n\r\n.red {\r\n  color: red;\r\n}\r\n\r\n.business-card {\r\n  height: 100vh;\r\n  width: auto;\r\n}\r\n\r\n/*Footer*/\r\n\r\n#footer {\r\n  background-color: black;\r\n  min-height: unset;\r\n  height: 150px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.footer-icons fa-icon {\r\n  font-size: 2rem;\r\n  margin-left: 1vw;\r\n}\r\n\r\n.footer-icons fa-icon:hover {\r\n  color: red;\r\n}\r\n\r\n.footer-text {\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n/* -------------------------Media Queries-------------------- */\r\n\r\n/* Large Smartphone (Vertical) */\r\n\r\n@media screen and (max-width: 600px) {\r\n  video {\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n  }\r\n\r\n  #video-background {\r\n    position: absolute;\r\n    height: 100vh;\r\n    width: auto;\r\n  }\r\n\r\n  .main-title {\r\n    font-size: 3.5rem;\r\n  }\r\n\r\n  .social-icons fa-icon {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .card {\r\n    width: 100vw;\r\n    background-color: rgba(255, 255, 255, .7);\r\n  }\r\n\r\n  .card-text {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .project-title {\r\n    font-size: 2rem;\r\n    padding-top: 20px;\r\n  }\r\n\r\n  .project-title {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .contact-mail {\r\n    font-size: 2.5rem;\r\n  }\r\n\r\n  .footer-icons fa-icon {\r\n    margin-left: 20px;\r\n  }\r\n}\r\n\r\n/* Large Smartphone (Horizontal) */\r\n\r\n@media screen and (max-width: 850px) and (max-height: 500px) {\r\n  #video-background {\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: auto;\r\n  }\r\n\r\n  .main-title {\r\n    top: 15%;\r\n  }\r\n\r\n  .card {\r\n    width: 80%;\r\n    top: 0;\r\n  }\r\n\r\n  .card-text {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .about-img {\r\n    height: 50vh;\r\n  }\r\n\r\n  .projects {\r\n    margin: 0 2%;\r\n  }\r\n\r\n  .project-img img {\r\n    height: 245px;\r\n    width: 245px;\r\n  }\r\n\r\n  .footer-icons fa-icon {\r\n    margin-left: 20px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQSx1REFBdUQ7O0FBQ3ZEO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFFQSxxQkFBcUI7O0FBQ3JCO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLE1BQU07RUFDTixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1DQUFtQztBQUNyQzs7QUFFQSxhQUFhOztBQUNiO0VBQ0UsdUJBQXVCO0VBQ3ZCLDBCQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxlQUFlO0FBQ2pCOztBQUVBLGVBQWU7O0FBQ2Y7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUEsUUFBUTs7QUFDUjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QiwyaUJBQTJpQjtBQUM3aUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFlBQVk7RUFDWixXQUFXO0VB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aUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWix5Q0FBeUM7RUFDM0M7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQSxrQ0FBa0M7O0FBQ2xDO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFVBQVU7SUFDVixNQUFNO0VBQ1I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiAtLSBIb21lIFNlY3Rpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4jaG9tZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiBWaWRlbyBCYWNrZ3JvdW5kICovXHJcbiN2aWRlby1iYWNrZ3JvdW5kIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbnZpZGVvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4udmlkZW8tb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG59XHJcblxyXG4vKk1haW4gVGl0bGUqL1xyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogYWxleC1icnVzaDtcclxuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9hbGV4LWJydXNoLnR0ZlwiKTtcclxufVxyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IGFsZXgtYnJ1c2gsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiA1cmVtO1xyXG59XHJcblxyXG4vKlNvY2lhbCBJY29ucyovXHJcbi5zb2NpYWwtaWNvbnMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDU1JTtcclxufVxyXG5cclxuLnNvY2lhbC1pY29ucyBmYS1pY29uIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDcuNXB4IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc29jaWFsLWljb25zIGZhLWljb246aG92ZXIge1xyXG4gIGNvbG9yOiBkaW1ncmF5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKkFib3V0Ki9cclxuLmJhY2tncm91bmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZjlmZDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI4JyBoZWlnaHQ9JzQ5JyB2aWV3Qm94PScwIDAgMjggNDknJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBpZD0naGV4YWdvbnMnIGZpbGw9JyUyMzAwMDAwMCcgZmlsbC1vcGFjaXR5PScwLjA0JyBmaWxsLXJ1bGU9J25vbnplcm8nJTNFJTNDcGF0aCBkPSdNMTMuOTkgOS4yNWwxMyA3LjV2MTVsLTEzIDcuNUwxIDMxLjc1di0xNWwxMi45OS03LjV6TTMgMTcuOXYxMi43bDEwLjk5IDYuMzQgMTEtNi4zNVYxNy45bC0xMS02LjM0TDMgMTcuOXpNMCAxNWwxMi45OC03LjVWMGgtMnY2LjM1TDAgMTIuNjl2Mi4zem0wIDE4LjVMMTIuOTggNDF2OGgtMnYtNi44NUwwIDM1Ljgxdi0yLjN6TTE1IDB2Ny41TDI3Ljk5IDE1SDI4di0yLjMxaC0uMDFMMTcgNi4zNVYwaC0yem0wIDQ5di04bDEyLjk5LTcuNUgyOHYyLjMxaC0uMDFMMTcgNDIuMTVWNDloLTJ6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDV2aDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XHJcbiAgcGFkZGluZzogM3JlbSAxLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYWJvdXQtaW1nIHtcclxuICBoZWlnaHQ6IDM1dmg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDJweCA1cHggMTBweCA0cHggcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAwIDEuMnJlbTtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uY2FyZC1idXR0b24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xyXG4gIHBhZGRpbmc6IC41cmVtO1xyXG4gIG1hcmdpbi10b3A6IDN2aDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwLjNyZW0gcmdiYSgwLCAwLCAwLCAuNjUpO1xyXG59XHJcblxyXG4uY2FyZC1idXR0b246YWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAuM3JlbSk7XHJcbiAgYm94LXNoYWRvdzogMCAwLjFyZW0gcmdiYSgwLCAwLCAwLCAuNjUpO1xyXG59XHJcblxyXG4vKlByb2plY3RzKi9cclxuI3Byb2plY3RzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnByb2plY3RzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgMTAlO1xyXG59XHJcblxyXG4ucHJvamVjdHMtdGl0bGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2plY3QtZ3JvdXAtMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWdyb3VwLTIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwdmg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWltZyBpbWcge1xyXG4gIGhlaWdodDogMzI1cHg7XHJcbiAgLyp3aWR0aDogMzI1cHg7Ki9cclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnByb2plY3QtaW1nIGltZzpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnByb2plY3QtaXRlbSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvamVjdC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnByb2plY3QtdGl0bGUgYTpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigyMDEsIDIyLCAyMik7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5naXRodWItbGluayB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tdG9wOiAxdmg7XHJcbn1cclxuXHJcbi5naXRodWItbGluayBhOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDIwMSwgMjIsIDIyKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLypDb250YWN0Ki9cclxuI2NvbnRhY3Qge1xyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7Ki9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKi5jb250YWN0LW1haWwgeyovXHJcbi8qICBwb3NpdGlvbjogYWJzb2x1dGU7Ki9cclxuLyogIGNvbG9yOiB3aGl0ZTsqL1xyXG4vKiAgaGVpZ2h0OiAxMDBweDsqL1xyXG4vKiAgZm9udC1mYW1pbHk6IGFsZXgtYnJ1c2gsIHNhbnMtc2VyaWY7Ki9cclxuLyogIGZvbnQtc2l6ZTogNHJlbTsqL1xyXG4vKiAgbWFyZ2luLXRvcDogMTB2aDsqL1xyXG4vKiAgei1pbmRleDogMjsqL1xyXG4vKiAgdHJhbnNpdGlvbjogMC41cywgZWFzZS1pbi1vdXQ7Ki9cclxuLyp9Ki9cclxuXHJcbi5jb250YWN0LW1haWw6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIHRyYW5zaXRpb246IDAuNXMsIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ucmVkIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uYnVzaW5lc3MtY2FyZCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLypGb290ZXIqL1xyXG4jZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBtaW4taGVpZ2h0OiB1bnNldDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvb3Rlci1pY29ucyBmYS1pY29uIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDF2dztcclxufVxyXG5cclxuLmZvb3Rlci1pY29ucyBmYS1pY29uOmhvdmVyIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZm9vdGVyLXRleHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1NZWRpYSBRdWVyaWVzLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qIExhcmdlIFNtYXJ0cGhvbmUgKFZlcnRpY2FsKSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIHZpZGVvIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgI3ZpZGVvLWJhY2tncm91bmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLm1haW4tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICAuc29jaWFsLWljb25zIGZhLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNyk7XHJcbiAgfVxyXG5cclxuICAuY2FyZC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtbWFpbCB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICB9XHJcblxyXG4gIC5mb290ZXItaWNvbnMgZmEtaWNvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIExhcmdlIFNtYXJ0cGhvbmUgKEhvcml6b250YWwpICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XHJcbiAgI3ZpZGVvLWJhY2tncm91bmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLm1haW4tdGl0bGUge1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtaW1nIHtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0cyB7XHJcbiAgICBtYXJnaW46IDAgMiU7XHJcbiAgfVxyXG5cclxuICAucHJvamVjdC1pbWcgaW1nIHtcclxuICAgIGhlaWdodDogMjQ1cHg7XHJcbiAgICB3aWR0aDogMjQ1cHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWljb25zIGZhLWljb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Portfolio';
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithub"];
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLinkedin"];
        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFacebook"];
        this.faGitlab = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGitlab"];
      }

      _createClass(AppComponent, [{
        key: "scrollOnTop",
        value: function scrollOnTop() {
          document.documentElement.scrollTop = 0;
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./nav-menu/nav-menu.component */
    "./src/app/nav-menu/nav-menu.component.ts");
    /* harmony import */


    var _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./resume/resume.component */
    "./src/app/resume/resume.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__["NavMenuComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__["ResumeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/nav-menu/nav-menu.component.css":
  /*!*************************************************!*\
    !*** ./src/app/nav-menu/nav-menu.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavMenuNavMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "li, a {\r\n  text-decoration: none;\r\n}\r\n\r\n.desktop-nav {\r\n  display: initial;\r\n}\r\n\r\n.display-none {\r\n  display: none;\r\n}\r\n\r\n#menu-bars {\r\n  display: none;\r\n}\r\n\r\n#mobile-nav {\r\n  display: none;\r\n}\r\n\r\n.sidebar-container {\r\n  position: fixed;\r\n  display: initial;\r\n  height: 30vh;\r\n  width: 350px;\r\n  z-index: 10;\r\n}\r\n\r\n.sidebar-toggle {\r\n  text-transform: uppercase;\r\n  font-size: 2rem;\r\n  font-family: \"Segoe UI\", sans-serif;\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, .5);\r\n  width: 112px;\r\n  margin: 40px;\r\n  padding: 10px;\r\n}\r\n\r\n.sidebar-items {\r\n  position: fixed;\r\n  z-index: 10;\r\n  list-style: none;\r\n  font-size: 3rem;\r\n}\r\n\r\n.sidebar-items li {\r\n  text-transform: uppercase;\r\n  font-family: \"Segoe UI\", sans-serif;\r\n  cursor: pointer;\r\n  padding: 2px 14px 5px;\r\n  margin-bottom: 20px;\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, .5);\r\n}\r\n\r\n.sidebar-items li:hover {\r\n  color: rgba(0, 0, 0, .85);\r\n  background-color: whitesmoke;\r\n  -webkit-transition: .3s;\r\n  transition: .3s;\r\n}\r\n\r\n/* -------------------------Media Queries-------------------- */\r\n\r\n/* Large Smartphone (Vertical) */\r\n\r\n@media screen and (max-width: 1080px) {\r\n  .sidebar-container, .sidebar-toggle, .sidebar-items {\r\n    display: none;\r\n  }\r\n\r\n  #menu-bars {\r\n    display: initial;\r\n  }\r\n\r\n  #mobile-nav {\r\n    display: initial;\r\n  }\r\n\r\n  .mobile-nav {\r\n    position: fixed;\r\n    top: -300px;\r\n    left: -50px;\r\n    width: 112%;\r\n    z-index: 5;\r\n    -webkit-transition: 0.5s ease;\r\n    transition: 0.5s ease;\r\n  }\r\n\r\n  .nav-expand {\r\n    top: -16px;\r\n    -webkit-transition: 0.3s ease;\r\n    transition: 0.3s ease;\r\n  }\r\n\r\n  .nav-items {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    text-align: center;\r\n    list-style: none;\r\n  }\r\n\r\n  .nav-items li {\r\n    text-transform: uppercase;\r\n    font-family: 'Segoe UI', sans-serif;\r\n    padding: 10px;\r\n    margin-left: 10px;\r\n    background-color: rgba(0, 0, 0, .85);\r\n  }\r\n\r\n  .mobile-nav a {\r\n    color: white;\r\n  }\r\n\r\n  .mobile-nav a:hover {\r\n    color: rgba(0, 0, 0, .85);\r\n    background-color: #fbfbfb;\r\n  }\r\n\r\n  .nav-items li:hover {\r\n    color: rgba(0, 0, 0, .85);\r\n    background-color: #fbfbfb;\r\n  }\r\n\r\n  /*Hamburger menu*/\r\n  .container {\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    position: fixed;\r\n    top: 10px;\r\n    right: 15px;\r\n    z-index: 12;\r\n  }\r\n\r\n  .bar1, .bar2, .bar3 {\r\n    width: 35px;\r\n    height: 5px;\r\n    background-color: white;\r\n    margin: 6px 0;\r\n    -webkit-transition: 0.4s;\r\n    transition: 0.4s;\r\n    border-top: 1px solid rgba(0, 0, 0, .5);\r\n    border-left: 1px solid rgba(0, 0, 0, .5);\r\n    box-shadow: 2px 2px 2px rgba(0, 0, 0, .5);\r\n  }\r\n\r\n  /* Rotate first bar */\r\n  .change .bar1 {\r\n    -webkit-transform: rotate(-45deg) translate(-9px, 6px);\r\n    transform: rotate(-45deg) translate(-9px, 6px);\r\n  }\r\n\r\n  /* Fade out the second bar */\r\n  .change .bar2 {\r\n    opacity: 0;\r\n  }\r\n\r\n  /* Rotate last bar */\r\n  .change .bar3 {\r\n    -webkit-transform: rotate(45deg) translate(-8px, -8px);\r\n    transform: rotate(45deg) translate(-8px, -8px);\r\n  }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQ0FBbUM7RUFDbkMsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsdUJBQWU7RUFBZixlQUFlO0FBQ2pCOztBQUVBLCtEQUErRDs7QUFFL0QsZ0NBQWdDOztBQUNoQztFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLFVBQVU7SUFDViw2QkFBcUI7SUFBckIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLDZCQUFxQjtJQUFyQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIseUJBQXlCO0VBQzNCOztFQUVBLGlCQUFpQjtFQUNqQjtJQUNFLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLHdDQUF3QztJQUN4Qyx5Q0FBeUM7RUFDM0M7O0VBRUEscUJBQXFCO0VBQ3JCO0lBQ0Usc0RBQXNEO0lBQ3RELDhDQUE4QztFQUNoRDs7RUFFQSw0QkFBNEI7RUFDNUI7SUFDRSxVQUFVO0VBQ1o7O0VBRUEsb0JBQW9CO0VBQ3BCO0lBQ0Usc0RBQXNEO0lBQ3RELDhDQUE4QztFQUNoRDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpLCBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5kZXNrdG9wLW5hdiB7XHJcbiAgZGlzcGxheTogaW5pdGlhbDtcclxufVxyXG5cclxuLmRpc3BsYXktbm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI21lbnUtYmFycyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI21vYmlsZS1uYXYge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IGluaXRpYWw7XHJcbiAgaGVpZ2h0OiAzMHZoO1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnNpZGViYXItdG9nZ2xlIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcclxuICB3aWR0aDogMTEycHg7XHJcbiAgbWFyZ2luOiA0MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWl0ZW1zIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBmb250LXNpemU6IDNyZW07XHJcbn1cclxuXHJcbi5zaWRlYmFyLWl0ZW1zIGxpIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIHNhbnMtc2VyaWY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDJweCAxNHB4IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcclxufVxyXG5cclxuLnNpZGViYXItaXRlbXMgbGk6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC44NSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1NZWRpYSBRdWVyaWVzLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qIExhcmdlIFNtYXJ0cGhvbmUgKFZlcnRpY2FsKSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcclxuICAuc2lkZWJhci1jb250YWluZXIsIC5zaWRlYmFyLXRvZ2dsZSwgLnNpZGViYXItaXRlbXMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICNtZW51LWJhcnMge1xyXG4gICAgZGlzcGxheTogaW5pdGlhbDtcclxuICB9XHJcblxyXG4gICNtb2JpbGUtbmF2IHtcclxuICAgIGRpc3BsYXk6IGluaXRpYWw7XHJcbiAgfVxyXG5cclxuICAubW9iaWxlLW5hdiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IC0zMDBweDtcclxuICAgIGxlZnQ6IC01MHB4O1xyXG4gICAgd2lkdGg6IDExMiU7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1leHBhbmQge1xyXG4gICAgdG9wOiAtMTZweDtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICB9XHJcblxyXG4gIC5uYXYtaXRlbXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1pdGVtcyBsaSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC44NSk7XHJcbiAgfVxyXG5cclxuICAubW9iaWxlLW5hdiBhIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5tb2JpbGUtbmF2IGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjg1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbiAgfVxyXG5cclxuICAubmF2LWl0ZW1zIGxpOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC44NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xyXG4gIH1cclxuXHJcbiAgLypIYW1idXJnZXIgbWVudSovXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHotaW5kZXg6IDEyO1xyXG4gIH1cclxuXHJcbiAgLmJhcjEsIC5iYXIyLCAuYmFyMyB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDZweCAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC41KTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuNSk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIC41KTtcclxuICB9XHJcblxyXG4gIC8qIFJvdGF0ZSBmaXJzdCBiYXIgKi9cclxuICAuY2hhbmdlIC5iYXIxIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNnB4KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCk7XHJcbiAgfVxyXG5cclxuICAvKiBGYWRlIG91dCB0aGUgc2Vjb25kIGJhciAqL1xyXG4gIC5jaGFuZ2UgLmJhcjIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIC8qIFJvdGF0ZSBsYXN0IGJhciAqL1xyXG4gIC5jaGFuZ2UgLmJhcjMge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtOHB4LCAtOHB4KTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/nav-menu/nav-menu.component.ts":
  /*!************************************************!*\
    !*** ./src/app/nav-menu/nav-menu.component.ts ***!
    \************************************************/

  /*! exports provided: NavMenuComponent */

  /***/
  function srcAppNavMenuNavMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () {
      return NavMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavMenuComponent =
    /*#__PURE__*/
    function () {
      function NavMenuComponent() {
        _classCallCheck(this, NavMenuComponent);
      }

      _createClass(NavMenuComponent, [{
        key: "SidebarOn",
        value: function SidebarOn() {
          var nav = document.getElementById("desktop-nav");
          var toggle = document.getElementById("sidebar-toggle");
          nav.classList.remove("display-none");
          toggle.classList.add("display-none");
        }
      }, {
        key: "SidebarOff",
        value: function SidebarOff() {
          var nav = document.getElementById("desktop-nav");
          var toggle = document.getElementById("sidebar-toggle");
          nav.classList.add("display-none");
          toggle.classList.remove("display-none");
        }
      }, {
        key: "Toogle",
        value: function Toogle() {
          var mobileNav = document.getElementById("mobile-nav");
          var menuBars = document.getElementById("menu-bars");
          mobileNav.classList.toggle("nav-expand");
          menuBars.classList.toggle("change");
        }
      }]);

      return NavMenuComponent;
    }();

    NavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-menu.component.css */
      "./src/app/nav-menu/nav-menu.component.css")).default]
    })], NavMenuComponent);
    /***/
  },

  /***/
  "./src/app/resume/resume.component.css":
  /*!*********************************************!*\
    !*** ./src/app/resume/resume.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppResumeResumeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@font-face { font-family: open-sans; src: url('opensans-reg.ttf') }\r\n@font-face { font-family: saira-ec; src: url('saira-extra-cond-reg.ttf') }\r\n.resume-wrapper {\r\n  font-family: 'Segoe UI', sans-serif;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  width: 100%;\r\n  scroll-behavior: smooth;\r\n  z-index: 5;\r\n}\r\n.background {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100vh;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: white;\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23000000' fill-opacity='0.04' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E\");\r\n}\r\nsection {\r\n  color: black;\r\n  margin-left: 20%;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  min-height: 100vh;\r\n}\r\n.title {\r\n  font-family: saira-ec, sans-serif;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  margin: 0;\r\n}\r\n.section-title {\r\n  font-size: 5rem;\r\n}\r\n.item-title {\r\n  font-size: 2.2rem;\r\n}\r\n.item-subtitle {\r\n  font-size: 1.8rem;\r\n  font-weight: 500;\r\n  color: #868e96;\r\n  margin-top: -5px;\r\n}\r\n.sub-title {\r\n  line-height: 2.5rem;\r\n  font-weight: 500;\r\n  font-size: 2rem;\r\n  margin: 0;\r\n  color: #868e96;\r\n}\r\n.sub-title a {\r\n  text-decoration: none;\r\n  color: #D30000;\r\n}\r\n.main {\r\n  font-family: open-sans, sans-serif;\r\n  font-size: 1.25rem;\r\n  color: #868e96;\r\n}\r\nul {\r\n  list-style: none;\r\n}\r\n.red {\r\n  color: #D30000;\r\n}\r\n.dark-red {\r\n  color: #990000;\r\n}\r\n.align {\r\n  text-align: right !important;\r\n}\r\n.content-padding {\r\n  position: relative;\r\n  padding: 0 5vw 0 1vw;\r\n}\r\n/* Navigation -------------------------------------------------------- */\r\n.resume-nav {\r\n  margin: 0;\r\n  padding: 0;\r\n  text-align: center;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  position: fixed;\r\n  background: #000;\r\n  width: 18%;\r\n  height: 100%;\r\n}\r\n.resume-nav a {\r\n  display: block;\r\n  padding: 10px;\r\n  margin-right: 40px;\r\n  color: #777;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n}\r\n.resume-nav a:hover {\r\n  color: rgb(228, 228, 228);\r\n}\r\n.resume-nav a:active, .resume-nav a:focus-within {\r\n  color: #fff;\r\n}\r\n.rounded-img {\r\n  border-radius: 50%;\r\n  max-width: 10rem;\r\n  max-height: 10rem;\r\n  border: .5rem solid rgba(255,255,255,.2);\r\n}\r\n.text-logo {\r\n  display: none;\r\n}\r\n.menu-bars fa-icon {\r\n  display: none;\r\n}\r\n/* About ------------------------------------------------------------------------------------- */\r\n.about-content {\r\n  top: 25.5vh;\r\n}\r\n.main-title {\r\n  line-height: 6rem;\r\n  font-size: 7rem;\r\n  font-weight: 700;\r\n  margin: 0;\r\n}\r\n.social-icons {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  margin-top: 3vh;\r\n  position: absolute;\r\n  left: -80px;\r\n}\r\n.social-icons .icons {\r\n  position: relative;\r\n  display: block;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  margin-left: 50px;\r\n}\r\n.circle {\r\n  font-size: 3.5rem;\r\n}\r\n.icon {\r\n  font-size: 2rem;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 55%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n#linkedin {\r\n  left: 70%;\r\n}\r\n#medium {\r\n  left: 70%;\r\n}\r\n#instagram {\r\n  left: 70%;\r\n}\r\n#youtube {\r\n  left: 50%;\r\n}\r\n/* Experience ------------------------------------------------------ */\r\n.experience-content {\r\n  top: 5vh;\r\n}\r\n.item-wrapper {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  margin-bottom: 7vh;\r\n}\r\n.item {\r\n  width: 70%;\r\n  display: block;\r\n}\r\n.item-right {\r\n  width: 30%;\r\n  display: block;\r\n}\r\n.item-date {\r\n  margin-top: 8px;\r\n}\r\n/* Education -------------------------------------------------------- */\r\n.education-content {\r\n  top: 25.5vh;\r\n}\r\n/* Skills ----------------------------------------------------------- */\r\n.skills-content {\r\n  top: 25.5vh;\r\n}\r\n.skill-icons {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  margin-top: 5vh;\r\n  margin-bottom: 8vh;\r\n}\r\n.icons {\r\n  position: relative;\r\n  display: block;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  margin-left: 75px;\r\n}\r\n.no-margin-left {\r\n  margin-left: -1vw;\r\n}\r\n.skill-icon {\r\n  font-size: 3.5rem;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 55%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n#diamond {\r\n  font-size: 3rem;\r\n}\r\n/* Interests -------------------------------------------------------- */\r\n.interests-content {\r\n  top: 25.5vh;\r\n}\r\n/* Awards ----------------------------------------------------------- */\r\n.awards-content {\r\n  top: 25.5vh;\r\n}\r\n.list {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n}\r\n.list-item {\r\n  margin-left: 10px;\r\n}\r\n.trophy {\r\n  color: #868e96;\r\n}\r\n.indent {\r\n  display: inline-block;\r\n  margin: 0 0 0 10px;\r\n}\r\n/* Responsive Design Media Queries ---------------------------------- */\r\n@media screen and (min-width: 800px) and (min-height: 945px) {\r\n  .about-content { top: 32vh; }\r\n  .education-content { top: 32vh; }\r\n  .skills-content { top: 32vh; }\r\n  .interests-content { top: 32vh; }\r\n  .awards-content { top: 32vh; }\r\n}\r\n@media screen and (min-width: 800px) and (min-height: 901px) and (max-height: 944px) {\r\n  .about-content { top: 31vh; }\r\n  .education-content { top: 31vh; }\r\n  .skills-content { top: 31vh; }\r\n  .interests-content { top: 31vh; }\r\n  .awards-content { top: 31vh; }\r\n}\r\n@media screen and (min-width: 800px) and (min-height: 780px) and (max-height: 900px) {\r\n  .about-content { top: 28vh; }\r\n  .education-content { top: 28vh; }\r\n  .skills-content { top: 28vh; }\r\n  .interests-content { top: 28vh; }\r\n  .awards-content { top: 28vh; }\r\n}\r\n@media screen and (max-width: 1300px) {\r\n  .rounded-img { max-width: 7rem; max-height: 7rem; border-width: .25rem; }\r\n  .education-content { top: 10vh; }\r\n  .skills-content { top: 20vh; }\r\n  .interests-content { top: 20vh; }\r\n  .awards-content { top: 20vh; }\r\n}\r\n/* < Laptop */\r\n@media screen and (max-width: 1080px) {\r\n  section {\r\n    margin-left: 0;\r\n  }\r\n  .content-padding {\r\n    padding: 0 1rem;\r\n  }\r\n  /* Navigation --------------------------------------------------------- */\r\n  .navbar-background {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 50px;\r\n    background-color: black;\r\n    z-index: 100;\r\n  }\r\n  .menu-bars fa-icon {\r\n    display: initial;\r\n    font-size: 35px;\r\n    color: white;\r\n    margin-left: 10px;\r\n  }\r\n  .resume-nav {\r\n    margin-top: 50px;\r\n    width: 100%;\r\n    height: 210px;\r\n    opacity: .95;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    z-index: 20;\r\n    top: -500px;\r\n    -webkit-transition: 0.75s ease;\r\n    transition: 0.75s ease;\r\n  }\r\n  .resume-nav-expand {\r\n    top: 0;\r\n    -webkit-transition: 0.3s ease;\r\n    transition: 0.3s ease;\r\n  }\r\n  .resume-nav ul {\r\n    margin-left: -40px;\r\n  }\r\n  .resume-nav a {\r\n    padding: 5px;\r\n    margin-right: 5px;\r\n  }\r\n  .logo {\r\n    display: none;\r\n  }\r\n  .rounded-img {\r\n    display: none;\r\n  }\r\n  .text-logo {\r\n    color: white;\r\n    display: inherit;\r\n    position: absolute;\r\n    top: 3px;\r\n    left: 33%;\r\n    z-index: 70;\r\n    font-size: 30px;\r\n    margin-bottom: 0;\r\n  }\r\n  /* About ---------------------------------------------------- */\r\n  .social-icons {\r\n    left: -65px;\r\n  }\r\n  .social-icons .icons {\r\n    margin-left: 40px;\r\n  }\r\n  .circle {\r\n    font-size: 3rem;\r\n  }\r\n  .icon {\r\n    font-size: 1.65rem;\r\n  }\r\n  #linkedin {\r\n    left: 60%;\r\n  }\r\n  #medium {\r\n    left: 60%;\r\n  }\r\n  #instagram {\r\n    left: 60%;\r\n  }\r\n  #youtube {\r\n    left: 45%;\r\n  }\r\n  /* Skills -------------------------------------------------- */\r\n  .skill-icons {\r\n    margin-left: -77px;\r\n  }\r\n  .icons {\r\n    margin-left: 60px;\r\n  }\r\n  .skill-icon {\r\n    font-size: 3rem;\r\n  }\r\n  #diamond {\r\n    font-size: 2.5rem;\r\n  }\r\n}\r\n/* iPad */\r\n@media screen and (min-width: 650px) and (max-width: 768px) {\r\n  .text-logo { left: 41%; }\r\n}\r\n/* Large Mobile */\r\n@media screen and (max-width: 600px) {\r\n  .align {\r\n    text-align: left !important;\r\n  }\r\n  /* Experience ---------------------------------------------- */\r\n  .item-wrapper {\r\n    display: block;\r\n    margin-bottom: 5vh;\r\n  }\r\n  .item {\r\n    width: 100%;\r\n  }\r\n  .item-right {\r\n    width: 100%;\r\n  }\r\n  /* Awards ------------------------------------------------- */\r\n  .line-height {\r\n    line-height: 4rem;\r\n    margin-bottom: 1vh;\r\n  }\r\n}\r\n/* iPhone X */\r\n@media screen and (max-width: 375px) and (min-height: 700px) {\r\n  .small-text { font-size: .9rem; }\r\n}\r\n/* iPhone 6/7/8 */\r\n@media screen and (max-width: 375px) and (max-height: 699px) {\r\n  .about-content { top: 10vh; }\r\n  .education-content { top: 10vh; }\r\n  .skills-content { top: 10vh; }\r\n  .interests-content { top: 10vh; }\r\n  .awards-content { top: 10vh; }\r\n  .small-text { font-size: .9rem; }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWEsc0JBQXNCLEVBQUUsNkJBQThDO0FBQ25GLGFBQWEscUJBQXFCLEVBQUUscUNBQXNEO0FBRTFGO0VBQ0UsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYixNQUFNO0VBQ04sT0FBTztFQUNQLHVCQUF1QjtFQUN2QiwydUtBQTJ1SztBQUM3dUs7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixTQUFTO0FBQ1g7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixTQUFTO0VBQ1QsY0FBYztBQUNoQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7QUFFQSx3RUFBd0U7QUFFeEU7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QWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLFNBQVM7RUFDWDtFQUNBLDhEQUE4RDtFQUM5RDtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjtBQUNBLFNBQVM7QUFDVDtFQUNFLGFBQWEsU0FBUyxFQUFFO0FBQzFCO0FBQ0EsaUJBQWlCO0FBQ2pCO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQSw4REFBOEQ7RUFDOUQ7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBLDZEQUE2RDtFQUM3RDtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7QUFDRjtBQUNBLGFBQWE7QUFDYjtFQUNFLGNBQWMsZ0JBQWdCLEVBQUU7QUFDbEM7QUFDQSxpQkFBaUI7QUFDakI7RUFDRSxpQkFBaUIsU0FBUyxFQUFFO0VBQzVCLHFCQUFxQixTQUFTLEVBQUU7RUFDaEMsa0JBQWtCLFNBQVMsRUFBRTtFQUM3QixxQkFBcUIsU0FBUyxFQUFFO0VBQ2hDLGtCQUFrQixTQUFTLEVBQUU7RUFDN0IsY0FBYyxnQkFBZ0IsRUFBRTtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2UgeyBmb250LWZhbWlseTogb3Blbi1zYW5zOyBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvb3BlbnNhbnMtcmVnLnR0ZikgfVxyXG5AZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IHNhaXJhLWVjOyBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvc2FpcmEtZXh0cmEtY29uZC1yZWcudHRmKSB9XHJcblxyXG4ucmVzdW1lLXdyYXBwZXIge1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuLmJhY2tncm91bmQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzA0IDMwNCcgd2lkdGg9JzMwNCcgaGVpZ2h0PSczMDQnJTNFJTNDcGF0aCBmaWxsPSclMjMwMDAwMDAnIGZpbGwtb3BhY2l0eT0nMC4wNCcgZD0nTTQ0LjEgMjI0YTUgNSAwIDEgMSAwIDJIMHYtMmg0NC4xem0xNjAgNDhhNSA1IDAgMSAxIDAgMkg4MnYtMmgxMjIuMXptNTcuOC00NmE1IDUgMCAxIDEgMC0ySDMwNHYyaC00Mi4xem0wIDE2YTUgNSAwIDEgMSAwLTJIMzA0djJoLTQyLjF6bTYuMi0xMTRhNSA1IDAgMSAxIDAgMmgtODYuMmE1IDUgMCAxIDEgMC0yaDg2LjJ6bS0yNTYtNDhhNSA1IDAgMSAxIDAgMkgwdi0yaDEyLjF6bTE4NS44IDM0YTUgNSAwIDEgMSAwLTJoODYuMmE1IDUgMCAxIDEgMCAyaC04Ni4yek0yNTggMTIuMWE1IDUgMCAxIDEtMiAwVjBoMnYxMi4xem0tNjQgMjA4YTUgNSAwIDEgMS0yIDB2LTU0LjJhNSA1IDAgMSAxIDIgMHY1NC4yem00OC0xOTguMlY4MGg2MnYyaC02NFYyMS45YTUgNSAwIDEgMSAyIDB6bTE2IDE2VjY0aDQ2djJoLTQ4VjM3LjlhNSA1IDAgMSAxIDIgMHptLTEyOCA5NlYyMDhoMTZ2MTIuMWE1IDUgMCAxIDEtMiAwVjIxMGgtMTZ2LTc2LjFhNSA1IDAgMSAxIDIgMHptLTUuOS0yMS45YTUgNSAwIDEgMSAwIDJIMTE0djQ4SDg1LjlhNSA1IDAgMSAxIDAtMkgxMTJ2LTQ4aDEyLjF6bS02LjIgMTMwYTUgNSAwIDEgMSAwLTJIMTc2di03NC4xYTUgNSAwIDEgMSAyIDBWMjQyaC02MC4xem0tMTYtNjRhNSA1IDAgMSAxIDAtMkgxMTR2NDhoMTAuMWE1IDUgMCAxIDEgMCAySDExMnYtNDhoLTEwLjF6TTY2IDI4NC4xYTUgNSAwIDEgMS0yIDBWMjc0SDUwdjMwaC0ydi0zMmgxOHYxMi4xek0yMzYuMSAxNzZhNSA1IDAgMSAxIDAgMkgyMjZ2OTRoNDh2MzJoLTJ2LTMwaC00OHYtOThoMTIuMXptMjUuOC0zMGE1IDUgMCAxIDEgMC0ySDI3NHY0NC4xYTUgNSAwIDEgMS0yIDBWMTQ2aC0xMC4xem0tNjQgOTZhNSA1IDAgMSAxIDAtMkgyMDh2LTgwaDE2di0xNGgtNDIuMWE1IDUgMCAxIDEgMC0ySDIyNnYxOGgtMTZ2ODBoLTEyLjF6bTg2LjItMjEwYTUgNSAwIDEgMSAwIDJIMjcyVjBoMnYzMmgxMC4xek05OCAxMDEuOVYxNDZINTMuOWE1IDUgMCAxIDEgMC0ySDk2di00Mi4xYTUgNSAwIDEgMSAyIDB6TTUzLjkgMzRhNSA1IDAgMSAxIDAtMkg4MFYwaDJ2MzRINTMuOXptNjAuMSAzLjlWNjZIODJ2NjRINjkuOWE1IDUgMCAxIDEgMC0ySDgwVjY0aDMyVjM3LjlhNSA1IDAgMSAxIDIgMHpNMTAxLjkgODJhNSA1IDAgMSAxIDAtMkgxMjhWMzcuOWE1IDUgMCAxIDEgMiAwVjgyaC0yOC4xem0xNi02NGE1IDUgMCAxIDEgMC0ySDE0NnY0NC4xYTUgNSAwIDEgMS0yIDBWMThoLTI2LjF6bTEwMi4yIDI3MGE1IDUgMCAxIDEgMCAySDk4djE0aC0ydi0xNmgxMjQuMXpNMjQyIDE0OS45VjE2MGgxNnYzNGgtMTZ2NjJoNDh2NDhoLTJ2LTQ2aC00OHYtNjZoMTZ2LTMwaC0xNnYtMTIuMWE1IDUgMCAxIDEgMiAwek01My45IDE4YTUgNSAwIDEgMSAwLTJINjRWMkg0OFYwaDE4djE4SDUzLjl6bTExMiAzMmE1IDUgMCAxIDEgMC0ySDE5MlYwaDUwdjJoLTQ4djQ4aC0yOC4xem0tNDgtNDhhNSA1IDAgMCAxLTkuOC0yaDIuMDdhMyAzIDAgMSAwIDUuNjYgMEgxNzh2MzRoLTE4VjIxLjlhNSA1IDAgMSAxIDIgMFYzMmgxNFYyaC01OC4xem0wIDk2YTUgNSAwIDEgMSAwLTJIMTM3bDMyLTMyaDM5VjIxLjlhNSA1IDAgMSAxIDIgMFY2NmgtNDAuMTdsLTMyIDMySDExNy45em0yOC4xIDkwLjFhNSA1IDAgMSAxLTIgMHYtNzYuNTFMMTc1LjU5IDgwSDIyNFYyMS45YTUgNSAwIDEgMSAyIDBWODJoLTQ5LjU5TDE0NiAxMTIuNDF2NzUuNjl6bTE2IDMyYTUgNSAwIDEgMS0yIDB2LTk5LjUxTDE4NC41OSA5NkgzMDAuMWE1IDUgMCAwIDEgMy45LTMuOXYyLjA3YTMgMyAwIDAgMCAwIDUuNjZ2Mi4wN2E1IDUgMCAwIDEtMy45LTMuOUgxODUuNDFMMTYyIDEyMS40MXY5OC42OXptLTE0NC02NGE1IDUgMCAxIDEtMiAwdi0zLjUxbDQ4LTQ4VjQ4aDMyVjBoMnY1MEg2NnY1NS40MWwtNDggNDh2Mi42OXpNNTAgNTMuOXY0My41MWwtNDggNDhWMjA4aDI2LjFhNSA1IDAgMSAxIDAgMkgwdi02NS40MWw0OC00OFY1My45YTUgNSAwIDEgMSAyIDB6bS0xNiAxNlY4OS40MWwtMzQgMzR2LTIuODJsMzItMzJWNjkuOWE1IDUgMCAxIDEgMiAwek0xMi4xIDMyYTUgNSAwIDEgMSAwIDJIOS40MUwwIDQzLjQxVjQwLjZMOC41OSAzMmgzLjUxem0yNjUuOCAxOGE1IDUgMCAxIDEgMC0yaDE4LjY5bDcuNDEtNy40MXYyLjgyTDI5Ny40MSA1MEgyNzcuOXptLTE2IDE2MGE1IDUgMCAxIDEgMC0ySDI4OHYtNzEuNDFsMTYtMTZ2Mi44MmwtMTQgMTRWMjEwaC0yOC4xem0tMjA4IDMyYTUgNSAwIDEgMSAwLTJINjR2LTIyLjU5TDQwLjU5IDE5NEgyMS45YTUgNSAwIDEgMSAwLTJINDEuNDFMNjYgMjE2LjU5VjI0Mkg1My45em0xNTAuMiAxNGE1IDUgMCAxIDEgMCAySDk2di01Ni42TDU2LjYgMTYySDM3LjlhNSA1IDAgMSAxIDAtMmgxOS41TDk4IDIwMC42VjI1NmgxMDYuMXptLTE1MC4yIDJhNSA1IDAgMSAxIDAtMkg4MHYtNDYuNTlMNDguNTkgMTc4SDIxLjlhNSA1IDAgMSAxIDAtMkg0OS40MUw4MiAyMDguNTlWMjU4SDUzLjl6TTM0IDM5Ljh2MS42MUw5LjQxIDY2SDB2LTJoOC41OUwzMiA0MC41OVYwaDJ2MzkuOHpNMiAzMDAuMWE1IDUgMCAwIDEgMy45IDMuOUgzLjgzQTMgMyAwIDAgMCAwIDMwMi4xN1YyNTZoMTh2NDhoLTJ2LTQ2SDJ2NDIuMXpNMzQgMjQxdjYzaC0ydi02Mkgwdi0yaDM0djF6TTE3IDE4SDB2LTJoMTZWMGgydjE4aC0xem0yNzMtMmgxNHYyaC0xNlYwaDJ2MTZ6bS0zMiAyNzN2MTVoLTJ2LTE0aC0xNHYxNGgtMnYtMTZoMTh2MXpNMCA5Mi4xQTUuMDIgNS4wMiAwIDAgMSA2IDk3YTUgNSAwIDAgMS02IDQuOXYtMi4wN2EzIDMgMCAxIDAgMC01LjY2VjkyLjF6TTgwIDI3MmgydjMyaC0ydi0zMnptMzcuOSAzMmgtMi4wN2EzIDMgMCAwIDAtNS42NiAwaC0yLjA3YTUgNSAwIDAgMSA5LjggMHpNNS45IDBBNS4wMiA1LjAyIDAgMCAxIDAgNS45VjMuODNBMyAzIDAgMCAwIDMuODMgMEg1Ljl6bTI5NC4yIDBoMi4wN0EzIDMgMCAwIDAgMzA0IDMuODNWNS45YTUgNSAwIDAgMS0zLjktNS45em0zLjkgMzAwLjF2Mi4wN2EzIDMgMCAwIDAtMS44MyAxLjgzaC0yLjA3YTUgNSAwIDAgMSAzLjktMy45ek05NyAxMDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tNDggMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDQ4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMzItMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtNjRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgOTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNDRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS05NiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptOTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi02NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTMyIDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNNDkgMzZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMzIgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMzMgNjhhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi00OGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMjQwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtNjRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2LTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptODAtMTc2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDQ4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTEyIDE3NmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMTcgMTgwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMTcgODRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiA2NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIpO1xyXG59XHJcbnNlY3Rpb24ge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuLnRpdGxlIHtcclxuICBmb250LWZhbWlseTogc2FpcmEtZWMsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiA1cmVtO1xyXG59XHJcbi5pdGVtLXRpdGxlIHtcclxuICBmb250LXNpemU6IDIuMnJlbTtcclxufVxyXG4uaXRlbS1zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzg2OGU5NjtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcbi5zdWItdGl0bGUge1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjODY4ZTk2O1xyXG59XHJcbi5zdWItdGl0bGUgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjRDMwMDAwO1xyXG59XHJcbi5tYWluIHtcclxuICBmb250LWZhbWlseTogb3Blbi1zYW5zLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBjb2xvcjogIzg2OGU5NjtcclxufVxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ucmVkIHtcclxuICBjb2xvcjogI0QzMDAwMDtcclxufVxyXG4uZGFyay1yZWQge1xyXG4gIGNvbG9yOiAjOTkwMDAwO1xyXG59XHJcbi5hbGlnbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG4uY29udGVudC1wYWRkaW5nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMCA1dncgMCAxdnc7XHJcbn1cclxuXHJcbi8qIE5hdmlnYXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi5yZXN1bWUtbmF2IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIHdpZHRoOiAxOCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5yZXN1bWUtbmF2IGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5yZXN1bWUtbmF2IGE6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMjI4LCAyMjgsIDIyOCk7XHJcbn1cclxuLnJlc3VtZS1uYXYgYTphY3RpdmUsIC5yZXN1bWUtbmF2IGE6Zm9jdXMtd2l0aGluIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4ucm91bmRlZC1pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXgtd2lkdGg6IDEwcmVtO1xyXG4gIG1heC1oZWlnaHQ6IDEwcmVtO1xyXG4gIGJvcmRlcjogLjVyZW0gc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMik7XHJcbn1cclxuLnRleHQtbG9nbyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubWVudS1iYXJzIGZhLWljb24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLyogQWJvdXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uYWJvdXQtY29udGVudCB7XHJcbiAgdG9wOiAyNS41dmg7XHJcbn1cclxuLm1haW4tdGl0bGUge1xyXG4gIGxpbmUtaGVpZ2h0OiA2cmVtO1xyXG4gIGZvbnQtc2l6ZTogN3JlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uc29jaWFsLWljb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDN2aDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTgwcHg7XHJcbn1cclxuLnNvY2lhbC1pY29ucyAuaWNvbnMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcbi5jaXJjbGUge1xyXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xyXG59XHJcbi5pY29uIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDU1JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG4jbGlua2VkaW4ge1xyXG4gIGxlZnQ6IDcwJTtcclxufVxyXG4jbWVkaXVtIHtcclxuICBsZWZ0OiA3MCU7XHJcbn1cclxuI2luc3RhZ3JhbSB7XHJcbiAgbGVmdDogNzAlO1xyXG59XHJcbiN5b3V0dWJlIHtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuLyogRXhwZXJpZW5jZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmV4cGVyaWVuY2UtY29udGVudCB7XHJcbiAgdG9wOiA1dmg7XHJcbn1cclxuLml0ZW0td3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiA3dmg7XHJcbn1cclxuLml0ZW0ge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLml0ZW0tcmlnaHQge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLml0ZW0tZGF0ZSB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi8qIEVkdWNhdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uZWR1Y2F0aW9uLWNvbnRlbnQge1xyXG4gIHRvcDogMjUuNXZoO1xyXG59XHJcbi8qIFNraWxscyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uc2tpbGxzLWNvbnRlbnQge1xyXG4gIHRvcDogMjUuNXZoO1xyXG59XHJcbi5za2lsbC1pY29ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHZoO1xyXG59XHJcbi5pY29ucyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbn1cclxuLm5vLW1hcmdpbi1sZWZ0IHtcclxuICBtYXJnaW4tbGVmdDogLTF2dztcclxufVxyXG4uc2tpbGwtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDU1JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG4jZGlhbW9uZCB7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG59XHJcbi8qIEludGVyZXN0cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uaW50ZXJlc3RzLWNvbnRlbnQge1xyXG4gIHRvcDogMjUuNXZoO1xyXG59XHJcbi8qIEF3YXJkcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uYXdhcmRzLWNvbnRlbnQge1xyXG4gIHRvcDogMjUuNXZoO1xyXG59XHJcbi5saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmxpc3QtaXRlbSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnRyb3BoeSB7XHJcbiAgY29sb3I6ICM4NjhlOTY7XHJcbn1cclxuLmluZGVudCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCAwIDAgMTBweDtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gTWVkaWEgUXVlcmllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDk0NXB4KSB7XHJcbiAgLmFib3V0LWNvbnRlbnQgeyB0b3A6IDMydmg7IH1cclxuICAuZWR1Y2F0aW9uLWNvbnRlbnQgeyB0b3A6IDMydmg7IH1cclxuICAuc2tpbGxzLWNvbnRlbnQgeyB0b3A6IDMydmg7IH1cclxuICAuaW50ZXJlc3RzLWNvbnRlbnQgeyB0b3A6IDMydmg7IH1cclxuICAuYXdhcmRzLWNvbnRlbnQgeyB0b3A6IDMydmg7IH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5MDFweCkgYW5kIChtYXgtaGVpZ2h0OiA5NDRweCkge1xyXG4gIC5hYm91dC1jb250ZW50IHsgdG9wOiAzMXZoOyB9XHJcbiAgLmVkdWNhdGlvbi1jb250ZW50IHsgdG9wOiAzMXZoOyB9XHJcbiAgLnNraWxscy1jb250ZW50IHsgdG9wOiAzMXZoOyB9XHJcbiAgLmludGVyZXN0cy1jb250ZW50IHsgdG9wOiAzMXZoOyB9XHJcbiAgLmF3YXJkcy1jb250ZW50IHsgdG9wOiAzMXZoOyB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIGFuZCAobWluLWhlaWdodDogNzgwcHgpIGFuZCAobWF4LWhlaWdodDogOTAwcHgpIHtcclxuICAuYWJvdXQtY29udGVudCB7IHRvcDogMjh2aDsgfVxyXG4gIC5lZHVjYXRpb24tY29udGVudCB7IHRvcDogMjh2aDsgfVxyXG4gIC5za2lsbHMtY29udGVudCB7IHRvcDogMjh2aDsgfVxyXG4gIC5pbnRlcmVzdHMtY29udGVudCB7IHRvcDogMjh2aDsgfVxyXG4gIC5hd2FyZHMtY29udGVudCB7IHRvcDogMjh2aDsgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gIC5yb3VuZGVkLWltZyB7IG1heC13aWR0aDogN3JlbTsgbWF4LWhlaWdodDogN3JlbTsgYm9yZGVyLXdpZHRoOiAuMjVyZW07IH1cclxuICAuZWR1Y2F0aW9uLWNvbnRlbnQgeyB0b3A6IDEwdmg7IH1cclxuICAuc2tpbGxzLWNvbnRlbnQgeyB0b3A6IDIwdmg7IH1cclxuICAuaW50ZXJlc3RzLWNvbnRlbnQgeyB0b3A6IDIwdmg7IH1cclxuICAuYXdhcmRzLWNvbnRlbnQgeyB0b3A6IDIwdmg7IH1cclxufVxyXG4vKiA8IExhcHRvcCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcclxuICBzZWN0aW9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuICAuY29udGVudC1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICB9XHJcbiAgLyogTmF2aWdhdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAubmF2YmFyLWJhY2tncm91bmQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgfVxyXG4gIC5tZW51LWJhcnMgZmEtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5yZXN1bWUtbmF2IHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICBvcGFjaXR5OiAuOTU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICB0b3A6IC01MDBweDtcclxuICAgIHRyYW5zaXRpb246IDAuNzVzIGVhc2U7XHJcbiAgfVxyXG4gIC5yZXN1bWUtbmF2LWV4cGFuZCB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIC5yZXN1bWUtbmF2IHVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxuICB9XHJcbiAgLnJlc3VtZS1uYXYgYSB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgLmxvZ28ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnJvdW5kZWQtaW1nIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC50ZXh0LWxvZ28ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogM3B4O1xyXG4gICAgbGVmdDogMzMlO1xyXG4gICAgei1pbmRleDogNzA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICAvKiBBYm91dCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgLnNvY2lhbC1pY29ucyB7XHJcbiAgICBsZWZ0OiAtNjVweDtcclxuICB9XHJcbiAgLnNvY2lhbC1pY29ucyAuaWNvbnMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgfVxyXG4gIC5jaXJjbGUge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxuICAuaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuNjVyZW07XHJcbiAgfVxyXG4gICNsaW5rZWRpbiB7XHJcbiAgICBsZWZ0OiA2MCU7XHJcbiAgfVxyXG4gICNtZWRpdW0ge1xyXG4gICAgbGVmdDogNjAlO1xyXG4gIH1cclxuICAjaW5zdGFncmFtIHtcclxuICAgIGxlZnQ6IDYwJTtcclxuICB9XHJcbiAgI3lvdXR1YmUge1xyXG4gICAgbGVmdDogNDUlO1xyXG4gIH1cclxuICAvKiBTa2lsbHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAuc2tpbGwtaWNvbnMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC03N3B4O1xyXG4gIH1cclxuICAuaWNvbnMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgfVxyXG4gIC5za2lsbC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcbiAgI2RpYW1vbmQge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgfVxyXG59XHJcbi8qIGlQYWQgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjUwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC50ZXh0LWxvZ28geyBsZWZ0OiA0MSU7IH1cclxufVxyXG4vKiBMYXJnZSBNb2JpbGUgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiBFeHBlcmllbmNlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAuaXRlbS13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG4gIH1cclxuICAuaXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLml0ZW0tcmlnaHQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC8qIEF3YXJkcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgLmxpbmUtaGVpZ2h0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xyXG4gIH1cclxufVxyXG4vKiBpUGhvbmUgWCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkgYW5kIChtaW4taGVpZ2h0OiA3MDBweCkge1xyXG4gIC5zbWFsbC10ZXh0IHsgZm9udC1zaXplOiAuOXJlbTsgfVxyXG59XHJcbi8qIGlQaG9uZSA2LzcvOCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkgYW5kIChtYXgtaGVpZ2h0OiA2OTlweCkge1xyXG4gIC5hYm91dC1jb250ZW50IHsgdG9wOiAxMHZoOyB9XHJcbiAgLmVkdWNhdGlvbi1jb250ZW50IHsgdG9wOiAxMHZoOyB9XHJcbiAgLnNraWxscy1jb250ZW50IHsgdG9wOiAxMHZoOyB9XHJcbiAgLmludGVyZXN0cy1jb250ZW50IHsgdG9wOiAxMHZoOyB9XHJcbiAgLmF3YXJkcy1jb250ZW50IHsgdG9wOiAxMHZoOyB9XHJcbiAgLnNtYWxsLXRleHQgeyBmb250LXNpemU6IC45cmVtOyB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/resume/resume.component.ts":
  /*!********************************************!*\
    !*** ./src/app/resume/resume.component.ts ***!
    \********************************************/

  /*! exports provided: ResumeComponent */

  /***/
  function srcAppResumeResumeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeComponent", function () {
      return ResumeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var ResumeComponent =
    /*#__PURE__*/
    function () {
      function ResumeComponent() {
        _classCallCheck(this, ResumeComponent);

        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithub"];
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLinkedin"];
        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFacebook"];
        this.faGitlab = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGitlab"];
        this.faHtml5 = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHtml5"];
        this.faCss3Alt = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCss3Alt"];
        this.faAngular = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAngular"];
        this.faJsSquare = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faJsSquare"];
        this.faJava = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faJava"];
        this.faCertificate = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCertificate"];
        this.faVuejs = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faVuejs"];
      }

      _createClass(ResumeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResumeComponent;
    }();

    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resume',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resume.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resume.component.css */
      "./src/app/resume/resume.component.css")).default]
    })], ResumeComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Project\Portfolio\Portfolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
<h1 align="center">Angular-Patika - E-Commerce App)</h1>


[![IMAGE ALT TEXT HERE](./src/assets/images/ekranresmi.jpg)](https://youtu.be/MzAblpYjaUA)

<h3 align="center">Languages and Tools:</h3>
<p align="center"> <a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/> </a> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a>



## Contents:
 - [Categories](#categories)
      - [Video](#video)
      - [About](#about-project)
      - [Used Packages And Modules](#used-packages-and-modules)
      - [Getting Started](#getting-started)
      - [Server](#server)
      - [Prerequisites](#prerequisites)
      - [Installation](#installation)
      - [Contact](#contact)

## Video



## About Project
 This Project is Patika-Orion Innovation Turkey Angular Bootcamp assignment. I try to make myself imagine.

## Used Packages And Modules

- AppRoutingModule
- HttpClientModule
- FormsModule
- ReactiveFormsModule
- Font Awesome
- Bootstrap 5
- Google Fonts
- AuthGuard

## Getting Started

:rocket: Run `npm i or npm install` to install all packages then You should use `ng serve --o`.

## Server

 :electric_plug: Product server is online wiith Heroku but for user you need to run json-server.

## Prerequisites

- npm
- Angular 13
- Bootstrap 5
- Vs Code

## Installation
1. Clone the repo
```sh
git clone https://github.com/firatmikyaz/graduationProject.git
```
2. Install NPM packages
```sh
npm install
```
3. Run Angular Project
```sh
ng serve --o
```
## Credit


## license

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [Linkedin](https://tr.linkedin.com/in/firatmikyaz) - firat.mikyaz.tr@gmail.com

Project Link:  https://github.com/firatmikyaz/graduationProject.git


# Shopping

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


<h2 align="center">Requirements</h2>
Orion Innovation Angular/Frontend Bootcamp Bitirme Projesi
??
??? //??r??n sat??????n??n, kullan??c?? kayd??n??n ve giri??inin yap??ld??????, yeni ??r??nlerin eklenip,
g??ncellenibildi??i ve silinebildi??i bir web uygulamas?? geli??tirilecek.
Fonksiyoneliteler:
??? //Uygulama responsive tasar??m?? desteklemeli, mobil ve bilgisayar ekranlar??na uyumlu
??al????mal?? (ui component frameworkleri, libraryleri kullan??labilir)
??? //Kullan??c??lar uygulamaya ??ye olabilmeli ve giri?? yapabilmeli (json dosyas??na kay??t
olu??turulup, json dosyas??ndan do??rulama yap??labilir, ya da ekstra bir api yaz??labilir)
??? //??r??n kart??nda bulunmas?? gerekenler; ??r??nlerin resmi, ad??, a????klamas?? ve fiyat??
??? //??r??n listesi ana sayfada g??sterilmeli, kullan??c??lar isterlerse ??r??nlerin detay??na,
??r??nlerin ??zerine t??klayarak bakabilmeli
??? //??r??nlerin detay sayfas??nda, ??r??n??n daha b??y??k bir resmi ve daha detayl?? bir a????klama
metni olmal??
??? //??r??nlerin filtrelenmesi i??in; kategori se??ene??i (dropdown, selector, kategorileri siz
belirlemelisiniz) ve bir arama ??ubu??u olu??turulmal??, anahtar kelimesinin ??r??n ad??nda
ge??ip ge??medi??ine bak??lmal??
??? //??r??n detay??na gidilirken, sayfa y??nlendirilmesi (routing) yap??lmal??
??? //??r??nler kendinizin belirleyece??i bir json kaynak dosyas??ndan al??nmal??
??? //??r??nler sepete eklenip daha sonras??nda sat???? i??lemi ger??ekle??tirilmeli
??? //Sat???? i??lemi i??in ayr?? bir json dosyas??na log kayd?? at??lmas?? yeterli
??? //Authentication ve Authorization katmanlar?? olmal??, sistemde iki tip akt??r olmal?? (public
kullan??c??, site y??neticisi). Public kullan??c?? ??r??nleri g??r??nt??leyebilir, filtreleyebilir, sepete
ekleyebilir ve sat???? i??lemini ger??ekle??tirebilir. Site y??neticisi ise yeni ??r??n ekleyebilir,
mevcut ??r??nlerin i??eriklerini g??ncelleyebilir ve silebilir. Public kullan??c?? ??r??nlerin
y??netildi??i sayfaya eri??im sa??layamamal??.
??? //??r??nler kart listesi olarak g??r??nt??lenebildi??i gibi, bir tabloda da g??r??nt??lenebilmeli
(kullan??c??ya se??im yapt??r??lmal??)
??? //??r??nler i??eriklerine g??re detayl?? bir ??ekilde filtrelenebilmeli
??? //Site y??neticisi yeni ??r??n ekleme ekran??nda, formda herhangi bir de??i??iklik yapt??????
durumda, ba??ka bir sayfaya route etmek isterse kaydedilmemi?? de??i??iklikleriniz
bulunmaktad??r tarz??nda bir uyar?? ile kar????la??mal?? ve onaylarsa route i??lemi yap??lmal??,
onaylamazsa ayn?? sayfada kalmal??
??? //Authentication i??in kullan??c?? bilgileri local storage da tutulmal??
Gereklilikler:
??? //Reactive form yakla????m?? kullan??lmal??
??? //Form i??lemlerinde validasyon y??netimi yap??lmal?? ve kullan??c?? dostu bir uyar?? mesaj??
??retilmeli
??? //Http istekleri i??in HttpClient paketi ve service katman?? kullan??lmal??
??? Comment kullan??m??na dikkat edilmeli
??? TypeScript ??zelliklerinden type ve access modifiers kullan??m??na dikkat edilmeli
??? //Authorization i??in angular??n sundu??u guardlar kullan??lmal??
??? //Kullan??c?? dostu, detayl?? bir tasar??m yap??lmal?? (UI/UX)
??? //Http isteklerinde kullan??c??ya ait bir token eklenmeli (dummy, herhangi bir de??er
kullan??labilir)
Ekstralar:
??? //??r??nlerin detay k??sm??nda, ??r??n ile ilgili olu??turulacak dummy(sahte) yorumlar??n ve
de??erlendirmelerin g??r??nt??lenmesi
??? //Component mimarisinin anla????l??r, tekrar kullan??labilecek ??ekilde kurgulanmas??
??? //RxJS ve observablelar??n do??ru kullan??m??
//Kullan??lacakTeknolojiler: Angular (13), JavaScript, TypeScript

'use strict';

class MyHeader extends HTMLElement {
 connectedCallback() {
  this.innerHTML = `
        <header>
            <h1>Templating Headers and Footers</h1>
            <nav>
                <ul>
                    <li><a href="#">Menu 01</a></li>
                    <li><a href="#">Menu 02</a></li>
                    <li><a href="#">Menu 03</a></li>
                    <li><a href="#">Menu 04</a></li>
                    <li><a href="#">Menu 05</a></li>
                </ul>
            </nav>
        </header>
        `;
 }
}

class MyFooter extends HTMLElement {
 connectedCallback() {
  this.innerHTML = `
        <footer>
            <span>Copryright@All rights reserved.</span>
        </footer>
        `;
 }
}

customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);

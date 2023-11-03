import './style.css'
import typescriptLogo from './assets/typescript.svg'
import viteLogo from '../public/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */ `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <a href="/pages/about/">About Us</a> <span> / </span>
    <a href="/pages/contact/">Contact</a>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

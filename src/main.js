import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import ar from '../locales/ar.json'
import de from '../locales/de.json'
import eu from '../locales/eu.json'
import es from '../locales/es.json'
import fr from '../locales/fr.json'
import ibo from '../locales/ibo.json'
import ja from '../locales/ja.json'
import pl from '../locales/pl.json'
import pt from '../locales/pt.json'
import yor from '../locales/yor.json'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: en,
    ar: ar,
    de: de,
    es: es,
    eu: eu,
    fr: fr,
    ibo: ibo,
    ja: ja,
    pl: pl,
    pt: pt,
    yor: yor
  }
})

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')

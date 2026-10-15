import type { PageRegistry } from './interfaces'
import { documentationPages } from './documentation'
import { MainPage } from '../pages/MainPage'
import { AboutPage } from '../pages/AboutPage'
import { ContactsPage } from '../pages/ContactsPage'
import { DocumentationPage } from '../pages/DocumentationPage'
import { ExtJsPage } from '../pages/ExtJsPage'
import { PortfolioPage } from '../pages/PortfolioPage'
import { ServicesPage } from '../pages/ServicesPage'
import { SupportPage } from '../pages/SupportPage'
import { UpdateWebsitePage } from '../pages/UpdateWebsitePage'
import { CmsOverviewPage } from '../pages/CmsOverviewPage'
import { FullSupportPage } from '../pages/FullSupportPage'
import { SearchPromotionPage } from '../pages/SearchPromotionPage'
import { RedirectPage } from '../pages/RedirectPage'
import { GeographyPage } from '../pages/GeographyPage'
import { FirstInRussiaPage } from '../pages/FirstInRussiaPage'

import { ExtJsLesson1Page } from '../pages/ExtJsLesson1Page'

export const pages: PageRegistry = {
  ...documentationPages,
  '/documentation/extjs/extjs_lessons/lesson1.html': {
    isFilled: true,
    title: 'Веб-студия «Новая Парадигма» | ExtJS. Урок 1. Hello, world!',
    description: 'ExtJS. Урок первый. Демонстрирует работу библиотеки ExtJS',
    archiveUrl:
      'https://web.archive.org/web/20101027085749id_/http://newpg.ru/documentation/extjs/extjs_lessons/lesson1.html',
    Component: ExtJsLesson1Page,
  },
  '/': {
    isFilled: true,
    title: 'Веб-студия «Новая Парадигма» | Главная страница',
    description:
      'Официальный сайт веб-студии "Новая парадигма". Создание, поддержка, продвижение сайтов.',
    archiveUrl:
      'https://web.archive.org/web/20101011095509id_/http://newpg.ru/',
    Component: MainPage,
  },
  '/about.html': {
    isFilled: true,
    title: 'Веб-студия «Новая Парадигма» | О компании',
    description: 'О компании "Новая парадигма"',
    archiveUrl:
      'https://web.archive.org/web/20101011095322id_/http://newpg.ru/about.html',
    Component: AboutPage,
  },
  '/contacts.html': {
    isFilled: true,
    title: 'Веб-студия «Новая Парадигма» | Контактная  информация',
    description: 'ООО "Новая парадигма". Контакты, схема проезда',
    archiveUrl:
      'https://web.archive.org/web/20101011095354id_/http://newpg.ru/contacts.html',
    Component: ContactsPage,
  },
  '/documentation.html': {
    isFilled: true,
    title: 'Веб-студия «Новая Парадигма» | Документация',
    description: 'Документация по ExtJS',
    archiveUrl:
      'https://web.archive.org/web/20101012233212id_/http://newpg.ru/documentation.html',
    Component: DocumentationPage,
  },
  '/documentation/extjs.html': {
    isFilled: true,
    title: 'Веб-студия «Новая Парадигма» | ExtJS',
    description: 'ExtJS',
    archiveUrl:
      'https://web.archive.org/web/20101012154237id_/http://newpg.ru/documentation/extjs.html',
    Component: ExtJsPage,
  },
  '/portfolio.html': {
    isFilled: true,
    title: 'Веб-студия «Новая Парадигма» | Портфолио',
    description: 'Портфолио веб-студии "Новая парадигма"',
    archiveUrl:
      'https://web.archive.org/web/20101012233216id_/http://newpg.ru/portfolio.html',
    Component: PortfolioPage,
  },
  '/services.html': {
    isFilled: true,
    title: 'Веб-студия «Новая Парадигма» | Услуги',
    description:
      'Услуги веб-студии "Новая парадигма". Создание, поддержка и продвижение сайтов',
    archiveUrl:
      'https://web.archive.org/web/20101012233302id_/http://newpg.ru/services.html',
    Component: ServicesPage,
  },
  '/services/poddergka-prodvigenie.html': {
    isFilled: true,
    title: 'Веб-студия «Новая Парадигма» | Поддержка, продвижение сайтов',
    description: 'Поддержка, продвижение сайтов',
    archiveUrl:
      'https://web.archive.org/web/20101013014308id_/http://newpg.ru/services/poddergka-prodvigenie.html',
    Component: SupportPage,
  },
  '/services/poddergka-prodvigenie/kak-obnovlyat-sait-samomu.html': {
    isFilled: true,
    title: 'Веб-студия «Новая Парадигма» | Как обновлять сайт самому?',
    description: 'Как обновлять сайт самостоятельно?',
    archiveUrl:
      'https://web.archive.org/web/20101012115124id_/http://newpg.ru/services/poddergka-prodvigenie/kak-obnovlyat-sait-samomu.html',
    Component: UpdateWebsitePage,
  },
  '/services/poddergka-prodvigenie/kak-samomu-obnovliat-site.html': {
    isFilled: true,
    title: 'Веб-студия «Новая Парадигма» | Как обновлять сайт самому?',
    description: 'Как обновлять сайт самостоятельно?',
    archiveUrl:
      'https://web.archive.org/web/20101012115124id_/http://newpg.ru/services/poddergka-prodvigenie/kak-obnovlyat-sait-samomu.html',
    Component: UpdateWebsitePage,
  },
  '/services/poddergka-prodvigenie/obzor-populyarnyh-cms.html': {
    isFilled: true,
    title:
      'Веб-студия «Новая Парадигма» | Краткий обзор популярных Систем Управления Контентом',
    description: 'Краткий обзор популярных Систем Управления Контентом',
    archiveUrl:
      'https://web.archive.org/web/20101012115129id_/http://newpg.ru/services/poddergka-prodvigenie/obzor-populyarnyh-cms.html',
    Component: CmsOverviewPage,
  },
  '/services/poddergka-prodvigenie/polnaya-poddergka-saytov.html': {
    isFilled: true,
    title: 'Веб-студия «Новая Парадигма» | Полная поддержка сайтов',
    description: 'Полная поддержка сайтов',
    archiveUrl:
      'https://web.archive.org/web/20101012115134id_/http://newpg.ru/services/poddergka-prodvigenie/polnaya-poddergka-saytov.html',
    Component: FullSupportPage,
  },
  '/services/poiskovoe-prodvigenie.html': {
    isFilled: true,
    title: 'Веб-студия «Новая Парадигма» | Поисковое продвижение сайтов',
    description: 'Поисковое продвижение сайтов',
    archiveUrl:
      'https://web.archive.org/web/20101013014251id_/http://newpg.ru/services/poiskovoe-prodvigenie.html',
    Component: SearchPromotionPage,
  },
  '/services/poiskovoe-prodvigenie/301_redirect.html': {
    isFilled: true,
    title: 'Веб-студия «Новая Парадигма» | Как правильно перенести сайт',
    description:
      'Как правильно перенести сайт на другой домен без вреда для продвижения',
    archiveUrl:
      'https://web.archive.org/web/20101012115139id_/http://newpg.ru/services/poiskovoe-prodvigenie/301_redirect.html',
    Component: RedirectPage,
  },
  '/services/poiskovoe-prodvigenie/geograficheskaya-prinadlegnost.html': {
    isFilled: true,
    title: 'Веб-студия «Новая Парадигма» | Географическая принадлежность',
    description:
      'Географическая принадлежность сайта. Как привязать  сайт к определенному региону',
    archiveUrl:
      'https://web.archive.org/web/20101012115144id_/http://newpg.ru/services/poiskovoe-prodvigenie/geograficheskaya-prinadlegnost.html',
    Component: GeographyPage,
  },
  '/services/poiskovoe-prodvigenie/slogno-li-byt-pervym-v-rossii.html': {
    isFilled: false,
    title: 'Веб-студия «Новая Парадигма» | Сложно ли быть первым в России?',
    description: 'Сложно ли быть первым в России?',
    archiveUrl:
      'https://web.archive.org/web/20101012115149id_/http://newpg.ru/services/poiskovoe-prodvigenie/slogno-li-byt-pervym-v-rossii.html',
    Component: FirstInRussiaPage,
  },
  '/index.html': {
    isFilled: true,
    title: 'Веб-студия «Новая Парадигма» | Главная страница',
    description:
      'Официальный сайт веб-студии "Новая парадигма". Создание, поддержка, продвижение сайтов.',
    archiveUrl:
      'https://web.archive.org/web/20101011095509id_/http://newpg.ru/',
    Component: MainPage,
  },
}

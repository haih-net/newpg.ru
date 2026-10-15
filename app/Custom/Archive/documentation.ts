import type { PageRegistry } from './interfaces'
import { ExtJsLessonsPage } from '../pages/ExtJsLessonsPage'
import { ExtJsLesson3Page } from '../pages/ExtJsLesson3Page'
import { ExtJsLesson4Page } from '../pages/ExtJsLesson4Page'
import { ExtJsLesson5Page } from '../pages/ExtJsLesson5Page'
import { ExtJsLesson6Page } from '../pages/ExtJsLesson6Page'
import { ModxRevolutionPage } from '../pages/ModxRevolutionPage'
import { ModxCachePage } from '../pages/ModxCachePage'
import { ModxPage } from '../pages/ModxPage'
import { ModxStepsPage } from '../pages/ModxStepsPage'
import { ModxInstallationPage } from '../pages/ModxInstallationPage'
import { ModxFilesPage } from '../pages/ModxFilesPage'
import { ModxPackagesPage } from '../pages/ModxPackagesPage'
import { ModxSecurityPage } from '../pages/ModxSecurityPage'
import { XpdoPage } from '../pages/XpdoPage'
import { XpdoLesson1Page } from '../pages/XpdoLesson1Page'
import { ExtJsLesson2Page } from '../pages/ExtJsLesson2Page'
export const documentationPages: PageRegistry = {
  '/documentation/extjs/extjs_lessons.html': {
    ...{
      isFilled: true,
      title: 'Веб-студия «Новая Парадигма» | Уроки ExtJS',
      description: 'Уроки ExtJS',
      archiveUrl:
        'https://web.archive.org/web/20101026072638id_/http://newpg.ru/documentation/extjs/extjs_lessons.html',
    },
    Component: ExtJsLessonsPage,
  },
  '/documentation/extjs/extjs_lessons/lesson3.html': {
    ...{
      isFilled: true,
      title:
        'Веб-студия «Новая Парадигма» | ExtJS. Урок 3. Окна, часть вторая. Ext.Window, Ext.Toolbar',
      description: 'ExtJS. Урок 3. Окна, часть вторая. Ext.Window, Ext.Toolbar',
      archiveUrl:
        'https://web.archive.org/web/20101027085800id_/http://newpg.ru/documentation/extjs/extjs_lessons/lesson3.html',
    },
    Component: ExtJsLesson3Page,
  },
  '/documentation/extjs/extjs_lessons/lesson4.html': {
    ...{
      isFilled: true,
      title:
        'Веб-студия «Новая Парадигма» | ExtJS. Урок 4. Окна, часть третья, Ext.Window properties',
      description:
        'ExtJS. Урок 4. Окна. Изменение размеров и другие свойства окон. Ext.Window properties',
      archiveUrl:
        'https://web.archive.org/web/20101027085822id_/http://newpg.ru/documentation/extjs/extjs_lessons/lesson4.html',
    },
    Component: ExtJsLesson4Page,
  },
  '/documentation/extjs/extjs_lessons/lesson5.html': {
    ...{
      isFilled: true,
      title:
        'Веб-студия «Новая Парадигма» | ExtJS. Урок 5. Хранилища и таблицы. Ext.grid, Ext.data.Store',
      description:
        'ExtJS. Урок 5. Хранилища и таблицы. Ext.grid, Ext.data.Store',
      archiveUrl:
        'https://web.archive.org/web/20101027085902id_/http://newpg.ru/documentation/extjs/extjs_lessons/lesson5.html',
    },
    Component: ExtJsLesson5Page,
  },
  '/documentation/extjs/extjs_lessons/lesson6.html': {
    ...{
      isFilled: true,
      title:
        'Веб-студия «Новая Парадигма» | ExtJS. Урок 6. Шаблоны элементов. Ext.Template',
      description:
        'ExtJS. Урок 6. Экспериментируем с шаблонами элементов.  Ext.Template',
      archiveUrl:
        'https://web.archive.org/web/20101027090133id_/http://newpg.ru/documentation/extjs/extjs_lessons/lesson6.html',
    },
    Component: ExtJsLesson6Page,
  },
  '/documentation/modx/modx-revolution.html': {
    ...{
      isFilled: true,
      title:
        'MODx Revolution документация | Веб-студия «Новая парадигма» Москва 774-67-02',
      description: 'MODx Revolution',
      archiveUrl:
        'https://web.archive.org/web/20121217091958id_/http://newpg.ru/documentation/modx/modx-revolution.html',
    },
    Component: ModxRevolutionPage,
  },
  '/documentation/modx/modx-revolution/modx-revolution-optimizatsiya-kesh.html':
    {
      ...{
        isFilled: true,
        title:
          'MODx Revolution оптимизация кэш. Быстрая загрузка | Веб-студия «Новая парадигма» Москва 774-67-02',
        description: 'Оптимизация КЭШ',
        archiveUrl:
          'https://web.archive.org/web/20130108195512id_/http://newpg.ru/documentation/modx/modx-revolution/modx-revolution-optimizatsiya-kesh.html',
      },
      Component: ModxCachePage,
    },
  '/documentation/modx.html': {
    ...{
      isFilled: true,
      title:
        'CMS/CMF MODX документация. Краткий обзор фреймворка MODx. Бесплатные CMS-системы | Веб-студия «Новая парадигма» Москва 774-67-02',
      description: 'CMS/CMF MODX',
      archiveUrl:
        'https://web.archive.org/web/20130106122453id_/http://newpg.ru/documentation/modx.html',
    },
    Component: ModxPage,
  },
  '/documentation/modx/modx-revolution/modx-revolution-po-shagam.html': {
    ...{
      isFilled: true,
      title:
        'MODx Revolution по шагам. MODx Revolution документация | Веб-студия «Новая парадигма» Москва 774-67-02',
      description: 'MODx Revolution по шагам',
      archiveUrl:
        'https://web.archive.org/web/20121224035245id_/http://newpg.ru/documentation/modx/modx-revolution/modx-revolution-po-shagam.html',
    },
    Component: ModxStepsPage,
  },
  '/documentation/modx/modx-revolution/modx-revolution-ustanovka.html': {
    ...{
      isFilled: true,
      title:
        'MODx Revolution Установка. MODx Revolution документация | Веб-студия «Новая парадигма» Москва 774-67-02',
      description: 'MODx Revolution Установка ',
      archiveUrl:
        'https://web.archive.org/web/20130113101339id_/http://newpg.ru/documentation/modx/modx-revolution/modx-revolution-ustanovka.html',
    },
    Component: ModxInstallationPage,
  },
  '/documentation/modx/modx-revolution/modx-revolution-fajlovaya-model.html': {
    ...{
      isFilled: true,
      title:
        'MODx Revolution файловая модель. Core. Manager. Connectors. Assets. MODx Revolution документация | Веб-студия «Новая парадигма» Москва 774-67-02',
      description: 'MODx Revolution файловая модель',
      archiveUrl:
        'https://web.archive.org/web/20121221042340id_/http://newpg.ru/documentation/modx/modx-revolution/modx-revolution-fajlovaya-model.html',
    },
    Component: ModxFilesPage,
  },
  '/documentation/modx/modx-revolution/ustanovka-dopolnitelnyh-paketov-na-modx-revolution.html':
    {
      ...{
        isFilled: true,
        title:
          'Установка дополнительных пакетов на MODx Revolution. Управление пакетами в MODx Revolution. MODx Revolution документация | Веб-студия «Новая парадигма» Москва 774-67-02',
        description: 'Установка дополнительных пакетов на MODx Revolution',
        archiveUrl:
          'https://web.archive.org/web/20130115215532id_/http://newpg.ru/documentation/modx/modx-revolution/ustanovka-dopolnitelnyh-paketov-na-modx-revolution.html',
      },
      Component: ModxPackagesPage,
    },
  '/documentation/modx/modx-revolution/modx-revolution-nastrojki-bezopasnosti.html':
    {
      ...{
        isFilled: true,
        title:
          'MODx Revolution настройки безопасности | Веб-студия «Новая парадигма» Москва 774-67-02',
        description: 'MODx Revolution настройки безопасности',
        archiveUrl:
          'https://web.archive.org/web/20121231055013id_/http://newpg.ru/documentation/modx/modx-revolution/modx-revolution-nastrojki-bezopasnosti.html',
      },
      Component: ModxSecurityPage,
    },
  '/documentation/modx/modx-revolution/xpdo.html': {
    ...{
      isFilled: true,
      title:
        'xPDO документация | Веб-студия «Новая парадигма» Москва 774-67-02',
      description: 'xPDO',
      archiveUrl:
        'https://web.archive.org/web/20121221043203id_/http://newpg.ru/documentation/modx/modx-revolution/xpdo.html',
    },
    Component: XpdoPage,
  },
  '/documentation/modx/modx-revolution/xpdo-urok-1.-getobject.html': {
    ...{
      isFilled: true,
      title:
        'xPDO Урок 1. GetObject(). xPDO документация | Веб-студия «Новая парадигма» Москва 774-67-02',
      description: 'xPDO Урок 1. GetObject()',
      archiveUrl:
        'https://web.archive.org/web/20130106125638id_/http://newpg.ru/documentation/modx/modx-revolution/xpdo-urok-1.-getobject.html',
    },
    Component: XpdoLesson1Page,
  },
  '/documentation/extjs/extjs_lessons/lesson2.html': {
    ...{
      isFilled: true,
      title: 'Веб-студия «Новая Парадигма» | ExtJS. Урок 2. Окна. Ext.Window',
      description: 'ExtJS. Урок 2. Окна. Ext.Window',
      archiveUrl:
        'https://web.archive.org/web/20101207063310id_/http://newpg.ru/documentation/extjs/extjs_lessons/lesson2.html',
    },
    Component: ExtJsLesson2Page,
  },
}

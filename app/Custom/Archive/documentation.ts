import type { PageRegistry } from './interfaces'
import { ExtJsLessonsPage } from '../pages/ExtJsLessonsPage'
import { ExtJsLesson3Page } from '../pages/ExtJsLesson3Page'
import { ExtJsLesson4Page } from '../pages/ExtJsLesson4Page'
import { ExtJsLesson5Page } from '../pages/ExtJsLesson5Page'
import { ExtJsLesson6Page } from '../pages/ExtJsLesson6Page'
import { ModxRevolutionPage } from '../pages/ModxRevolutionPage'
import { ModxCachePage } from '../pages/ModxCachePage'
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

import type * as React from 'react'
import { Link } from 'react-router'
import { DocumentationLayout } from '../../DocumentationLayout'

const scripts: readonly string[] = []
const Content: React.FC = () => {
  return (
    <div className="middle">
      <div className="left_block">
        <div className="menu">
          {'\n\t\t\t'}
          <ul className="menu">
            <li className="level1">
              <Link to="/" title="Главная страница">
                {'Главная'}
              </Link>
            </li>
            {'\n'}
            <li className="level1">
              <Link to="/about.html" title="О компании">
                {'О компании'}
              </Link>
            </li>
            {'\n'}
            <li className="level1">
              <Link to="/services.html" title="Услуги">
                {'Услуги'}
              </Link>
            </li>
            {'\n'}
            <li className="level1">
              <Link to="/portfolio.html" title="Портфолио">
                {'Портфолио'}
              </Link>
            </li>
            {'\n'}
            <li className="level1 active">
              <Link to="/documentation.html" title="Документация">
                {'Документация'}
              </Link>
              <ul>
                <li className="level2 active">
                  <Link to="/documentation/extjs.html" title="ExtJS">
                    {'ExtJS'}
                  </Link>
                  <ul>
                    <li className="level3 active self">
                      <Link
                        to="/documentation/extjs/extjs_lessons.html"
                        title="Уроки ExtJS"
                      >
                        {'Уроки ExtJS'}
                      </Link>
                      <ul>
                        <li className="level4">
                          <Link
                            to="/documentation/extjs/extjs_lessons/lesson1.html"
                            title="ExtJS. Урок 1. Hello, world!"
                          >
                            {'Урок 1. Hello, world!'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/extjs/extjs_lessons/lesson2.html"
                            title="ExtJS. Урок 2. Окна. Ext.Window"
                          >
                            {'Урок 2. Окна'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/extjs/extjs_lessons/lesson3.html"
                            title="ExtJS. Урок 3. Окна, часть вторая. Ext.Window, Ext.Toolbar"
                          >
                            {'Урок 3. Окна, часть вторая'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/extjs/extjs_lessons/lesson4.html"
                            title="ExtJS. Урок 4. Окна, часть третья, Ext.Window properties"
                          >
                            {'Урок 4. Окна, часть третья'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/extjs/extjs_lessons/lesson5.html"
                            title="ExtJS. Урок 5. Хранилища и таблицы. Ext.grid, Ext.data.Store"
                          >
                            {'Урок 5. Хранилища и таблицы'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="last level4">
                          <Link
                            to="/documentation/extjs/extjs_lessons/lesson6.html"
                            title="ExtJS. Урок 6. Шаблоны элементов. Ext.Template"
                          >
                            {'Урок 6. Шаблоны элементов'}
                          </Link>
                        </li>
                        {'\n'}
                      </ul>
                    </li>
                    {'\n'}
                    <li className="level3">
                      <a
                        href="/ExtJS/docs/index.html"
                        title="Документация по ExtJS"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {'Документация по ExtJS'}
                      </a>
                    </li>
                    {'\n'}
                    <li className="last level3">
                      <a
                        href="/ExtJS/examples/index.html"
                        title="Примеры ExtJS"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {'Примеры ExtJS'}
                      </a>
                    </li>
                    {'\n'}
                  </ul>
                </li>
                {'\n'}
              </ul>
            </li>
            {'\n'}
            <li className="last level1">
              <Link to="/contacts.html" title="Контактная  информация">
                {'Контактная  информация'}
              </Link>
            </li>
            {'\n'}
          </ul>
          {'\t'}
        </div>
      </div>
      <div className="center_block">
        {'\n\t'}
        <div className="breadcrumbs">
          <span className="B_crumbBox">
            <span className="B_firstCrumb">
              <Link to="/">{'Главная'}</Link>
            </span>
            {' » '}
            <Link
              className="B_crumb"
              to="/documentation.html"
              title="Документация по ExtJS"
            >
              {'Документация'}
            </Link>
            {' » '}
            <Link
              className="B_crumb"
              to="/documentation/extjs.html"
              title="ExtJS"
            >
              {'ExtJS'}
            </Link>
            {' » '}
            <h1 className="B_lastCrumb" tabIndex={-1}>
              <span className="B_currentCrumb">{'Уроки ExtJS'}</span>
            </h1>
          </span>
        </div>
        {'\n\t'}
        <div id="content">
          <p>
            {
              'Не думаю что я тут разверну серьезный учебный центр по этой интересной технологии, но все же попробую раскрыть несколько основополагающих моментов, чтобы стало понятно что это за зверь такой и с чем его едят. Основную инфу можно глянуть на оффсайте '
            }
            <a
              title="Официальный сайт ExtJS"
              href="http://www.extjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'www.extjs.com'}
            </a>
            {
              ' , но особо я его не буду пропагандировать, как это делают многие, ибо своей целью поставил для себя раскрытие основных моментов, которые позволили бы, как я надеюсь, начинающему освоить данную технологию хотя бы на начальном уровне, чтобы мог самостоятельно и осознанно уже создавать свои веб-приложения.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Вообще данная библиотека кроссбраузерная и работает даже в IE6, тем не менее если вы не используете FireFox, но решите пройти мои уроки, настоятельно советую вам все же работать в FF, ибо будут тут фишки, которые заточены под FF.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Итак, начнем!'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p></p>
          <ul>
            <li>
              <Link
                to="/documentation/extjs/extjs_lessons/lesson1.html"
                title="ExtJS. Урок 1. Hello, world!"
              >
                {'Урок 1. Hello, world!'}
              </Link>
            </li>
            {'\n'}
            <li>
              <Link
                to="/documentation/extjs/extjs_lessons/lesson2.html"
                title="ExtJS. Урок 2. Окна. Ext.Window"
              >
                {'Урок 2. Окна'}
              </Link>
            </li>
            {'\n'}
            <li>
              <Link
                to="/documentation/extjs/extjs_lessons/lesson3.html"
                title="ExtJS. Урок 3. Окна, часть вторая. Ext.Window, Ext.Toolbar"
              >
                {'Урок 3. Окна, часть вторая'}
              </Link>
            </li>
            {'\n'}
            <li>
              <Link
                to="/documentation/extjs/extjs_lessons/lesson4.html"
                title="ExtJS. Урок 4. Окна, часть третья, Ext.Window properties"
              >
                {'Урок 4. Окна, часть третья'}
              </Link>
            </li>
            {'\n'}
            <li>
              <Link
                to="/documentation/extjs/extjs_lessons/lesson5.html"
                title="ExtJS. Урок 5. Хранилища и таблицы. Ext.grid, Ext.data.Store"
              >
                {'Урок 5. Хранилища и таблицы'}
              </Link>
            </li>
            {'\n'}
            <li className="last">
              <Link
                to="/documentation/extjs/extjs_lessons/lesson6.html"
                title="ExtJS. Урок 6. Шаблоны элементов. Ext.Template"
              >
                {'Урок 6. Шаблоны элементов'}
              </Link>
            </li>
            {'\n'}
          </ul>
          <p></p>
        </div>
        {'\n'}
      </div>
      <div className="clear"></div>
    </div>
  )
}
export const ExtJsLessonsPage: React.FC = () => (
  <DocumentationLayout scripts={scripts}>
    <Content />
  </DocumentationLayout>
)

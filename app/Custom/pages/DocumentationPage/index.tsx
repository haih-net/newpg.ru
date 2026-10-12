import type * as React from 'react'
import { Link } from 'react-router'
import { DocumentationPageStyled } from './styles'

export const DocumentationPage: React.FC = () => {
  return (
    <DocumentationPageStyled>
      <div className="middle">
        <div className="left_block">
          <div className="menu">
            <ul className="menu">
              <li className="level1">
                <Link to="/" title="Главная страница">
                  Главная
                </Link>
              </li>

              <li className="level1">
                <Link to="/about.html" title="О компании">
                  О компании
                </Link>
              </li>

              <li className="level1">
                <Link to="/services.html" title="Услуги">
                  Услуги
                </Link>
              </li>

              <li className="level1">
                <Link to="/portfolio.html" title="Портфолио">
                  Портфолио
                </Link>
              </li>

              <li className="level1 active self">
                <Link to="/documentation.html" title="Документация">
                  Документация
                </Link>
                <ul>
                  <li className="level2">
                    <Link to="/documentation/extjs.html" title="ExtJS">
                      ExtJS
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="last level1">
                <Link to="/contacts.html" title="Контактная  информация">
                  Контактная информация
                </Link>
              </li>
            </ul>{' '}
          </div>
        </div>

        <div className="center_block">
          <div className="breadcrumbs">
            <span className="B_crumbBox">
              <span className="B_firstCrumb">
                <Link to="/">Главная</Link>
              </span>{' '}
              »{' '}
              <h1 className="B_lastCrumb" tabIndex={-1}>
                <span className="B_currentCrumb">Документация</span>
              </h1>
            </span>
          </div>

          <div id="content">
            <div>
              <ul className="menu">
                <li className="level1">
                  <Link to="/documentation/extjs.html" title="ExtJS">
                    ExtJS
                  </Link>
                  <ul>
                    <li className="level2">
                      <Link
                        to="/documentation/extjs/extjs_lessons.html"
                        title="Уроки ExtJS"
                      >
                        Уроки ExtJS
                      </Link>
                      <ul>
                        <li className="level3">
                          <Link
                            to={
                              '/documentation/extjs/extjs_lessons/lesson1.html'
                            }
                            title={
                              'ExtJS. Урок первый. Демонстрирует работу библиотеки ExtJS'
                            }
                          >
                            ExtJS. Урок первый. Демонстрирует работу библиотеки
                            ExtJS
                          </Link>
                        </li>

                        <li className="level3">
                          <Link
                            to={
                              '/documentation/extjs/extjs_lessons/lesson2.html'
                            }
                            title="ExtJS. Урок 2. Окна. Ext.Window"
                          >
                            ExtJS. Урок 2. Окна. Ext.Window
                          </Link>
                        </li>

                        <li className="level3">
                          <Link
                            to={
                              '/documentation/extjs/extjs_lessons/lesson3.html'
                            }
                            title={
                              'ExtJS. Урок 3. Окна, часть вторая. Ext.Window, Ext.Toolbar'
                            }
                          >
                            ExtJS. Урок 3. Окна, часть вторая. Ext.Window,
                            Ext.Toolbar
                          </Link>
                        </li>

                        <li className="level3">
                          <Link
                            to={
                              '/documentation/extjs/extjs_lessons/lesson4.html'
                            }
                            title={
                              'ExtJS. Урок 4. Окна. Изменение размеров и другие свойства окон. Ext.Window properties'
                            }
                          >
                            ExtJS. Урок 4. Окна. Изменение размеров и другие
                            свойства окон. Ext.Window properties
                          </Link>
                        </li>

                        <li className="level3">
                          <Link
                            to={
                              '/documentation/extjs/extjs_lessons/lesson5.html'
                            }
                            title={
                              'ExtJS. Урок 5. Хранилища и таблицы. Ext.grid, Ext.data.Store'
                            }
                          >
                            ExtJS. Урок 5. Хранилища и таблицы. Ext.grid,
                            Ext.data.Store
                          </Link>
                        </li>

                        <li className="level3">
                          <Link
                            to={
                              '/documentation/extjs/extjs_lessons/lesson6.html'
                            }
                            title={
                              'ExtJS. Урок 6. Экспериментируем с шаблонами элементов.  Ext.Template'
                            }
                          >
                            ExtJS. Урок 6. Экспериментируем с шаблонами
                            элементов. Ext.Template
                          </Link>
                        </li>

                        <li className="last level3">
                          <Link
                            to={
                              '/documentation/extjs/extjs_lessons/examples.html'
                            }
                            title="Редирект на реальную страницу"
                          >
                            Редирект на реальную страницу
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="level2">
                      <Link
                        to="/ExtJS/docs"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Документация по ExtJS"
                      >
                        Документация по ExtJS
                      </Link>
                    </li>

                    <li className="last level2">
                      <Link
                        to="/ExtJS/examples"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Примеры ExtJS"
                      >
                        Примеры ExtJS
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="clear"></div>
      </div>
    </DocumentationPageStyled>
  )
}

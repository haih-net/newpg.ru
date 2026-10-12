import type * as React from 'react'
import { Link } from 'react-router'
import { ServicesPageStyled } from './styles'

export const ServicesPage: React.FC = () => {
  return (
    <ServicesPageStyled>
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

              <li className="level1 active self">
                <Link to="/services.html" title="Услуги">
                  Услуги
                </Link>
                <ul>
                  <li className="level2">
                    <Link
                      to="/services/sozdanie-saitov.html"
                      title="Создание сайтов"
                    >
                      Создание сайтов
                    </Link>
                  </li>

                  <li className="level2">
                    <Link
                      to="/services/poiskovoe-prodvigenie.html"
                      title="Поисковое продвижение сайтов"
                    >
                      Поисковое продвижение
                    </Link>
                  </li>

                  <li className="last level2">
                    <Link
                      to="/services/poddergka-prodvigenie.html"
                      title="Поддержка, продвижение сайтов"
                    >
                      Поддержка, продвижение
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="level1">
                <Link to="/portfolio.html" title="Портфолио">
                  Портфолио
                </Link>
              </li>

              <li className="level1">
                <Link to="/documentation.html" title="Документация">
                  Документация
                </Link>
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
                <span className="B_currentCrumb">Услуги</span>
              </h1>
            </span>
          </div>

          <div id="content">
            <p>
              К нам применима народная поговорка:{' '}
              <strong>"Любой каприз за ваши деньги!"</strong>.{' '}
            </p>

            <p>{' '}</p>

            <p>Мы оказываем весь спектр услуг в области IT и Интернет:</p>

            <div>
              <ul className="menu">
                <li className="level1">
                  <Link
                    to="/services/sozdanie-saitov.html"
                    title="Создание сайтов"
                  >
                    Создание сайтов
                  </Link>
                  <ul>
                    <li className="level2">
                      <Link
                        to={
                          '/services/sozdanie-saitov/sait-kak-samovyragenie.html'
                        }
                        title="Сайт как средство самовыражения"
                      >
                        Сайт как средство самовыражения
                      </Link>
                    </li>

                    <li className="level2">
                      <Link
                        to={
                          '/services/sozdanie-saitov/kak-sostavit-tehzadanie.html'
                        }
                        title="Как составить техзадание?"
                      >
                        Как составить техзадание?
                      </Link>
                    </li>

                    <li className="level2">
                      <Link
                        to={
                          '/services/sozdanie-saitov/primer-audita-sayta.html'
                        }
                        title="Пример проведенного аудита устаревшего сайта"
                      >
                        Пример проведенного аудита устаревшего сайта
                      </Link>
                    </li>

                    <li className="level2">
                      <Link
                        to={
                          '/services/sozdanie-saitov/statistika-poseschaemosti.html'
                        }
                        title={
                          'Статистика посещений сайта пользователями, поисковыми  роботами и  т.п.'
                        }
                      >
                        Статистика посещений сайта пользователями, поисковыми
                        роботами и т.п.
                      </Link>
                    </li>

                    <li className="level2">
                      <Link
                        to="/services/sozdanie-saitov/skolko-stoit-site.html"
                        title="Сколько стоит сайт?"
                      >
                        Сколько стоит сайт?
                      </Link>
                    </li>

                    <li className="last level2">
                      <Link
                        to="/services/sozdanie-saitov/tipy-saitov.html"
                        title="Типы и  разновидности сайтов"
                      >
                        Типы и разновидности сайтов
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="level1">
                  <Link
                    to="/services/poiskovoe-prodvigenie.html"
                    title="Поисковое продвижение сайтов"
                  >
                    Поисковое продвижение сайтов
                  </Link>
                  <ul>
                    <li className="level2">
                      <Link
                        to="/services/poiskovoe-prodvigenie/301_redirect.html"
                        title={
                          'Как правильно перенести сайт на другой домен без вреда для продвижения'
                        }
                      >
                        Как правильно перенести сайт на другой домен без вреда
                        для продвижения
                      </Link>
                    </li>

                    <li className="level2">
                      <Link
                        to={
                          '/services/poiskovoe-prodvigenie/geograficheskaya-prinadlegnost.html'
                        }
                        title={
                          'Географическая принадлежность сайта. Как привязать  сайт к определенному региону'
                        }
                      >
                        Географическая принадлежность сайта. Как привязать сайт
                        к определенному региону
                      </Link>
                    </li>

                    <li className="last level2">
                      <Link
                        to={
                          '/services/poiskovoe-prodvigenie/slogno-li-byt-pervym-v-rossii.html'
                        }
                        title="Сложно ли быть первым в России?"
                      >
                        Сложно ли быть первым в России?
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="last level1">
                  <Link
                    to="/services/poddergka-prodvigenie.html"
                    title="Поддержка, продвижение сайтов"
                  >
                    Поддержка, продвижение сайтов
                  </Link>
                  <ul>
                    <li className="level2">
                      <Link
                        to={
                          '/services/poddergka-prodvigenie/polnaya-poddergka-saytov.html'
                        }
                        title="Полная поддержка сайтов"
                      >
                        Полная поддержка сайтов
                      </Link>
                    </li>

                    <li className="level2">
                      <Link
                        to={
                          '/services/poddergka-prodvigenie/kak-obnovlyat-sait-samomu.html'
                        }
                        title="Как обновлять сайт самостоятельно?"
                      >
                        Как обновлять сайт самостоятельно?
                      </Link>
                    </li>

                    <li className="last level2">
                      <Link
                        to={
                          '/services/poddergka-prodvigenie/obzor-populyarnyh-cms.html'
                        }
                        title={
                          'Краткий обзор популярных Систем Управления Контентом'
                        }
                      >
                        Краткий обзор популярных Систем Управления Контентом
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
    </ServicesPageStyled>
  )
}

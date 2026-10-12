import type * as React from 'react'
import { Link } from 'react-router'
import { FirstInRussiaPageStyled } from './styles'

export const FirstInRussiaPage: React.FC = () => {
  return (
    <FirstInRussiaPageStyled>
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

              <li className="level1 active">
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

                  <li className="level2 active">
                    <Link
                      to="/services/poiskovoe-prodvigenie.html"
                      title="Поисковое продвижение сайтов"
                    >
                      Поисковое продвижение
                    </Link>
                    <ul>
                      <li className="level3">
                        <Link
                          to={
                            '/services/poiskovoe-prodvigenie/301_redirect.html'
                          }
                          title="Как правильно перенести сайт"
                        >
                          Как правильно перенести сайт
                        </Link>
                      </li>

                      <li className="level3">
                        <Link
                          to={
                            '/services/poiskovoe-prodvigenie/geograficheskaya-prinadlegnost.html'
                          }
                          title="Географическая принадлежность"
                        >
                          Географическая принадлежность
                        </Link>
                      </li>

                      <li className="last level3 active self">
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
              <Link
                className="B_crumb"
                to="/services.html"
                title={
                  'Услуги веб-студии "Новая парадигма". Создание, поддержка и продвижение сайтов'
                }
              >
                Услуги
              </Link>{' '}
              »{' '}
              <Link
                className="B_crumb"
                to="/services/poiskovoe-prodvigenie.html"
                title="Поисковое продвижение сайтов"
              >
                Поисковое продвижение
              </Link>{' '}
              »{' '}
              <h1 className="B_lastCrumb" tabIndex={-1}>
                <span className="B_currentCrumb">
                  Сложно ли быть первым в России?
                </span>
              </h1>
            </span>
          </div>

          <div id="content">
            <p>Информация готовится к публикации!</p>
          </div>
        </div>

        <div className="clear"></div>
      </div>
    </FirstInRussiaPageStyled>
  )
}

import tel10Image from './assets/template/images/tel10.png'
import type * as React from 'react'
import { Link } from 'react-router'

export const Footer: React.FC = () => (
  <>
    <div className="footer">
      <div className="footer_content">
        <div className="footer_wrapper">
          <div className="footer_menu">
            <ul className="footer_menu">
              <li className="first active">
                <Link to="/" title="Главная страница">
                  Главная
                </Link>
              </li>

              <li>
                <Link to="/about.html" title="О компании">
                  О компании
                </Link>
              </li>

              <li>
                <Link to="/services.html" title="Услуги">
                  Услуги
                </Link>
              </li>

              <li>
                <Link to="/portfolio.html" title="Портфолио">
                  Портфолио
                </Link>
              </li>

              <li>
                <Link to="/documentation.html" title="Документация">
                  Документация
                </Link>
              </li>

              <li className="last">
                <Link to="/contacts.html" title="Контактная  информация">
                  Контактная информация
                </Link>
              </li>
            </ul>
          </div>

          <div className="hr"></div>

          <div className="bottom_menu">
            <ul className="bottom_menu">
              <li className="first level1">
                <ul>
                  <li className="first level2">
                    <Link
                      to={
                        '/services/sozdanie-saitov/sait-kak-samovyragenie.html'
                      }
                      title="Самовыражение"
                    >
                      Самовыражение
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
                      to="/services/sozdanie-saitov/primer-audita-sayta.html"
                      title="Аудит и анализ сайта"
                    >
                      Аудит и анализ сайта
                    </Link>
                  </li>

                  <li className="level2">
                    <Link
                      to={
                        '/services/sozdanie-saitov/statistika-poseschaemosti.html'
                      }
                      title="Статистика посещений сайта"
                    >
                      Статистика посещений
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
                      title="Типы сайтов"
                    >
                      Типы сайтов
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="level1">
                <ul>
                  <li className="first level2">
                    <Link
                      to="/services/poiskovoe-prodvigenie/301_redirect.html"
                      title="Как правильно перенести сайт"
                    >
                      Как правильно перенести сайт
                    </Link>
                  </li>

                  <li className="level2">
                    <Link
                      to={
                        '/services/poiskovoe-prodvigenie/geograficheskaya-prinadlegnost.html'
                      }
                      title="Географическая принадлежность"
                    >
                      Географическая принадлежность
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
                <ul>
                  <li className="first level2">
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
                        '/services/poddergka-prodvigenie/kak-samomu-obnovliat-site.html'
                      }
                      title="Как самому обновлять сайт?"
                    >
                      Как самому обновлять сайт?
                    </Link>
                  </li>

                  <li className="level2">
                    <Link
                      to={
                        '/services/poddergka-prodvigenie/kak-obnovlyat-sait-samomu.html'
                      }
                      title="Как обновлять сайт самому?"
                    >
                      Как обновлять сайт самому?
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
                      Обзор популярных CMS
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="clear"></div>

          <div className="hr"></div>

          <div className="footer_contacts">
            <div className="copy">
              <p>© 2010 Компания Новая Парадигма</p>

              <p>Все права защищены.</p>
            </div>

            <div className="phone">
              <img src={tel10Image} alt="Контактная информация" />
            </div>

            <div id="statistics">
              <div className="counter">
                {/*LiveInternet counter*/}
                {/*/LiveInternet*/}
              </div>
              <div className="counter">
                {/*Rating@Mail.ru counter*/}
                {'\n\n\n\n\n\n\n'}
                {/*// Rating@Mail.ru counter*/}
              </div>
            </div>

            <div className="clear"></div>
          </div>
        </div>
      </div>
    </div>
  </>
)

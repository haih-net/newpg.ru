import type * as React from 'react'
import { Link } from 'react-router'
import { ExtJsPageStyled } from './styles'

export const ExtJsPage: React.FC = () => {
  return (
    <ExtJsPageStyled>
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

              <li className="level1 active">
                <Link to="/documentation.html" title="Документация">
                  Документация
                </Link>
                <ul>
                  <li className="level2 active self">
                    <Link to="/documentation/extjs.html" title="ExtJS">
                      ExtJS
                    </Link>
                    <ul>
                      <li className="level3">
                        <Link
                          to="/documentation/extjs/extjs_lessons.html"
                          title="Уроки ExtJS"
                        >
                          Уроки ExtJS
                        </Link>
                      </li>

                      <li className="level3">
                        <Link
                          to="/ExtJS/docs"
                          rel="noopener noreferrer"
                          target="_blank"
                          title="Документация по ExtJS"
                        >
                          Документация по ExtJS
                        </Link>
                      </li>

                      <li className="last level3">
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
                to="/documentation.html"
                title="Документация по ExtJS"
              >
                Документация
              </Link>{' '}
              »{' '}
              <h1 className="B_lastCrumb" tabIndex={-1}>
                <span className="B_currentCrumb">ExtJS</span>
              </h1>
            </span>
          </div>

          <div id="content">
            <p>
              ExtJS − Javascript-библиотека, расширяющая возможности чистого
              javascript. Как и jQuery, может использоваться для облегчения
              работы с DOM, но больше используется для построения мощных
              клиент-серверных приложений. Многие, не знакомые с ExtJS
              разработчики скажут, что им вполне достаточно jQuery для решения
              повседневных задач, но существует немало задач, для решения
              которых jQuery будет крайне недостаточно. Конечно же "мешок риса
              на КАМАЗе не повезешь" и там, где это не требуется, ExtJS вполне
              возможно окажется излишним, особенно если нужна какая-нибудь
              листалка, галерея или динамическое меню. Но если необходимо
              разработать специализированную админ-панель, многооконный
              интерфейс с таблицами, графиками, централизованными хранилищами и
              т.п., тут ExtJS себя демонстрирует в полной красе.
            </p>

            <p>{' '}</p>

            <p>
              Всего лишь несколько уроков, представленных на нашем сайте,
              познакомят Вас с ExtJS. Вы получите базовые знания по данной
              библиотеке, и очень скоро сможете разрабатывать неплохие
              интерфейсы самостоятельно. Представленные уроки по ExtJS больше
              рассчитаны&nbsp; на новичков, но и знакомые с ExtJS программисты
              наверняка смогут найти для себя что-нибудь новое.
            </p>
          </div>
        </div>

        <div className="clear"></div>
      </div>
    </ExtJsPageStyled>
  )
}

import type * as React from 'react'
import { Link } from 'react-router'
import { DocumentationLayout } from '../../DocumentationLayout'

const scripts: readonly string[] = []
const Content: React.FC = () => {
  return (
    <div className="middle">
      <div className="left_block">
        <div className="menu">
          {'\n\t\t'}
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
              <Link to="/nashi-proekty.html" title="Наши проекты">
                {'Наши проекты'}
              </Link>
            </li>
            {'\n'}
            <li className="level1">
              <Link to="/news.html" title="Новости">
                {'Новости'}
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
            <li className="level1">
              <Link to="/contacts.html" title="Контактная информация">
                {'Контактная информация'}
              </Link>
            </li>
            {'\n'}
            <li className="last level1 active">
              <Link to="/documentation.html" title="Документация">
                {'Документация'}
              </Link>
              <ul>
                <li className="level2">
                  <Link to="/documentation/extjs.html" title="ExtJS">
                    {'ExtJS'}
                  </Link>
                </li>
                {'\n'}
                <li className="last level2 active">
                  <Link to="/documentation/modx.html" title="CMS/CMF MODX">
                    {'CMS/CMF MODX'}
                  </Link>
                  <ul>
                    <li className="level3 active self">
                      <Link
                        to="/documentation/modx/modx-revolution.html"
                        title="MODx Revolution"
                      >
                        {'MODx Revolution'}
                      </Link>
                      <ul>
                        <li className="level4">
                          <Link
                            to="/documentation/modx/modx-revolution/modx-revolution-po-shagam.html"
                            title="MODx Revolution по шагам"
                          >
                            {'MODx Revolution по шагам'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/modx/modx-revolution/modx-revolution-ustanovka.html"
                            title="MODx Revolution Установка "
                          >
                            {'MODx Revolution Установка '}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/modx/modx-revolution/modx-revolution-fajlovaya-model.html"
                            title="MODx Revolution файловая модель"
                          >
                            {'MODx Revolution файловая модель'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/modx/modx-revolution/ustanovka-dopolnitelnyh-paketov-na-modx-revolution.html"
                            title="Установка дополнительных пакетов на MODx Revolution"
                          >
                            {
                              'Установка дополнительных пакетов на MODx Revolution'
                            }
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/modx/modx-revolution/modx-revolution-optimizatsiya-kesh.html"
                            title="MODx Revolution Оптимизация КЭШ"
                          >
                            {'MODx Revolution Оптимизация КЭШ'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/modx/modx-revolution/modx-revolution-nastrojki-bezopasnosti.html"
                            title="MODx Revolution настройки безопасности"
                          >
                            {'MODx Revolution настройки безопасности'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/modx/modx-revolution/xpdo.html"
                            title="xPDO"
                          >
                            {'xPDO'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/modx/modx-revolution/xpdo-urok-1.-getobject.html"
                            title="xPDO Урок 1. GetObject()"
                          >
                            {'xPDO Урок 1. GetObject()'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/modx/modx-revolution/xpdo-urok-2.-getcollection.html"
                            title="xPDO Урок 2. GetCollection()"
                          >
                            {'xPDO Урок 2. GetCollection()'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/modx/modx-revolution/xpdo-urok-3.-newquery.html"
                            title="xPDO Урок 3. newQuery()"
                          >
                            {'xPDO Урок 3. newQuery()'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="last level4">
                          <Link
                            to="/documentation/modx/modx-revolution/xpdo-urok-4.-select.html"
                            title="xPDO Урок 4. Select()"
                          >
                            {'xPDO Урок 4. Select()'}
                          </Link>
                        </li>
                        {'\n'}
                      </ul>
                    </li>
                    {'\n'}
                  </ul>
                </li>
                {'\n'}
              </ul>
            </li>
            {'\n'}
          </ul>
          {'\n\t'}
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
              to="/documentation/modx.html"
              title="CMS/CMF MODX"
            >
              {'CMS/CMF MODX'}
            </Link>
            {' » '}
            <h1 className="B_lastCrumb" tabIndex={-1}>
              <span className="B_currentCrumb">{'MODx Revolution'}</span>
            </h1>
          </span>
        </div>
        {'\n\t'}
        <div id="content">
          <p>
            <strong>{'MODx Revolution'}</strong>
            {
              ' - последняя на сегодня ветвь развития фреймворка MODx. Не смотря на то, что это полностью бесплатный движек, и существует исключительно на пожертвования, на его разработку затрачено несколько десятков тысяч человекочасов и больше миллиона долларов.'
            }
          </p>
          {'\n'}
          <p>
            {
              'Имеет много преимуществ как над своими младшими непосредственными собратьями, так и над многими другими CMS. Основные преимущества:'
            }
          </p>
          {'\n'}
          <ul>
            {'\n'}
            <li>
              {'Это не узкопрофильная ЦМСка, а полноценный '}
              <strong>
                {'фреймворк для разработки любой сложности веб-проектов'}
              </strong>
              {
                ', не накладывающий никаких ограничений ни на дизайн, ни на функционал.'
              }
            </li>
            {'\n'}
            <li>
              {'Имеет '}
              <strong>{'революционную сисему кэширования'}</strong>
              {
                ', что позволяет даже в базовой версии без дополнительного тюнинга легко тянуть 10 000 - 15 000 документов. С дополнительным тюнингом легко 1-2 млн. документов. '
              }
              <Link
                title="Оптимизация кэш MODx"
                to="/documentation/modx/modx-revolution/modx-revolution-optimizatsiya-kesh.html"
              >
                {'Пример такого тюнинга тут'}
              </Link>
              {
                '. Хотя с  выходом MODx Revolution 2.1.0 такой тюнинг уже не понадобится, так как они там почти на 100% такую же систему делают. Так уж получилось, что наш профессионализм позволил нам предугадать ход дальнейшего развития MODx Revolution))). Так же используя '
              }
              <strong>{'modCacheManager'}</strong>
              {
                ' можно легко управлять пользовательским кешированием чего угодно, к примеру результатам поиска. '
              }
            </li>
            {'\n'}
            <li>
              <strong>{'Очень гибкое API'}</strong>
              {
                '. Можно легко дописать и интегрировать любой пользовательский модуль без какого-либо редактирования кода самой платформы, подключить внешние системы кэширования, такие как '
              }
              <strong>{'memcached'}</strong>
              {' или '}
              <strong>{'Sphinx'}</strong>
              {' и т.п.'}
            </li>
            {'\n'}
            <li>
              {'Основанное на '}
              <Link
                title="xPDO"
                to="/documentation/modx/modx-revolution/xpdo.html"
              >
                <strong>{'xPDO'}</strong>
              </Link>
              {', MODx может легко работать практически '}
              <strong>{'с любой базой данных'}</strong>
              {'.'}
            </li>
            {'\n'}
            <li>
              <strong>{'Мультисайтовость'}</strong>
              {
                '. В MODx Revolution есть все необходимое для того, чтобы на одной платформе разрабатывать сразу несколько сайтов. Это очень полезно когда вы, к примеру, разрабатываете мультиязычный сайт и используете разные домены для разных версий сайтов. Или просто хотите использовать для разных сайтов какой-нибудь общий модуль.'
              }
            </li>
            {'\n'}
            <li>
              <strong>{'"Одно ядро на всех".'}</strong>
              {
                '  Основное ядро системы может быть вынесено куда угодно, даже за приделы самого сайта, и использовано для нескольких отдельных, независимых друг от друга сайтов. Это очень удобно, когда разрабатывается несколько схожих сайтов, для которых могут быть использованы одинаковые модули, настройки и т.п. К тому же в дальнейшем обновив всего лишь одно ядро, обновления применяются для всех сайтов разом.'
              }
            </li>
            {'\n'}
          </ul>
        </div>
        {'\n'}
      </div>
      <div className="clear"></div>
    </div>
  )
}
export const ModxRevolutionPage: React.FC = () => (
  <DocumentationLayout scripts={scripts}>
    <Content />
  </DocumentationLayout>
)

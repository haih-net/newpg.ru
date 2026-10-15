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
                    <li className="level3 active">
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
                        <li className="level4 active self">
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
        {'\n        '}
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
            <Link
              className="B_crumb"
              to="/documentation/modx/modx-revolution.html"
              title="MODx Revolution"
            >
              {'MODx Revolution'}
            </Link>
            {' » '}
            <h1 className="B_lastCrumb" tabIndex={-1}>
              <span className="B_currentCrumb">{'xPDO'}</span>
            </h1>
          </span>
        </div>
        {'\n        '}
        <div id="content">
          <p>
            {'Хотя '}
            <strong>{'xPDO'}</strong>
            {
              ' - это полностью независимый и самостоятельный программный продукт (используется как тонкий клиент для взаимодействия с различными базами данных), мы его будем рассматрривать непосредственно в рамках MODx Revolution, так как он полностью основан на xPDO.  $modx === $xPDO; )))'
            }
          </p>
          {'\n'}
          <p>
            {
              'Преимущество использования xPDO - возможность работы с различными базами данных. Если вы изучите API объекта xPDO, при переходе на другую базу данных вам не понадобится изучать новые методы. Вам достаточно будет только указать в качестве параметра тип используемой вами данных, но не придется переписывать ваши запросы к базе данных под конкретную БД. Очень скоро MODx планирует мигрировать на другие базы данных, типа PostgreSQL.'
            }
          </p>
          {'\n'}
          <p>
            {
              'В дальнейших статьях мы будем рассматривать самы важные и самые интересные методы использования xDPO, которые позволят значительно снижать наргузку на базу данных, а так же значительно большую гибкость при построении запросов к базе данных, к примеру, при сложных поисковых запросах, или при выборке документов при сложной разветвленной структуре сайта.'
            }
          </p>
          {'\n'}
          <p>
            {
              'Для того, чтобы свободно ориентироваться в xPDO, важно понять как же он на самом деле работает, то есть взаимодействует с базой данных.'
            }
          </p>
          {'\n'}
          <p>
            {
              'Мы не будем вдаваться в самые дебри, а попробуем кратко обрисовать всю картину. '
            }
          </p>
          {'\n'}
          <p>
            {
              "Во-первых, xPDO не работает просто так с базой данных напрямую, то есть недостаточно просто так взять, распаковать его где нам надо и заставить его сразу отправлять запросы к БД. Для начала он должен сформировать описание БД. Более детально этот процесс мы рассмотрим потом, но сейчас вы должны для себя знать только это: на выходе у xPDO есть сгенерированные php-классы, посредством которых и происходит взаимодействие с конкретными объектами БД (таблицами, их колонками и т.п.). То есть если вы хотите получить данные из какой-либо таблицы, вы должны знать к какому объекту (классу) необходимо обратиться. К примеру в MODx Revolution таблица site_content описана в объекте modResource. То есть чтобы получить одну запись из таблицы site_content, зная, к примеру, id записи, мы выполнит запрос $modx->getObject('modResource', array('id' => $id)); xPDO уже сам разберется к какой таблице сформировать запрос и вернет результирующий объект, если такая запись существует."
            }
          </p>
          {'\n'}
          <p>
            {'Во-вторых, как я уже и говорил раньше, '}
            <strong>{'MODx Revolution'}</strong>
            {' полностью основан на '}
            <strong>{'xPDO'}</strong>
            {
              '. Это значит, что если вы хотите обратиться к xPDO, то можете обратиться к '
            }
            <strong>{'$modx'}</strong>
            {'. В свою очередь, если вы пытаетесь разобраться в '}
            <strong>{'API MODx'}</strong>
            {
              ', и видите типа $modx->getObject(.......), как это у нас приведено выше, то вы  должны понимать, что на самом деле обращаетесь к объекту xPDO, а значит скорее всего код придется искать не в /core/model/modx/, а в /core/xpdo/.'
            }
          </p>
          {'\n'}
          <p>
            {
              'Если вы привыкли использовать чистый SQL и вам очень не нравится xPDO, настоятельно рекомендую вам все таки напастись терпения и потратить время не на поиски решений, как же заставить xPDO выполнять конечный запрос, а все таки освоить хотя бы основные его методы. В самых ближайши уроках мы изучим основные методы, которые позволят нам перекрыть 90% возникающих задачь. Но зато вы не будете ломать систему, а научитесь максимально гибко ее использовать.'
            }
          </p>
          {'\n        '}
          <div className="clear"></div>
          {'\n        '}
          <p>{'  '}</p>
          {'\n        '}
          <div className="meOnHabr">
            {'Если вам помог мой материал и вы есть на Хабрахабре, '}
            <a
              href="http://fi1osof.habrahabr.ru/"
              title="я на Хабре"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'плюсание карму в дар'}
            </a>
            {' :-)'}
          </div>
          <div id="rang" className="center">
            {' '}
          </div>
          <div id="navigator"></div>
          {'\n    '}
        </div>
        {'\n'}
      </div>
      <div className="clear"></div>
    </div>
  )
}
export const XpdoPage: React.FC = () => (
  <DocumentationLayout scripts={scripts}>
    <Content />
  </DocumentationLayout>
)

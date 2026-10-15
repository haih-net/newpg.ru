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
                        <li className="level4">
                          <Link
                            to="/documentation/modx/modx-revolution/xpdo.html"
                            title="xPDO"
                          >
                            {'xPDO'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4 active self">
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
              <span className="B_currentCrumb">
                {'xPDO Урок 1. GetObject()'}
              </span>
            </h1>
          </span>
        </div>
        {'\n        '}
        <div id="content">
          <p>
            {
              'Итак, начнем с самого простого, но такого важного! - обращение к объектам (таблицам).'
            }
          </p>
          {'\n'}
          <p>{'Допустим, мы хотим получить документ, зная его ID. '}</p>
          {'\n'}
          <pre className="prettyprint">
            {
              "$id = 10;\n$obj = $modx->getObject('modResource', array(\n      'id' => $id\n));\n"
            }
          </pre>
          {'\n'}
          <p>{'Так же можно  сократить запрос;'}</p>
          {'\n'}
          <pre className="prettyprint">
            {"$obj = $modx->getObject('modResource', 10); "}
          </pre>
          {'\n'}
          <p>
            {
              'xPDO  автоматически использует второй параметр для фильтра по первичному ключу таблицы.'
            }
          </p>
          {'\n'}
          <p>{'Вывод результата можно сделать двумя способами:'}</p>
          {'\n'}
          <p>
            {
              '1) Используем ленивый способ: Обращаемся к свойству полученного объекта. '
            }
          </p>
          {'\n'}
          <pre className="prettyprint">
            {
              'print "<br />Первый вариант обращения к свойствам полученного объекта. \nPagetitle: ". $obj->pagetitle; '
            }
          </pre>
          {'\n'}
          <p>{'2) Получаем значение через метод объекта. '}</p>
          {'\n'}
          <pre className="prettyprint">
            {
              'print "<br />Второй вариант обращения к свойствам полученного объекта. \nPagetitle: ". $obj->get(\'pagetitle\');'
            }
          </pre>
          {'\n'}
          <p>
            {
              'В принципе, и в первом, и во втором случае вы получите одну и ту же строку, просто обращение к свойствам полученного объекта разные.'
            }
          </p>
          {'\n'}
          <p>
            {
              'В данном случае первым параметром метода getObject передается имя \nкласса, описывающего целевую таблицу. Вторым параметром передаем \nмассив-условие ( название колонки и условное значение);'
            }
          </p>
          {'\n'}
          <p>{'\nВ результате чистый SQL получится '}</p>
          {'\n'}
          <pre className="prettyprint lang-sql">
            {'SELECT * FROM site_content WHERE id = 10 ;'}
          </pre>
          {'\n'}
          <p>
            <strong>{'Очень важно!'}</strong>
            {' Метод '}
            <strong>{'getObject()'}</strong>
            {
              ' рассчитан на получение именно одного объекта, потому возвращает false как в случае отсутствия результата, то есть если вернул 0 строк, так  и в случае извлечение строк более одной. По этому, если вы проверяете \n'
            }
          </p>
          <pre className="prettyprint">
            {"if(!$modx->getObject('modResource')){}"}
          </pre>
          {
            ' и результат отрицательный, то совершенно не факт, что не было получено результата вообще.'
          }
          <p></p>
          {'\n'}
          <p>
            {
              'В объекте modResource описаны все колонки таблицы site_content, по этому вы можете получить любое свойство документа, такие как id, longtitle, published, deleted и т.п.'
            }
          </p>
          {'\n'}
          <p>
            {
              'Такой метод работы с документами очень удобен тогда, когда мы точно знаем, что хотим получить один-единственный документ и поработать с его свойствами. Если же мы хотим получить сразу несколько документов, то надо использовать метод '
            }
            <strong>{'$modx->getCollection()'}</strong>
            {';'}
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
export const XpdoLesson1Page: React.FC = () => (
  <DocumentationLayout scripts={scripts}>
    <Content />
  </DocumentationLayout>
)

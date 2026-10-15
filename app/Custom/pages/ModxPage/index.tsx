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
                <li className="last level2 active self">
                  <Link to="/documentation/modx.html" title="CMS/CMF MODX">
                    {'CMS/CMF MODX'}
                  </Link>
                  <ul>
                    <li className="level3">
                      <Link
                        to="/documentation/modx/modx-revolution.html"
                        title="MODx Revolution"
                      >
                        {'MODx Revolution'}
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
            <h1 className="B_lastCrumb" tabIndex={-1}>
              <span className="B_currentCrumb">{'CMS/CMF MODX'}</span>
            </h1>
          </span>
        </div>
        {'\n\t'}
        <div id="content">
          <p>
            <strong>{'CMS/CMF MODx'}</strong>
            {
              ' - бесплатная система для разработки веб-проектов любого уровня усложности.'
            }
            <br />
            {
              'В данном цикле статей мы попробуем рассмотреть как можно больше плюсов и минусов данной системы по сравнению с другими популярными платформами.'
            }
            <br />
            <br />
            {'Первое, на что стоит обратить внимание, это аббревиатура '}
            <strong>{'CMS/SMF'}</strong>
            {'. '}
            <br />
            {'Аббревиатура CMS наверняка многим известна  - '}
            <strong>{'Content Management System'}</strong>
            {
              ',  то есть Система Управления Контентом. CMS призвана облегчить процесс разработки сайта, а так  же его дальнешее управление и обслуживание. Если вам приходилось когда-либо самостоятельно заходить в Админ-панель сайта и редактировать страницы сайта, значит вы работали в CMS. Практически все современные сайты разрабатываются с использованием CMS. Самые популярные и известные из них: '
            }
            <strong>{'1C-Bitrix'}</strong>
            {', '}
            <strong>{'Joomla!'}</strong>
            {', '}
            <strong>{'Wordpress'}</strong>
            {' и т.п.'}
            <br />
            <br />
            {'Что же такое CMF и чем оно отличается от CMS? '}
            <br />
            {'CMF - это '}
            <strong>{'Content Management Framework'}</strong>
            {
              ', то  есть фреймворк. В данном случае фреймворк - это  программный инструментарий, используемый для разработок. С помощью фреймворка можно не только разрабатывать конечные сайты, но и CMS в принципе. CMS же более узкопрофильна и используется для создания типовых сайтов. CMF по отношению к CMS это как Завод по отношению к Кирпичам: то есть из кирпичей вы можете построить дом, но на заводе вы можете и кирпичи изготовить, из которых в свою очередь можно построить дом, и другие стройматериалы изготовить, или особую модификацию более крепких кирпичей и т.п.'
            }
            <br />
            <br />
            {
              'MODx за свою многолетнюю историю прошел довольно большой путь от небольшой, хотя и гибкой платформы, до очень мощного фреймворка, на котором без особых усилий можно реализовать проект практически любой сложности. Если вы столкнулись с какой-либо нестандартной задачей, вы всегда сможете изменить или дополнить MODx так, чтобы он соответствовал поставленным задачам. CMS же гораздо сложнее менять, а часто просто невозможно.'
            }
            <br />
            <br />
            {
              'Есть только один момент: если вы не достаточно опытный программист, то скорее всего вам не стоит сразу браться за CMF. CMF дает очень богатый инструментарий, но при этом и от программиста требуются очень глубокие познания веб-технологий. Это как если вы умеете управлять одномоторным катером, совершенно не факт что уже сейчас вы можете с легкостью пересесть на подводную лодку, хотя преимущества подводной лодки очевидны.'
            }
            <br />
            <br />
            {
              'С начала 2009-го года MODx развился в нескольких направлениях. Линейка MODx 0.9 закончилась на версии 0.9.6.3 и плавно переросла в MODx Evolution 1.0.0 . MODx Evolution отличается отличным соотношением простоты, гибкости и надежности. Основное API содержится всего в одном-единственном файле, что облегчает изучение данной платформы, при этом это полноценный фреймворк с очень богатым функционалом.'
            }
            <br />
            <br />
            {
              'Летом 2009-го года на свет появляется MODx Revolution 1.0.0 и хотя система была еще сырая, это действительно Революция! На сегодня последняя стабильная версия MODx Revolution 2.0.8 перекрывает практически все потребности любого даже самого искушенного веб-программиста. К сожалению из-за неактуальности с нашей точки зрения MODx Evolution мы практически ничего не будем писать про данную версию фреймворка, но '
            }
            <Link
              title="MODx Revolution"
              to="/documentation/modx/modx-revolution.html"
            >
              {'MODx Revolution'}
            </Link>
            {' мы довольно подробно рассмотрим в дальнейших статьях.'}
          </p>
          {'\n'}
          <p>
            {'Для веб-разработчиков мы предлагаем цикл статей по '}
            <strong>{'MODx Revolution'}</strong>
            {':'}
          </p>
          {'\n'}
          <p></p>
          <ul>
            <li>
              <Link
                to="/documentation/modx/modx-revolution.html"
                title="MODx Revolution"
              >
                {'MODx Revolution'}
              </Link>
              <ul>
                <li>
                  <Link
                    to="/documentation/modx/modx-revolution/modx-revolution-po-shagam.html"
                    title="MODx Revolution по шагам"
                  >
                    {'MODx Revolution по шагам'}
                  </Link>
                </li>
                {'\n'}
                <li>
                  <Link
                    to="/documentation/modx/modx-revolution/modx-revolution-ustanovka.html"
                    title="MODx Revolution Установка "
                  >
                    {'MODx Revolution Установка '}
                  </Link>
                </li>
                {'\n'}
                <li>
                  <Link
                    to="/documentation/modx/modx-revolution/modx-revolution-fajlovaya-model.html"
                    title="MODx Revolution файловая модель"
                  >
                    {'MODx Revolution файловая модель'}
                  </Link>
                </li>
                {'\n'}
                <li>
                  <Link
                    to="/documentation/modx/modx-revolution/ustanovka-dopolnitelnyh-paketov-na-modx-revolution.html"
                    title="Установка дополнительных пакетов на MODx Revolution"
                  >
                    {'Установка дополнительных пакетов на MODx Revolution'}
                  </Link>
                </li>
                {'\n'}
                <li>
                  <Link
                    to="/documentation/modx/modx-revolution/modx-revolution-optimizatsiya-kesh.html"
                    title="MODx Revolution Оптимизация КЭШ"
                  >
                    {'MODx Revolution Оптимизация КЭШ'}
                  </Link>
                </li>
                {'\n'}
                <li>
                  <Link
                    to="/documentation/modx/modx-revolution/modx-revolution-nastrojki-bezopasnosti.html"
                    title="MODx Revolution настройки безопасности"
                  >
                    {'MODx Revolution настройки безопасности'}
                  </Link>
                </li>
                {'\n'}
                <li>
                  <Link
                    to="/documentation/modx/modx-revolution/xpdo.html"
                    title="xPDO"
                  >
                    {'xPDO'}
                  </Link>
                </li>
                {'\n'}
                <li>
                  <Link
                    to="/documentation/modx/modx-revolution/xpdo-urok-1.-getobject.html"
                    title="xPDO Урок 1. GetObject()"
                  >
                    {'xPDO Урок 1. GetObject()'}
                  </Link>
                </li>
                {'\n'}
                <li>
                  <Link
                    to="/documentation/modx/modx-revolution/xpdo-urok-2.-getcollection.html"
                    title="xPDO Урок 2. GetCollection()"
                  >
                    {'xPDO Урок 2. GetCollection()'}
                  </Link>
                </li>
                {'\n'}
                <li>
                  <Link
                    to="/documentation/modx/modx-revolution/xpdo-urok-3.-newquery.html"
                    title="xPDO Урок 3. newQuery()"
                  >
                    {'xPDO Урок 3. newQuery()'}
                  </Link>
                </li>
                {'\n'}
                <li className="last">
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
          <p></p>
        </div>
        {'\n'}
      </div>
      <div className="clear"></div>
    </div>
  )
}
export const ModxPage: React.FC = () => (
  <DocumentationLayout scripts={scripts}>
    <Content />
  </DocumentationLayout>
)

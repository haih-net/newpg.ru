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
                        <li className="level4 active self">
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
                {'MODx Revolution файловая модель'}
              </span>
            </h1>
          </span>
        </div>
        {'\n        '}
        <div id="content">
          <p>{'Основные папки MODx Revolution:\n'}</p>
          {'\n'}
          <ul>
            {'\n'}
            <li>
              <strong>{'/core'}</strong>
              {
                '. Ядро. Это, пожалуй, единственное, без чего \nMODx Revolution не может работать. Там находятся все основные файлы и \nбиблиотеки. При этом ядро можно перенести абсолютно в любую директорию \nна сервере, даже за пределы сайта))), а само ядро можно использовать \nсразу для нескольких совершенно независимых сайтов. Это очень удобно в \nцелях обслуживания сайтов. Так, обновив всего одно ядро в одном месте, \nмы делаем обновление сразу всех сайтов. Еще один приятный момент: можно \nпараллельно устанавливать сразу несколько ядер системы. К примеру, вышла\n новая версия MODx Revolution, вы скачали ядро, в настройках сайта \nуказали путь к новому ядру, проверили как работает сайт, и в случае если\n что-то идет не так, вы легко можете восстановить сайт просто прописав в\n настройках путь к старому ядру.'
              }
            </li>
            {'\n'}
            <li>
              <strong>{'/manager'}</strong>
              {
                '. Дирректория админ-панели. Как я говорил \nраньше, можно и свою админку написать, в случае необходимости. Но если \nвы просто переносите админку или переименовываете каталог, то необходимо\n произвести несколько телодвижений (именно в этой очередности):\n'
              }
              <ul>
                {'\n'}
                <li>
                  {'Изменить настройки. То есть открываем '}
                  <strong>{'/core/config/config.inc.php'}</strong>
                  {', находим '}
                  <strong>{'$modx_manager_path='}</strong>
                  {' и '}
                  <strong>{'$modx_manager_url='}</strong>
                  {' и корректируем их.'}
                </li>
                {'\n'}
                <li>
                  {'Очистить кэш системы вручную. То есть открываем папку '}
                  <strong>{'/core/cache/system_settings/'}</strong>
                  {' (в более ранних версиях MODx Revolution это скорее всего '}
                  <strong>{'/core/cache/'}</strong>
                  {
                    ', так как начиная с версии 2.1.0 структура кэша притерпела значительные изменения) и удаляем там файл '
                  }
                  <strong>{'config.cache.php'}</strong>
                </li>
                {'\n'}
                <li>
                  {'Очистить кэш карты действий контекста '}
                  <strong>{'mgr/.'}</strong>
                  {' Для этого открываем папку '}
                  <strong>{'/core/cache/action_map/mgr'}</strong>
                  {' (в более ранних версиях это скорее всего '}
                  <strong>{'/core/cache/mgr/'}</strong>
                  {') и удаляем '}
                  <strong>{'actions.cache.php'}</strong>
                  {
                    '.\n Именно в этом файле хранится кэш настройки, которая указывает на старую\n дирректорию админки, в результате чего пока мы не обновим этот файл, \nадминка не будет нормально работать даже с обновленными настройками.'
                  }
                </li>
                {'\n'}
                <li>
                  {
                    'Очистить на всякий случай весь кэш сайта. Для этого авторизовавшись в админ-панели жмем Сайт->Обновить сайт.'
                  }
                </li>
                {'\n'}
              </ul>
              {'\n'}
            </li>
            {'\n'}
            <li>
              <strong>{'assets/'}</strong>
              {
                '. Как правило используется для хранения внешних файлов (картинок js- и css- файлов и т.п.)'
              }
              <strong></strong>
            </li>
            {'\n'}
            <li>
              <strong>{'connectors/'}</strong>
              {
                '. Эта папка используется для хранения файлов для AJAX-запросов. Все AJAX-запросы в админке проходят через содержимое этой папки, и при написании своих AJAX-модулей так же используйте эту папку.'
              }
            </li>
            {'\n'}
          </ul>
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
export const ModxFilesPage: React.FC = () => (
  <DocumentationLayout scripts={scripts}>
    <Content />
  </DocumentationLayout>
)

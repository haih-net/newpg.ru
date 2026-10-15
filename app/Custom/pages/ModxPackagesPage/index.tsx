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
                        <li className="level4 active self">
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
                {'Установка дополнительных пакетов на MODx Revolution'}
              </span>
            </h1>
          </span>
        </div>
        {'\n        '}
        <div id="content">
          <p>
            {
              'Одно из самых приятных нововведений в CMS/CMF MODx Revolution - работа с репозиториями пакетов и расширений. Теперь чтобы установить какой-либо нужный плагин, практически не требуется никаких усилий.'
            }
          </p>
          {'\n'}
          <p>
            {
              'Вот, к примеру, нам надо установить WYZIWIG-редактор TinyMCE (по умолчанию MODx Revolution не имеет редактора контента).'
            }
          </p>
          {'\n'}
          <p>
            {
              'Шаг 1. Открываем страницу управления пакетами (Система->Управление пакетами).'
            }
          </p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/addPackages/capture_05132011_201447.jpg"
            >
              {
                'Управление пакетами в MODx Revolution. Шаг 1 — изображение пока не получено из архива'
              }
            </span>
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Шаг 2. Скачиваем нужный нам пакет.'}</p>
          {'\n'}
          <p>
            {
              'Здесь мы можем видеть уже установленные пакеты, если они  имеются, а так же проверить наличие обновлений для них.'
            }
          </p>
          {'\n'}
          <p>{'Чтобы добавить новый пакет, жмем "Добавить новый пакет".'}</p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/addPackages/capture_05132011_201917.jpg"
            >
              {
                'Управление пакетами в MODx Revolution. Шаг 2 — изображение пока не получено из архива'
              }
            </span>
          </p>
          {'\n'}
          <p>
            {
              'В появившемся диалоговом окне оставляем по умолчанию "Выберите поставщика" и жмём Дальше. Прим.: в дальнейшем  вы сможете и собственный репозиторий пакетов создать, или добавить другой известный вам репозиторий, или вообще залить пакеты по FTP и установить локально расположенные пакеты, но в данном случае мы скачаем пакеты с официального сайта MODx.'
            }
          </p>
          {'\n'}
          <p>
            {' '}
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/addPackages/capture_05132011_202235.jpg"
            >
              {
                'Управление пакетами в MODx Revolution. Шаг 2.2 — изображение пока не получено из архива'
              }
            </span>
          </p>
          {'\n'}
          <p>
            {
              'Далее выбираем поставщика ( в нашем случае это modxcms.com ) и жмём Дальше.'
            }
          </p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/addPackages/capture_05132011_202555.jpg"
            >
              {
                'Управление пакетами в MODx Revolution. Шаг 2.3 — изображение пока не получено из архива'
              }
            </span>
          </p>
          {'\n'}
          <p>
            {
              'В открывшемся окне вы можете видеть все доступные для скачивания пакеты, разложенные по категориям. Для поиска нужного вам пакеты вы можете воспользоваться навигатором или формой поиска. В нашем случае пакет TinyMCE занимает 2-ое место по популярности и нам совершенно не приходится его искать.'
            }
          </p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/addPackages/capture_05132011_203040.jpg"
            >
              {
                'Управление пакетами в MODx Revolution. Шаг 2.3 — изображение пока не получено из архива'
              }
            </span>
          </p>
          {'\n'}
          <p>
            {
              'Кликаем TinyMCE. В открывшемся окне мы видим досупный для скачивания пакет TinyMCE, а так же предложенные схожие по тематике пакеты, к примеру  frontpage, предназначенный для редактирования страниц сайта непосредственно из фронт-энда. Кликаем Загрузить.'
            }
          </p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/addPackages/capture_05132011_204055.jpg"
            >
              {
                'Управление пакетами в MODx Revolution. Шаг 2.4 — изображение пока не получено из архива'
              }
            </span>
          </p>
          {'\n'}
          <p>
            {
              'После того, как вы нажали кнопку "Загрузить", начинается загрузка установочного пакета на ваш сервер. Можно дождаться полной загрузки пакета (тогда вы увидите, что кнопка сменится на  "Загружено"), а можно сразу нажать "Готово" и дождаться когда обновится список загруженных пакетов.'
            }
          </p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/addPackages/capture_05132011_204551.jpg"
            >
              {
                'Управление пакетами в MODx Revolution. Шаг 2.5 — изображение пока не получено из архива'
              }
            </span>
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Шаг 3. Установка.'}</p>
          {'\n'}
          <p>
            {
              'После того, как пакет был скачен, остается всего лишь его установить.'
            }
          </p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/addPackages/capture_05152011_185006.jpg"
            >
              {
                'Управление пакетами в MODx Revolution. Шаг 3 — изображение пока не получено из архива'
              }
            </span>
          </p>
          {'\n'}
          <p>
            {
              'Для этого, ссобственно, кликаем "Установить". Далее принимаем пользовательские соглашения и т.п. (все как обычно при  установке любого программного продукта) и все. Пакет установлен.'
            }
          </p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/addPackages/capture_05152011_185424.jpg"
            >
              {
                'Управление пакетами в MODx Revolution. Шаг 3.2 — изображение пока не получено из архива'
              }
            </span>
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Теперь можно редактировать документы сайта с HTML-редактором TinyMCE.'
            }
          </p>
          {'\n'}
          <p>
            {
              'Кстати, результат установки дополнительных пакетов - не только в появлении самих кодов пакета, но и дополнительных настроек в MODx и т.п. К примеру, если мы сейчас откроем какой-нибудь документ для редактирования, в редакторе TinyMCE будет всего 2 ряда командных кнопок.'
            }
          </p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/addPackages/capture_05152011_190813.jpg"
            >
              {
                'TinyMCE MODx Revolution — изображение пока не получено из архива'
              }
            </span>
          </p>
          {'\n'}
          <p>
            {
              'В нашем случае нам не хватает кнопок редактирования таблиц. Добавим третий ряд кнопок. Для этого переходим в Система=>Настройки системы. Выбираем из списка групп настроек tinymce.'
            }
          </p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/addPackages/capture_05152011_192625.jpg"
            >
              {
                'Управление TinyMCE в MODx Revolution — изображение пока не получено из архива'
              }
            </span>
          </p>
          {'\n'}
          <p>
            {
              'Добавляем плагин TinyMCE Table для работы с таблицами (в настройку tiny.custom_plugins дописываем через запятую table).'
            }
          </p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/addPackages/capture_05152011_193624.jpg"
            >
              {
                'Добавляем плагин table в TinyMCE — изображение пока не получено из архива'
              }
            </span>
          </p>
          {'\n'}
          <p>
            {
              'Все, плагин для работы с таблицами подключен. Теперь надо добавить непосредственно в редактор строку кнопок для работы с таблицами. Для этого пишем в настройку tiny.custom_buttons3 название компонента кнопок tablecontrols.'
            }
          </p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/addPackages/capture_05152011_193605.jpg"
            >
              {
                'capture_05152011_193605.jpg — изображение пока не получено из архива'
              }
            </span>
          </p>
          {'\n'}
          <p>
            {
              'Все. Переходим на страницу редактирования документа, обновляем ее и видим дополнительную строку с кнопками редактирования таблиц.'
            }
          </p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/addPackages/capture_05152011_194627.jpg"
            >
              {
                'Кнопки редактирования таблиц в TinyMCE — изображение пока не получено из архива'
              }
            </span>
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Помимо простоты установки в пакетной системе MODx Revolution есть еще несколько плюсов:'
            }
          </p>
          {'\n'}
          <ol>
            {'\n'}
            <li>
              {
                'Контроль версий. Каждый раз, когда вы загружаете список установленных в системе пакетов MODx Revolution автоматически проверяет наличие более новых версий на сервере, и если такие имеются, вы будете об этом знать сразу.'
              }
            </li>
            {'\n'}
            <li>
              {
                'Возможность откатить пакет. Бывают такие случаи, когда после обновления пакета, он перестает корректно работать по тем или иным причинам. В MODx Revolution это не страшно. Кликнув правой кнопкой мыши по нужному вам пакету, выбираете Восстановить. В таком случае Система деинсталирует новый пакет и восстановит старый.'
              }
            </li>
            {'\n'}
            <li>
              {
                'Возможность добавлять свои репозитории. Если у вас несколько отдельных веб-проектов на MODx Revolution и есть свои разработанные пакеты, или исправленные чужие, вы можете создать свой репозиторий, разместить там свои пакеты и подгружать для установки пакеты, которые так  же будут автоматически устанавливаться.'
              }
            </li>
            {'\n'}
          </ol>
          {'\n'}
          <p>
            {
              'Приведу список нескольких  самых популярных пакетов для MODx Revolution:'
            }
          </p>
          {'\n'}
          <ul>
            {'\n'}
            <li>
              <strong>{'Wayfinder'}</strong>
              {
                '. Используется в основном для построения навигационног меню. Имеет много настроек, четко отслеживает опубликован документ или нет, включать его в меню или нет и т.п.'
              }
            </li>
            {'\n'}
            <li>
              <strong>{'MetaX'}</strong>
              {
                '. Генерирует Мета-код в заголовки документа,  типа когда последний раз редактировался, индексировать документ или нет и т.п.'
              }
            </li>
            {'\n'}
            <li>
              <strong>{'Breadcrumbs'}</strong>
              {'. Генерирует навигационные "Хлебные крошки".'}
            </li>
            {'\n'}
            <li>
              <strong>{'getResources'}</strong>
              {
                '. Крайне важный пакет. Используется для работы с документами сайта (получить дочерние ресурсы, родительский ресурс, параметры конкретного ресурса по его ID и т.п.). Как правило используется для формирования ноостных лент и т.п.'
              }
            </li>
            {'\n'}
            <li>
              <strong>{'Gallery'}</strong>
              {'. Собственно говоря галерея для MODx Revolution.'}
            </li>
            {'\n'}
            <li>
              <strong>{'Login'}</strong>
              {
                '. Модуль для регистрации/авторизации/восстановления пароля пользователей.'
              }
            </li>
            {'\n'}
            <li>
              <strong>{'GoogleSiteMap. '}</strong>
              {'Модуль для генерации файла sitemap.xml'}
            </li>
            {'\n'}
            <li>
              <strong>{'CodeMirror.'}</strong>
              {
                ' Очень полезный пакет для любого программиста. HTML-PHP-редактор для чанков, сниппетов, плагинов и т.п.'
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
export const ModxPackagesPage: React.FC = () => (
  <DocumentationLayout scripts={scripts}>
    <Content />
  </DocumentationLayout>
)

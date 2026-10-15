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
                        <li className="level4 active self">
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
                {'MODx Revolution настройки безопасности'}
              </span>
            </h1>
          </span>
        </div>
        {'\n        '}
        <div id="content">
          <p>
            {
              'С политиками безопасности в MODx не все так просто, как хотелось бы. А главное - далеко не все так работает, как должно бы работать.'
            }
          </p>
          {'\n'}
          <p>
            {'К примеру есть задача: '}
            <strong>
              {
                'запретить доступ неавторизованным пользователям к контексту web'
              }
            </strong>
            {'. '}
          </p>
          {'\n'}
          <p>
            {
              'Так вот, по логике вещей, нам всего-то надо зайти в управление контекстом (там в права доступа) и удалить досуп к контексту для неавторизованных пользователей. И всё! Но... Мы удаляем доспуты для анонимов, заходим на сайт анонимом и легко просматриваем его. А вот в админке (то есть контексте '
            }
            <strong>{'mgr'}</strong>
            {') у нас все работает.'}
          </p>
          {'\n'}
          <p>{'Тут все просто:'}</p>
          {'\n'}
          <p>
            {'При обращении к обычному контексту ('}
            <strong>{'web'}</strong>
            {' и т.п.) обработчиком запроса выступает объекты '}
            <strong>{'modRequest'}</strong>
            {' и '}
            <strong>{'modResponse'}</strong>
            {', а при обращении к контексту '}
            <strong>{'mgr'}</strong>
            {' - '}
            <strong>{'mod'}</strong>
            <strong>{'Manager'}</strong>
            <strong>{'Request'}</strong>
            {' и '}
            <strong>{'modManagerResponse'}</strong>
            {', расширяющие соответственно объекты '}
            <strong>{'modRequest'}</strong>
            {' и '}
            <strong>{'modResponse'}</strong>
            {'. Так вот, в объеке '}
            <strong>{'mod'}</strong>
            <strong>{'Manager'}</strong>
            <strong>{'Request'}</strong>
            {
              ' появляется новая функция initialize, в которой происходит проверка на авторизацию пользователя:'
            }
          </p>
          {'\n'}
          <p>
            <strong>
              {
                "if (!isset($this->modx->user) || !$this->modx->user->isAuthenticated('mgr'))"
              }
            </strong>
          </p>
          {'\n'}
          <p>
            {'а в '}
            <strong>{'modManagerResponse'}</strong>
            {' функция '}
            <strong>{'outputContent'}</strong>
            {' переписана, и имеет дополнительную проверку (    '}
            <strong>{"if ($this->modx->hasPermission('frames'))"}</strong>
            {
              '  ). В данном случае проверяется, имеет ли пользователь "Использовать интерфейс панели управления MODx". Если не имеет, то ему выдается соответствующее сообщение, и он не может работать с админкой, хотя он авторизован.'
            }
          </p>
          {'\n'}
          <p>
            {
              'Как же нам сделать так, чтобы права доступа распространялись на обычный контекст? Есть 2 варианта:'
            }
          </p>
          {'\n'}
          <ol>
            {'\n'}
            <li>
              {'Это создать плагин, срабатывающий к примеру на событие '}
              <strong>{'OnWebPageInit'}</strong>
              {' и прописать в нем проверку а ля  '}
              <strong>
                {
                  "if (!isset($this->modx->user) || !$this->modx->user->isAuthenticated('mgr'))"
                }
              </strong>
              {
                ' и соответствующие обработчики. Но в данном случае если будет больше одно контекста, а закрыть нужно будет только один (или определенные), то во-первых, придется прописывать дополнительную логику на определение контекста, а во-вторых, данный плагин будет срабатывать и для других контекстов, что даст хоть и не значительную, но все таки дополнительную нагрузку; '
              }
            </li>
            {'\n'}
            <li>
              {'Сделать а ля логики контекста '}
              <strong>{'mgr'}</strong>
              {
                ', то есть тоже создать новый обработчик запросов, тем более что нам не придется много писать. Как это сделать?'
              }
              <ol>
                {'\n'}
                <li>
                  {'Создаем в папке '}
                  <strong>{'core/model/modx/'}</strong>
                  {
                    ' свою произвольную папку, например по имени контекста (в нашем случае '
                  }
                  <strong>{'web'}</strong>
                  {');'}
                </li>
                {'\n'}
                <li>
                  {
                    'Создаем в этой папке свой файл обработчика запросов, к примеру '
                  }
                  <strong>{'webrequest.class.php'}</strong>
                  {';'}
                </li>
                {'\n'}
                <li>
                  {
                    'Прописываем в нем подгрузку файла основного класса-обработчика:'
                  }
                  <br />
                  <strong>
                    {
                      "require_once MODX_CORE_PATH . 'model/modx/modrequest.class.php';"
                    }
                  </strong>{' '}
                  <br />
                  {'и наш новый класс-обработчик, расширяющий основной класс:'}
                  <br />
                  <strong>{'class webRequest extends modRequest {}'}</strong>
                </li>
                {'\n'}
                <li>
                  {'Вот теперь в этом классе можно прописать новую функцию '}
                  <strong>{'handleRequest'}</strong>
                  {
                    ', в которой уже пропишем наш обработчик доступа к контексту и т.п. При чем не надо переписывать все функции родительского класса, ведь наш класс расширяет родительский, а значит наследует и прочие его функции.'
                  }
                </li>
                {'\n'}
                <li>
                  {
                    'А теперь надо назначить новый обработчик запросов конкретному контексту. Для этого открываем настройки нужного нам контекста и добавляем ему новую настройку со следующими данными:'
                  }
                  <ol>
                    {'\n'}
                    <li>
                      <strong>{'Ключ'}</strong>
                      {': '}
                      <strong>{'modRequest.class'}</strong>
                      {
                        '. Данная настройка будет указывать какой класс-обработчик использовать (и путь к нему). Поля '
                      }
                      <strong>{'Имя'}</strong>
                      {' и '}
                      <strong>{'Описание'}</strong>
                      {
                        ' можно не заполнять, так как это системная настройка и эти данные автоматически заполнятся после сохранения настройки;'
                      }
                    </li>
                    {'\n'}
                    <li>
                      <strong>{'Запись словаря для раздела'}</strong>
                      {': '}
                      <strong>{'system'}</strong>
                      {
                        '. Это для группировки настроек. В данном случае указан '
                      }
                      <strong>{'Раздел: Система и сервер'}</strong>
                      {';'}
                    </li>
                    {'\n'}
                    <li>
                      <strong>{'Значение'}</strong>
                      {': '}
                      <strong>{'web.webRequest'}</strong>
                      {
                        '. Здесь мы прописываем имя используемого объекта-обработчика в формате '
                      }
                      <strong>{'имяПапки.имяКласса'}</strong>
                      {' . В нашем случае это папка '}
                      <strong>{'web'}</strong>
                      {' в папке '}
                      <strong>{'core/model/modx/'}</strong>
                      {' и имя класса '}
                      <strong>{'webRequest'}</strong>
                      {
                        '. Обратите внимание на регистр в именах классов и файлов. Файлы именуются в нижнем регистре, а сами классы все таки с большими буквами (если большие буквы используются). регистр критичен.'
                      }
                    </li>
                    {'\n'}
                  </ol>
                </li>
                {'\n'}
              </ol>
            </li>
            {'\n'}
          </ol>
          {'\n'}
          <p>{'Есть следующие методы проверки доступов: '}</p>
          {'\n'}
          <ol>
            {'\n'}
            <li>
              <strong>{'hasPermission - '}</strong>
              {'проверяются политики доступа конкретно к контексту в целом;'}
            </li>
            {'\n'}
            <li>
              <strong>{'checkPolicy'}</strong>
              {
                ' - проверяются политики доступа к конкретным объектам, к примеру к определенному ресурсу.'
              }
            </li>
            {'\n'}
          </ol>
          {'\n'}
          <p>
            {
              'В чем разница? Вот в чем: пользователь может в целом иметь доступ к контексту (проверенный методом '
            }
            <strong>{'hasPermission'}</strong>
            {
              '), но при этом при попытке обратиться к конкретному ресурсу не иметь доступа к нему (проверив методом '
            }
            <strong>{'heckPolicy'}</strong>
            {').'}
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
export const ModxSecurityPage: React.FC = () => (
  <DocumentationLayout scripts={scripts}>
    <Content />
  </DocumentationLayout>
)

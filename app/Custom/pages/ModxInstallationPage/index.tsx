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
                        <li className="level4 active self">
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
                {'MODx Revolution Установка '}
              </span>
            </h1>
          </span>
        </div>
        {'\n        '}
        <div id="content">
          <p>
            {'Для того, чтобы установить MODx Revolution, нам понадобится:'}
          </p>
          {'\n'}
          <ol>
            {'\n'}
            <li>
              {
                'Собственно говоря сам пакет MODx Revolution. Скачиваем его с официального сайта '
              }
              <a
                title="Скачать MODx Revolution"
                href="http://modx.com/revolution/download/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {'http://modx.com/revolution/download/'}
              </a>
              {
                ' На данной странице всегда доступна последняя версия MODx Revolution в двух вариантах:'
              }
              <ol>
                {'\n'}
                <li>
                  {
                    'Traditional. Это полный пакет для установки с нуля. Он нам и понадобится.'
                  }
                </li>
                {'\n'}
                <li>
                  {
                    'Advanced. Сжатая версия. Как  правило используется для обновления более ранних версий движка'
                  }
                </li>
                {'\n'}
              </ol>
            </li>
            {'\n'}
            <li>{'Хостинг (для резмещения самого сайта).'}</li>
            {'\n'}
            <li>{'База данных MySQL'}</li>
            {'\n'}
          </ol>
          {'\n'}
          <p>
            {
              'Скачиваем установочный пакет. На сегодня последняя стабильная версия - MODx Revolution 2.0.1-pl. Это очень интересно, так как раз именно в этой версии они должны были реализовать то, что мы делали сами (оптимизация кэша). Более подробно о нашем эксперименте написано '
            }
            <Link
              title="MODx Revolution Оптимизация кэша"
              to="/documentation/modx/modx-revolution/modx-revolution-optimizatsiya-kesh.html"
            >
              {'в этой статье'}
            </Link>
            {'.'}
          </p>
          {'\n'}
          <p>
            {
              'После того, как мы скачали установочный пакет, нам необходимо залить его содержимое в директорию сайта. Проще всего сделать это по протоколу FTP через ftp-клиент. Рекомендую бесплатную '
            }
            <a
              title="free FTP-client FileZilla"
              href="http://filezilla.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'FileZilla'}
            </a>
          </p>
          {'\n'}
          <p>
            {
              '*Если вы умеете работать с SSH, или ваш хостинг позволяет через админ-панель разархивировать архивы, то проще залить на сайт установочный архив и уже там его распаковать. Если нет, то придется распаковать  его  локально, и только потом залить все файлы на сайт, что займет гораздо больше времени, тем более если медленный интернет. '
            }
          </p>
          {'\n'}
          <p>
            {
              'После того, как вы залили файлы на сервер (и распаковали, если заливали архивом), ваш установочный пакет должен быть доступен по адресу http://адрес_сайта/setup/ (В более ранних ветках MODx Evolution и MODx 0.9 достаточно было просто обратиться к корню сайта, и если базы данных нет, сразу выдавалось предложение установить систему, но теперь это по соображениям безопасности скрыто и необходимо обращаться непосредственно к инсталяции) . Если это так, значит все хорошо. Если нет, убедитесь что распакованные файлы действительно находятся в корне сайта.'
            }
          </p>
          {'\n'}
          <p>
            {
              'Если все хорошо, то прежде чем приступить непосредственно к установке, выполним еще несколько важных шагов.'
            }
          </p>
          {'\n'}
          <ol>
            {'\n'}
            <li>
              {
                'Подготовим файл .htaccess (если кто не знает, это файл, который позволяет налету переписывать некоторые настроки сервера, если политики безопасности позволяют это сделать).  Он лежит в корне сайта и специально переименован в ht.access, чтобы не использовался без нашего желания. Переименовываем ht.access в .htaccess (так же посредством FTP-клиента или через SSH). Затем открываем этот файл каким-либо редактором и кое что в нем подредактируем:'
              }
              <ol>
                {'\n'}
                <li>
                  {
                    'Первым делом добавим такую строчку: addDefaultCharset utf-8 '
                  }
                  <br />
                  {
                    'В данном случае мы указываем используемую сервером кодировку по умолчанию. Просто часто  по умолчанию используются другие кодировки, в результате с русским языком мы получим бракозябры'
                  }
                </li>
                {'\n'}
                <li>
                  {
                    'Если вы не хотите использовать ЧПУ, то измените RewriteEngine On на RewriteEngine Off'
                  }
                </li>
                {'\n'}
              </ol>
            </li>
            {'\n'}
            <li>
              {
                'Создадим новую базу данных для нашего сайта (хотя можно использовать и другую, если имеется. Для всех создаваемых таблиц будет использоваться префикс modx_ или другой, если вы укажите. Таким образом в одной базе данных можно хранить таблицы сколь угодно многих инсталяций ). ППо хорошему сразу после установки базы данных советую проверить ее кодироку, и в случае необходимости изменить на utf8_general_ci . Сделать это можно, к примеру, с помощью phpMyAdmin.'
              }
            </li>
            {'\n'}
          </ol>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/install/capture_05282011_234242.jpg"
            >
              {
                'capture_05282011_234242.jpg — изображение пока не получено из архива'
              }
            </span>
          </p>
          {'\n'}
          <p>{'Теперь мы можем приступить непосредственно к установке. '}</p>
          {'\n'}
          <p>
            {
              'Открываем страницу инсталяции http://адрес_сайта/setup/. Если надо, меняем язык на родной (я поменял на русский). Жмем дальше. '
            }
          </p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/install/capture_05282011_231531.jpg"
            >
              {
                'capture_05282011_231531.jpg — изображение пока не получено из архива'
              }
            </span>
          </p>
          {'\n'}
          <p>
            {
              'В параметрах установки оставляем "Новая установка" (если это новая установка, а не обновление более ранней версии). А вот с дополнительными параметрами давайте разберем один очень важный момент... С правами доступа вы точно должны знать какие политики безопасности действуют на вашем сервере. По умолчанию права на папки и файлы указаны 0755 и 0644. Я не буду вдаваться в тонкости, предупрежу только что если вы не правильно укажите права на запись, то наверняка возникнуть проблемы с дополнительными пакетами. Чаще всего происходит следующее: вы скачиваете и устанавливаете пакеты, и они нормально устанавливаются, но когда вы пытаетесь их обновить или удалить, не хватает прав на запись и как результат - множество ошибок работы с файлами.'
            }
          </p>
          {'\n'}
          <p>
            {
              'Переходим к следующему шагу. Тут необходимо настроить соединение с  базой данных. Тут вам необходимо будет указать хост сервера базы данных, имя базы данных, префикс таблиц, логин и пароль пользователя базы данных. После этого необходимо проверить соединение с БД, нажав соответствующую ссылку. Если все хорошо, то откроется следующий блок настроек, к котором нужно будет указать кодировку подключения с сопоставления Базы Данных. Желательно указать utf8 и utf8_general_ci соответственно. '
            }
          </p>
          {'\n'}
          <p>
            {
              'Далее проверяем указанные настройки. Если все ОК, то остается последний шаг настроек - настроить данные администратора сайта (логин, пароль и  емейл). '
            }
          </p>
          {'\n'}
          <p>
            {
              'После указания всей этой информации, жмем Далее. Тут вы увидите полный отчет о проверке сервера перед установкой. Если все ОК, жмем "Установить". Произойдет установка сисемы и будет выдан отчет о результатах. '
            }
          </p>
          {'\n'}
          <p>
            {
              'Если все хорошо, жмем Далее и на следующей странице жмем Войти, оставив галочку удаления папки с установочными файлами (в целях безопасности). Так мы переходим в админку по адресу http://адрес_сайта/manager/ . Попробуйте авторизоваться. Если вы авторизовались и вошли в админку, значит установка прошла успешно и можно работать с системой.'
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
export const ModxInstallationPage: React.FC = () => (
  <DocumentationLayout scripts={scripts}>
    <Content />
  </DocumentationLayout>
)

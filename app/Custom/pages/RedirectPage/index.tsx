import type * as React from 'react'
import { Link } from 'react-router'
import { RedirectPageStyled } from './styles'

export const RedirectPage: React.FC = () => {
  return (
    <RedirectPageStyled>
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

              <li className="level1 active">
                <Link to="/services.html" title="Услуги">
                  Услуги
                </Link>
                <ul>
                  <li className="level2">
                    <Link
                      to="/services/sozdanie-saitov.html"
                      title="Создание сайтов"
                    >
                      Создание сайтов
                    </Link>
                  </li>

                  <li className="level2 active">
                    <Link
                      to="/services/poiskovoe-prodvigenie.html"
                      title="Поисковое продвижение сайтов"
                    >
                      Поисковое продвижение
                    </Link>
                    <ul>
                      <li className="level3 active self">
                        <Link
                          to={
                            '/services/poiskovoe-prodvigenie/301_redirect.html'
                          }
                          title="Как правильно перенести сайт"
                        >
                          Как правильно перенести сайт
                        </Link>
                      </li>

                      <li className="level3">
                        <Link
                          to={
                            '/services/poiskovoe-prodvigenie/geograficheskaya-prinadlegnost.html'
                          }
                          title="Географическая принадлежность"
                        >
                          Географическая принадлежность
                        </Link>
                      </li>

                      <li className="last level3">
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

                  <li className="last level2">
                    <Link
                      to="/services/poddergka-prodvigenie.html"
                      title="Поддержка, продвижение сайтов"
                    >
                      Поддержка, продвижение
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="level1">
                <Link to="/portfolio.html" title="Портфолио">
                  Портфолио
                </Link>
              </li>

              <li className="level1">
                <Link to="/documentation.html" title="Документация">
                  Документация
                </Link>
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
                to="/services.html"
                title={
                  'Услуги веб-студии "Новая парадигма". Создание, поддержка и продвижение сайтов'
                }
              >
                Услуги
              </Link>{' '}
              »{' '}
              <Link
                className="B_crumb"
                to="/services/poiskovoe-prodvigenie.html"
                title="Поисковое продвижение сайтов"
              >
                Поисковое продвижение
              </Link>{' '}
              »{' '}
              <h1 className="B_lastCrumb" tabIndex={-1}>
                <span className="B_currentCrumb">
                  Как правильно перенести сайт
                </span>
              </h1>
            </span>
          </div>

          <div id="content">
            <p>
              Иногда приходится сталкиваться с ситуациями, когда необходимо
              переместить какие-то страницы с сайта (в пределах сайта или на
              другой сайт), а то и весь сайт на другой домен. К примеру у Вас
              обновляется структура сайта, или у Вас было несколько сайтов, и Вы
              решили их собрать в один,&nbsp; или просто склеиваете сайты с www
              и без.{' '}
            </p>

            <p>
              Но что делать с тем, что Ваш сайт или Ваши сайты проиндексированы
              поисковыми системами и выдаются в поисковых запросах на первых
              местах, наростили большую ссылочную массу, пути указаны в
              рекламных материалах и т.п.? Как все это не потерять? К тому же
              при переносе контента существует опасность, что поисковые роботы
              сочтут Ваш контент за неуникальный, взятый с Ваших прошлых сайтов.
            </p>

            <p>{' '}</p>

            <p>
              На самом деле решение есть. Нужно всего лишь на старых страницах
              выдавать правильный редирект с ошибкой 301 (Страница перемещена
              навсегда. 301 Permanent Redirect) и указанием правильного адреса
              новой страницы. Сделать это&nbsp; можно несколкими способами.
            </p>

            <p>{' '}</p>

            <p>
              <strong>
                Способ первый. Редирект с помощью модуля mod_rewrite (файл
                .htaccess):
              </strong>
            </p>

            <p>{' '}</p>

            <p>Если основной домен без www. </p>

            <p>
              <code>
                Options +FollowSymLinks RewriteEngine On RewriteCond
                %&#123;HTTP_HOST&#125; ^www\.(.*) [NC] RewriteRule ^(.*)$
                http://%1/$1 [R=301,L]
              </code>
            </p>

            <p>
              В данном случае мы производим "склейку" сайтов с www и без www.
              {'  '}
            </p>

            <p>
              Строка RewriteCond %&#123;HTTP_HOST&#125; ^www\.(.*) [NC]. Здесь
              указывается условие редиректа. В данном случае это наличие www. в
              адресе страницы.
            </p>

            <p>
              Строка RewriteRule ^(.*)$ http://%1/$1 [R=301,L] подменяет адрес,
              удаляя поддомен www и передает ошибку от сервера 301, указывая,
              что страница перемещена на новый адрес навсегда.{' '}
            </p>

            <p>{' '}</p>

            <p>
              Если же наоборот основной сайт с www и надо всем страницам
              добавить www.
            </p>

            <p>
              <code>
                Options +FollowSymLinks RewriteEngine On RewriteCond
                %&#123;HTTP_HOST&#125; ^yourdomain\.ru$ [NC] RewriteRule ^(.*)$
                http://www.yoirdomain.ru/$1 [R=301,L]
              </code>
            </p>

            <p>{' '}</p>

            <p>
              <strong>Способ второй. С помощью PHP-скрипта.</strong>
            </p>

            <p>
              Если Вам надо перенести только некоторые страницы, то наверняка
              гораздо удобнее будет использовать PHP-скрипт.
            </p>

            <p>
              <code>
                &lt;?php // Указываем адрес страницы, на которую будет
                осуществлен редирект $newURL =
                'http://newdomain.ru/page_address.html';
                <br />
                // Отправляем статус страницы "Перемещена навсегда"
                header("HTTP/1.1 301 Moved Permanently");
                <br />
                // Отправляем заголовок редиректа на новую страницу
                header("Location: $newURL");
                <br />
                // Прекращаяем выполнение скрипта (необязательно) exit(); ?&gt;
              </code>
            </p>

            <p>
              <strong className="star">!</strong> Имейте ввиду, что выполнение
              скрипта (отправление заголовков) необходимо производить до вывода
              любого текста. Любой лишний символ, даже пробел, выведеный раньше
              отправки этих заголовков, приведет к невозможности отправить эти
              заголовки, то есть к ошибке.
            </p>

            <p>{' '}</p>

            <p>
              Эти меры помогут не только корректно перенести страницы, но и
              сохранить Google PR, что согласитесь, совсем не мало важно.
            </p>
          </div>
        </div>

        <div className="clear"></div>
      </div>
    </RedirectPageStyled>
  )
}

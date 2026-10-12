import type * as React from 'react'
import { Link } from 'react-router'
import { UpdateWebsitePageStyled } from './styles'

export const UpdateWebsitePage: React.FC = () => {
  return (
    <UpdateWebsitePageStyled>
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

                  <li className="level2">
                    <Link
                      to="/services/poiskovoe-prodvigenie.html"
                      title="Поисковое продвижение сайтов"
                    >
                      Поисковое продвижение
                    </Link>
                  </li>

                  <li className="last level2 active">
                    <Link
                      to="/services/poddergka-prodvigenie.html"
                      title="Поддержка, продвижение сайтов"
                    >
                      Поддержка, продвижение
                    </Link>
                    <ul>
                      <li className="level3">
                        <Link
                          to={
                            '/services/poddergka-prodvigenie/polnaya-poddergka-saytov.html'
                          }
                          title="Полная поддержка сайтов"
                        >
                          Полная поддержка сайтов
                        </Link>
                      </li>

                      <li className="level3 active self">
                        <Link
                          to={
                            '/services/poddergka-prodvigenie/kak-obnovlyat-sait-samomu.html'
                          }
                          title="Как обновлять сайт самому?"
                        >
                          Как обновлять сайт самому?
                        </Link>
                      </li>

                      <li className="last level3">
                        <Link
                          to={
                            '/services/poddergka-prodvigenie/obzor-populyarnyh-cms.html'
                          }
                          title={
                            'Краткий обзор популярных Систем Управления Контентом'
                          }
                        >
                          Обзор популярных CMS
                        </Link>
                      </li>
                    </ul>
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
                to="/services/poddergka-prodvigenie.html"
                title="Поддержка, продвижение сайтов"
              >
                Поддержка, продвижение
              </Link>{' '}
              »{' '}
              <h1 className="B_lastCrumb" tabIndex={-1}>
                <span className="B_currentCrumb">
                  Как обновлять сайт самому?
                </span>
              </h1>
            </span>
          </div>

          <div id="content">
            <p>
              Большинство современных сайтов разрабатывается с использованием
              CMS (Система Управления Контентом). Именно использование этих
              Систем Управления Контентом для разработки веб-сайтов позволяет в
              дальнейшем владельцу сайта самостоятельно управлять сайтом,
              обновлять контент на нем, создавать новые разделы и страницы на
              сайте, редактировать имеющиеся.{' '}
            </p>

            <p>{' '}</p>

            <p>
              Это могут быть как официальные CMS, так и единичные, так
              называемые "самописки". Официальные делятся на коммерческие, такие
              как{' '}
              <a
                href="http://www.1c-bitrix.ru/"
                rel="noopener noreferrer"
                target="_blank"
                title="CMS 1c-bitrix"
              >
                1C-Bitrix
              </a>
              , так и некоммерческие,такие как Drupal, Joomla! и Wordpress.{' '}
            </p>

            <p>{' '}</p>

            <p>
              Отдельная строка - Фреймворки для разработки сайтов,&nbsp; такие
              как CMS/CMF MODx. Кстати, именно на&nbsp; MODx мы разрабатываем
              большинство наших сайтов. Ознакомиться с данной системой можно на
              сайте неофициального русскоязычного сообщества{' '}
              <a
                href="http://www.modx-cms.ru/"
                rel="noopener noreferrer"
                target="_blank"
                title="Неофициальное  сообщество MODx"
              >
                www.modx-cms.ru
              </a>{' '}
              или на официальном сайте MODx{' '}
              <a
                href="http://www.modxcms.com/"
                rel="noopener noreferrer"
                target="_blank"
                title="Официальный сайт CMS/CMF MODx"
              >
                www.modxcms.com
              </a>
              .
            </p>

            <p>{' '}</p>

            <p>
              Попытаемся разобраться в самых значимых плюсах и минусах выбора
              тех или других, как их еще называют, "движков".
            </p>

            <p>{' '}</p>

            <p>
              <strong>1) Для чего вообще нужны CMS?</strong>
            </p>

            <p>{' '}</p>

            <p>
              Представьте, что Вам срочно понадобилось изменить или добавить
              информацию на Вашем сайте, или вообще добавить сразу&nbsp;
              несколько страниц на сайт, разместить там текстовую и графическую
              информацию. Вот тут-то на помощь и приходит CMS. Если сайт
              правильно разработан, то Вам нужно будет всего лишь авторизоваться
              в панели управления сайтом и с относительно небольшими усилиями Вы
              сможете все это сделать. В данном случае повторюсь:{' '}
              <strong>если сайт разработан правильно</strong>.
            </p>

            <p>{' '}</p>

            <p>
              <strong>2) В чем же тогда основные отличия&nbsp; CMS?</strong>
            </p>

            <p>{' '}</p>

            <p>
              В первую очередь, CMS - чаще всего боле менее специализированные
              системы. К примеру Wordpress изначально был разработан для
              создания сайтов-блогов, новостных сайтов и персональных страничек.
              Он позволяет с легкостью и очень быстро создать такой сайт, и
              потом добавление новой информации на сайте не доставит хлопот.
              Или, возьмем, 1C-Bitrix. Он изначально был ориентирован на
              разработку интернет-магазинов, правительственнх сайтов и сайтов
              гос. структур.
            </p>

            <p>{' '}</p>

            <p>
              И в том, и в другом случае свои задачи данные системы боле менее
              выполняли (в данном случае мы не вдаемся в различные технические
              минусы-тонкости, такие как что Bitrix сам по себе очень
              громозский, долго грузится и простому пользователю сложно
              ориентироваться в админ-панели, а Wordpress просто так не
              перенести потом на другой сервер, в случае такой необходимости).
              Но проблема в другом: если на сайте необходимо реализовать
              какой-то нестандартный для таких систем функционал, то часто это
              доставляет немало хлопот разработчику. Ведь важно не только суметь
              разработать что-то, но и сделать это в соответствии со стандартами
              выбраной Системы, чтобы в дальнейшем не возникло проблем в случае
              обновления Системы до более нового уровня, или если с сайтом будет
              вынужден работать новый программист, чтобы он смог легко
              разобраться в этих разработках.{' '}
            </p>

            <p>{' '}</p>

            <p>
              В данном случае заметно выигрывает CMS/CMF MODx. Так как это&nbsp;
              целый&nbsp; Фреймворк, то есть среда для разработки сайтов, и
              имеет очень мощный встренный функционал, MODx позволяет
              разрабатывать совершенно любого уровня и сложности веб-сайты, без
              ограничений на логику и дизайн. Тут правда есть оговорка: чтобы
              использовать MODx в полной мере, разработчик должен иметь очень
              большой опыт разработок и уметь свободно писать довольно сложный
              код. Если за разработку возьмется какой-нибудь малоопытный
              фрилансер, скорее всего ничего больее, чем сайт-визитку, он
              разработать не сможет. "Мешок риса на КАМАЗе не повезешь..."
            </p>

            <p>{' '}</p>

            <p>
              Краткий обзор популярных CMS{' '}
              <Link
                to={
                  '/services/poddergka-prodvigenie/obzor-populyarnyh-cms.html'
                }
                title="Обзор популярных CMS"
              >
                тут
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="clear"></div>
      </div>
    </UpdateWebsitePageStyled>
  )
}

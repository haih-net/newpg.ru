import website_developmentImage from './assets/assets/images/CSS/Blocks/website_development.png'
import zakazImage from './assets/images/diz/zakaz.jpg'
import sozdanie_saytovImage from './assets/images/diz/sozdanie_saytov.jpg'
import search_engine_optimizationImage from './assets/assets/images/CSS/Blocks/search_engine_optimization.png'
import poiskovoe_prodvigenieImage from './assets/images/diz/poiskovoe_prodvigenie.jpg'
import support_updatesImage from './assets/assets/images/CSS/Blocks/support_updates.png'
import poddergka_obnovlenieImage from './assets/images/diz/poddergka_obnovlenie.jpg'
import block3Image from './assets/assets/images/CSS/Blocks/block3.jpg'
import website_docImage from './assets/assets/images/CSS/Blocks/website_doc.png'
import extjsImage from './assets/assets/images/icons/extjs.jpeg'
import type * as React from 'react'
import { Link } from 'react-router'
import { MainPageStyled } from './styles'

export const MainPage: React.FC = () => {
  return (
    <MainPageStyled>
      <div className="middle">
        <div className="block">
          <div className="l_block left">
            <div>
              <img
                className="block_img"
                src={website_developmentImage}
                alt="Создание сайтов"
              />
            </div>

            <div className="block_menu">
              <ul className="block_menu">
                <li>
                  <Link
                    to="/services/sozdanie-saitov/sait-kak-samovyragenie.html"
                    title="Самовыражение"
                  >
                    Самовыражение
                  </Link>
                </li>

                <li>
                  <Link
                    to={
                      '/services/sozdanie-saitov/kak-sostavit-tehzadanie.html'
                    }
                    title="Как составить техзадание?"
                  >
                    Как составить техзадание?
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services/sozdanie-saitov/primer-audita-sayta.html"
                    title="Аудит и анализ сайта"
                  >
                    Аудит и анализ сайта
                  </Link>
                </li>

                <li>
                  <Link
                    to={
                      '/services/sozdanie-saitov/statistika-poseschaemosti.html'
                    }
                    title="Статистика посещений сайта"
                  >
                    Статистика посещений
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services/sozdanie-saitov/skolko-stoit-site.html"
                    title="Сколько стоит сайт?"
                  >
                    Сколько стоит сайт?
                  </Link>
                </li>

                <li className="last">
                  <Link
                    to="/services/sozdanie-saitov/tipy-saitov.html"
                    title="Типы сайтов"
                  >
                    Типы сайтов
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="block_preview">
            <div>
              <img src={zakazImage} alt="Заказать" />

              <h1 tabIndex={-1}>
                <Link
                  to="/services/sozdanie-saitov.html"
                  title="Создание сайтов"
                >
                  <img src={sozdanie_saytovImage} alt="Создание сайтов" />
                </Link>
              </h1>

              <span className="title">
                корпоративные сайты, порталы, каталоги, интернет-магазины и
                многое другое...
              </span>
            </div>

            <div>
              <p>{' '}</p>

              <p className="justifyfull">
                Создаём корпоративные сайты, порталы, каталоги и
                интернет-магазины. Начинаем с задач Вашего бизнеса: определяем,
                кому адресован сайт, какую информацию ищут посетители и как
                помочь им выбрать товар или услугу. На этой основе продумываем
                структуру, дизайн и функциональность будущего сайта.
              </p>

              <p className="justifyfull">
                Разрабатываем удобную навигацию, адаптируем страницы для
                компьютеров и мобильных устройств, подключаем Систему Управления
                Контентом для самостоятельного обновления материалов. Перед
                запуском проверяем работу страниц и форм, помогаем с размещением
                сайта. После запуска Вы можете обратиться к нам за поддержкой,
                обновлением и дальнейшим развитием проекта.
              </p>

              <p>{' '}</p>

              <p className="green justifyright">
                <strong>Создадим сайт для решения задач Вашего бизнеса!</strong>
              </p>
            </div>
          </div>

          <div className="clear"></div>
        </div>{' '}
        <div className="block">
          <div className="l_block left">
            <div>
              <img
                className="block_img"
                src={search_engine_optimizationImage}
                alt="Поисковое продвижение"
              />
            </div>

            <div className="block_menu">
              <ul className="block_menu">
                <li>
                  <Link
                    to="/services/poiskovoe-prodvigenie/301_redirect.html"
                    title="Как правильно перенести сайт"
                  >
                    Как правильно перенести сайт
                  </Link>
                </li>

                <li>
                  <Link
                    to={
                      '/services/poiskovoe-prodvigenie/geograficheskaya-prinadlegnost.html'
                    }
                    title="Географическая принадлежность"
                  >
                    Географическая принадлежность
                  </Link>
                </li>

                <li className="last">
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
            </div>
          </div>

          <div className="block_preview">
            <div>
              <img src={zakazImage} alt="Заказать" />

              <h1 tabIndex={-1}>
                <Link
                  to="/services/poiskovoe-prodvigenie.html"
                  title="Поисковое продвижение сайтов"
                >
                  <img
                    src={poiskovoe_prodvigenieImage}
                    alt="Поисковое продвижение"
                  />
                </Link>
              </h1>

              <span className="title">
                ваших товаров и услуг в регионе и по России, в Google, Яндексе,
                Рамблере и др.
              </span>

              <p>{' '}</p>
            </div>

            <div>
              <p className="justifyfull">
                Для достижения высоких результатов и высокой посещаемости любому
                корпоративному сайту, порталу, каталогу, интернет-магазину не
                обойтись без профессионального поискового продвижения, поддержки
                и обновления. Для успешности необходимо не только создание
                качественного web-сайта, а еще и комплексное продвижение под
                различные поисковые системы за счет оптимизации сайта и создания
                профессиональной ссылочной структуры. Так же сайт должен
                находиться в постоянном развитии и это обеспечивается благодаря
                поддержке и сопровождению сайтов. Обновление, различные работы
                по реконструкции и редизайну, установка Системы Управления
                Контентом, пополнение и обновление контента – вот то, что
                сделает Ваш сайт наиболее эффективным и поможет ему быть всегда
                в топах. Поддержка сайта обеспечит постоянное увеличение
                статистики посещаемости, а это залог того, что у Вашей фирмы,
                компании, интернет-магазина будут постоянно появляться новые
                клиенты. Создание корпоративных сайтов, порталов, каталогов,
                интернет-магазинов, профессиональное поисковое продвижение,
                обновление, поддержка и многие другие услуги предоставляет наша
                веб-студия.
              </p>

              <p>{' '}</p>

              <p className="green justifyright">
                <strong>С нами Ваш сайт будет работать эффективно!</strong>
              </p>
            </div>
          </div>

          <div className="clear"></div>
        </div>{' '}
        <div className="block">
          <div className="l_block left">
            <div>
              <img
                className="block_img"
                src={support_updatesImage}
                alt="Поддержка, обновления"
              />
            </div>

            <div className="block_menu">
              <ul className="block_menu">
                <li>
                  <Link
                    to={
                      '/services/poddergka-prodvigenie/polnaya-poddergka-saytov.html'
                    }
                    title="Полная поддержка сайтов"
                  >
                    Полная поддержка сайтов
                  </Link>
                </li>

                <li>
                  <Link
                    to={
                      '/services/poddergka-prodvigenie/kak-obnovlyat-sait-samomu.html'
                    }
                    title="Как обновлять сайт самому?"
                  >
                    Как обновлять сайт самому?
                  </Link>
                </li>

                <li className="last">
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
            </div>
          </div>

          <div className="block_preview">
            <div>
              <img src={zakazImage} alt="Заказать" />

              <h1 tabIndex={-1}>
                <Link
                  to="/services/poddergka-prodvigenie.html"
                  title="Поддержка, продвижение сайтов"
                >
                  <img
                    src={poddergka_obnovlenieImage}
                    alt="Поддержка, обновления сайтов"
                  />
                </Link>
              </h1>

              <span className="title">
                редизайн, установка Системы Управления Контентом, обновление
                контента и многое другое...
              </span>
            </div>

            <p>
              <img
                className="support-illustration"
                src={block3Image}
                alt="Иллюстрация поддержки и обновления сайта"
              />
            </p>
          </div>

          <div className="clear"></div>
        </div>{' '}
        <div className="block">
          <div className="l_block left">
            <div>
              <img
                className="block_img"
                src={website_docImage}
                alt="Документация"
              />
            </div>

            <div className="block_menu">
              <ul className="block_menu">
                <li>
                  <Link to="/documentation/extjs.html" title="ExtJS">
                    ExtJS
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="block_preview">
            <div>
              Различная документация по популярным и используемым нами
              технологиям, примеры, уроки.
            </div>

            <div>
              <Link to="/documentation/extjs.html" title="ExtJS">
                <img src={extjsImage} alt="extjs" />
              </Link>
            </div>
          </div>

          <div className="clear"></div>
        </div>
      </div>
    </MainPageStyled>
  )
}

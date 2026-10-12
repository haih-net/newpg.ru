import type * as React from 'react'
import { Link } from 'react-router'
import { GeographyPageStyled } from './styles'

export const GeographyPage: React.FC = () => {
  return (
    <GeographyPageStyled>
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
                      <li className="level3">
                        <Link
                          to={
                            '/services/poiskovoe-prodvigenie/301_redirect.html'
                          }
                          title="Как правильно перенести сайт"
                        >
                          Как правильно перенести сайт
                        </Link>
                      </li>

                      <li className="level3 active self">
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
                  Географическая принадлежность
                </span>
              </h1>
            </span>
          </div>

          <div id="content">
            <p>
              Еще один важный момент:{' '}
              <strong>географическая принадлежность сайта.</strong>
            </p>

            <p>{' '}</p>

            <p>
              Правильно установить географическую принадлежность сайта следует
              как минимум по нескольким причинам:
            </p>

            <ul>
              <li>
                <strong>Таргетинг</strong>. Если Вы поставляете товары или
                услуги на территории какого-то определенного региона или
                определенного перечня регионов, то больше вероятность того, что
                в результатах поиска Ваш сайт увидят именно те, кто Вам&nbsp;
                нужнее.
                <br />
                Как это работает? К примеру, Вы продаете слонов в&nbsp; Москве,
                Рязани и Новгороде, а кроликов в Тюмени и Казани. Нет смысла
                пользователям из Казани показывать информацию про слонов, плюс
                ко всему, поисковик будет лучше ранжировать Ваш сайт для
                пользователей из Казани по запросу "продажа кроликов", так как
                он знает, что кроликов Вы продаете именно в Казани. Хотя сервер,
                на котором расположен Ваш сайт, находится в Амстердаме...
              </li>

              <li>
                <strong>Более качественное продвижение</strong>.<br />
                Плюс к позициям по высокочастотным запросам, к примеру "продажа
                слонов" :-))), Вы получаете позиции по низкочастотным запросам,
                к примеру "продажа слонов в Рязани". Часто посетители
                конкретизируют свои запросы по понятным причинам. В таком случае
                Вы получите больше позиций по большему количеству слов. С другой
                стороны, если в запросе присутствуют слова, по которым ваш сайт
                не ранжируется по тем или иным причинам, Вы потеряете в
                результатах выдачи.
              </li>

              <li>
                <a
                  href="http://maps.yandex.ru/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Яндекс.Карты"
                >
                  Яндекс.Карты
                </a>{' '}
                и{' '}
                <a href="http://catalog.yandex.ru/" title="Яндекс.Каталог">
                  Яндекс.Каталог
                </a>
                <br />
                Ваш сайт сможет появиться в дополнительных сервисах. А там
                и&nbsp; конкуренции меньше, и поиск более целевой, и доверие к
                таким сайтам выше.
              </li>
            </ul>

            <p>Как же определить географическую принадлежность сайта? </p>

            <p>{' '}</p>

            <p>
              В Яндексе для этого можно воспользоваться средствами сервиса{' '}
              <a
                href="http://webmaster.yandex.ru/"
                rel="noopener noreferrer"
                target="_blank"
                title="Яндекс.Вебмастер"
              >
                Яндекс.Вебмастер
              </a>
              . Для пользования этим сервисам необходимы права на управление
              вашим сайтом. После того, как Вы зарегистрируете в данном сервисе
              свой сайт, Вы сможете управлять некоторой информацией по вашему
              сайту. К примеру, Вы сможете указать основной домен сайта, регистр
              домена, указать регион сайта и адреса организации, а так же
              посмотреть какие страницы вашего сайта проиндексированы роботом,
              какие страницы учатсвуют в поиске или не участвуют по тем или иным
              причинам. В общем очень полезный сервис. Только вот некоторая
              информация модерируется вручную и занимает это не мало времени. К
              примеру географию моего сайта проверяли несколько дней. Только
              после того, как в своей внутренней статистике по сайту я увидел,
              что на мой сайт заходил модератор по Гео из Яндекса, я понял что
              мой сайт проверили. Тут же зашел в сервис, перепроверил и
              действительно географическое положение одобрили. На это ушло 5
              дней. Адреса до сих пор не проверили. Так что не волнуйтесь, если
              несколько дней информация бдет оставаться без изменения (ожидает
              модерации).{' '}
            </p>

            <p>{' '}</p>

            <p>
              Кстати, этот пример еще раз подтверждает полезность именно
              внутренней статистической системы сайта, о которой я вскольз писал{' '}
              <Link
                to="/services/sozdanie-saitov/statistika-poseschaemosti.html"
                rel="noopener noreferrer"
                target="_blank"
                title="Статистика посещений сайта"
              >
                тут
              </Link>
              . Такую статистику ни Гугл.Аналитик, ни Яндекс.Метрика не покажут
              :-)
            </p>
          </div>
        </div>

        <div className="clear"></div>
      </div>
    </GeographyPageStyled>
  )
}

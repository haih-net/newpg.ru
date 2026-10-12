import type * as React from 'react'
import { Link } from 'react-router'
import { PortfolioPageStyled } from './styles'

export const PortfolioPage: React.FC = () => {
  return (
    <PortfolioPageStyled>
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

              <li className="level1">
                <Link to="/services.html" title="Услуги">
                  Услуги
                </Link>
              </li>

              <li className="level1 active self">
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
              <h1 className="B_lastCrumb" tabIndex={-1}>
                <span className="B_currentCrumb">Портфолио</span>
              </h1>
            </span>
          </div>

          <div id="content">
            <div
              aria-label="Работы студии: изображения ожидают восстановления"
              className="imageflow"
              id="galery_1"
              role="region"
              tabIndex={0}
            >
              <figure>
                <span
                  className="image-placeholder"
                  data-source={
                    '/assets/images/portfolio/small/sportclubvisa.ru.jpg'
                  }
                  title={
                    'Изображение пока не загружено: /assets/images/portfolio/small/sportclubvisa.ru.jpg'
                  }
                >
                  Визы в Италию
                </span>
                <figcaption>
                  <a
                    href="http://sportclubvisa.ru"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Визы в Италию
                  </a>
                  <br />
                  Дизайн{' '}
                  <a
                    href="http://studiomig.ru"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Студия МИГ
                  </a>
                  . Разработка{' '}
                  <Link to="/" rel="noopener noreferrer" target="_blank">
                    Студия «Новая парадигма»
                  </Link>
                </figcaption>
              </figure>
              <figure>
                <span
                  className="image-placeholder"
                  data-source={
                    '/assets/images/portfolio/small/msk.spravedlivo.ru.jpg'
                  }
                  title={
                    'Изображение пока не загружено: /assets/images/portfolio/small/msk.spravedlivo.ru.jpg'
                  }
                >
                  Сайт московского отделения партии «Справедливая Россия»
                </span>
                <figcaption>
                  <a
                    href="http://msk.spravedlivo.ru"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Сайт московского отделения партии «Справедливая Россия»
                  </a>
                  <br />
                  Разработка{' '}
                  <a
                    href="http://www.oneagile.ru/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Компания «One Agile»
                  </a>
                  . Обновление и поддержка{' '}
                  <Link to="/" rel="noopener noreferrer" target="_blank">
                    Студия «Новая парадигма»
                  </Link>
                </figcaption>
              </figure>
              <figure>
                <span
                  className="image-placeholder"
                  data-source="/assets/images/portfolio/small/radioma.ru.jpg"
                  title={
                    'Изображение пока не загружено: /assets/images/portfolio/small/radioma.ru.jpg'
                  }
                >
                  Компания «Радиома»
                </span>
                <figcaption>
                  <a
                    href="http://energydv.tmweb.ru/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Сайт компании «Радиома»
                  </a>
                  <br />
                  Дизайн{' '}
                  <a
                    href="http://studiomig.ru"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Студия МИГ
                  </a>
                  . Разработка{' '}
                  <Link to="/" rel="noopener noreferrer" target="_blank">
                    Студия «Новая парадигма»
                  </Link>
                </figcaption>
              </figure>
              <figure>
                <span
                  className="image-placeholder"
                  data-source={
                    '/assets/images/portfolio/small/promsvyaz.info.jpg'
                  }
                  title={
                    'Изображение пока не загружено: /assets/images/portfolio/small/promsvyaz.info.jpg'
                  }
                >
                  ОАО «Промсвязь»
                </span>
                <figcaption>
                  <a
                    href="http://promsvyaz.info/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    ОАО «Промсвязь»
                  </a>
                  <br />
                  Дизайн{' '}
                  <a
                    href="http://studiomig.ru"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Студия МИГ
                  </a>
                  . Разработка{' '}
                  <Link to="/" rel="noopener noreferrer" target="_blank">
                    Студия «Новая парадигма»
                  </Link>
                </figcaption>
              </figure>
              <figure>
                <span
                  className="image-placeholder"
                  data-source="/assets/images/portfolio/small/naee.ru.jpg"
                  title={
                    'Изображение пока не загружено: /assets/images/portfolio/small/naee.ru.jpg'
                  }
                >
                  Национальное агентство энергоэффективности
                </span>
                <figcaption>
                  <a
                    href="http://www.naee.ru/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Национальное агентство энергоэффективности
                  </a>
                  <br />
                  Дизайн{' '}
                  <a
                    href="http://studiomig.ru"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Студия МИГ
                  </a>
                  . Разработка{' '}
                  <Link to="/" rel="noopener noreferrer" target="_blank">
                    Студия «Новая парадигма»
                  </Link>
                </figcaption>
              </figure>
              <figure>
                <span
                  className="image-placeholder"
                  data-source={
                    '/assets/images/portfolio/small/medportaldv.ru.jpg'
                  }
                  title={
                    'Изображение пока не загружено: /assets/images/portfolio/small/medportaldv.ru.jpg'
                  }
                >
                  Центр по профилактике и борьбе со СПИДом
                </span>
                <figcaption>
                  <a
                    href="http://medportaldv.ru/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Центр по профилактике и борьбе со СПИДом
                  </a>
                  <br />
                  Дизайн{' '}
                  <a
                    href="http://studiomig.ru"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Студия МИГ
                  </a>
                  . Разработка{' '}
                  <Link to="/" rel="noopener noreferrer" target="_blank">
                    Студия «Новая парадигма»
                  </Link>
                </figcaption>
              </figure>
              <figure>
                <span
                  className="image-placeholder"
                  data-source={
                    '/assets/images/portfolio/small/sportbooking.ru.jpg'
                  }
                  title={
                    'Изображение пока не загружено: /assets/images/portfolio/small/sportbooking.ru.jpg'
                  }
                >
                  Спортивные сборы
                </span>
                <figcaption>
                  <a
                    href="http://sportbooking.ru"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Спортивные сборы в Италии
                  </a>
                  <br />
                  Дизайн{' '}
                  <a
                    href="http://studiomig.ru"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Студия МИГ
                  </a>
                  . Разработка{' '}
                  <Link to="/" rel="noopener noreferrer" target="_blank">
                    Студия «Новая парадигма»
                  </Link>
                </figcaption>
              </figure>
              <figure>
                <span
                  className="image-placeholder"
                  data-source={
                    '/assets/images/portfolio/small/truskavets-kurort.ru.jpg'
                  }
                  title={
                    'Изображение пока не загружено: /assets/images/portfolio/small/truskavets-kurort.ru.jpg'
                  }
                >
                  Портал туристического города Трускавец
                </span>
                <figcaption>
                  <a
                    href="http://truskavets-kurort.ru/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Портал города Трускавец
                  </a>
                  <br />
                  Дизайн{' '}
                  <a
                    href="http://studiomig.ru"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Студия МИГ
                  </a>
                  . Разработка{' '}
                  <Link to="/" rel="noopener noreferrer" target="_blank">
                    Студия «Новая парадигма»
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div className="clear"></div>
      </div>
    </PortfolioPageStyled>
  )
}

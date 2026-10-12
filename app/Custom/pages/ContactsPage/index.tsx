import type * as React from 'react'
import { Link } from 'react-router'
import { ContactsPageStyled, AddressStyled, MapLinkStyled } from './styles'

export const ContactsPage: React.FC = () => {
  return (
    <ContactsPageStyled>
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

              <li className="last level1 active self">
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
                <span className="B_currentCrumb">Контактная информация</span>
              </h1>
            </span>
          </div>

          <div id="content">
            <h2>ООО «Новая Парадигма»</h2>

            <p>{' '}</p>

            <h3>Разработка, поддержка, аудит, продвижение сайтов.</h3>

            <p>{' '}</p>

            <p>
              <AddressStyled>
                Наш адрес: 119019, г. Москва, ул. Новый Арбат 21, оф. 2307
              </AddressStyled>
              <AddressStyled>{' '}</AddressStyled>
            </p>

            <p>{' '}</p>

            <p>Телефон: +7 (495) 774-67-02</p>

            <p>{' '}</p>

            <p>
              Email: <a href="mailto:info@newpg.ru">info@newpg.ru</a>
            </p>

            <p>{' '}</p>

            <p>
              <input
                disabled
                title="Архивная форма пока не восстановлена"
                type="button"
                value="Отправить нам сообщение"
              />
            </p>

            <p>{' '}</p>

            <p>{' '}</p>

            <p>
              <br />
              <small>
                <MapLinkStyled
                  href={
                    'http://maps.google.ru/maps?f=q&source=embed&hl=ru&geocode=&q=%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9+%D0%B0%D1%80%D0%B1%D0%B0%D1%82,++21&sll=55.354135,40.297852&sspn=34.169392,135.263672&ie=UTF8&hq=&hnear=%D1%83%D0%BB.+%D0%9D%D0%BE%D0%B2.+%D0%90%D1%80%D0%B1%D0%B0%D1%82,+21,+%D0%90%D1%80%D0%B1%D0%B0%D1%82,+%D0%B3%D0%BE%D1%80%D0%BE%D0%B4+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+%D0%90%D0%9E+%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9&ll=55.755375,37.597704&spn=0.016905,0.054932&z=14&iwloc=A'
                  }
                >
                  Просмотреть увеличенную карту
                </MapLinkStyled>
              </small>
            </p>
          </div>
        </div>

        <div className="clear"></div>
      </div>
    </ContactsPageStyled>
  )
}

import type * as React from 'react'
import { Link } from 'react-router'
import { ContactsPageStyled } from './styles'

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
              Email: <a href="mailto:info@newpg.ru">info@newpg.ru</a>
            </p>

            <p>{' '}</p>
          </div>
        </div>

        <div className="clear"></div>
      </div>
    </ContactsPageStyled>
  )
}

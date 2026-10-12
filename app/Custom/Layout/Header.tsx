import aboutImage from './assets/images/menu/about.png'
import black_aboutImage from './assets/images/menu/black_about.png'
import serviceImage from './assets/images/menu/service.png'
import black_serviceImage from './assets/images/menu/black_service.png'
import portfolioImage from './assets/images/menu/portfolio.png'
import black_portfolioImage from './assets/images/menu/black_portfolio.png'
import documentationImage from './assets/images/menu/documentation.png'
import black_documentationImage from './assets/images/menu/black_documentation.png'
import contactImage from './assets/images/menu/contact.png'
import black_contactImage from './assets/images/menu/black_contact.png'
import logoImage from './assets/images/logo.png'
import type * as React from 'react'
import { Link } from 'react-router'

export const Header: React.FC = () => (
  <>
    <div className="header">
      <div className="contacts">
        <span className="text middle">
          <a href="mailto:info@newpg.ru">info@newpg.ru</a>
        </span>
      </div>

      {/* 
<div class="contacts"><span class="contacts">Для срочных вопросов: <span class="tel"><span class="code green">8 (495)</span> 772-67-02</span> <span class="mail">Почта: <a href="mailto:info@newpg.ru" class="mail green">info@newpg.ru</a></span></span>
</div>
*/}

      <div className="main_menu">
        <div className="menu">
          <ul className="menu">
            <li>
              <span className="l_corner"></span>
              <span className="row">
                <Link to="/about.html" title="О компании">
                  <img className="white" src={aboutImage} alt="О компании" />
                  <img
                    className="black"
                    src={black_aboutImage}
                    alt="О компании"
                  />
                </Link>
              </span>
              <span className="r_corner"></span>
            </li>

            <li>
              <span className="l_corner"></span>
              <span className="row">
                <Link to="/services.html" title="Услуги">
                  <img className="white" src={serviceImage} alt="Услуги" />
                  <img
                    className="black"
                    src={black_serviceImage}
                    alt="Услуги"
                  />
                </Link>
              </span>
              <span className="r_corner"></span>
            </li>

            <li>
              <span className="l_corner"></span>
              <span className="row">
                <Link to="/portfolio.html" title="Портфолио">
                  <img className="white" src={portfolioImage} alt="Портфолио" />
                  <img
                    className="black"
                    src={black_portfolioImage}
                    alt="Портфолио"
                  />
                </Link>
              </span>
              <span className="r_corner"></span>
            </li>

            <li>
              <span className="l_corner"></span>
              <span className="row">
                <Link to="/documentation.html" title="Документация">
                  <img
                    className="white"
                    src={documentationImage}
                    alt="Документация"
                  />
                  <img
                    className="black"
                    src={black_documentationImage}
                    alt="Документация"
                  />
                </Link>
              </span>
              <span className="r_corner"></span>
            </li>

            <li className="last">
              <span className="l_corner"></span>
              <span className="row">
                <Link to="/contacts.html" title="Контактная  информация">
                  <img
                    className="white"
                    src={contactImage}
                    alt="Контактная информация"
                  />
                  <img
                    className="black"
                    src={black_contactImage}
                    alt="Контактная информация"
                  />
                </Link>
              </span>
              <span className="r_corner"></span>
            </li>
          </ul>{' '}
        </div>

        <div className="logo">
          <Link to="/" title="На главную">
            <img src={logoImage} alt="Новая Парадигма" />
          </Link>
        </div>

        <div className="clear"></div>
      </div>
    </div>
  </>
)

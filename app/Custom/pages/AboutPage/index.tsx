import type * as React from 'react'
import { Link } from 'react-router'
import {
  AboutPageStyled,
  TaglineTableStyled,
  TaglineCellStyled,
} from './styles'

export const AboutPage: React.FC = () => {
  return (
    <AboutPageStyled>
      <div className="middle">
        <div className="left_block">
          <div className="menu">
            <ul className="menu">
              <li className="level1">
                <Link to="/" title="Главная страница">
                  Главная
                </Link>
              </li>

              <li className="level1 active self">
                <Link to="/about.html" title="О компании">
                  О компании
                </Link>
                <ul>
                  <li className="level2">
                    <Link to="/about/vakansii.html" title="Вакансии">
                      Вакансии
                    </Link>
                  </li>
                </ul>
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
                <span className="B_currentCrumb">О компании</span>
              </h1>
            </span>
          </div>

          <div id="content">
            <div>
              <p>
                <strong>Веб-студия «Новая Парадигма»</strong> - это
                многофункциональная IT-лаборатория полного цикла. Мы оказываем
                весь спектр услуг в области Интернет.
              </p>

              <p>{' '}</p>

              <p>
                Основные направления работы нашей веб-студии -{' '}
                <strong>разработка и сопровождение сайтов</strong>,{' '}
                <strong>продвижение сайтов</strong>,{' '}
                <strong>бизнес-аналитика и аудит Интернет-ресурсов</strong>,{' '}
                <strong>автоматизация процессов в Интернете</strong>.
              </p>

              <p>{' '}</p>

              <p>
                Мы не просто разрабатываем сайты, используя какие-то стандартные
                разработки, мы постоянно развиваемся, осваиваем новые
                технологии, изучаем тенденции в области Интернет.{' '}
              </p>

              <p>{' '}</p>

              <TaglineTableStyled border={0} className="green">
                <tbody>
                  <tr>
                    <TaglineCellStyled>
                      <strong>
                        Если мы создали для себя ресурс, на который попали Вы,{' '}
                        <br />
                        значит мы создадим ресурс и для Вас, на который будут
                        попадать Ваши клиенты.
                      </strong>
                    </TaglineCellStyled>
                  </tr>
                </tbody>
              </TaglineTableStyled>

              <p className="justifyright">{' '}</p>

              <p className="justifyright">
                <strong>{' '}</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="clear"></div>
      </div>
    </AboutPageStyled>
  )
}

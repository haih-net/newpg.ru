import type * as React from 'react'
import { Link } from 'react-router'
import {
  DocumentationLayout,
  DocumentationReady,
} from '../../DocumentationLayout'
import { useContext } from 'react'
import {
  runDocumentationExample,
  type DocumentationExample,
} from '../../DocumentationLayout/runtime'
const examples: Partial<Record<DocumentationExample, () => void>> = {
  'WINDOW.showResizable': () => runDocumentationExample('WINDOW.showResizable'),
  'WINDOW.showWithTools': () => runDocumentationExample('WINDOW.showWithTools'),
}
const scripts: readonly string[] = ['/js/ExtJS/lessons/lesson3.js']
const Content: React.FC = () => {
  const ready = useContext(DocumentationReady)
  return (
    <div className="middle">
      <div className="left_block">
        <div className="menu">
          {'\n\t\t\t'}
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
            <li className="level1 active">
              <Link to="/documentation.html" title="Документация">
                {'Документация'}
              </Link>
              <ul>
                <li className="level2 active">
                  <Link to="/documentation/extjs.html" title="ExtJS">
                    {'ExtJS'}
                  </Link>
                  <ul>
                    <li className="level3 active">
                      <Link
                        to="/documentation/extjs/extjs_lessons.html"
                        title="Уроки ExtJS"
                      >
                        {'Уроки ExtJS'}
                      </Link>
                      <ul>
                        <li className="level4">
                          <Link
                            to="/documentation/extjs/extjs_lessons/lesson1.html"
                            title="ExtJS. Урок 1. Hello, world!"
                          >
                            {'Урок 1. Hello, world!'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/extjs/extjs_lessons/lesson2.html"
                            title="ExtJS. Урок 2. Окна. Ext.Window"
                          >
                            {'Урок 2. Окна'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/extjs/extjs_lessons/lesson3.html"
                            title="ExtJS. Урок 3. Окна, часть вторая. Ext.Window, Ext.Toolbar"
                          >
                            {'Урок 3. Окна, часть вторая'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4 active self">
                          <Link
                            to="/documentation/extjs/extjs_lessons/lesson4.html"
                            title="ExtJS. Урок 4. Окна, часть третья, Ext.Window properties"
                          >
                            {'Урок 4. Окна, часть третья'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/extjs/extjs_lessons/lesson5.html"
                            title="ExtJS. Урок 5. Хранилища и таблицы. Ext.grid, Ext.data.Store"
                          >
                            {'Урок 5. Хранилища и таблицы'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="last level4">
                          <Link
                            to="/documentation/extjs/extjs_lessons/lesson6.html"
                            title="ExtJS. Урок 6. Шаблоны элементов. Ext.Template"
                          >
                            {'Урок 6. Шаблоны элементов'}
                          </Link>
                        </li>
                        {'\n'}
                      </ul>
                    </li>
                    {'\n'}
                    <li className="level3">
                      <a
                        href="/ExtJS/docs/index.html"
                        title="Документация по ExtJS"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {'Документация по ExtJS'}
                      </a>
                    </li>
                    {'\n'}
                    <li className="last level3">
                      <a
                        href="/ExtJS/examples/index.html"
                        title="Примеры ExtJS"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {'Примеры ExtJS'}
                      </a>
                    </li>
                    {'\n'}
                  </ul>
                </li>
                {'\n'}
              </ul>
            </li>
            {'\n'}
            <li className="last level1">
              <Link to="/contacts.html" title="Контактная  информация">
                {'Контактная  информация'}
              </Link>
            </li>
            {'\n'}
          </ul>
          {'\t'}
        </div>
      </div>
      <div className="center_block">
        {'\n\t'}
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
              to="/documentation/extjs.html"
              title="ExtJS"
            >
              {'ExtJS'}
            </Link>
            {' » '}
            <Link
              className="B_crumb"
              to="/documentation/extjs/extjs_lessons.html"
              title="Уроки ExtJS"
            >
              {'Уроки ExtJS'}
            </Link>
            {' » '}
            <h1 className="B_lastCrumb" tabIndex={-1}>
              <span className="B_currentCrumb">
                {'Урок 4. Окна, часть третья'}
              </span>
            </h1>
          </span>
        </div>
        {'\n\t'}
        <div id="content">
          <p>
            {
              'На прошлом уроке мы разобрали создание тулбаров для окон. Поверхностно конечно же, но достаточно чтобы понять принцип построения окон. Итак, чем же мы займемся сейчас? А разберем мы сейчас свойства окна сворачиваться, расширяться и т.п. Тут мы будем продолжать расширять наш класс WINDOW, так что если перескочили через урок, вернитесь в прошлый и просмотрите листинги. Вот код функции для нашей следующей кнопки:'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {
              'showResizable:function(){\n\t\t\n\t\tparams = this.extend(this.params, {\n\t\t\t// Наши уже используемые ранее объекты баров\n\t\t\ttbar:this.toolbar,\n\t\t\tbbar:this.bbar,\n\t\t\tfbar:this.fbar,\n\t\t\t\n\t\t\t// Новые параметры: \n\t\t\tresizable: true,\t\t// Можно изменять размеры окна\n\t\t\tcollapsible: true,\t\t// Можно схлопывать/расхлопывать окно\n\t\t\tminimizable: true,\t\t// Можно минимизировать окно\n\t\t\tmaximizable:true\t\t// Можно максимизировать окно\n\t\t})\n\t\tthis.show(params);\t\n}'
            }
            <br />
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {'\n  '}
            <input
              name="button"
              type="button"
              value="Открыть расширяемое окно"
              onClick={examples['WINDOW.showResizable']}
              disabled={!ready}
            />
            {'\n'}
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Разберем детально все новые параметры, хотя наверняка для многих тут итак все понятно. '
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Во-первых, сразу отметим что не считая параметра resizable, все эти параметры влияют на наличие или отсутствие соответствующих функциональных кнопок в верхнем правом углу окна. К примеру, если мы укажем closable: false , у нас исчезнет крестик, закрывающий окно при клике и если не будет других кнопок для закрытия окна (или навешано каких-нибудь событий, по которым окно закрывалось бы), окно будет считаться не закрываемым. '
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <strong>{'resizable: true'}</strong>
            {
              ' . По умолчанию true, так что в нашем случае мы ничего не меняем. Но если бы мы поставили false, изменять размеры окна уже нельзя было бы. '
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <strong>{'collapsible: true'}</strong>
            {' . Указывает на то, что окно схлопываемое. '}
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <strong>{'minimizable: true'}</strong>
            {
              ' . Вот тут нюанс есть. true указывает на то, что окно может быть минимизировано и появляется соответствующая кнопка, но само по себе наличие кнопки еще не говорит о том, что окно будет минимизироваться при клике по кнопочке. Для этого нужно навешать соответствующий листнер и обработчик, и указать область куда будет сворачиваться окошко при клике на кнопку. Честно сказать еще некогда было детально поковыряться и разобраться как все это работает, но обязательно это сделаю. А кому очень интересно и не втерпешь, могут залезть в примеры, там есть пример Десктопа, вот в примере можно этот вопрос и разобрать, если знания позволяют.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <strong>{'maximizable:true'}</strong>
            {' .  Тут все проще. Поставьте true и будет вам счастье :-) '}
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'А теперь навешаем еще несколько фишек на окошко. Вообще если изучать окна очень тщательно, это займет очень много времени, по этому мы этого делать не будем. Я считаю что на львиную часть задач достаточно и этих знаний. Итак, листинг.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {
              "<script type=\"text/javascript\">\n\ttools:function(){\n\t\treturn [\n\t\t{\n\t\t\tid:'print', \n\t\t\thandler:function(){\n\t\t\t\tWINDOW.click_('Печать');\t\n\t\t\t}\n\t\t},{\n\t\t\tid:'refresh', \n\t\t\thandler:function(){\n\t\t\t\tWINDOW.click_('Обновить');\t\n\t\t\t}\n\t\t},{\n\t\t\tid:'search', \n\t\t\thandler:function(){\n\t\t\t\tWINDOW.click_('Поиск');\t\n\t\t\t}\n\t\t}]\n\t},\n\t\n\tonEsc:function(){\n\t\t\t\tExt.Msg.confirm(\n\t\t\t\t\t'Подтверждение закрытия',\n\t\t\t\t\t'Вы нажали Esc. Мне закрыться? :-(', \n\t\t\t\t\tfunction(act){ \n\t\t\t\t\t\tif(act == 'yes') WINDOW.win.close();\t\t \n\t\t\t\t\t}\n\t\t\t\t);\t\n\t},\n\t\n\tshowWithTools:function(){\n\t\t\n\t\ttabPanel = new Ext.TabPanel({\n\t\t\tactiveTab: 0,\n\t\t\tdefaults:{\n\t\t\t\tbodyStyle:{\n\t\t\t\t\tpadding:'5px'\t\n\t\t\t\t}\t\n\t\t\t},\n\t\t\titems:[{\n\t\t\t\ttitle:'Первая вкладка',\n\t\t\t\thtml:'<h2>HTML, размещенный в панели 1</h2>'\n\t\t\t},{\n\t\t\t\ttitle:'Вторая вкладка',\n\t\t\t\thtml:'<h2>HTML, размещенный в панели 2</h2>'\t   \n\t\t\t},{\n\t\t\t\ttitle:'Третья вкладка',\n\t\t\t\thtml:'<h2>HTML, размещенный в панели 3</h2>'\t   \n\t\t\t}]\n\t\t});\n\t\t\n\t\tlisteners = this.extend(this.getParams().listeners,{\n\t\t\tshow:function(){\n\t\t\t\talert('Окно открыто');\t\n\t\t\t},\n\t\t\tresize:function(){\n\t\t\t\tvar win = WINDOW.win;\n\t\t\t\tif(win.isVisible())alert(\n\t\t\t\t\t'Размеры окна были изменены. Размеры окна: ' + \nwin.getWidth() +' на '+ win.getHeight()+' пикселов.'\n\t\t\t\t);\t\n\t\t\t},\n\t\t\tclose:function(){\n\t\t\t\tWINDOW.win = false;\n\t\t\t\talert('Окно закрыто');\t\n\t\t\t}\n\t\t});\n\t\t\n\t\tparams = this.extend(this.getParams(), {\n\t\t\t// Наши уже используемые ранее объекты \n\t\t\ttbar:this.toolbar,\n\t\t\tbbar:this.bbar,\n\t\t\tfbar:this.fbar,\n\t\t\t\n\t\t\ttools: this.tools(),\n\t\t\tonEsc:this.onEsc,\n\t\t\tlisteners: listeners,\n\t\t\titems:[tabPanel]\n\t\t})\n\t\tthis.show(params);\t\n\t}\n<script>\n<input name=\"button\" type=\"button\" onclick=\"WINDOW.showWithTools();\" value=\"Открыть окно с разными фишками\" />\n"
            }
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {'\n  '}
            <input
              name="button"
              type="button"
              value="Открыть окно с разными фишками"
              onClick={examples['WINDOW.showWithTools']}
              disabled={!ready}
            />
            {'\n'}
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {'Что мы тут имеем?'}
            <br />
            {
              '\n  1) Наша пользовательская функия tools. Возвращает массив элементов, которые мы передадим нашему окну в качестве параметра tools. Вообще интересный и богатый инструмент. Советую в документации ознакомиться детально с этим моментом. Приведу только скрин, чтобы сразу стало ясно что это такое и зачем оно надо.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/images/extjs/lesson4/tools.jpg"
            >
              {'tools.jpg — изображение пока не получено из архива'}
            </span>{' '}
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Как вы видите, это набор предустановленных популярных кнопок. Достаточно в конфигурации каждой кнопочки прописать нужный handler.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              '2) onEsc. Функция, срабатываемая при нажатии на кнопку Эскейп. Иногда очень нужная фишка. Нажмите и гляньте что происходит в нашем случае ;-) '
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {'3) tabPanel = new Ext.TabPanel({... '}
            <br />
            {
              '\nСоздаем ТабПанель с необходимым набором вкладок. Каждая вкладка представляет из себя отдельный объект Ext.Panel (вкладки перечислены в теле массива items нашей ТабПанели. По умолчанию xtype объектов ТабПанели - panel , то есть Ext.Panel). Тут важно понимать что вы создаете ТабПанель, но каждый ее элемент - Панель, полностью независимый элемент. То есть если вы хотите управлять вкладкой, вы должны обращаться не к ТабПанели, а именно к нужной вам панели. Легче всего любому необходимому вам объекту сразу задать id в качестве параметра, а обращаться к этому объекту посредством метода Ext.getCmp(elID), который возвращает ссылку на объект по его id.'
            }
            <br />
            {
              '\nОтметим так же параметр ТабПанели activeTab. Через него мы указываем какую вкладку открыть первой при рендеренге ТабПанели. Если мы пропустим этот параметр, ни одна вкладка не будет на переднем плане по умолчанию.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              '4) Плюс ко всему мы подвесили еще несколько листнеров на открытие окна, закрытие и ресайз его.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Вообще соглашусь со многими что как-то это все не предметно, но у нас тут не узкопрофильное окно под заказ. Мы тут пробуем поиграться, прощупать свойства окон, посмотреть что с ними можно выполнять в принципе. А когда вы все это освоите, вот тогда вы и будете создавать предметные окна под свои нужды.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'А в следующем уроке я хотел коснуться менеджеров окон, которые используются для управления несколькими окнами, но пока не буду этого делать, а то наверно многим становится скучно, ибо окна не самый интересный момент в Экста. А в следующем уроке я коснусь Хранилищ и Гридов (таблиц). Вот это действительно захватывающий и мощный инструмент! '
            }
          </p>
          {'\n\t  \n\t  '}
          <div className="clear"></div>
          {'\n\t  '}
          <p>{'  '}</p>
          {'\n      '}
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
          <div id="navigator">
            <Link to="/documentation/extjs/extjs_lessons/lesson3.html">
              {'<< Урок 3. Окна, часть вторая'}
            </Link>
            {' --- '}
            <Link to="/documentation/extjs/extjs_lessons/lesson5.html">
              {'Урок 5. Хранилища и таблицы >>'}
            </Link>
          </div>
          {'\n\t'}
        </div>
        {'\n\t\n                              \n'}
      </div>
      <div className="clear"></div>
    </div>
  )
}
export const ExtJsLesson4Page: React.FC = () => (
  <DocumentationLayout scripts={scripts}>
    <Content />
  </DocumentationLayout>
)

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
  'WINDOW.showToolbar': () => runDocumentationExample('WINDOW.showToolbar'),
  'WINDOW.showAllBars': () => runDocumentationExample('WINDOW.showAllBars'),
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
                        <li className="level4 active self">
                          <Link
                            to="/documentation/extjs/extjs_lessons/lesson3.html"
                            title="ExtJS. Урок 3. Окна, часть вторая. Ext.Window, Ext.Toolbar"
                          >
                            {'Урок 3. Окна, часть вторая'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
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
                {'Урок 3. Окна, часть вторая'}
              </span>
            </h1>
          </span>
        </div>
        {'\n\t'}
        <div id="content">
          <p>
            {
              'На прошлом уроке мы познакомились с окнами. Сейчас хотелось бы несколько рассмотреть некоторые свойства окон. Их на самом деле очень много и далеко не все я и сам еще изучил. Но тем не менее мы познакомимся с некоторыми из них. Итак, что же тут имеется?'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              '1) В предыдущих примерах мы уже видели что у кона могут быть перечислены различные элементы (параметр items), а так же кнопки окна (параметр buttons). Есть у окна еще несколько базовых компонентов, таких как tbar (toolBar) , bbar (bottomBar) и fbar (footerBar , то есть вообще bottomBar )) ). Со всеми этими компонентами вы конечно же можете детально ознакомиться в документации. Кстати, обратите внимание что эти параметры вовсе не являются полностью оконными сугуболичными компонентами. На самом деле это независимые компоненты Panel, просто это все сделано для удобства, чтобы было проще окна конфигурить. Вот сейчас попробуем создать окошко с этими всякими Барами. Честно сказать мне надоело уже копипастить блоки кода, потому я создам объект и буду его постепенно расширять, а вы, если еще не кодите объектами, уделите, плиз, внимание изучению данного вопроса.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Итак вот листинг нашего основного объекта (дальше он будет расширяться).'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {
              "<script type=\"text/javascript\">\n// Наш основной объект окна\nWINDOW = {\n\t// Базовые параметры, чтобы не копипастить их постоянно\n\tgetParams:function(){\n\t\treturn {\n\t\t\twidth: 500,\n\t\t\theight: 400,\n\t\t\ttitle: 'Окошечко',\n\t\t\tlayout: 'fit',\n\t\t\tbodyStyle:{\n\t\t\t\tpadding: '5px',\n\t\t\t\t'background-color': '#FFFFFF'\n\t\t\t},\n\t\t\tlisteners:{\t\t// Прослушиватели на события\n\t\t\t\tclose:function(){\t\t// На закрытие окна \n\t\t\t\t\tWINDOW.win = false;\t\n\t\t\t\t}\t\n\t\t\t},\n\t\t\tmodal: true\n\t\t}\t\n\t},\n\t\n\t// Выводим окно\n\tshow: function(params){ \n\t\tif(!this.win){ \n\t\t\tthis.win = new Ext.Window(params? params : this.getParams());\t\n\t\t}\n\t\tthis.win.show();\n\t},\n\t\n\t// Расширяем имеющиеся параметры \n\textend: function(obj, addsParams){\n\t\t// Каждый элемент добавляемого объекта прибавляем к имеющемуся \n\t\tfor(var i in addsParams){\n\t\t\tobj[i] = addsParams[i];\t\n\t\t}\n\t\treturn obj;\n\t},\n\t\n\tclick_: function(text){\n\t\talert('Нажали кнопку '+text);\n\t},\n\t\n\t// Тулбар\n\ttoolbar:{\n\t\titems:[{\n\t\t\ttext:'Добавить',\n\t\t\ticon: 'images/icons/fam/add.png',\n\t\t\thandler:function(){\n\t\t\t\tWINDOW.click_('Добавить');\t\n\t\t\t}\n\t\t},{\n\t\t\ttext:'Удалить',\n\t\t\ticon: 'images/icons/fam/delete.gif',\n\t\t\thandler:function(){\n\t\t\t\tWINDOW.click_('Удалить');\t\n\t\t\t}\n\t\t}]\n\t},\n\t\n\t// Получаем окно с туллбаром\n\tshowToolbar: function(){\n\t\tparams = this.extend(this.params, {\n\t\t\ttbar:this.toolbar\n\t\t})\n\t\tthis.show(params);\n\t}\n}\n</script>\n"
            }
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {'\n  '}
            <input
              name="button"
              type="button"
              value="Создать окно с Тулбаром"
              onClick={examples['WINDOW.showToolbar']}
              disabled={!ready}
            />
            {'\n'}
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Что мы тут имеем? Вот наш тулбар:'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {
              "toolbar:{\n\t\titems:[{\n\t\t\ttext:'Добавить',\n\t\t\ticon: 'images/icons/fam/add.png',\n\t\t\thandler:function(){\n\t\t\t\tWINDOW.click_('Добавить');\t\n\t\t\t}\n\t\t},{\n\t\t\ttext:'Удалить',\n\t\t\ticon: 'images/icons/fam/delete.gif',\n\t\t\thandler:function(){\n\t\t\t\tWINDOW.click_('Удалить');\t\n\t\t\t}\n\t\t}]\n}"
            }
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'По сути это объект Panel, в которм перечислены элементы. Элементы в данном случае по умолчанию используются Ext.Button . Со свойствами кнопок вы можете детально ознакомиться в документации. Вот этот тулбар мы и добавляем к нашему окошку.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {
              ' showToolbar: function(){\n\t\tparams = this.extend(this.params, {\n\t\t\ttbar:this.toolbar\n\t\t})\n\t\tthis.show(params);\n}'
            }
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Тут стоит детально разобрать функцию extend нашего объекта, если кому что не понятно.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {
              'extend: function(obj, addsParams){\n\t\t// Каждый элемент добавляемого объекта прибавляем к имеющемуся\n\t\tfor(var i in addsParams){\n\t\t\tobj[i] = addsParams[i];\t\n\t\t}\n\t\treturn obj;\n}'
            }
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Как говорит один мой знакомый мегакодер, "Программист должен быть в меру ленивым". Вот и мне лень под несколько примеров копипастить код, потому мне нужна функция, которая позволит легко расширить объявленные базовые параметры для окна. То есть в нашем случае я использубя функцию extend к имеющемуся объекту params, добавляю объект toolbar, то есть в итоге получаю не только все настройки окна, но и плюс ко всему тулбар, и вывожу уже окно вместе с тулбаром. Дальше я буду расширять параметры окна и другими свойствами. '
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Теперь создадим окно с остальными барами'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {
              "bbar:{\n\titems:[{\n\t\ttext: 'Кнопка 1' \n\t},\n\t{\n\t\ttext: 'Кнопка 2'\t   \n\t},{\n\t\ttext: 'Кнопка 3'\t   \n\t}]\t\n},\n\t\nfbar:{\n\titems:[{\n\t\ttext: 'Сохранить',\n\t\thandler:function(){\n\t\t\tWINDOW.click_('Сохранить');\t\n\t\t} \n\t},\n\t{\n\t\ttext: 'Закрыть',\n\t\thandler:function(){\n\t\t\tWINDOW.win.close();\t\n\t\t}\n\t}]\t\n},\n\t\nshowAllBars: function(){\n\tparams = this.extend(this.params, {\n\t\ttbar:this.toolbar,\n\t\tbbar:this.bbar,\n\t\tfbar:this.fbar\n\t})\n\tthis.show(params);\n}"
            }
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <input
              name="button"
              type="button"
              value="Создать окно со всеми барами"
              onClick={examples['WINDOW.showAllBars']}
              disabled={!ready}
            />{' '}
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Тут, думаю, все понятно. Единственный момент: наверняка те, кто внимательно изучили прошлый урок, заметили, что в нашем случае fbar ведет себя почти так же, как и атрибут buttons, с небольшими отличиями. Мне даже стало интересно и я решил поэкспериментировать. Оказывается, если одновременно указать и fbar и buttons, buttons имеет приоритет и выводятся только кнопки, а fbar игнорируется (или затирается, я уж не стал лезть глубоко). '
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
            <Link to="/documentation/extjs/extjs_lessons/lesson2.html">
              {'<< Урок 2. Окна'}
            </Link>
            {' --- '}
            <Link to="/documentation/extjs/extjs_lessons/lesson4.html">
              {'Урок 4. Окна, часть третья >>'}
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
export const ExtJsLesson3Page: React.FC = () => (
  <DocumentationLayout scripts={scripts}>
    <Content />
  </DocumentationLayout>
)

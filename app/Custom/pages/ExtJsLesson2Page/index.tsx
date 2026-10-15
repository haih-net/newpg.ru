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
  showWindow: () => runDocumentationExample('showWindow'),
  showFeedbackWin: () => runDocumentationExample('showFeedbackWin'),
}
const scripts: readonly string[] = ['/js/ExtJS/lessons/lesson2.js']
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
                        <li className="level4 active self">
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
              <span className="B_currentCrumb">{'Урок 2. Окна'}</span>
            </h1>
          </span>
        </div>
        {'\n\t'}
        <div id="content">
          <p>
            {
              'В данном разделе мы рассмотрим однин из важнейших инструментов построения веб-приложений - окна.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Когда вы делаете простой сайт, еще можно обойтись без окон. Но сложную систему без окон не построить, ИМХО. Вот именно тут себя Экст проявляет в полной мере, ибо стоит хоть немного понять принципы создания вложенных объектов в Эксте, и надолго перестаешь искать альтернативу.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Итак, простой пример.'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {
              "<script type=\"text/javascript\" >\nfunction showWindow(){\n\tif(!win){\n\t\tvar win = new Ext.Window({\n\t\t\twidth:500,\n\t\t\theight:300,\n\t\t\ttitle: 'Наше пробное окошко',\n\t\t\thtml:'<h1>Тут размещается код HTML</h2>',\n\t\t\tlayout:'fit',\n\t\t\tbodyStyle:{'background-color': '#FFFFFF'}\n\t\t})\t\n\t}\n\twin.show();\n}\n</script>\n<input type=\"button\" value=\"clickMe\" onclick=\"showWindow();\" />\n"
            }
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <input
              type="button"
              value="clickMe"
              onClick={examples['showWindow']}
              disabled={!ready}
            />
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Тут на самом деле по-моему все просто и понятно. Единственный момент: layout.Тут мы указываем используемый шаблон для отображения. Различные шаблоны и их свойства перечислены в пакете Ext.layout . В данном случае мы использовали Ext.layout.FitLayout .'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'А дальше начинается самое интересное: вложение объектов UI в объекты. В данном случае я имею ввиду объекты пользовательского интерфейса, такие как таблицы, текстовые поля и т.п. Рассмотрим простейшую форму обратной связи. '
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {
              "<script type=\"text/javascript\" >\nfunction showFeedbackWin(){\n\tvar feedWin;\n\t\n\tif(!feedWin){\n\t\t\n\t\t\n\t\t// Данную функцию будем использовать для проверки заполненности формы\n\t\tcheckForm = function(){\n\t\t\tvar emailForm = Ext.getCmp('email');\n\t\t\tvar message = Ext.getCmp('message').getValue();\n\t\t\tvar okButton = Ext.getCmp('buttonOK');\n\t\t\t\n\t\t\t// указав vtype:'email', мы можем отслеживать валидные ли данные указаны\n\t\t\t// или нет\n\t\t\tif(emailForm.isValid() == false || !emailForm.getValue() || !message){ \n\t\t\t\t// Если не валидно, блокируем кнопку ОК\n\t\t\t\tokButton.setDisabled(true) ;\t\n\t\t\t}\n\t\t\telse{ // Иначе делаем ее активной\n\t\t\t\tokButton.setDisabled(false) ;\t\n\t\t\t}\n\t\t}\n\t\t\n\t\tfeedWin = new Ext.Window({\n\t\t\twidth:500,\n\t\t\theight:300,\n\t\t\tlayout: 'fit',\n\t\t\tbodyStyle:{'background-color': '#FFFFFF'},\n\t\t\ttitle:'Обратная связь',\n\t\t\tmodal: true,\n\t\t\titems:[{\t\t// Элементы окна\n\t\t\t\txtype: 'form',\t\t// тип элемента - форма\n\t\t\t\tbodyStyle: {padding: '10px'},\n\t\t\t\titems:[{\t\t\t// Элементы формы\n\t\t\t\t\txtype:'textfield',\t\t// Текстовое поле\n\t\t\t\t\tfieldLabel:'Имя',\n\t\t\t\t\tid:'name'\n\t\t\t\t},\n\t\t\t\t{\t\n\t\t\t\t\txtype:'textfield',\t\t// Текстовое поле\n\t\t\t\t\tfieldLabel: 'Емейл',\n\t\t\t\t\tid:'email',\n\t\t\t\t\tvtype:'email',\t\t\t// Маска ввода, иначе \n\t\t\t\t\t\t\t\t\t//тип данных\n\t\t\t\t\t\n\t\t\t\t\t// Указываем что надо обрабатывать события клавишь. \n\t\t\t\t\t//По умолчанию false\n\t\t\t\t\tenableKeyEvents: true,\t\n\t\t\t\t\tlisteners:{\n\t\t\t\t\t\t// Не будет обрабатываться keyup, если не \n\t\t\t\t\t\t// указано enableKeyEvents: true\n\t\t\t\t\t\tkeyup:function(){\t\n\t\t\t\t\t\t\tcheckForm();\n\t\t\t\t\t\t}\t\n\t\t\t\t\t}\n\t\t\t\t}, \n\t\t\t\t{\n\t\t\t\t\t// Контейнер для элементов формы\n\t\t\t\t\txtype:'fieldset',\n\t\t\t\t\t\n\t\t\t\t\t// У элемента form по умолчанию layout form.\t\t\n\t\t\t\t\tlayout:'fit',\t\t\t \n\t\t\t\t\t\n\t\t\t\t\t// Такой шаблон нам не совсем подходит, потому \n\t\t\t\t\t// используем fit\n\t\t\t\t\ttitle:'Поле для сообщения',\n\t\t\t\t\t\n\t\t\t\t\t// Элементы контейнера\n\t\t\t\t\titems:[{\t\t\t\t\n\t\t\t\t\t\txtype:'textarea',\n\t\t\t\t\t\tid: 'message',\n\t\t\t\t\t\theight:110,\n\t\t\t\t\t\tenableKeyEvents: true,\n\t\t\t\t\t\tlisteners:{\n\t\t\t\t\t\t\tkeyup: checkForm\n\t\t\t\t\t\t}\n\t\t\t\t\t}]\n\t\t\t\t}]\n\t\t\t}],\n\t\t\tbuttons:[{\t\t// Кнопки окна\n\t\t\t\ttext:'Сохранить',\n\t\t\t\tdisabled: true,\n\t\t\t\tid:'buttonOK',\n\t\t\t\thandler:function(){\t\t// Функция, вызываемая при клике \n\t\t\t\t\t\t\t\t\t\t// по кнопке\n\t\t\t\t\t// Используем метод Ext.getCmp для поиска компонента \n\t\t\t\t\t//  по его ID \n\t\t\t\t\tvar name = Ext.getCmp('name').getValue();\t\n\t\t\t\t\tvar email = Ext.getCmp('email').getValue(); \n\t\t\t\t\tvar message = Ext.getCmp('message').getValue();\n\t\t\t\t\t\n\t\t\t\t\tvar msg = Ext.Msg;\n\t\t\t\t\tmsg.minWidth = 400; \n\t\t\t\t\t// Выводим сообщение\n\t\t\t\t\tmsg.alert('Сообщение обратной связи', \n\t\t\t\t\t\t'Вы указали следующие данные:'+\n\t\t\t\t\t\t'"
            }
            <br />
            {"Имя: '+ name+\n\t\t\t\t\t\t'"}
            <br />
            {"Емейл: '+email+\n\t\t\t\t\t\t'"}
            <br />
            {
              'Сообщение: \'+message ,\n\t\t\t\t\t\tfunction(){\n\t\t\t\t\t\t\t// Закрываем окно\n\t\t\t\t\t\t\tfeedWin.close();\t\n\t\t\t\t\t\t}\n\t\t\t\t\t);\n\t\t\t\t\t \n\t\t\t\t}\n\t\t\t},\n\t\t\t{\n\t\t\t\ttext: \'Отмена\',\n\t\t\t\thandler: function(){\n\t\t\t\t\tfeedWin.close();\t\n\t\t\t\t}\n\t\t\t}]\n\t\t});\n\t\t\n\t\t\n\t}\n\t\n\tfeedWin.show();\n}\n</script>\n\n<input name="button" type="button" onclick="showFeedbackWin();" value="clickMe" />\n'
            }
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Да, вот такая вот простейшая форма... Зато подробная:-)'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {'\n  '}
            <input
              name="button"
              type="button"
              value="clickMe"
              onClick={examples['showFeedbackWin']}
              disabled={!ready}
            />
            {'\n'}
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Итак, чтоже мы тут имеем?'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              '1) Все тот же объект Ext.Window. Как и во всем другом, советую внимательно изучить документацию по данному объекту. Объект очень большой и сложный.  '
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              "2) Больше всего в свойствах нашего окна feedWin нам интересно свойство items. Это массив, содержащий в себе другие объекты, сами по себе являющиеся отдельными объектами Экста. В нашем случае мы использовали краткую форму описания структуры нашего окна, используя свойство xtype. Вообще все компоненты Экста имеют xtype. Список компонентов перечислен в документации (объект Ext.Component). Чтобы было понятней, уточним что xtype: 'form' == new Ext.form.FormPanel(), xtype:'textarea' == new Ext.form.TextArea();"
            }
            <br />
            {'\nПолная форма описания нашего окна могла бы быть и такой:'}
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {
              "// Создаем текстовое поле Имя\nvar nameField = new Ext.form.TextField({\n\tfieldLabel: 'Имя',\n\tid:'name'\n});\n\n// Создаем текстовое поле Емейл\nvar emailField = new Ext.form.TextField({\n\tfieldLabel: 'Емейл',\n\tid:'email'\n});\n\nvar form = new Ext.form.FormPanel({\n\t// Перчисляем в массиве элементы формы\n\titems:[nameField, emailField]\t\t\n})\n\n// Создаем окно\nvar feedWin = new Ext.Window();\n\n// Добавляем к окну элемент form\nfeedWin.add(form);\n\n// Показываем окно\nfeedWin.show();\n\n"
            }
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'В данном примере мы сначала отдельно создали нужные нам объекты, затем передали их в качестве свойств другим объектам или просто присоединили функцией add, которая по сути просто к набору элементов items добавляет передаваемый объект. Вообще хочу отметить, что не смотря на кажущуюся сложность Экста, он только сначала труден, потому что просто не привычен. А дальше им уже играешься как хочешь. Главное прочувствовать его, научиться воспринимать все его элементы как объекты. Ведь даже текстовое поле в нем уже не просто текстовое поле, а мощный объект с кучей свойств и методов, и уже нельзя просто получить его value, как мы это делали в чистом javascript, теперь нужно использовать метод этого объекта getValue().'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Более детально окна мы изучим в следующих уроках. '}</p>
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
            <Link to="/documentation/extjs/extjs_lessons/lesson1.html">
              {'<< Урок 1. Hello, world!'}
            </Link>
            {' --- '}
            <Link to="/documentation/extjs/extjs_lessons/lesson3.html">
              {'Урок 3. Окна, часть вторая >>'}
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
export const ExtJsLesson2Page: React.FC = () => (
  <DocumentationLayout scripts={scripts}>
    <Content />
  </DocumentationLayout>
)

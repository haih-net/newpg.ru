import { useContext } from 'react'
import type * as React from 'react'
import { Link } from 'react-router'
import {
  DocumentationLayout,
  DocumentationReady,
} from '../../DocumentationLayout'
import {
  runLessonExample,
  type LessonExample,
} from '../../DocumentationLayout/runtime'

const scripts: readonly string[] = ['/js/ExtJS/lessons/lesson1.js']
const examples: Record<LessonExample, () => void> = {
  hello1: () => runLessonExample('hello1'),
  hello2: () => runLessonExample('hello2'),
  hello3: () => runLessonExample('hello3'),
  hello4: () => runLessonExample('hello4'),
  hello5: () => runLessonExample('hello5'),
}

const LessonContent: React.FC = () => {
  const ready = useContext(DocumentationReady)
  return (
    <div className="middle">
      {'\n\n\t\t\t '}
      <div className="left_block">
        {'\n\t'}
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
                        <li className="level4 active self">
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
                        href="/ExtJS/docs"
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
                        href="/ExtJS/examples"
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
        {' \n\t\n'}
      </div>
      {'\n\n'}
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
              <span className="B_currentCrumb">{'Урок 1. Hello, world!'}</span>
            </h1>
          </span>
        </div>
        {'\n\t'}
        <div id="content">
          <p>
            {
              'Всякий учебник по программированию начинается с примера Hello, World! Вот и я начну с него же.'
            }
          </p>
          {'\n'}
          <p>{'Кликните кнопку и вы увидете результат.'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <input
              onClick={examples.hello1}
              disabled={!ready}
              type="button"
              value="Hello, World!"
            />
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'А вот тут заканчивается все легкое (хотя легкого ничего вроде как и не было)) ) и начинаются сложности.'
            }
          </p>
          {'\n'}
          <p>
            {
              'ExtJS - очень мощный инструмент! И насколько он мощный, настолько же он и сложный. Разберем все по порядку:'
            }
          </p>
          {'\n'}
          <p>
            {
              'Во-первых, для работы Экста (так я иногда буду называть ExtJS), требуются соответствующие файлы, а именно:'
            }
          </p>
          {'\n'}
          <pre id="line13">
            <a
              href="/ExtJS/resources/css/ext-all.css"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'ExtJS/resources/css/ext-all.css'}
            </a>
            {'\n'}
            <a
              href="/ExtJS/adapter/ext/ext-base.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'ExtJS/adapter/ext/ext-base.js'}
            </a>
            {'\n'}
            <a
              href="/ExtJS/ext-all.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'ExtJS/ext-all.js'}
            </a>
          </pre>
          {'\n'}
          <p>
            {
              'то есть стили и скрипты. Все это добро вместе со всеми примерами и документацией вы можете скачать с официального сайта '
            }
            <a
              href="http://www.extjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'ExtJS.com'}
            </a>
            {
              ' . Вообще в нашем случае мы будем использовать более тяжелый файл '
            }
            <a
              href="/ExtJS/adapter/ext/ext-base-debug.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'ExtJS/adapter/ext/ext-base-debug.js'}
            </a>
            {
              ' , чтобы легче было отлаживать и чтобы изучая функции всякие, мы смотрели не на загадочные переменные типа a, b, c и т.п. , а нормальные width, scope и т.д. '
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Итак, при клике на кнопочку, мы вызывает функцию hello1. Вот код функции:'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint lang-js">
            {"     Ext.Msg.alert('Наше пробное сообщение','Hello, World!' );"}
            <br />
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Что мы имеем?'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              '1) Сам объект Ext - Объект, хранящий все методы, свойства и т.п. нашей библиотеки (плин, по делетански так звучит!)) но пусть не будут ко мне строги профы. В первую очередь данный материал для начинающих прогеров, и я стараюсь выражаться как можно понятней. Ведь смысл часто не в том, как что-то называешь, а как ты это понимаешь).'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              '2) Объект Msg, который является дочерним объекта Ext. На самом деле это очень большой объект, хранящий много всяких свойств, собственно говоря как и большинство других объектов Экста'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'3) alert - метод объекта Msg'}</p>
          {'\n'}
          <p>
            {
              'То есть мы вызываем метод (функцию) alert объекта Msg, который в свою очередь является частью объекта Ext.'
            }
          </p>
          {'\n'}
          <p>
            {
              'По большому счету, если не считать моей писанины, тут ничего сложного нет. Но это на первый взгляд. На самом деле нужно сначала посмотреть на то, что мы получили. А получили мы не самое красивое сообщение. '
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <img
              title="Сообщение Hello, World!"
              src="/images/extjs/lesson1/hello1.jpg"
              alt=""
            />
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'То есть какие минусы? Окошко сообщения слишком узкое, заголовок сообщния разбито на несколько строк.'
            }
          </p>
          {'\n'}
          <p>
            {
              'Чтобы это исправить, нам нужно внимательно изучить объект Msg, а для этого мы '
            }
            <a href="/ExtJS/docs" target="_blank" rel="noopener noreferrer">
              {'обратимся к документации'}
            </a>
            {'. '}
          </p>
          {'\n'}
          <p>{'В первую очередь нужно разобраться с навигатором.'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <img
              title="Панель навигации"
              src="/images/extjs/lesson1/docmenu.jpg"
              alt=""
            />{' '}
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Документация имеет несколько плюсов и минусов.'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Плюсы:'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'1) Богатая'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'2) Структурированая'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Минусы:'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              '1) Структурирована несколько запутано   , ИМХО. Хотя наверняка будут и другие мнения'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'2) Очень мало примеров, тем более с подробными комментами'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Итак, к делу. В первую очередь уже в корне мы видим два объекта Ext. Почему так? Вот тот что с плюсиком, это сам объект со всеми вложенными в него объектами, структура его. То есть разложив дерево, мы увидим все входящие в него объекты с их методами, свойствами  и т.п. '
            }
            <br />
            {
              '\nА тот что ниже, содержит описание методов и свойств главного объекта, то есть Ext не только содержит в себе различные объекты, типа Msg, но и сам по себе содержит различные функции и т.п., что само по себе разумеющееся, но важно для понимание структуры как самого объекта, так и документации.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Так где же нам найти принадлежащий Эксту объект Msg? А вот это сделать сложно, ибо на самом деле Msg - сокращенное название объекта Ext.MessageBox . Конечно вроде и не сложно догадаться и можно наткнувшись на него в списке, понять что это именно он, но если искать буквально, то можно уже на этом этапе здорово раздосадоваться и забить на доку. Другого такого примера я не помню, так что уже легче :-)'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Итак, Объект MessageBox объекта Ext.'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/images/extjs/lesson1/msg.jpg"
            >
              Объект Msg — изображение пока не получено из архива
            </span>
            {'  '}
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'В перечне публичных свойств объекта MessageBox мы и видим что одно из них и указано как сокращеное наименование объекта.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'На самом деле очень хочется надеяться что у вас имеется хорошее представление об ООП, ибо будет очень сложно с пониманием всех этих вложений объектов в объекты, а их уже в другие обэекты, и функций ихних, которые будут возвращать сами же себя и свои родительские объекты и свойства и т.п. Жуть в общем! Короче, буду дальше излагать как есть, и да не судите строго.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'В общем, Изучая свойства и методы объекта Msg, мы находим тот метод, который мы вызывали в нашем примере, а именно alert.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/images/extjs/lesson1/alert.jpg"
            >
              метод alert объекта Msg — изображение пока не получено из архива
            </span>{' '}
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Рассмотрим его внимательней'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint lang-js">
            {
              '\nalert( String title, String msg, [Function fn], [Object scope] ) : Ext.MessageBox;\n'
            }
          </pre>
          {'\n'}
          <p>{'Что мы тут имеем?:'}</p>
          {'\n'}
          <p>
            {
              '1) 2 обязательных параметра: title (Заголовок сообщения) , msg (собственно говоря само сообщение)'
            }
          </p>
          {'\n'}
          <p>
            {
              '2) Необязательный параметр fn (пользовательская функция). Очень полезная штука! Тут в качестве параметра мы можем указать функцию, которая будет вызвана после закрытия сообщения, то есть при клике по кнопочке Ok сообщения. Синтаксис может быть двух видов:'
            }
          </p>
          {'\n'}
          <p>
            {
              'а) название вызываемой функции. То есть если у вас объявлена ранее функция, к примеру callback() , то вы можете просто указать название функции, и она будет вызвана после закрытия сообщения. Вот пример:'
            }
          </p>
          {'\n\n'}
          <pre className="prettyprint lang-html">
            {
              '<script type="text/javascript">\n\tcallback = function(){\n\t\talert(\'Была вызвана функция callback\');\n\t}\n\t\t\n\tfunction hello2(){\n\t\t Ext.Msg.alert(\'Наше пробное сообщение\',\'Hello, World!\', callback );\t\n\t}\n</script>\n<input type="button" onclick="hello2();" value="Hello, World!" /> \n'
            }
          </pre>
          {'\n\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <input
              onClick={examples.hello2}
              disabled={!ready}
              type="button"
              value="Hello, World!"
            />
          </p>
          {'\n'}
          <p>
            {
              'Обратите внимание, что название функции, передаваемой в качестве параметра, вы должны указывать не в ковычках, потому что вы передаете именно объект, то есть саму функцию, а не строковый параемтр, и сказать "название функции" на самом деле было вообще не корректно в данном случае.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'б) Scope. Очень полезный параметр. Тут в качестве параметра передается ссылка на целевой объект, который внутри функции будет виден в качестве this. Это может быть любой объект, в том числе и сам Ext.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint ">
            {
              '<script type="text/javascript">\ncallback2 = function(){\n\talert(this.MessageBox.alert);\n}\n\t\nfunction hello3(){\n\t Ext.Msg.alert(\'Наше пробное сообщение\',\'Hello, World!\', callback2, Ext );\t\n}\n</script>\n<input type="button" onclick="hello3();" value="Hello, World!" /> \n'
            }
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <input
              onClick={examples.hello3}
              disabled={!ready}
              type="button"
              value="Hello, World!"
            />{' '}
          </p>
          {'\n'}
          <p>
            {
              'А вот тут нужно разобрать очень важный момент: на самом деле мы пошли на маленькую хитрость и в качестве параметра для базовой функции alert указали элемент this.MessageBox.alert, а так как scope у нас - Ext, соответсвенно мы и передали Ext.MessageBox.alert , то есть по сути мы вывели в сообщение функцию alert нашего объекта. И мы можем рассмотреть чтоже из себя представляет данная функция.'
            }
          </p>
          {'\n'}
          <p>{'Вот листинг данной функции:'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint lang-js">
            {
              'function (title, msg, fn, scope) {\n    this.show({title: title, msg: msg, buttons: this.OK, fn: fn, scope: scope});\n    return this;\n}'
            }
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'То если если внимательно ее изучить, можно заметить что возвращает она результат выполнения своей же функции show, то есть Ext.Msg.show . Вообще конечно было бы проще просто в документации кликнуть на ссылку alert и открылся бы нужный участок кода, но не всегда же есть документация, а уметь отладить код и понять где что из себя представляет, всегда важно. В общем это на заметку.'
            }
          </p>
          {'\n'}
          <p>
            {
              'Но тем не менее это все нам нужно и по другой причине. Вернемся все к той же проблеме: окошко сообщения "Hello, World!" у нас узкое, и нам нужно это дело поправить. Вот сейчас мы этим и займемся. Итак, изучив метод alert, мы теперь знаем что на самом деле мы через данный метод вызываем метод show все того же объекта Ext.Msg (Ext.MessageBox), а значит нам нужно изучить свойства данного метода. Кликнув по треугольничку перед названием метода, мы раскроем всю доку по данному методу, в котором очень подробно перечислены все возможные входящие параметры, которые можно указать при вызове данного метода. Итак, что же нам нужно чтобы решить нашу проблему? А достаточно на самом деле использовать не метод alert, а метод show, и передать в него нужные параметры, которые позволят сделать окошко таким, как нам надо. Учтите что в качестве параметра передается объект, а не куча параметров через запятую, как это происходит в случае с использованием метода alert. '
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint lang-html">
            {
              '<script type="text/javascript">\nfunction hello4(){\n\tExt.Msg.show({\n\t\ttitle: \'Наше пробное сообщение\',\n\t\tmsg: \'Hello, World!\', \n\t\twidth: 300,\n\t\tbuttons: Ext.Msg.OK\n\t});\t\n}\n</script>\n<input type="button" onclick="hello4();" value="Hello, World!" />\n'
            }
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <input
              onClick={examples.hello4}
              disabled={!ready}
              type="button"
              value="Hello, World!"
            />
          </p>
          {'\n'}
          <p>
            {
              'Вот теперь у нас сообщение по ширине составляет 300 пикселей, ибо столько мы указали и окошко выглядит гораздо симпатичней. Однако в данном случае нам пришлось указать еще один параметр, который мы не указывали при использовании метода alert, это buttons: Ext.Msg.OK'
            }
          </p>
          {'\n'}
          <p>
            {
              'Что же это такое? На самом деле догадаться не сложно, это кнопка, то чнее это может быть и несколько кнопок, если мы укажем другой тип, к примеру Ext.Msg.YESNOCANCEL , в результате чего у нас будет 3 кнопки (Yes, No и Cancel соответственно). Еще тут можно кучу всяких параметров указать, такие как значек (внимание, вопрос и т.п. , fn , scope и прочие). Вообще только объект Msg можно изучать пару дней, не говоря уже о всяких там Гридах и т.п. Но изучив как следует, вы получите очень мощный инструментарий для своих веб-разработок. '
            }
          </p>
          {'\n'}
          <p>
            {
              'Вот продемонстрирую еще один пример. Его не сложно понять, внимательно изучив документацию. Очень настоятельно рекомендую это зделать, ибо если вы поймете каждый символ этого листинга, можно утверждать с огромной долей вероятности что освоение Экста у вас пойдет довольно сносно. Итак. '
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint lang-js">
            {
              '<script type="text/javascript">\nfunction hello5(){\n\tvar msg = Ext.MessageBox;\n\tmsg.minWidth = 300;\t\t\n\t\t// обратите внимание что именно minWidth, а не width. \n\t\t// Почему - предстоит вам понять, изучив внимательно доку \n\tmsg.alert(\'Наше пробное сообщение\',\'Hello, World!\' );\t\n}\n</script>\n<input type="button" onclick="hello5();" value="Hello, World!" />\n'
            }
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {'\n  '}
            <input
              onClick={examples.hello5}
              disabled={!ready}
              name="button"
              type="button"
              value="Hello, World!"
            />
            {'\n'}
          </p>
          {'\n'}
          <p>
            {
              'Вот такой на самом деле не простой получился первый урок. Те, кто дочитал до последних строк, достойны уважения за великое терпение как минимум ;-)'
            }
            <br />
            {
              '\nА чтобы мне легче было понимать значимость моих скромных трудов, '
            }
            <input
              disabled
              title="Архивная форма отправки сообщений пока не восстановлена"
              type="button"
              value="шлите мне свои пожелания, заметки и т.п. "
            />
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
              {'Урок 2. Окна >>'}
            </Link>
          </div>
          {'\n\t'}
        </div>
        {'\n\t\n                              \n'}
      </div>
      {'\n\n'}
      <div className="clear"></div>
      {'\n\n\t\t'}
    </div>
  )
}

export const ExtJsLesson1Page: React.FC = () => (
  <DocumentationLayout scripts={scripts}>
    <LessonContent />
  </DocumentationLayout>
)

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
  'Grid.showGrid': () => runDocumentationExample('Grid.showGrid'),
}
const scripts: readonly string[] = ['/js/ExtJS/lessons/lesson5.js']
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
                        <li className="level4">
                          <Link
                            to="/documentation/extjs/extjs_lessons/lesson4.html"
                            title="ExtJS. Урок 4. Окна, часть третья, Ext.Window properties"
                          >
                            {'Урок 4. Окна, часть третья'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4 active self">
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
                {'Урок 5. Хранилища и таблицы'}
              </span>
            </h1>
          </span>
        </div>
        {'\n\t'}
        <div id="content">
          <p>
            {
              'Итак перейдем наверно к самому интересному инструментарию в Эксте (после драг`н`дропов ИМХО). Сразу определимся с терминами, которые я тут буду использовать (терминология расшифрована мной по моему разумению, потому не претендует на звание официальной документации):'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              '1) Хранилище (Store). Объект Ext.data.Store. Хранит в себе структурированные данные. Некоторые разновидности: Ext.data.JsonStore , Ext.data.ArrayStore . По сути это производные от своего старшего брата, просто с соответствующими Ридерами в комплекте.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              '2) Grid. Объект Ext.grid.GridPanel. Таблица для отображения данных из Хранилища. Grid плотно связан с объектом Store и без него существовать не может. Grid отображает данные из Store и чтобы в нем что-то изменилось, надо на самом деле изменять данные в Store. Это может и несколько запутано, но на самом деле очень продуманно и правильно! Такого я больше нигде не видел. Дальше в примерах я постараюсь раскрыть ключевые моменты и съакцентировать на них внимание.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              '3) Запись (Record). Объект Ext.data.Record . Все данные в Store - табличные, хранятся построчно (Это если образно выражаться). То есть чтобы изменить какой-то элемент, нужно обратиться к соответствующей записи (Record), а в ней уже к соответственной колонке (к соответственному элементу ). '
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              '4) Reader. Объект Ext.data.ArrayReader || Ext.data.JsonReader || Ext.data.DataReader . Используется для чтения данных в Store. Необходимо указывать в случае использование "чистого" Хранилища (Ext.data.Store) и зависит от типа входных данных (массив, Объект или уже подготовленные данные через Ext.data.Record.create()). В случае использование специфичных хранилищ (Ext.data.ArrayStore, Ext.data.JsonStore или Ext.data.DirectStore), соответствующие Reader будут инициализированы автоматически.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              '5) ColumnModel. Объект Ext.grid.ColumnModel. Обязательный для Grid. Описывает структуру колонок Grid. Как уже ранее говорилось, все данные в Store хранятся в виде записей (Records). Так вот эта модель Колонок связана со структурой этих Рекордов, точнее с элементами этих Рекордов. В данной модели прописываются отношения колонок к этим элементам. Вся красота заключается в том, что вы, используя единое хранилище, можете использовать в качестве источника данных для нескольких клиентов, все они будут работать синхронно и правильно. Колонок может быть меньше чем элементов в Рекорде, то есть если мы не хотим чтобы через UI можно было работать с определенными элементами Рекорда, значит не прописываем эти элементы в ColumnModel. Мы можем указать такие свойства, как видимость по умолчанию или нет (то есть при инициализации колонка будет скрыта, и чтобы ее увидеть, нужно будет через меню управления колонками сделать ее видимой), можем указать тип данных, указать можно ли сортировать данные в Grid по данной колонке или нет, навешать колонке функцию-рендерер для обработки вводимых в нее данных на лету (к примеру если мы хотим чтобы вводимые числа с запятой округлялись до целого или более сложные операции, такие как взаимодействие с другими объектами в зависимости от вводимых данных). В общем это действительно очень мощный инструмент и мы постараемся как можно больше моментов разобрать в следующем примере.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'На самом деле это не все участники этой сложной системы (не говоря уже про Прокси Ext.data.HttpProxy, позволяющий сконфигурить взаимодействие с сервером в автоматическом режиме до 4-ех событий (Получение первичных данных, сохранение, обновление, удаление)). Но этого материала достаточно для понимания на достаточном уровне. Вообще по-моему Grid - одна из сложнейших областей ExtJS в плане понимания. Сам я потратил двое суток прежде чем начал боле менее свободно ориентироваться в этой области. Слишком уж тут много завязанного друг на друге, а как я не искал, в инете не нашел реально подробного и понятного примера. Надеюсь у меня тут получилось заполнить этот пробел и вам будет легко освоить этот раздел. '
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {
              "Grid  = {\n\t// Базовые параметры нашего окна\n\tgetWinParams: function(){\n\t\treturn {\n\t\t\twidth: 550,\n\t\t\theight: 300,\n\t\t\ttitle: 'Хранилища и таблицы',\n\t\t\tbuttons:[{\n\t\t\t\ttext: 'ОК',\n\t\t\t\thandler:function(){\n\t\t\t\t\tGrid.win.close();\t\n\t\t\t\t}\n\t\t\t}],\n\t\t\tlisteners: {\n\t\t\t\tclose: function(){\n\t\t\t\t\tGrid.win = false;\t\n\t\t\t\t}\t\n\t\t\t},\n\t\t\tlayout: 'fit',\n\t\t\tbodyStyle: {\n\t\t\t\t'background-color': '#FFFFFF'\t\n\t\t\t}\n\t\t}\t\n\t},\n\t\n\t// Функция инициализации окна\n\tgetWindow: function(params){\n\t\t!params ? params = this.getWinParams() : \"\";\n\t\tif(!this.win){\n\t\t\tthis.win = new Ext.Window(params);\n\t\t}\n\t\treturn this.win;\n\t},\n\t\n\t// Ридер данных из объекта\n\tgetJsonReader: function(){\n\t\tthis.JsonReader = new Ext.data.JsonReader({\n\t\t\troot: 'data',\t\t// Элемент объекта, содержащий данные\n\t\t\tidProperty: 'id',\t// Коланка, содержащая Уникальные данные ID\n\t\t\tfields: [\t\t\t// Описание колонок, выводимых в Grid\n\t\t\t\t{name:'id', type: 'int', allowBlank: false},\t \n\t\t\t\t{name: 'firstName', allowBlank: false}, \n\t\t\t\t{name: 'middleName'}, \n\t\t\t\t{name: 'lastName', allowBlank: false},\n\t\t\t\t{name: 'age', type: 'int'},\n\t\t\t\t{name: 'weight', type: 'float'}\n\t\t\t]\n\n\t\t});\n\t\treturn this.JsonReader;\n\t},\n\t\n\t// Данные для Хранилища\n\tgetInputData:function(){\n\t\treturn { \n\t\t\t\tdata:[{\n\t\t\t\t\tid: 0,\n\t\t\t\t\tfirstName: 'Михаил',\n\t\t\t\t\tlastName: 'Попов',\n\t\t\t\t\tmiddleName: 'Алефтинович',\n\t\t\t\t\tage: 43,\n\t\t\t\t\tweight: 65.23\n\t\t\t\t},{\n\t\t\t\t\tid: 1,\n\t\t\t\t\tfirstName: 'Алексей',\n\t\t\t\t\tlastName: 'Пупкин',\n\t\t\t\t\tage: 25, \n\t\t\t\t\tmiddleName: 'Петрович' \n\t\t\t\t},{\n\t\t\t\t\tid: 2,\n\t\t\t\t\tfirstName: 'Анна',\n\t\t\t\t\tmiddleName: 'Олеговна',\n\t\t\t\t\tlastName: 'Иванова',\n\t\t\t\t\tage: 31,\n\t\t\t\t\tweight: 55.14\n\t\t\t\t},{\n\t\t\t\t\tid: 3,\n\t\t\t\t\tfirstName: 'Николай',\n\t\t\t\t\tlastName: 'Соснов',\n\t\t\t\t\tage: 27, \n\t\t\t\t\tmiddleName: 'Владимирович',\n\t\t\t\t\tweight: 78.32\n\t\t\t\t},{\n\t\t\t\t\tid: 4,\n\t\t\t\t\tfirstName: 'Елена',\n\t\t\t\t\tmiddleName: 'Георгиевна',\n\t\t\t\t\tlastName: 'Седова',\n\t\t\t\t\tage: 26,\n\t\t\t\t\tweight: 57.00 \n\t\t\t\t}]\t\n\t\t\t}\n\t},\n\t\n\t// Получаем хранилище данных\n\tgetStore: function(){\n\t\treader = this.getJsonReader();\n\t\tthis.store = new Ext.data.Store({\n\t\t\tid: 'store',\n\t\t\treader: reader,\n\t\t\t// Получаем входные данные для работы\n\t\t\tdata: this.getInputData()\n\t\t});\n\t\treturn this.store;\n\t},\n\t\n\t// Получаем Таблицу для отображения данных\n\tgetGrid: function(){\n\t\tstore = this.getStore();\n\t\tthis.grid = new Ext.grid.GridPanel({\n\t\t\tstore: store,\t\t// хранилище. Важно! Required!\n\t\t\tcm: new Ext.grid.ColumnModel({\t// Модель колонок\n\t\t\t\tcolumns: [\t\t// Колонки\n\t\t\t\t\t{header: 'Фамилия', dataIndex: 'lastName' },\n\t\t\t\t\t{header: 'Имя', dataIndex: 'firstName', sortable: false },\n\t\t\t\t\t{header: 'Отчество', dataIndex: 'middleName', hidden: true },\n\t\t\t\t\t{header: 'Возраст', dataIndex: 'age' },\n\t\t\t\t\t{header: 'Вес', dataIndex: 'weight' }\t\t\t\t\t\t  \n\t\t\t\t],\n\t\t\t\t// Флаг что по умолчанию колонки Sortable. по умолчанию false\n\t\t\t\tdefaultSortable: true\t\n\t\t\t})\n\t\t})\n\t\treturn this.grid;\n\t},\n\t\n\tshowGrid: function(){\n\t\tif(this.win) return false;\n\t\t\n\t\t// Инициализируем окно\n\t\tthis.getWindow();\n\t\t\n\t\t// Инициализируем Грид\n\t\tthis.getGrid();\n\t\t\n\t\t// Добавляем Грид к Окну\n\t\tthis.win.add(this.grid);\n\t\t\n\t\t// Выводим окно\n\t\tthis.win.show();\n\t}\n}"
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
              value="Показать Grid"
              onClick={examples['Grid.showGrid']}
              disabled={!ready}
            />
            {'\n'}
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Итак разберем все по порядку и подробно.'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'В первую очередь для существования Grid необходим Store, то есть Хранилище. Вообще можно конечно использовать и чистый Стор (как мы сделали и в нашем примере), но лучше изначально определиться с типом входящих данных и выбрать соответствующий Стор изначально, к примеру Ext.data.JsonStore. Во-первых, будет проще сконфигурить, ибо соответствующий Ридер будет автоматически использован и конечный код окажется компактней и менее запутанный. Во-вторых, проще работать с таким кодом, ибо только глянув на используемые объекты сразу становится понятно с каким типом данных мы будем работать (Объект или Массив) и легче будет разобраться с кодом и спланировать изначально план работы. Повторюсь что в нашем примере мы использоватли чистый Store.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {'// Получаем хранилище данных'}
            <br />
            {'  getStore: function(){'}
            <br />
            {'      reader = this.getJsonReader();'}
            <br />
            {'      this.store = new Ext.data.Store({'}
            <br />
            {"          id: 'store',"}
            <br />
            {'          reader: reader,'}
            <br />
            {'          // Получаем входные данные для работы'}
            <br />
            {'          data: this.getInputData()'}
            <br />
            {'      });'}
            <br />
            {'      return this.store;'}
            <br />
            {'  }'}
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Рассмотрим внимательно данную функцию. В ней мы инициализируем Хранилище'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {'this.store = new Ext.data.Store()'}
          </pre>
          {'\n'}
          <p>
            <br />
            {
              '\nНо для Хранилища как минимум требуется Reader, если это чистый Store (если производный, соответствующий Reader будет автоматически создан, о чем я уже говорил ранее), и данные. Данные мы можем передать сразу в переменную data в подходящем виде (как мы это сделали в нашем случае), либо загрузить через метод loadData(data) объекта Store опять таки в подходящем виде, либо через его же метод load(), если у нас опрделен для Store url, либо сконфигурин для него же proxy. В нашем случае мы получаем Reader через функцию reader = this.getJsonReader(); Изучим и эту функцию.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {'// Ридер данных из объекта'}
            <br />
            {'  getJsonReader: function(){'}
            <br />
            {'      this.JsonReader = new Ext.data.JsonReader({'}
            <br />
            {
              "          root: 'data',        // Элемент объекта, содержащий данные"
            }
            <br />
            {
              "          idProperty: 'id',    // Коланка, содержащая Уникальные данные ID"
            }
            <br />
            {
              '          fields: [            // Описание колонок, выводимых в Grid'
            }
            <br />
            {"              {name:'id', type: 'int', allowBlank: false},     "}
            <br />
            {"              {name: 'firstName', allowBlank: false}, "}
            <br />
            {"              {name: 'middleName'}, "}
            <br />
            {"              {name: 'lastName', allowBlank: false},"}
            <br />
            {"              {name: 'age', type: 'int'},"}
            <br />
            {"              {name: 'weight', type: 'float'}"}
            <br />
            {'          ]'}
            <br />
            {'      });'}
            <br />
            {'      return this.JsonReader;'}
            <br />
            {'  }'}
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Рассмотрим каждый параметр конфига объекта Reader.'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              "1) root: 'data'. В данном случае мы указываем какой из элементов объекта входящих данных будет использоваться в качестве источника данных. В нашем случае в объекте есть такое элемент 'data', вот его и будет читать Reader. Если весь входящий объект - источник данных, этот параметр следует опустить."
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              "2) idProperty: 'id'. Так же не обязательный параметр. Указывает какая колонка в данных будет считаться индексом. Совпадения не допустимы, то есть если у нас во входящих данных уже была какая-то запись с id: 5, то если будет еще строка с id: 5 , такая строка будет проигнорирована и не будет добавлена в Store, и в Grid соответственно."
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              '3) fields. Описание колонок, которые следует сформировать при чтении входящих данных. То есть не обязательно использовать все входящие данные, если нам нужна только часть их. Тут мы для каждой колонки можем определить тип данных, заголовок, можно/нельзя оставлять пустым и другие свойства. В нашем случае мы определили для всех полей имена, для некоторых определили тип данных (type: int, float), можно/нельзя оставить пустыми (allowBlank). Обратите внимание что это модель описывается именно для Store, и в этом виде данные будут храниться в нем, а не в Grid. Для Грида нужно будет прописать ColumnModel, которая будет использовать эти поля. '
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'В общем Reader для Store у нас создан и передан объекту Store в качестве параметра reader. '
            }
            <br />
            {
              '\n  Параметр id мы припустим, тут комментарии излишни. Параметр не обязательный.'
            }
            <br />
            {
              '\n  data: this.getInputData() Собственно наши данные для Store. Структура - Json. Прелесть использования данной модели в том, что нам во-первых не нужно следить за последовательностью необходимых нам элементов в объекте данных, а во-вторых у нас вообще могут быть не все входящие элементы, Reader прочтет то, что есть. Вот рассмотрим структуру Данных.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {'   getInputData:function(){'}
            <br />
            {'      return { '}
            <br />
            {'          data:[{'}
            <br />
            {'              id: 0,'}
            <br />
            {"              firstName: 'Михаил',"}
            <br />
            {"              lastName: 'Попов',"}
            <br />
            {"              middleName: 'Алефтинович',"}
            <br />
            {'              age: 43,'}
            <br />
            {'              weight: 65.23'}
            <br />
            {'          },{'}
            <br />
            {'              id: 1,'}
            <br />
            {"              firstName: 'Алексей',"}
            <br />
            {"              lastName: 'Пупкин',"}
            <br />
            {'              age: 25, '}
            <br />
            {"              middleName: 'Петрович' "}
            <br />
            {'          },{'}
            <br />
            {'              id: 2,'}
            <br />
            {"              firstName: 'Анна',"}
            <br />
            {"              middleName: 'Олеговна',"}
            <br />
            {"              lastName: 'Иванова',"}
            <br />
            {'              age: 31,'}
            <br />
            {'              weight: 55.14'}
            <br />
            {'          },{'}
            <br />
            {'              id: 3,'}
            <br />
            {"              firstName: 'Николай',"}
            <br />
            {"              lastName: 'Соснов',"}
            <br />
            {'              age: 27, '}
            <br />
            {"              middleName: 'Владимирович',"}
            <br />
            {'              weight: 78.32'}
            <br />
            {'          },{'}
            <br />
            {'              id: 4,'}
            <br />
            {"              firstName: 'Елена',"}
            <br />
            {"              middleName: 'Георгиевна',"}
            <br />
            {"              lastName: 'Седова',"}
            <br />
            {'              age: 26,'}
            <br />
            {'              weight: 57.00 '}
            <br />
            {'          }]    '}
            <br />
            {'      }'}
            <br />
            {'  }'}
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Как вы видите, последовательность элементов типа firstName, lastName и других не всегда совпадает, а в некоторых случиях и вовсе отсутствуют. '
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'В общем Store у нас есть. И данные в нем уже. Теперь Store можно использовать для Grid. Инициализируем Grid.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {
              "getGrid: function(){\n\tstore = this.getStore();\n\tthis.grid = new Ext.grid.GridPanel({\n\t\tstore: store,\t\t// хранилище. Важно! Required!\n\t\tcm: new Ext.grid.ColumnModel({\t// Модель колонок\n\t\t\tcolumns: [\t\t// Колонки\n\t\t\t\t{header: 'Фамилия', dataIndex: 'lastName' },\n\t\t\t\t{header: 'Имя', dataIndex: 'firstName', sortable: false },\n\t\t\t\t{header: 'Отчество', dataIndex: 'middleName', hidden: true },\n\t\t\t\t{header: 'Возраст', dataIndex: 'age' },\n\t\t\t\t{header: 'Вес', dataIndex: 'weight' }\t\t\t\t\t\t  \n\t\t\t],\n\t\t\t// Флаг что по умолчанию колонки Sortable. по умолчанию false\n\t\t\tdefaultSortable: true\t\n\t\t})\n\t})\n\treturn this.grid;\n}"
            }
          </pre>
          {'\n'}
          <p>
            <br />
            {
              '\nЧто мы тут имеем? В качестве обязательного параметра передаем Гриду Store (store: store). Таким образом мы установили связь Грида со Стором и все изменения в Хранилище будут отражаться на Гриде.'
            }
            <br />
            {
              '\ncm: new Ext.grid.ColumnModel . cm (сокращенное название параметра Грида colModel). Обязательный параметр. Ну не может таблица существовать без колонок! Описывается структура колонок таблицы. Я выше уже описывал подробно эту модель в пункте 5 нашего словоря. Обязательно прочтите еще раз. '
            }
            <br />
            {
              '\ndefaultSortable: true Указывает на то, что по умолчанию все колонки sortable: true . ( По умолчанию false ) '
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Остается только собрать это все в кучу'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {
              'showGrid: function(){\n\tif(this.win) return false;\n\t\n\t// Инициализируем окно\n\tthis.getWindow();\n\t\n\t// Инициализируем Грид\n\tthis.getGrid();\n\t\n\t// Добавляем Грид к Окну\n\tthis.win.add(this.grid);\n\t\n\t// Выводим окно\n\tthis.win.show();\n}'
            }
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Вот и все! Мы имеем Хранилище с данными и интерфейс для отображения их (Grid). Но на самом деле это еще не все. Давайте посмотрим внимательно что же именно мы получили? А получили мы следующее:'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              '1) Хранилище для данных, которые могут использоваться как единый актуальный обменник данными с разграничением видимости и прочими полезными хитростями. Особенно вдохнавляют упомянутые уже выше Proxy, а главное методы commitChanges() и rejectChanges() (аналог commit и rollback в СУБД). Согласитесь это уже достойно уважения и внимания!'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              '2) Мощный инструмент для UI - Ext.data.Grid. На самом деле мощный! Внимательно его прокликайте и перекликайте. Вы найдете много полезных фишек в нем, типа Ресортинг данных в таблице, скрытие/показ отдельных колонок и т.п. А еще мы создали пока что базовый Grid, который выглядит как инструмент для просмотра данных в Storee. На самом деле если расширить функционал нашего Грида, получится мощный инструмент для UI, с помощью которого очень удобно работать с данными, редактировать их, добавлять новые, удалять не нужные, работать сразу с группой строк и т.п., а еще навешать контекстное меню, рендеры для отдельных колонок, указать типы данных и вообще сказка получается! Обязательно посмотрите примеры с Гридами в '
            }
            <a
              title="Примеры ExtJS"
              href="/ExtJS/examples/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'Примерах'}
            </a>
            {', там есть что глянуть :-)'}
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
            <Link to="/documentation/extjs/extjs_lessons/lesson4.html">
              {'<< Урок 4. Окна, часть третья'}
            </Link>
            {' --- '}
            <Link to="/documentation/extjs/extjs_lessons/lesson6.html">
              {'Урок 6. Шаблоны элементов >>'}
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
export const ExtJsLesson5Page: React.FC = () => (
  <DocumentationLayout scripts={scripts}>
    <Content />
  </DocumentationLayout>
)

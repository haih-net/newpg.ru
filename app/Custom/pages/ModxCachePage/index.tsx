import type * as React from 'react'
import { Link } from 'react-router'
import { DocumentationLayout } from '../../DocumentationLayout'

const scripts: readonly string[] = []
const Content: React.FC = () => {
  return (
    <div className="middle">
      <div className="left_block">
        <div className="menu">
          {'\n\t\t'}
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
              <Link to="/nashi-proekty.html" title="Наши проекты">
                {'Наши проекты'}
              </Link>
            </li>
            {'\n'}
            <li className="level1">
              <Link to="/news.html" title="Новости">
                {'Новости'}
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
            <li className="level1">
              <Link to="/contacts.html" title="Контактная информация">
                {'Контактная информация'}
              </Link>
            </li>
            {'\n'}
            <li className="last level1 active">
              <Link to="/documentation.html" title="Документация">
                {'Документация'}
              </Link>
              <ul>
                <li className="level2">
                  <Link to="/documentation/extjs.html" title="ExtJS">
                    {'ExtJS'}
                  </Link>
                </li>
                {'\n'}
                <li className="last level2 active">
                  <Link to="/documentation/modx.html" title="CMS/CMF MODX">
                    {'CMS/CMF MODX'}
                  </Link>
                  <ul>
                    <li className="level3 active">
                      <Link
                        to="/documentation/modx/modx-revolution.html"
                        title="MODx Revolution"
                      >
                        {'MODx Revolution'}
                      </Link>
                      <ul>
                        <li className="level4">
                          <Link
                            to="/documentation/modx/modx-revolution/modx-revolution-po-shagam.html"
                            title="MODx Revolution по шагам"
                          >
                            {'MODx Revolution по шагам'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/modx/modx-revolution/modx-revolution-ustanovka.html"
                            title="MODx Revolution Установка "
                          >
                            {'MODx Revolution Установка '}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/modx/modx-revolution/modx-revolution-fajlovaya-model.html"
                            title="MODx Revolution файловая модель"
                          >
                            {'MODx Revolution файловая модель'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/modx/modx-revolution/ustanovka-dopolnitelnyh-paketov-na-modx-revolution.html"
                            title="Установка дополнительных пакетов на MODx Revolution"
                          >
                            {
                              'Установка дополнительных пакетов на MODx Revolution'
                            }
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4 active self">
                          <Link
                            to="/documentation/modx/modx-revolution/modx-revolution-optimizatsiya-kesh.html"
                            title="MODx Revolution Оптимизация КЭШ"
                          >
                            {'MODx Revolution Оптимизация КЭШ'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/modx/modx-revolution/modx-revolution-nastrojki-bezopasnosti.html"
                            title="MODx Revolution настройки безопасности"
                          >
                            {'MODx Revolution настройки безопасности'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/modx/modx-revolution/xpdo.html"
                            title="xPDO"
                          >
                            {'xPDO'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/modx/modx-revolution/xpdo-urok-1.-getobject.html"
                            title="xPDO Урок 1. GetObject()"
                          >
                            {'xPDO Урок 1. GetObject()'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/modx/modx-revolution/xpdo-urok-2.-getcollection.html"
                            title="xPDO Урок 2. GetCollection()"
                          >
                            {'xPDO Урок 2. GetCollection()'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="level4">
                          <Link
                            to="/documentation/modx/modx-revolution/xpdo-urok-3.-newquery.html"
                            title="xPDO Урок 3. newQuery()"
                          >
                            {'xPDO Урок 3. newQuery()'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="last level4">
                          <Link
                            to="/documentation/modx/modx-revolution/xpdo-urok-4.-select.html"
                            title="xPDO Урок 4. Select()"
                          >
                            {'xPDO Урок 4. Select()'}
                          </Link>
                        </li>
                        {'\n'}
                      </ul>
                    </li>
                    {'\n'}
                  </ul>
                </li>
                {'\n'}
              </ul>
            </li>
            {'\n'}
          </ul>
          {'\n\t'}
        </div>
      </div>
      <div className="center_block">
        {'\n        '}
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
              to="/documentation/modx.html"
              title="CMS/CMF MODX"
            >
              {'CMS/CMF MODX'}
            </Link>
            {' » '}
            <Link
              className="B_crumb"
              to="/documentation/modx/modx-revolution.html"
              title="MODx Revolution"
            >
              {'MODx Revolution'}
            </Link>
            {' » '}
            <h1 className="B_lastCrumb" tabIndex={-1}>
              <span className="B_currentCrumb">
                {'MODx Revolution Оптимизация КЭШ'}
              </span>
            </h1>
          </span>
        </div>
        {'\n        '}
        <div id="content">
          <p>
            <strong>{'Проблема:'}</strong>
            {
              '\n при увеличении кол-ва страниц на сайте, значительно разрастается кэш \nсайта. Это связано с тем, что MODx Revolution кэширует все варианты ЧПУ:'
            }
          </p>
          {'\n'}
          <ol>
            {'\n'}
            <li>{'ID-документа - ЧПУ'}</li>
            {'\n'}
            <li>{'ЧПУ - ID-документа'}</li>
            {'\n'}
            <li>{'Родители и дочерние записи и т.п.'}</li>
            {'\n'}
          </ol>
          {'\n'}
          <p>
            {
              'В\n результате на 20 000 страниц мы имеем почти 20 Мб кэш. Мало того, что \nэто просто извращение, подгружать 20 метров кэша для того, чтобы выдать \n20 кило конечного HTML, так дело еще в том, что это почти что лимит для \nMODx Revolution, и 50 000 страниц нам просто  никогда не создать.'
            }
            <br />
            {
              'Но\n это в базовой комплектации.  Слава  Богу MODx Revolution имеет очень \nмощное API, и при желании платформу можно адаптировать практически под \nлюбые нужды.'
            }
            <br />
            {
              'В нашем случае мы поставили для себя задачу - прокачать MODx Revolution  так, чтобы он легко работал с 200 000 документами.'
            }
            <br />
            {
              'Хотя\n я  буду максимально подробно все расписывать, все же сразу оговорюсь о \nнеобходимых минимальных знаниях, чтобы без труда все это сделать:'
            }
          </p>
          {'\n'}
          <ol>
            {'\n'}
            <li>{'PHP ООП'}</li>
            {'\n'}
            <li>{'PDO/xPDO'}</li>
            {'\n'}
            <li>{'Javascript + ExtJS/Sencha'}</li>
            {'\n'}
            <li>{'MySQL'}</li>
            {'\n'}
            <li>{'Синтаксис JSON'}</li>
            {'\n'}
            <li>
              {'Средства отладки Ajax-запросов, к примеру Firefox  + Firebug'}
            </li>
            {'\n'}
            <li>{'Синтаксис XML'}</li>
            {'\n'}
          </ol>
          {'\n'}
          <p>
            <strong>
              {'Краткий отчет о результатах краш-тестов в цифрах:'}
            </strong>
          </p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/cache/crashTest.jpg"
            >
              {'crashTest.jpg — изображение пока не получено из архива'}
            </span>
          </p>
          {'\n'}
          <p>
            <br />
            <strong>{'Наши исходные данные:'}</strong>
          </p>
          {'\n'}
          <ol>
            {'\n'}
            <li>{'MODx Revolution 2.0.8'}</li>
            {'\n'}
            <li>{'Кол-во документов: 20793'}</li>
            {'\n'}
            <li>{'Размер кэш: 18 769 995 байт'}</li>
            {'\n'}
            <li>
              {'1-ая загрузка страницы (с генерацией кэш-файла): 8,97 сек.'}
            </li>
            {'\n'}
            <li>
              {
                '2-ая загрузка частично кэшированной страницы с уже сгенерированным кэшем: 0,5 - 1,32 сек.'
              }
            </li>
            {'\n'}
          </ol>
          {'\n'}
          <p>
            <br />
            <strong>
              {
                'При тюнинге MODx Revolution мы должны  учесть следующие обязательные моменты:'
              }
            </strong>
          </p>
          {'\n'}
          <ol>
            {'\n'}
            <li>{'Обязательно ЧПУ для всех страниц'}</li>
            {'\n'}
            <li>
              {
                'Для\n вывода главного меню использовать стандартные модули Ditto, Wayfinder, \nBreadcrumbs и чтобы их не пришлось модифицировать для этого.'
              }
            </li>
            {'\n'}
          </ol>
          {'\n'}
          <p>
            <br />
            <strong>
              {
                'Для начала разберемся, что же нам необходимо сделать, и к чему это приведет.'
              }
            </strong>
            <br />
            {'У нас есть несколько  вариантов:'}
          </p>
          {'\n'}
          <ol>
            {'\n'}
            <li>
              {
                'Немного\n подправить код класса modCacheManager и отключить кэширование карты \nресурсов. Таким образом мы предотвратим разрастание кэша и на 20000 \nдокументов мы будем  иметь кэш всего в 40 кило. Но:'
              }
              <ol>
                {'\n'}
                <li>
                  {
                    'У нас перестанут работать все стандартные навигационные модули типа Ditto, Wayfinder и т.п.'
                  }
                </li>
                {'\n'}
                <li>
                  {
                    'У нас в принципе не будет работать ЧПУ, потому что MODx Revolution всю работу с навигацией проводит через этот раздел кэша.'
                  }
                </li>
                {'\n'}
              </ol>
            </li>
            {'\n'}
          </ol>
          {'\n'}
          <p>
            <br />
            {
              'Какой же оптимальный вариант мы видим? Частичное кэширование \nдокументов, только тех, которые нужны для модулей навигации, типа \nWayfinder и т.п.'
            }
            <br />
            {'Для этого нам надо:'}
          </p>
          {'\n'}
          <ol>
            {'\n'}
            <li>
              {
                'Добавить возможность указывать в настройках каждой отдельной страницы, включать ее в кэш или нет.'
              }
            </li>
            {'\n'}
            <li>
              {
                'Скорректировать\n класс modCacheManager таким образом, чтобы он включал в кэш только те \nстраницы, которые отмечены как включаемые в кэш карты ресурсов'
              }
            </li>
            {'\n'}
            <li>
              {
                'Добавить\n плагин, который будет налету, в случае не нахождения страницы (в \nслучае, если запрашиваемая страница не оказалась кэшированной карте \nресурсов), дополнительно производить поиск ресурсов по запрашиваемому \nУРЛ, и в случае нахождения, вывод контента страницы.'
              }
            </li>
            {'\n'}
            <li>
              {
                'Добавить\n пользовательский кэш каждой отдельной страницы с кэшированием УРЛ-ов \nдочерних ресурсов до 3-го уровня, или только тех ресурсов, УРЛы которых \nприсутствуют на запрашиваемой страницы'
              }
            </li>
            {'\n'}
          </ol>
          {'\n'}
          <p>
            <br />
            <strong>{'Итак, приступим по порядку:'}</strong>
          </p>
          {'\n'}
          <p>
            <strong>
              {
                '1. Добавить возможность указывать в настройках каждой отдельной страницы, включать ее в кэш или нет. '
              }
            </strong>
            <br />
            <strong>{'1.1'}</strong>
            {
              '\n Добавляем дополнительный чекбокс в панель редактирования документов. \nДля этого открывает файл \n/manager/assets/modext/widgets/resource/modx.panel.resource.js'
            }
            <br />
            {'На строке 285 начинается перечисление полей формы настроек \n'}
          </p>
          {'\n'}
          <pre className="prettyprint lang-json">
            {
              "{\n    xtype: 'checkbox'\n   ,fieldLabel: _('resource_searchable')\n   ,description: _('resource_searchable_help')\n   ,name: 'searchable'\n   ,id: 'modx-resource-searchable'\n   ,inputValue: 1\n   ,checked: config.record.searchable       \n}\n"
            }
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            {
              "Здесь\n xtype: 'checkbox'  - это и есть тип элемента <input type=”checkbox” ,\n нам подобный и нужен, по-этому где-нибудь сразу за блоком чекбокса \n“кэшируемый” мы и вставляем через запятую свой блок."
            }
          </p>
          {'\n'}
          <pre className="prettyprint lang-js">
            {
              "{\n\txtype: 'checkbox'\n\t,fieldLabel: 'Включать в кеш Карты ресурсов'\n\t,description: 'Если отмечено, то документ будет включен '+\n        'в карту ресурсов в кеше контекста и будет доступен для '+\n        'стандартных средств навигации типа Wayfinder и Ditto'\n\t,name: 'inResourceMapCache'\n\t,id: 'modx-resource-inResourceMapCache'\n\t,inputValue: 1\n\t,checked: config.record.inResourceMapCache\n}\n"
            }
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            {'Обратите внимание на строку типа '}
            <br />
            {",fieldLabel: _('resource_searchable')"}
            <br />
            {
              'Это\n перечисление различных заголовков и т.п. _(text) - это функция, для \nработы со словорями MODx, то есть если хотите, чтобы ваши доработки еще \nимели мультиязычную основу или возможность управления через редактор \nсловарей, то копайте глубже. Направление я показал, а самому лень, ибо \nэто не критично для нашей задачи.'
            }
            <br />
            {
              'Но\n в любом случае пропишите свои названия полей, ID-шник и т.п. Можете \nпросто скопировать мой блок, что в данном случае будет правильней, чтобы\n нигде не было в дальнейшем конфликтов имен '
            }
            <br />
            <br />
            {
              'Всё.\n Вставив этот код и сохранив файл на сервере, обновите страницу \nредактора. Вы увидите, что во вкладке “Настройки страницы” появился \nдополнительный чекбокс.'
            }
            <br />
            {
              'Самое\n интересное, что для того, чтобы данные этого чекбокса отправлялись  на \nсервер, ничего делать не надо! Скрипты MODx-а написаны так, что они \nавтоматом подхватывают добавляемые поля, и обрабатывают их значения.'
            }
            <br />
            {
              'Только\n обратите внимание, что параметр ‘includeInResourceMapCache’  будет передаваться \nтолько в том случае, если чекбокс будет отмечен. Это важно, если на \nстороне сервера вы  вздумаете проверять \nisset($_POST[‘includeInResourceMapCache’]). В данном случае isset будет \nfalse, потому что этого элемента не будет в передаваемых данных.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/cache/newCheckbox.jpg"
            >
              {'newCheckbox.jpg — изображение пока не получено из архива'}
            </span>
            <br />
            <br />
            <strong>{'1.2'}</strong>
            {
              '\n Забегая вперед, предлагаю сразу создать настраиваемый параметр, который\n будет указывать, включать по умолчанию в карту ресурсов создаваемый \nдокумент, если не отмечено данное поле, или нет. Ведь платформа у нас \nмультисайтовая, и на одной и той же платформе может лежать и \nвысоконагруженные  сайты, и нет. И поверьте мне на слово, что при \nжелании с MODx Revolution можно так извратиться, что файлы разных сайтов\n и даже их таблицы будут лежать на разных физических серверах, а \nплатформа будет одна, и все будет летать. '
            }
            <br />
            {
              'Для этого откроем через админку страницу “Настройки системы” и добавим в core.Кэширование нашу пользовательскую настройку.'
            }
          </p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/cache/addNewOption_1.jpg"
            >
              {'addNewOption_1.jpg — изображение пока не получено из архива'}
            </span>
            {' '}
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/cache/addNewOption_2.jpg"
            >
              {'addNewOption_2.jpg — изображение пока не получено из архива'}
            </span>
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/cache/addNewOption_3.jpg"
            >
              {'addNewOption_3.jpg — изображение пока не получено из архива'}
            </span>
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/cache/addNewOption_4.jpg"
            >
              {'addNewOption_4.jpg — изображение пока не получено из архива'}
            </span>
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/assets/images/modx/cache/addNewOption_5.jpg"
            >
              {'addNewOption_5.jpg — изображение пока не получено из архива'}
            </span>
            {' '}
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <strong>{'1.3'}</strong>
            {
              '\n Итак, элемент управления мы добавили. Теперь надо это значение где-то \nхранить. Разумно добавить колонку в саму таблицу site_content (не \nзабывайте про префикс таблиц. По умолчанию он modx_, но мог быть указан и\n другой префикс при установке. То есть скорее всего полное название \nтаблицы modx_site_content).'
            }
          </p>
          {'\n'}
          <p>
            {
              'Добавляем\n в конец таблицы колонку inResourceMapCache с атрибутами: tinyint(1) \nunsigned  default 0 . Лучше для этих целей воспользоваться PHP-клиентом \nphpMyAdmin.'
            }
            <br />
            <br />
            <strong>{'1.4'}</strong>
            {
              ' Все, колонка у нас есть. Теперь надо добавить логику в обработку создаваемых и обновляемых документов.'
            }
            <br />
            {'Для этого подредактируем два документа:'}
            <br />
            <strong>{'1.4.1'}</strong>
            {
              ' /core/model/modx/processors/resource/create.php   (отвечает за создание документов)'
            }
            <br />
            {'У меня это строка 89. После строки '}
          </p>
          {'\n'}
          <pre className="prettyprint lang-php">
            {
              "$scriptProperties['deleted'] = empty($scriptProperties['deleted']) ? 0 : 1;\n"
            }
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            {'Добавляем '}
          </p>
          {'\n'}
          <pre className="prettyprint lang-php">
            {
              "$scriptProperties['inResourceMapCache'] = \n\t!isset($scriptProperties['inResourceMapCache']) ? \n    (integer) $workingContext->getOption('inResourceMapCache_default', 1) : \n    (empty($scriptProperties['inResourceMapCache']) ? 0 : 1);\n"
            }
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            {
              'В\n данном случае мы указали, что если в Пост-данных нет элемента \ninResourceMapCache, то в качестве значения используем значение настройки\n системы inResourceMapCache_default, которую мы создали в пункте 1.2 \nданной мануалы, или, если нет такой переменной, то 1.'
            }
            <br />
            <br />
            <strong>{'1.4.2'}</strong>
            {
              ' /core/model/modx/processors/resource/update.php  (отвечает за обновление документов)'
            }
            <br />
            {
              'Где-то в районе 100-ой строки находим блок /* setup default values */'
            }
            <br />
            {'Там перечислено штук 10 параметров, типа'}
          </p>
          {'\n'}
          <pre className="prettyprint lang-php">
            {
              "$scriptProperties['parent'] = \n\tempty($scriptProperties['parent']) ? 0 : intval($scriptProperties['parent']);\n"
            }
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            {'Вот после последнего параметра вставляем свою строку:'}
          </p>
          {'\n'}
          <pre className="prettyprint lang-php">
            {
              "$scriptProperties['inResourceMapCache'] = \n\tempty($scriptProperties['inResourceMapCache']) ? 0 : 1;\n"
            }
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            {
              'В данном случае мы перехватываем передаваемые Пост-данные, и если указано 1, соответственно значение ставится 1'
            }
            <br />
            <br />
            <strong>{'1.5'}</strong>
            {
              '\n Всё, с редактированием исполняемых скриптом  и оформлением интерфейса \nзакончено. Но для того, чтобы заработало обновление информации в базе \nданных, необходимо отредактировать еще один важный файл (плюс один файл \nна будущее).'
            }
            <br />
            {
              'Дело\n в том, что MODx Revolution полностью основан на расширении PDO - xPDO. \nЭто сторонний класс для работы с  различными базами данных, типа тонкого\n клиента. Так вот, для работы с БД он использует файлы, в которых \nописана структура базы данных и ее таблиц, и если не внести информацию о\n новой колонке в таблице site_content, то он и не будет о ней знать, и \nобновлять ее упорно не будет.'
            }
            <br />
            {'Итак, нам придется отредактировать два файла:'}
            <br />
            <strong>{'1.5.1'}</strong>
            {' /core/model/schema/modx.mysql.schema.xml'}
            <br />
            {
              'В\n этом файле в формате XML описана струтура базы данных. Именно на основе\n таких XML-файлов генерируются PHP-файлы классов и карт для работы xPDO с\n базой данных. Но нам легче будет отредактировать эти PHP-файлы вручную,\n чем пересобрать эту базу, и хотя сейчас информация в этом файле не \nбудет напрямую влиять на работу наших скриптов, она понадобится в \nбудущем, если вы все таки решите пересобрать всю базу xPDO на основе \nэтого файла'
            }
            <br />
            {'Итак, открываем этот файл и находим строку '}
          </p>
          {'\n'}
          <pre className="prettyprint lang-xml">
            {
              '<object class="modResource" table="site_content" extends="modAccessibleSimpleObject">\n'
            }
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            {'Внутри этого блока перечислены все поля этой таблицы типа'}
          </p>
          {'\n'}
          <pre className="prettyprint lang-xml">
            {
              '<field key="type" dbtype="varchar" precision="20" phptype="string" null="false" default="document" /> \n'
            }
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            {
              'Вот сразу после перечисления всех колонок, перед блоком индексов вставляем строку'
            }
          </p>
          {'\n'}
          <pre className="prettyprint lang-xml">
            {
              '<field key="inResourceMapCache" dbtype="tinyint" precision="1" \nattributes="unsigned" phptype="boolean" null="false" default="0" index="index" />\n'
            }
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            <br />
            {'Для наглядности привожу последние 3 строки:'}
          </p>
          {'\n'}
          <pre className="prettyprint lang-xml">
            {
              '<field key="context_key" dbtype="varchar" precision="100" \n\tphptype="string" null="false" default="web" index="index" />\n<field key="content_type" dbtype="int" precision="11" \n\tattributes="unsigned" phptype="integer" null="false" default="1" />\n<field key="inResourceMapCache" dbtype="tinyint" precision="1" attributes="unsigned" \nphptype="boolean" null="false" default="0" index="index" />\n'
            }
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            <br />
            {
              'Сохраняем\n этот файл и закрываем. Напомню, что это не критичный файл, и если у вас\n работать не будет, то на него не пеняйте, ищите проблему в другом \nместе.'
            }
            <br />
            <br />
            <strong>{'1.5.2'}</strong>
            {' /core/model/modx/mysql/modresource.map.inc.php'}
            <br />
            {
              'Вот это уже очень важный файл! Если в нем не описать правильно информацию по таблице, обновление информации в БД не будет.'
            }
            <br />
            {
              'Открываем его для редактирования. В нем информация представлена в виде массива.'
            }
            <br />
            {'Находим самый первый блок'}
          </p>
          {'\n'}
          <pre className="prettyprint lang-php">
            {
              "$xpdo_meta_map['modResource']= array (\n\t'package' => 'modx',\n\t'version' => '1.1',\n\t'table' => 'site_content',\n\t'fields' =>\n\t\tarray (\n   \t\t\t'type' => 'document',\n   \t\t\t'contentType' => 'text/html',\n"
            }
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            {
              'Тут идет перечисление колонок в таблице site_content     type, contentType и т.п.'
            }
            <br />
            {'В конец блока '}
          </p>
          {'\n'}
          <pre className="prettyprint lang-php">
            {"'fields' =>\n \tarray (\n"}
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            {'добавляем новый элемент'}
          </p>
          {'\n'}
          <pre className="prettyprint lang-php">
            {"'inResourceMapCache' => 0,\n"}
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            <br />
            {'Сразу за этим блоком идет следующий важный блок:'}
            <br />
            {'\n'}
          </p>
          {'\n'}
          <pre className="prettyprint lang-php">
            {",\n\t'fieldMeta' =>\n\tarray (\n"}
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            {
              'В нем представлена более развернутая информация по этим полям, включая \nназвания  индексов и т.п.  типа (Название колонки => ее атрибуты)'
            }
          </p>
          {'\n'}
          <pre className="prettyprint lang-php">
            {
              "'type' =>\n\tarray (\n    \t'dbtype' => 'varchar',\n    \t'precision' => '20',\n    \t'phptype' => 'string',\n    \t'null' => false,\n    \t'default' => 'document',\n   ),\n"
            }
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            {'Добавляем последним элементом наш:'}
          </p>
          {'\n'}
          <pre className="prettyprint lang-php">
            {
              "'inResourceMapCache' =>\n\tarray (\n    \t'dbtype' => 'tinyint',\n    \t'precision' => '1',\n    \t'attributes' => 'unsigned',\n    \t'phptype' => 'boolean',\n    \t'null' => false,\n    \t'default' => 1\n )\n"
            }
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            {'Все, сохраняем этот файл на сервере.'}
            <br />
            <br />
            {
              'После всего этого на всякий случай обновляем кеш сайта и проверяем \nработоспособность, создав новый документ и несколько раз обновить \nзначение Включать в кеш Карты ресурсов: в настройках страницы. При этом \nпроверьте изменения значения  inResourceMapCache непосредственно в \nтаблице в Базе Данных.'
            }
            <br />
            {
              'Учтите,\n что разные файлы работают в момент создания новой страницы и обновления\n уже существующей, потому проверьте и сразу после создания страницы, и \nотдельно после обновления страницы.'
            }
            <br />
            <br />
            {'У меня все работает.'}
            <br />
            <strong>{'1.6'}</strong>
            {
              ' Теперь надо подредактировать файл /core/model/modx/modcachemanager.class.php'
            }
            <br />
            {
              'Именно этот класс генерирует кеш Контекста сайта, карту ресурсов и т.п.'
            }
            <br />
            <strong>{'1.6.1'}</strong>
            {' Строка 79'}
          </p>
          {'\n'}
          <pre className="prettyprint lang-php">
            {"$resourceFields= 'id,parent,alias,isfolder,content_type';\n"}
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            {'Это перечислены колонки, получаемые из таблицы  site_content'}
            <br />
            {
              'Нам надо добавить и свою колонку, чтобы мы могли различить кэшируемые и некэшируемые документы.'
            }
            <br />
            {'Далее примерно на 110-ой строке после'}
          </p>
          {'\n'}
          <pre className="prettyprint lang-php">
            {'while ($r = $collResources->fetch(PDO::FETCH_OBJ)) {\n'}
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            {'добавляем'}
          </p>
          {'\n'}
          <pre className="prettyprint lang-php">
            {'if(!$r->inResourceMapCache) continue;\n'}
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            {'Получаем '}
          </p>
          {'\n'}
          <pre className="prettyprint lang-php">
            {
              'while ($r = $collResources->fetch(PDO::FETCH_OBJ)) {\n\tif(!$r->inResourceMapCache) continue;\n'
            }
          </pre>
          {'\n'}
          <p>
            {'\n \n'}
            <br />
            {'Таким образом мы пропускаем все документы, не включаемые в кеш.'}
            <br />
            <br />
            {
              'P.S. Оказывается, есть еще момент, который я сразу не заметил. Надо подправить этот запрос:'
            }
          </p>
          {'\n'}
          <pre className="prettyprint lang-php">
            {
              '$criteria= new xPDOCriteria($this->modx, \n\t"SELECT {$resourceCols} FROM {$tblResource} `r` LEFT JOIN {$tblContextResource} `cr` \n    \tON `cr`.`context_key` = :context_key1 AND `r`.`id` = `cr`.`resource` \n        WHERE `r`.`id` != `r`.`parent` \n        \tAND (\n        \t\t`r`.`context_key` = :context_key2 OR `cr`.`context_key` IS NOT NULL) \n          \tAND `r`.`deleted` = 0 GROUP BY `r`.`id` \n            ORDER BY `r`.`parent` ASC, `r`.`menuindex` ASC", $bindings, false);\n'
            }
          </pre>
          {'\n'}
          <p>
            {' \n'}
            <br />
            {
              'потому\n что в данном  случае он на уровне PHP пропускает все не кэшируемые \nэлементы, но все равно с Базы Данных запрашивает все строки. В \nрезультате при  >1 000 000 документов первый запрос выполняется более\n трех секунд.  '
            }
            <br />
            {
              'Да-да, вы правильно заметили))) 1 000 000 документов. И это еще не предел.'
            }
            <br />
            {'Подставляем в запрос еще один критерий'}
          </p>
          {'\n'}
          <pre className="prettyprint lang-sql">
            {'AND `r`.`inResourceMapCache` = 1\n'}
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            {'И  получаем вот такой запрос:'}
          </p>
          {'\n'}
          <pre className="prettyprint lang-php">
            {
              '$criteria= new xPDOCriteria($this->modx, \n\t"SELECT {$resourceCols} FROM {$tblResource} `r` LEFT JOIN {$tblContextResource} `cr` \n    \tON `cr`.`context_key` = :context_key1 AND `r`.`id` = `cr`.`resource` \n        WHERE `r`.`id` != `r`.`parent` \n        \tAND (\n        \t\t`r`.`context_key` = :context_key2 OR `cr`.`context_key` IS NOT NULL) \n          \tAND `r`.`deleted` = 0 AND `r`.`inResourceMapCache` = 1 GROUP BY `r`.`id` \n            ORDER BY `r`.`parent` ASC, `r`.`menuindex` ASC", $bindings, false);\n'
            }
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'И теперь при более 1 000 000 документов любой запрос к сайту - менее 0,35 секунд!)))'
            }
          </p>
          {'\n'}
          <p>
            {
              'По результатам тестирования одновременно 50-ти посетителей, загрузка страницы не превышает 0,8 секунд.'
            }
          </p>
          {'\n'}
          <p>
            {'Результаты тестирования: '}
            <a
              title="Результаты тестирования MODx Revolution"
              href="http://loadimpact.com/result/modxforum.ru-0620c6997a541f794293b84714671c3d"
              target="_blank"
              rel="noopener noreferrer"
            >
              {
                'http://loadimpact.com/result/modxforum.ru-0620c6997a541f794293b84714671c3d'
              }
            </a>
          </p>
          {'\n'}
          <p>
            {
              'Итак,\n подытожим: мы добились загрузки страниц менее чем за 0,4 сек. при 1 000\n 000 докунтов. Очень неплохой разгон для MODx Revolution)))'
            }
            <br />
            {
              'Это\n еще при том, что страницы не были до конца закэшированы и выполняли для\n своих нужд несколько запросов к таблице site_content, то есть если \nполностью кешировать страницы, сайт будет грузиться менее чем за 0,2 \nсек., и я это обязательно докажу!'
            }
            <br />
            <br />
            {
              'Есть\n еще момент: мы частично отключили кеширование карты ресурсов. А это \nзначит, что при использовании ЧПУ, то есть запрашивая страницу не по ее \nID, кроме корневой страницы вы не получите ни одной страницы, не \nвключенной в эту карту сайта.'
            }
            <br />
            {
              'Но это лечится. Вот маленькое решение, которое вы должны уже будете само развить дальше:'
            }
            <br />
            {'1. Создаем плагин, выполняемый по событию OnWebPageInit.'}
            <br />
            {'2. Прописываем в нем:'}
          </p>
          {'\n'}
          <pre className="prettyprint lang-php">
            {
              "if($modx->checkSiteStatus() && !is_object($modx->resource)) \n\t$modx->resource = $modx->request->getResource('id', $docID);\n"
            }
          </pre>
          {'\n'}
          <p>
            {'\n'}
            <br />
            {
              'Все,\n теперь можно в этот код в качестве параметра $docID передавать ID \nнужного нам документа, и вы получите код нужной вам страницы.'
            }
            <br />
            {
              'Правда\n вам самим нужно будет думать, как получить ID документа. Очевидно, что \nнадо будет раскладывать адрес запрашиваемой страницы и проходиться по \nтаблице site_content и получать ID конечного документа, но надо еще и \nкэширование этого результата тоже сохранять, чтобы потом при повторном \nобращении не дергать каждый раз базу.'
            }
            <br />
            {
              'Я обязательно это доделаю в следующий раз и выложу готовое решение. '
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <div
            id="_mcePaste"
            className="mcePaste"
            style={
              {
                position: 'absolute',
                left: '-10000px',
                top: '309px',
                width: '1px',
                height: '1px',
                overflow: 'hidden',
              } as React.CSSProperties
            }
          >
            {'\n \n'}
            <table border={0} cellSpacing="0" cellPadding="0" width={1271}>
              {'\n'}
              <colgroup>
                <col
                  style={
                    {
                      msoWidthSource: 'userset',
                      msoWidthAlt: '6875',
                      width: '141pt',
                    } as React.CSSProperties
                  }
                  width={188}
                />
                {'\n '}
                <col
                  style={
                    {
                      msoWidthSource: 'userset',
                      msoWidthAlt: '17078',
                      width: '350pt',
                    } as React.CSSProperties
                  }
                  width={467}
                />
                {'\n '}
                <col
                  style={
                    {
                      msoWidthSource: 'userset',
                      msoWidthAlt: '4388',
                      width: '90pt',
                    } as React.CSSProperties
                  }
                  width={120}
                />
                {'\n '}
                <col
                  style={
                    {
                      msoWidthSource: 'userset',
                      msoWidthAlt: '4973',
                      width: '102pt',
                    } as React.CSSProperties
                  }
                  width={136}
                />
                {'\n '}
                <col
                  style={
                    {
                      msoWidthSource: 'userset',
                      msoWidthAlt: '4388',
                      width: '90pt',
                    } as React.CSSProperties
                  }
                  span={3}
                  width={120}
                />
                {'\n '}
              </colgroup>
              {'\n'}
              <tbody>
                {'\n'}
                <tr style={{ height: '51.0pt' } as React.CSSProperties}>
                  {'\n'}
                  <td
                    className="xl63"
                    style={
                      {
                        height: '51.0pt',
                        width: '141pt',
                      } as React.CSSProperties
                    }
                    width={188}
                    height={68}
                  >
                    {'Кол-во\n  ресурсов'}
                  </td>
                  {'\n'}
                  <td
                    className="xl63"
                    style={
                      {
                        borderLeft: 'none',
                        width: '350pt',
                      } as React.CSSProperties
                    }
                    width={467}
                  >
                    {'Симптомы'}
                  </td>
                  {'\n'}
                  <td
                    className="xl63"
                    style={
                      {
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'Первая загрузка\n  (с генерацией кеша). Секунд'}
                  </td>
                  {'\n'}
                  <td
                    className="xl63"
                    style={
                      {
                        borderLeft: 'none',
                        width: '102pt',
                      } as React.CSSProperties
                    }
                    width={136}
                  >
                    {'Вторая загрузка\n  (закешированный раздел). Секунд'}
                  </td>
                  {'\n'}
                  <td
                    className="xl63"
                    style={
                      {
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'Размер кеш-файла'}
                  </td>
                  {'\n'}
                  <td
                    className="xl63"
                    style={
                      {
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'Размер таблицы\n  site_content'}
                  </td>
                  {'\n'}
                  <td
                    className="xl63"
                    style={
                      {
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'Размер индексов\n  таблицы site_content'}
                  </td>
                  {'\n'}
                </tr>
                {'\n'}
                <tr style={{ height: '25.5pt' } as React.CSSProperties}>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        height: '25.5pt',
                        borderTop: 'none',
                        width: '141pt',
                      } as React.CSSProperties
                    }
                    width={188}
                    height={34}
                  >
                    {'2363'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '350pt',
                      } as React.CSSProperties
                    }
                    width={467}
                  >
                    <span style={{ msoSpacerun: 'yes' } as React.CSSProperties}>
                      {' '}
                    </span>
                    {
                      'Не получилось клонировать раздел, не хватило\n  на исполнение 30 секунд лимита.'
                    }
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'2,18'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '102pt',
                      } as React.CSSProperties
                    }
                    width={136}
                  >
                    {'0,453'}
                    <br />
                    {'\n    0,328'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'4\n  087 000'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                </tr>
                {'\n'}
                <tr style={{ height: '25.5pt' } as React.CSSProperties}>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        height: '25.5pt',
                        borderTop: 'none',
                        width: '141pt',
                      } as React.CSSProperties
                    }
                    width={188}
                    height={34}
                  >
                    {'7035'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '350pt',
                      } as React.CSSProperties
                    }
                    width={467}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'4,42'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '102pt',
                      } as React.CSSProperties
                    }
                    width={136}
                  >
                    {'0,594'}
                    <br />
                    {'\n    0,360'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'6\n  112 295'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                </tr>
                {'\n'}
                <tr style={{ height: '25.5pt' } as React.CSSProperties}>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        height: '25.5pt',
                        borderTop: 'none',
                        width: '141pt',
                      } as React.CSSProperties
                    }
                    width={188}
                    height={34}
                  >
                    {'9371'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '350pt',
                      } as React.CSSProperties
                    }
                    width={467}
                  >
                    {
                      'Не\n  получается в дереве документов перенести раздел в другой раздел.'
                    }
                    <br />
                    {'\n    Помог выход из админки и опять вход, но все равно'}
                    <span style={{ msoSpacerun: 'yes' } as React.CSSProperties}>
                      {'  '}
                    </span>
                    {'тормозит'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'9,94'}
                  </td>
                  {'\n'}
                  <td
                    className="xl65"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '102pt',
                      } as React.CSSProperties
                    }
                    width={136}
                  >
                    {'???'}
                  </td>
                  {'\n'}
                  <td
                    className="xl65"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'???'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                </tr>
                {'\n'}
                <tr style={{ height: '38.25pt' } as React.CSSProperties}>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        height: '38.25pt',
                        borderTop: 'none',
                        width: '141pt',
                      } as React.CSSProperties
                    }
                    width={188}
                    height={51}
                  >
                    {'18715'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '350pt',
                      } as React.CSSProperties
                    }
                    width={467}
                  >
                    {
                      'Сильно\n  тормозит клонирование раздела (2-4 документа в сек)'
                    }
                    <br />
                    {
                      '\n    Так и не смог проклонировать раздел. Только примерно 3000 документов создал'
                    }
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '102pt',
                      } as React.CSSProperties
                    }
                    width={136}
                  >
                    {'1,03'}
                    <br />
                    {'\n    1,24'}
                    <br />
                    {'\n    0,438'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'16\n  769 994'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'43.5\n  Mb'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'5.2\n  Mb'}
                  </td>
                  {'\n'}
                </tr>
                {'\n'}
                <tr style={{ height: '25.5pt' } as React.CSSProperties}>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        height: '25.5pt',
                        borderTop: 'none',
                        width: '141pt',
                      } as React.CSSProperties
                    }
                    width={188}
                    height={34}
                  >
                    {'20793'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '350pt',
                      } as React.CSSProperties
                    }
                    width={467}
                  >
                    {
                      'Невозможно\n  произвести удаление ветки с более чем 1000 ресурсов'
                    }
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'7,09'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '102pt',
                      } as React.CSSProperties
                    }
                    width={136}
                  >
                    {'1,09'}
                    <br />
                    {'\n    1,33'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'18\n  769 995'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'50,5\n  Мб'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'6,6\n  Мб'}
                  </td>
                  {'\n'}
                </tr>
                {'\n'}
                <tr style={{ height: '51.0pt' } as React.CSSProperties}>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        height: '51.0pt',
                        borderTop: 'none',
                        width: '141pt',
                      } as React.CSSProperties
                    }
                    width={188}
                    height={68}
                  >
                    {'220449'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '350pt',
                      } as React.CSSProperties
                    }
                    width={467}
                  >
                    {'Не\n  смог создать полный файл-кэш.'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'5,8'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '102pt',
                      } as React.CSSProperties
                    }
                    width={136}
                  >
                    {'Ошибка\n  502, то есть сайт умер)))'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {
                      '71\n  598 896 (не полный. должен был быть минимум 200 Мб)'
                    }
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                </tr>
                {'\n'}
                <tr
                  style={
                    {
                      msoHeightSource: 'userset',
                      height: '12.75pt',
                    } as React.CSSProperties
                  }
                >
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        height: '12.75pt',
                        borderTop: 'none',
                        width: '141pt',
                      } as React.CSSProperties
                    }
                    width={188}
                    height={17}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '350pt',
                      } as React.CSSProperties
                    }
                    width={467}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '102pt',
                      } as React.CSSProperties
                    }
                    width={136}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                </tr>
                {'\n'}
                <tr
                  style={
                    {
                      msoHeightSource: 'userset',
                      height: '12.75pt',
                    } as React.CSSProperties
                  }
                >
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        height: '12.75pt',
                        borderTop: 'none',
                        width: '141pt',
                      } as React.CSSProperties
                    }
                    width={188}
                    height={17}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '350pt',
                      } as React.CSSProperties
                    }
                    width={467}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '102pt',
                      } as React.CSSProperties
                    }
                    width={136}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                </tr>
                {'\n'}
                <tr
                  style={
                    {
                      msoHeightSource: 'userset',
                      height: '12.75pt',
                    } as React.CSSProperties
                  }
                >
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        height: '12.75pt',
                        borderTop: 'none',
                        width: '141pt',
                      } as React.CSSProperties
                    }
                    width={188}
                    height={17}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '350pt',
                      } as React.CSSProperties
                    }
                    width={467}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '102pt',
                      } as React.CSSProperties
                    }
                    width={136}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                </tr>
                {'\n'}
                <tr
                  style={
                    {
                      msoHeightSource: 'userset',
                      height: '12.75pt',
                    } as React.CSSProperties
                  }
                >
                  {'\n'}
                  <td
                    className="xl63"
                    style={
                      {
                        height: '12.75pt',
                        width: '683pt',
                      } as React.CSSProperties
                    }
                    colSpan={4}
                    width={911}
                    height={17}
                  >
                    {'После тюнинга'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                </tr>
                {'\n'}
                <tr
                  style={
                    {
                      msoHeightSource: 'userset',
                      height: '12.75pt',
                    } as React.CSSProperties
                  }
                >
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        height: '12.75pt',
                        borderTop: 'none',
                        width: '141pt',
                      } as React.CSSProperties
                    }
                    width={188}
                    height={17}
                  >
                    {'220449'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '350pt',
                      } as React.CSSProperties
                    }
                    width={467}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'2'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '102pt',
                      } as React.CSSProperties
                    }
                    width={136}
                  >
                    {'0,28-0,39'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'47\n  473 байт'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'520\n  Мб'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'54,7\n  Мб'}
                  </td>
                  {'\n'}
                </tr>
                {'\n'}
                <tr
                  style={
                    {
                      msoHeightSource: 'userset',
                      height: '12.75pt',
                    } as React.CSSProperties
                  }
                >
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        height: '12.75pt',
                        borderTop: 'none',
                        width: '141pt',
                      } as React.CSSProperties
                    }
                    width={188}
                    height={17}
                  >
                    {'439608'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '350pt',
                      } as React.CSSProperties
                    }
                    width={467}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'3,91\n  - 5,31'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '102pt',
                      } as React.CSSProperties
                    }
                    width={136}
                  >
                    {'0,25-0,3'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'46\n  782'}
                    <span style={{ msoSpacerun: 'yes' } as React.CSSProperties}>
                      {'  '}
                    </span>
                    {'байт'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'1\n  Gb'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'102.7\n  Mb'}
                  </td>
                  {'\n'}
                </tr>
                {'\n'}
                <tr
                  style={
                    {
                      msoHeightSource: 'userset',
                      height: '12.75pt',
                    } as React.CSSProperties
                  }
                >
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        height: '12.75pt',
                        borderTop: 'none',
                        width: '141pt',
                      } as React.CSSProperties
                    }
                    width={188}
                    height={17}
                  >
                    {'878632'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '350pt',
                      } as React.CSSProperties
                    }
                    width={467}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'55.14'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '102pt',
                      } as React.CSSProperties
                    }
                    width={136}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'2\n  Gb'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'191.9\n  Mb'}
                  </td>
                  {'\n'}
                </tr>
                {'\n'}
                <tr
                  style={
                    {
                      msoHeightSource: 'userset',
                      height: '12.75pt',
                    } as React.CSSProperties
                  }
                >
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        height: '12.75pt',
                        borderTop: 'none',
                        width: '141pt',
                      } as React.CSSProperties
                    }
                    width={188}
                    height={17}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '350pt',
                      } as React.CSSProperties
                    }
                    width={467}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '102pt',
                      } as React.CSSProperties
                    }
                    width={136}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                </tr>
                {'\n'}
                <tr style={{ height: '12.75pt' } as React.CSSProperties}>
                  {'\n'}
                  <td
                    className="xl63"
                    style={
                      {
                        height: '12.75pt',
                        width: '683pt',
                      } as React.CSSProperties
                    }
                    colSpan={4}
                    width={911}
                    height={17}
                  >
                    {
                      'После тюнинга 2. Добавления еще одного параметра в запрос'
                    }
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                </tr>
                {'\n'}
                <tr
                  style={
                    {
                      msoHeightSource: 'userset',
                      height: '67.5pt',
                    } as React.CSSProperties
                  }
                >
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        height: '67.5pt',
                        width: '683pt',
                      } as React.CSSProperties
                    }
                    colSpan={4}
                    width={911}
                    height={90}
                    align="center"
                  >
                    {
                      '#################################################################################################################################'
                    }
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                </tr>
                {'\n'}
                <tr
                  style={
                    {
                      msoHeightSource: 'userset',
                      height: '12.75pt',
                    } as React.CSSProperties
                  }
                >
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        height: '12.75pt',
                        borderTop: 'none',
                        width: '141pt',
                      } as React.CSSProperties
                    }
                    width={188}
                    height={17}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '350pt',
                      } as React.CSSProperties
                    }
                    width={467}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '102pt',
                      } as React.CSSProperties
                    }
                    width={136}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                </tr>
                {'\n'}
                <tr
                  style={
                    {
                      msoHeightSource: 'userset',
                      height: '12.75pt',
                    } as React.CSSProperties
                  }
                >
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        height: '12.75pt',
                        borderTop: 'none',
                        width: '141pt',
                      } as React.CSSProperties
                    }
                    width={188}
                    height={17}
                  >
                    {'878632'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '350pt',
                      } as React.CSSProperties
                    }
                    width={467}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'0,25-0,6'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '102pt',
                      } as React.CSSProperties
                    }
                    width={136}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl65"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'2\n  Gb'}
                  </td>
                  {'\n'}
                  <td
                    className="xl65"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'200\n  Mb'}
                  </td>
                  {'\n'}
                </tr>
                {'\n'}
                <tr
                  style={
                    {
                      msoHeightSource: 'userset',
                      height: '12.75pt',
                    } as React.CSSProperties
                  }
                >
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        height: '12.75pt',
                        borderTop: 'none',
                        width: '141pt',
                      } as React.CSSProperties
                    }
                    width={188}
                    height={17}
                  >
                    {'1008904'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '350pt',
                      } as React.CSSProperties
                    }
                    width={467}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'~0.3'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '102pt',
                      } as React.CSSProperties
                    }
                    width={136}
                  >
                    {'0.25-0.29'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {' '}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'2.3\n  Gb'}
                  </td>
                  {'\n'}
                  <td
                    className="xl64"
                    style={
                      {
                        borderTop: 'none',
                        borderLeft: 'none',
                        width: '90pt',
                      } as React.CSSProperties
                    }
                    width={120}
                  >
                    {'220.9\n  Mb'}
                  </td>
                  {'\n'}
                </tr>
                {'\n'}
              </tbody>
              {'\n'}
            </table>
            {'\n'}
          </div>
          {'\n        '}
          <div className="clear"></div>
          {'\n        '}
          <p>{'  '}</p>
          {'\n        '}
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
          <div id="navigator"></div>
          {'\n    '}
        </div>
        {'\n'}
      </div>
      <div className="clear"></div>
    </div>
  )
}
export const ModxCachePage: React.FC = () => (
  <DocumentationLayout scripts={scripts}>
    <Content />
  </DocumentationLayout>
)

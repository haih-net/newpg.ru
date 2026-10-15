import type * as React from 'react'
import { Link } from 'react-router'
import { DocumentationLayout } from '../../DocumentationLayout'

const scripts: readonly string[] = []
const Content: React.FC = () => {
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
                        <li className="level4">
                          <Link
                            to="/documentation/extjs/extjs_lessons/lesson5.html"
                            title="ExtJS. Урок 5. Хранилища и таблицы. Ext.grid, Ext.data.Store"
                          >
                            {'Урок 5. Хранилища и таблицы'}
                          </Link>
                        </li>
                        {'\n'}
                        <li className="last level4 active self">
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
                {'Урок 6. Шаблоны элементов'}
              </span>
            </h1>
          </span>
        </div>
        {'\n\t'}
        <div id="content">
          <p>
            {
              'На самом деле этот "урок" мне не хотелось бы называть уроком, ибо сейчас мы будем больше экспериментировать, играться, нежели изучать конкретный материал. Лично для меня работа с шаблонами - из области научного тыка. Чтобы четко понимать что и как происходин, нужно слишком глубоко копать, изучить кучу взаимосвязанных функций всей модели Экста, четко и досконально все знать. У меня на самом деле нет столько времени на это, да и это для меня больше хобби, нежели профессиональная деятельность. Но все равно интересно покапаться :-) Так о чем же пойдет разговор дальше? А коснемся мы вопроса оформления наших элементов, разберем, что же из себя представляют наши эти красивые окошки, кнопочки и т.п. и как их изменить по своему желанию. А вопрос довольно заковыристый.За основу возьммем мою прошлую головную боль: форму подписки "Подписаться на рассылку" здесь же, который всякий увидит слева. Задача состояла в следующем: Сделать ее такой, какой она выглядит сейчас.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/images/extjs/lesson6/form1.jpg"
            >
              {'form1.jpg — изображение пока не получено из архива'}
            </span>
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Сравним с тем, как она выглядела в необработанном варианте:'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Вот листинг формы:'}</p>
          {'\n'}
          <pre className="prettyprint">
            {
              "Ext.onReady(function(){\n\n\t// Тестовое поле\n\temailFieldTest = new Ext.form.TextField({ \n\t\twidth: '95%' \n\t});\n\t\n\t// Кнопка\n\tsubscribeButtonTest = new Ext.Button({ \n\t\ttext: 'Отправить' \n\t}); \n\t\n\t// Форма подписки\n\tFieldSet = new Ext.form.FieldSet({\n\t\ttitle: 'Подписаться на рассылку',\n\t\trenderTo: Ext.get('subscribeForm1') , \n\t\titems: [\n\t\t\temailFieldTest,\n\t\t\tsubscribeButtonTest\n\t\t] \n});"
            }
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Попробуем разобраться в механизме. Сразу скажу что я по хлебным крошкам шел к цели. '
            }
            <br />
            {
              "\n  Если мы заглянем в доку по элементу Ext.form.FieldSet, то увидим что layout по умолчанию 'form'."
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/images/extjs/lesson6/layout.jpg"
            >
              {
                'Тип шаблона по умолчанию — изображение пока не получено из архива'
              }
            </span>{' '}
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Значит наш пациент - Ext.layout.FormLayout. Мы конечно можем попробовать использовать другие лейауты (fit, toolbar и т.п.), но в нашем случае это совсем не то получится. Так что пытаемся разобраться с этим шаблоном и его механизмами. Честно сказать потратил часа 3, чтобы эту форму сделать, и потом еще несколько часов на то, чтобы боле менее разобраться в деталях. Итак, открываем доку по FormLayout. В конфиге находим такое:'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/images/extjs/lesson6/formTpl.jpg"
            >
              {'Шаблон формы — изображение пока не получено из архива'}
            </span>{' '}
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Это описан шаблон, используемый по умолчанию, если мы не указываем свой. Теперь рассмотрим наш код HTML, получаемый на выходе. Надеюсь у вас у всех есть Firebug или какая другая альтернатива. Лично я пользуюсь им. Итак, просмотрим код формы, полученной на выходе.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Вот это весь нащ FieldSet:'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/images/extjs/lesson6/fieldset.jpg"
            >
              {'Код Диелдсета — изображение пока не получено из архива'}
            </span>{' '}
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Теперь сравните полученный результат с шаблоном. Найдите элемент с классом "x-form-item". Вот от него и стоит плясать. Уверен, найдете много общего. Так что нам мешает в данном случае сделать форму такой как хочется? А мешает нам 3 вещи:'
            }
          </p>
          {'\n'}
          <p>
            <br />
            {'\n  1) '}
            <span>
              {'<label id="'}
              <span>{'ext-gen54'}</span>
              {'" '}
              <span>{'class'}</span>
              {
                '="x-form-item-label" style="width: 100px;" for="ext-comp-1013"/>'
              }
            </span>
            {' со своей шириной в 100px.'}
          </p>
          {'\n'}
          <p>
            {
              '2) <div id="x-form-el-ext-comp-1013" class="x-form-element" style="padding-left: 105px;"> со своим паддингом в 105px'
            }
          </p>
          {'\n'}
          <p>{'3) Выравнивание влево по умолчанию, а надо вправо.'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Честно сказать решить грамотно эти проблемы я смог только сегодня :-), но как, расскажу позже. А сейчас расскажу как я решил эти проблемы тогда.'
            }
            <br />
            {
              '\n  Ну во-первых, для начала я просто изменил шаблон. Для этого мы можем сконфигурить параметр формы layoutConfig (за деталями обращаемся к доке)'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <span
              className="image-placeholder"
              data-source="/images/extjs/lesson6/layoutConfig.jpg"
            >
              {'конфигурация формы — изображение пока не получено из архива'}
            </span>
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'В качестве значения принимается соответствующий объект layout, в нашем случае Ext.layout.FormLayout, то есть возможные параметры уже смотрим доку по данному объекту. '
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Вот листинг нашей новой формы:'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {
              '// Форма подписки с измененным шаблоном\nnew Ext.form.FieldSet({\n\t\ttitle: \'Подписаться на рассылку\',\n\t\trenderTo: Ext.get(\'subscribeForm2\'),  \n\t\twidth: 220, \n\t\tlayoutConfig:{\n\t\t\tfieldTpl: new Ext.Template(\n\t\t\t\t\'<div class="x-form-item {itemCls} " tabIndex="-1">\',\n\t\t\t\t\t\'<div class="" id="x-form-el-{id}" style="">\',\n\t\t\t\t\t\'</div><div class="{clearCls}"></div>\',\n\t\t\t\t\'</div>\'\n\t\t\t) \n\t\t}\n\t\t,\n\t\titems: [\n\t\t\temailFieldTest\n\t\t\t,subscribeButtonTest2\n\t\t] \n});  '
            }
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Как вы наверно заметили, мы просто вырезали не нужные нам элементы и свойства в шаблоне, чтобы не мешались :-))) . Как говорит один мой знакомый прогер: "Работает - отойди и не трож!"'
            }
          </p>
          {'\n'}
          <p>
            {
              '\n  Так и у нас получается: красиво или нет сделали, а получили желаемое и рады. Ну да ладно, тут осталось еще один момент поправить: выравнить элементы по правому краю.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Для этого мы'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              "1) Зададим класс контейнеру через параметр ctCls: 'right'. Хочу сразу отметить, что данный параметр вы можете задать любому элементу контейнера, в любом случае класс задастся самому контейнеру. В css у меня прописаны стили для этого класса."
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              "2) В ИЕ нормально выравнивается по правому краю, а в FF не хочет просто так, значит еще стили кнопочке зададим. margin: 'auto 0px auto auto'"
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'В итоге мы получаем такой вот код:'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {'// Правильная форма'}
            <br />
            {'  emailFieldTest = new Ext.form.TextField({ '}
            <br />
            {"      width: '95%'   "}
            <br />
            {'  });'}
            <br />
            {'  '}
            <br />
            {'  subscribeButtonTest = new Ext.Button({ '}
            <br />
            {"      text: 'Отправить',"}
            <br />
            {'      style: { '}
            <br />
            {"          margin: 'auto 0px auto auto'"}
            <br />
            {'      } '}
            <br />
            {'  });'}
            <br />
            {'  '}
            <br />
            {'  new Ext.form.FieldSet({'}
            <br />
            {"      title: 'Подписаться на рассылку',"}
            <br />
            {"      renderTo: Ext.get('subscribeForm3'),"}
            <br />
            {"      layout: 'form',"}
            <br />
            {"      ctCls: 'right',"}
            <br />
            {'      width:220,'}
            <br />
            {'      layoutConfig:{'}
            <br />
            {'          fieldTpl: new Ext.Template('}
            <br />
            {
              '                  \'<div class="x-form-item {itemCls} " tabIndex="-1">\','
            }
            <br />
            {
              '                  \'<div class="" id="x-form-el-{id}" style="">\','
            }
            <br />
            {'                  \'</div><div class="{clearCls}"></div>\','}
            <br />
            {"                  '</div>'"}
            <br />
            {'          ) '}
            <br />
            {'      }'}
            <br />
            {'      ,'}
            <br />
            {'      items: ['}
            <br />
            {'          emailFieldTest,'}
            <br />
            {'          subscribeButtonTest'}
            <br />
            {'      ] '}
            <br />
            {'  }); '}
            <br />
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'И вот такую форму:'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Ляпота! :-)))'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <div className="center_block clear">
            {'\n'}
            <div id="subscribeForm3">{' '}</div>
            {'\n'}
          </div>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Форма отображается как мне и нужно было. Но все таки спал я плохо: совесть мучала. Не красиво вот так вот брать и вырезать, тем более когда полностью не разобрался и не знаешь к чему это приведет в итоге. В общем я продолжил копать и таки нашел решение :-)))'
            }
            <br />
            {
              '\n  Начнем с того, что мне мешало изначально и что сбивало с толку. Во-первых мешало не достаточное знание английского, лень и невнимательность. В документации к вышеупомянутому Ext.layout.FormLayout.fieldTml (см. картинку-скрин выше) перечислены такие параметры как labelStyle, label, labelSeparator, elementStyle и другие. Короче у меня чуть мозк не лопнул от непонимания почему я указываю эти параметры в конфиге шаблона, а они нифига не меняют на выходе. Короче я понял что придется лезть в код библиотеки и там искать ответы. Вот эта функция набивает контейнер:'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {
              "setContainer : function(ct){\n        Ext.layout.FormLayout.superclass.setContainer.call(this, ct);\n        if(ct.labelAlign){\n            ct.addClass('x-form-label-'+ct.labelAlign);\n        }\n\n        if(ct.hideLabels){\n            Ext.apply(this, {\n                labelStyle: 'display:none',\n                elementStyle: 'padding-left:0;',\n                labelAdjust: 0\n            });\n        }else{\n            this.labelSeparator = ct.labelSeparator || this.labelSeparator;\n            ct.labelWidth = ct.labelWidth || 100;\n            if(Ext.isNumber(ct.labelWidth)){\n                var pad = Ext.isNumber(ct.labelPad) ? ct.labelPad : 5;\n                Ext.apply(this, {\n                    labelAdjust: ct.labelWidth + pad,\n                    labelStyle: 'width:' + ct.labelWidth + 'px;',\n                    elementStyle: 'padding-left:' + (ct.labelWidth + pad) + 'px'\n                });\n            }\n            if(ct.labelAlign == 'top'){\n                Ext.apply(this, {\n                    labelStyle: 'width:auto;',\n                    labelAdjust: 0,\n                    elementStyle: 'padding-left:0;'\n                });\n            }\n        }\n}"
            }
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'В качестве входящего параметра ct выступает наш объект Ext.form.FieldSet, который мы и рендерим.'
            }
            <br />
            {'\nЧто мы тут видим? Во-первых:'}
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {
              "if(ct.hideLabels){\n   \tExt.apply(this, {\n   \t\tlabelStyle: 'display:none',\n    \telementStyle: 'padding-left:0;',\n        labelAdjust: 0\n    });\n}"
            }
          </pre>
          {'\n'}
          <p>
            <br />
            {
              '\nТо есть достаточно было в нашей форме указать hideLabels: true , и элемент label был бы скрыт, а padding:105px, который нам очень мешал, был бы выставлен в 0, что сразу же решало как минимум 2 наши проблемы.'
            }
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{'Во-вторых, вот строчка:'}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <pre className="prettyprint">
            {"elementStyle: 'padding-left:' + (ct.labelWidth + pad) + 'px' "}
          </pre>
          {'\n'}
          <p>
            <br />
            {
              '\nТеперь становится ясно почему я во всей библиотеке не мог найти 105, когда пытался поиском найти, где же паддинг в 105 задается. В общем если покопать эту функцию, сразу можно понять какие параметры можно задавать в конфигурации формы, чтобы оказать воздействие на форму. И теперь понятно, что читать надо было с самого начала, где сразу указывается какие переменные можно указывать'
            }
            <strong>{' жирным шрифтом'}</strong>
            {':'}
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            <br />
            {'\n  '}
            <span
              className="image-placeholder"
              data-source="/images/extjs/lesson6/formLayout.jpg"
            >
              {'formLayout.jpg — изображение пока не получено из архива'}
            </span>
          </p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Таким образом таже форма у нас получится гораздо проще, а код будет меньше:'
            }
          </p>
          {'\n'}
          <pre className="prettyprint">
            {
              "new Ext.form.FieldSet({\n\ttitle: 'Подписаться на рассылку',\n\trenderTo: Ext.get('subscribeForm4'), \n\tctCls: 'right',\n\twidth:220,\n\titems: [\n\t\temailFieldTest\n\t\t,subscribeButtonTest\n\t],\n\thideLabels: true\n});"
            }
          </pre>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>{' '}</p>
          {'\n'}
          <p>
            {
              'Вот это уже правильно :-) Но уметь делать и свои шаблоны тоже очень правильно.'
            }
            <br />
            {'\n  Но свою рабочую форму я уже не буду переделывать. '}
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
            <Link to="/documentation/extjs/extjs_lessons/lesson5.html">
              {'<< Урок 5. Хранилища и таблицы'}
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
export const ExtJsLesson6Page: React.FC = () => (
  <DocumentationLayout scripts={scripts}>
    <Content />
  </DocumentationLayout>
)

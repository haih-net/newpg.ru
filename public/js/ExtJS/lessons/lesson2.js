function showWindow(){
	var win;
	if(!win){
		var win = new Ext.Window({
			width:500,
			height:300,
			title: 'Наше пробное окошко',
			html:'<h1>Тут размещается код HTML</h2>',
			layout:'fit',
			bodyStyle:{'background-color': '#FFFFFF'}
		})	
	}
	win.show();
}

function showFeedbackWin(){
	var feedWin;
	
	if(!feedWin){
		
		// Данную функцию будем использовать для проверки заполненности формы
		checkForm = function(){
			var emailForm = Ext.getCmp('email');
			var message = Ext.getCmp('message').getValue();
			var okButton = Ext.getCmp('buttonOK');
			
			// указав vtype:'email', мы можем отслеживать валидные ли данные указаны или нет
			if(emailForm.isValid() == false || !emailForm.getValue() || !message){ 
				// Если не валидно, блокируем кнопку ОК
				okButton.setDisabled(true) ;	
			}
			else{ // Иначе делаем ее активной
				okButton.setDisabled(false) ;	
			}
		}
		
		feedWin = new Ext.Window({
			width:500,
			height:300,
			layout: 'fit',
			bodyStyle:{'background-color': '#FFFFFF'},
			title:'Обратная связь',
			modal: true,
			items:[{		// Элементы окна
				xtype: 'form',		// тип элемента - форма
				bodyStyle: {padding: '10px'},
				items:[{			// Элементы формы
					xtype:'textfield',		// Текстовое поле
					fieldLabel:'Имя',
					id:'name'
				},
				{	
					xtype:'textfield',		// Текстовое поле
					fieldLabel: 'Емейл',
					id:'email',
					vtype:'email',			// Маска ввода, иначе тип данных
					enableKeyEvents: true,	// Указываем что надо обрабатывать события клавишь. По умолчанию false
					listeners:{
						keyup:function(){	// Не будет обрабатываться keyup, если не указано enableKeyEvents: true
							checkForm();
						}	
					}
				}, 
				{
					xtype:'fieldset',		// Контейнер для элементов формы
					layout:'fit',			// У элемента form по умолчанию layout form. 
											// Такой шаблон нам не совсем подходит, потому используем fit
					title:'Поле для сообщения',
					items:[{				// Элементы контейнера
						xtype:'textarea',
						id: 'message',
						height:110,
						enableKeyEvents: true,
						listeners:{
							keyup: checkForm
						}
					}]
				}]
			}],
			buttons:[{		// Кнопки окна
				text:'Сохранить',
				disabled: true,
				id:'buttonOK',
				handler:function(){		// Функция, вызываемая при клике по кнопке
					// Используем метод Ext.getCmp для поиска компонента по его ID 
					var name = Ext.getCmp('name').getValue();	
					var email = Ext.getCmp('email').getValue(); 
					var message = Ext.getCmp('message').getValue();
					
					var msg = Ext.Msg;
					msg.minWidth = 400; 
					// Выводим сообщение
					msg.alert('Сообщение обратной связи', 'Вы указали следующие данные:'+
						'<br />Имя: '+ name+
						'<br />Емейл: '+email+
						'<br />Сообщение: '+message ,
						function(){
							// Закрываем окно
							feedWin.close();	
						}
					);
					 
				}
			},
			{
				text: 'Отмена',
				handler: function(){
					feedWin.close();	
				}
			}]
		});
		
		
	}
	
	feedWin.show();
}
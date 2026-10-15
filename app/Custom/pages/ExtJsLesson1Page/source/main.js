function showFeedbackWindow(){
	var feedWindow;
	
	if(!feedWindow){
		
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
		
		feedWindow = new Ext.Window({
			width:500,
			height:300,
			layout: 'fit',
			bodyStyle:{'background-color': '#FFFFFF'},
			title:'Обратная связь',
			modal: true,
			items:[{		// Элементы окна
				xtype: 'form',		// тип элемента - форма
				bodyStyle: {padding: '10px'} ,
				items:[{			// Элементы формы
					xtype:'textfield',		// Текстовое поле
					fieldLabel:'Имя<span class="star">*</span>',
					width:250,
					id:'name'
				}, 
				{	
					xtype:'textfield',		// Текстовое поле
					fieldLabel: 'Е-мейл<span class="star">*</span>',
					id:'email',
					width:250,
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
					title:'Текст сообщения<span class="star">*</span>',
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
					
					if(!message){
						alert('Не потрудитесь, плиз, набрать хоть несколько символов сообщения');
						return;
					}
					
					Ext.Ajax.request({
						url:'sendMsg.php',
						method: 'post',
						params:{
							name: name ,
							email: email ,
							msg: message
						},
						success: function(){
							feedWindow.close();
							alert('Ваше сообщение успешно отправлено. Спасибо большое!');
						},
						failure: function(){
							alert('Ошибка отправки сообщения.  Попробуйте еще раз позже.');	
						}
					});
					 
				}
			},
			{
				text: 'Отмена',
				handler: function(){
					feedWindow.close();	
				}
			}]
		});
		
		
	}
	
	feedWindow.show();
}


Ext.onReady(function(){
	var raiting = Ext.get('rang');
	if(raiting){
		new Ext.form.FormPanel({
			renderTo:raiting,
			id: 'rangForm',				   
			collapsible: true,				   
			title:'Оценить материал',
			autoHeight: true,
			layout: 'fit',
			bodyStyle: {padding: '5px'},
			items:[{
				xtype:'radiogroup',
				autoHeight: true,
				defaults:{name: 'raiting',autoHeight: true},
				items:[{
					boxLabel:'Я итак все знал. Ничего нового.',
					id:'test'
				},
				{
					boxLabel:'Очень много ошибок.'	   
				},
				{
					boxLabel:'Хорошо, но слишком много воды.'	   
				},
				{
					boxLabel:'Хорошо, но можно было бы подробней.'	   
				},
				{
					boxLabel:'Отлично! Очень помогло!'	   
				}],
				listeners:{
					change:function(group, radio){
						text = radio.boxLabel;
						var titleTag = document.getElementsByTagName('title')[0];
						var title = titleTag.innerText || titleTag.innerHTML; 
						
						Ext.Msg.alert('Сообщение с сайта', 'Большое спасибо за Ваш отзыв!');
						Ext.Ajax.request({
							url:'common/saveraiting.html',
							method: 'post',
							params:{
								text: text,
								title: title  
							} 
						});
						Ext.getCmp('rangForm').collapse(true);
					}	
				}
			}]					  
		}); 
	}
});

// Расширяем имеющиеся параметры 
extend = function(obj, addsParams){
	// Каждый элемент добавляемого объекта прибавляем к имеющемуся 
	for(var i in addsParams){
		obj[i] = addsParams[i];	
	}
	return obj;
}

print_r = function(params){
	
		var array = params.obj || params[0];
		
		var WG = new Ext.WindowGroup();
		
		var maxLength = (params.rows ? params.rows : 50);
		var windowWidth = 400;
		var totalWidth = 1600;
		var quantity = totalWidth / 400;
		var wCount = 0
		var titleHeight = 50;
		var c = 0;
		var xStart = 0;
		var yStart = 0;
		var Y = 10;
		
		for(i in array){
			c++; 
			if(c>maxLength) break;
			//alert(Ext.getBody().getSize().height);
			//alert(document.body);
			if(!Ext.getBody()){ 
				alert('Документ еще не за гружен');
				return;
			}
			
			var object = array[i];
			var type = typeof object;
			var text = String(object);
			//alert(object); 
			
			// Смотрим совпадение имен в именах методов
			if(params.method && !eval('/'+params.method+'/i').test(i)) continue; 
			
			// Проверяем тип объекта
			if(params.type){
				//alert(type + '||' + params.type);
				if(type != params.type) continue;
				//alert('adasd');
				params.obj = array[i];
				params.type= '';
				print_r(params);
			}
			
			// Проводим поиск в тексте
			if(params.text && !eval('/'+params.text+'/im').test(i)) continue; 
			
			// Проверяем минимальную длину
			//alert(params.minLength + '||' +  text.substr(0 , 50));
			if(params.minLength &&  text.length < params.minLength  ) continue; 
			
			
			
			if(wCount < quantity){
				wCount ++;
			}
			else{
				wCount = 1;
				Y += titleHeight;
			} 
			X = windowWidth * (wCount - 1);
			
			var windowId = 'window'+ i ;
			new Ext.Window({ 
				id: windowId,
				title: c+')  '+i+': '+ type ,
				manager:WG,
				x: X, 
				y: Y, 
				html:  '<div style="background-color:#FFF; font-size:12px;"><pre>'+ array[i] + '</pre></div>',
				width: windowWidth,
				closeAction:'close',
				bbar:{
					items:[
						{
							xtype: 'button',
							text: 'Закрыть все окна',
							handler: function(){
								WG.hideAll();	
							}
						},
						{
							xtype: 'button',
							text: 'На задний план',
							handler: function(){
								//WG.sendToBack(windowId);
								//Ext.get(windowId).toFront(true); 
								//Ext.get(windowId).hide();
								//alert( );
							}
						}	
					]	
				}
			}).show();
			
			
			
			
			//alert(i+': '+ array[i]);
		}
		return;
	}
	
	print_rs = function(obj, count){
		//obj = this;
		count ? "" : count = 20
		 alert(obj);
		c = 0;
		 for( i in obj){
			c++
			if(c>count) break;
			alert(i+': '+ obj[i]);
			
		}  	
	}
	
	

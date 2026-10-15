// Наш основной объект окна
WINDOW = {
	// Базовые параметры, чтобы не копипастить их постоянно
	getParams:function(){
		return {
			width: 500,
			height: 400,
			title: 'Окошечко',
			layout: 'fit',
			bodyStyle:{
				padding: '5px',
				'background-color': '#FFFFFF'
			},
			listeners:{		// Прослушиватели на события
				close:function(){		// На закрытие окна 
					WINDOW.win = false;	
				}	
			},
			modal: true
		}	
	},
	
	// Выводим окно
	show: function(params){ 
		if(!this.win){ 
			this.win = new Ext.Window(params? params : this.getParams());	
		}
		this.win.show();
	},
	
	// Расширяем имеющиеся параметры 
	extend: function(obj, addsParams){
		// Каждый элемент добавляемого объекта прибавляем к имеющемуся 
		for(var i in addsParams){
			obj[i] = addsParams[i];	
		}
		return obj;
	},
	
	click_: function(text){
		alert('Нажали кнопку '+text);
	},
	
	// Тулбар
	toolbar:{
		items:[{
			text:'Добавить',
			icon: 'images/icons/fam/add.png',
			handler:function(){
				WINDOW.click_('Добавить');	
			}
		},{
			text:'Удалить',
			icon: 'images/icons/fam/delete.gif',
			handler:function(){
				WINDOW.click_('Удалить');	
			}
		}]
	},
	
	// Получаем окно с туллбаром
	showToolbar: function(){
		params = this.extend(this.getParams(), {
			tbar:this.toolbar
		})
		this.show(params);
	},
	
	bbar:{
		items:[{
			text: 'Кнопка 1' 
		},
		{
			text: 'Кнопка 2'	   
		},{
			text: 'Кнопка 3'	   
		}]	
	},
	
	fbar:{
		items:[{
			text: 'Сохранить',
			handler:function(){
				WINDOW.click_('Сохранить');	
			} 
		},
		{
			text: 'Закрыть',
			handler:function(){
				WINDOW.win.close();	
			}
		}]	
	},
	
	showAllBars: function(){
		params = this.extend(this.getParams(), {
			tbar:this.toolbar,
			bbar:this.bbar,
			fbar:this.fbar
		})
		this.show(params);
	},
	
	showResizable:function(){ 
		params = this.extend(this.getParams(), {
			// Наши уже используемые ранее объекты баров
			tbar:this.toolbar,
			bbar:this.bbar,
			fbar:this.fbar,
			
			// Новые параметры: 
			resizable: true,		// Можно изменять размеры окна
			collapsible: true,		// Можно схлопывать/расхлопывать окно
			minimizable: true,		// Можно минимизировать окно
			maximizable:true		// Можно максимизировать окно
		})
		this.show(params);	
	},
	
	tools:function(){
		return [
		{
			id:'print', 
			handler:function(){
				WINDOW.click_('Печать');	
			}
		},{
			id:'refresh', 
			handler:function(){
				WINDOW.click_('Обновить');	
			}
		},{
			id:'search', 
			handler:function(){
				WINDOW.click_('Поиск');	
			}
		}]
	},
	
	onEsc:function(){
				Ext.Msg.confirm(
					'Подтверждение закрытия',
					'Вы нажали Esc. Мне закрыться? :-(', 
					function(act){ 
						if(act == 'yes') WINDOW.win.close();		 
					}
				);	
	},
	
	showWithTools:function(){
		
		tabPanel = new Ext.TabPanel({
			activeTab: 0,
			defaults:{
				bodyStyle:{
					padding:'5px'	
				}	
			},
			items:[{
				title:'Первая вкладка',
				html:'<h2>HTML, размещенный в панели 1</h2>'
			},{
				title:'Вторая вкладка',
				html:'<h2>HTML, размещенный в панели 2</h2>'	   
			},{
				title:'Третья вкладка',
				html:'<h2>HTML, размещенный в панели 3</h2>'	   
			}]
		});
		
		listeners = this.extend(this.getParams().listeners,{
			show:function(){
				alert('Окно открыто');	
			},
			resize:function(){
				var win = WINDOW.win;
				if(win.isVisible())alert(
					'Размеры окна были изменены. Размеры окна: ' + 
win.getWidth() +' на '+ win.getHeight()+' пикселов.'
				);	
			},
			close:function(){
				WINDOW.win = false;
				alert('Окно закрыто');	
			}
		});
		
		params = this.extend(this.getParams(), {
			// Наши уже используемые ранее объекты 
			tbar:this.toolbar,
			bbar:this.bbar,
			fbar:this.fbar,
			
			tools: this.tools(),
			onEsc:this.onEsc,
			listeners: listeners,
			items:[tabPanel]
		})
		this.show(params);	
	}
	
}
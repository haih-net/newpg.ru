Grid  = {
	// Базовые параметры нашего окна
	getWinParams: function(){
		return {
			width: 550,
			height: 300,
			title: 'Хранилища и таблицы',
			buttons:[{
				text: 'ОК',
				handler:function(){
					Grid.win.close();	
				}
			}],
			listeners: {
				close: function(){
					Grid.win = false;	
				}	
			},
			layout: 'fit',
			bodyStyle: {
				'background-color': '#FFFFFF'	
			}
		}	
	},
	
	// Функция инициализации окна
	getWindow: function(params){
		!params ? params = this.getWinParams() : "";
		if(!this.win){
			this.win = new Ext.Window(params);
		}
		return this.win;
	},
	
	// Ридер данных из объекта
	getJsonReader: function(){
		this.JsonReader = new Ext.data.JsonReader({
			root: 'data',		// Элемент объекта, содержащий данные
			idProperty: 'id',	// Коланка, содержащая Уникальные данные ID
			fields: [			// Описание колонок, выводимых в Грид
				{name:'id', type: 'int', allowBlank: false},	 
				{name: 'firstName', allowBlank: false}, 
				{name: 'middleName'}, 
				{name: 'lastName', allowBlank: false},
				{name: 'age', type: 'int'},
				{name: 'weight', type: 'float'}
			]

		});
		return this.JsonReader;
	},
	
	// Данные для Хранилища
	getInputData:function(){
		return { 
				data:[{
					id: 0,
					firstName: 'Михаил',
					lastName: 'Попов',
					middleName: 'Алефтинович',
					age: 43,
					weight: 65.23
				},{
					id: 1,
					firstName: 'Алексей',
					lastName: 'Пупкин',
					age: 25, 
					middleName: 'Петрович' 
				},{
					id: 2,
					firstName: 'Анна',
					middleName: 'Олеговна',
					lastName: 'Иванова',
					age: 31,
					weight: 55.14
				},{
					id: 3,
					firstName: 'Николай',
					lastName: 'Соснов',
					age: 27, 
					middleName: 'Владимирович',
					weight: 78.32
				},{
					id: 4,
					firstName: 'Елена',
					middleName: 'Георгиевна',
					lastName: 'Седова',
					age: 26,
					weight: 57.00 
				}]	
			}
	},
	
	// Получаем хранилище данных
	getStore: function(){
		reader = this.getJsonReader();
		this.store = new Ext.data.Store({
			id: 'store',
			reader: reader,
			// Получаем входные данные для работы
			data: this.getInputData()
		});
		return this.store;
	},
	
	// Получаем Таблицу для отображения данных
	getGrid: function(){
		store = this.getStore();
		this.grid = new Ext.grid.GridPanel({
			store: store,		// хранилище. Важно! Required!
			cm: new Ext.grid.ColumnModel({	// Модель колонок
				columns: [		// Колонки
					{header: 'Фамилия', dataIndex: 'lastName' },
					{header: 'Имя', dataIndex: 'firstName', sortable: false },
					{header: 'Отчество', dataIndex: 'middleName', hidden: true },
					{header: 'Возраст', dataIndex: 'age' },
					{header: 'Вес', dataIndex: 'weight' }						  
				],
				// Флаг что по умолчанию колонки Sortable. по умолчанию false
				defaultSortable: true	
			})
		})
		return this.grid;
	},
	
	showGrid: function(){
		if(this.win) return false;
		
		// Инициализируем окно
		this.getWindow();
		
		// Инициализируем Грид
		this.getGrid();
		
		// Добавляем Грид к Окну
		this.win.add(this.grid);
		
		// Выводим окно
		this.win.show();
	}
}
var JSONText = {
	"books" : [
		{
			"type" : "pdf",
			"value" : "О компании QAP Int.",
			"href" : ""
		}, 
		{
			"type" : "pdf",
			"value" : "Преимущества использования CLM-инструмента для Вашего бизнеса.",
			"href" : ""
		},
		{
			"type" : "pdf",
			"value" : "Перспективы сотрудничества с QAP Int.",
			"href" : ""
		},
		{
			"type" : "pdf",
			"value" : "Описание решения для разработки HTML5-презентаций.",
			"href" : ""
		},
		{
			"type" : "pdf",
			"value" : "Описание разработногоинструмента CLM2CRM и его интеграция с salesforce.com(руский).",
			"href" : ""
		},
		{
			"type" : "pdf",
			"value" : "Описание разработногоинструмента CLM2CRM и его интеграция с salesforce.com(english).",
			"href" : ""
		}
	]
}

function ReservationsViewModel( eMail, text, message){
	var self = this;	
	self.books = JSONText.books;
	var index = 1;
    self.checkArray = ko.observableArray();
	self.books.forEach(function(key){
		key.index = index++;
        key.src = "";
        key.select = false;
        key.checkt = ko.observable(false);

		if (key.type =="pdf") {
			key.src = "assets/images/PDF_Icon.png";				
		}

	});

    self.eMail = ko.observable(eMail);
    self.text = ko.observable(text);
    self.message = ko.observable(message);

    self.checkArrayBook = ko.computed(function() {
        var arrBooks = [];
        self.books.forEach(function(val){
            if(val.checkt()){
                arrBooks.push(val);
            }
        });

        return arrBooks;
    },self);
}
ko.applyBindings(new ReservationsViewModel());
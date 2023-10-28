const questions = [
		{
			id: 1, 
			title: 'JavaScript nima ?',
			answers: {
				'a': 'Dasturlash tili',
				'b': 'Belgilash tili',
				'c': 'a va b javob',
				'd': 'To\'gri javob berilmagan'
			},
            trueAnswer: 'a'
		},

        {
			id: 2, 
			title: 'JavaScriptni qaysi HTML tag yordamida ulaymiz ?',
			answers: {
				'a': '<js> </js>',
				'b': '<scriptjs> </scriptjs>',
				'c': '<script> </script>',
				'd': '<javascript> </javascript>'
			},
            trueAnswer: 'c'
		},

        {
			id: 3, 
			title: 'Quyidagi qaysi kod consoleda Hello World so\'zini chiqaradi ?',
			answers: {
				'a': 'console.logged("Hello World")',
				'b': 'console.print("Hello World")',
				'c': 'console.write("Hello World")',
				'd': 'console.log("Hello World")'
			},
            trueAnswer: 'd'
		},

        {
			id: 4, 
			title: 'JavaScriptda o\'zgaruvchilarni necha xil usulda e\'lon qilish mumkin ?',
			answers: {
				'a': '3 xil usulda',
				'b': '4 xil usulda',
				'c': '2 xil usulda',
				'd': '1 xil usulda'
			},
            trueAnswer: 'a'
		},

        {
			id: 5, 
			title: '<p id=\'text\'>Hello, World</p> JavaScript Selectorlardan foydalanib p tagini matnini Salom dunyoga o\'zgartiring',
			answers: {
				'a': 'document.getElementByName("text").innerHTML = "Salom, Dunyo"',
				'b': 'document.getElementById("text").innerHTML = "Salom, Dunyo"',
				'c': 'document.getElementByClassName("text").innerHTML = "Salom, Dunyo"',
				'd': 'document.getElementsById("text").innerHTML = "Salom, Dunyo"'
			},
            trueAnswer: 'b'
		},

        {
			id: 6, 
			title: 'JavaScriptda funksiyalar qanday e\'lon qilinadi ?',
			answers: {
				'a': 'function keyword yordamida',
				'b': 'define keyword yordamida',
				'c': 'func keyword yordamida',
				'd': 'setFunction keyword yordamida'
			},
            trueAnswer: 'a'
		},

        {
			id: 7, 
			title: 'JavaScriptda falsy qiymatga ega bo\'lgan belgilarni sanab bering',
			answers: {
				'a': 'false, undefined, [], {}',
				'b': 'false, "", undefined, []',
				'c': 'false, null, undefined, ""',
				'd': 'false, undefined, {}, [""]'
			},
            trueAnswer: 'c'
		},

        {
			id: 8, 
			title: 'JavaScriptda arraydan to\'g\'ri foydalanilgan qatorni toping',
			answers: {
				'a': 'const arr = {[1,2,3,4]})',
				'b': 'const arr = "[1,2,3,4,5]"',
				'c': 'const arr = [1,2,3,4,5]',
				'd': 'const arr = arr[1,2,3,4,5]'
			},
            trueAnswer: 'c'
		},

        {
			id: 9, 
			title: 'Qaysi qatorda for loop to\'g\'ri yozilgan ?',
			answers: {
				'a': 'for(let i = 0; i < 10; i++) {}',
				'b': 'for(let i = 0 i < 10 i++) []',
				'c': 'for(i < 10; i++; let i = 0) {}',
				'd': 'forLoop(let i = 0; i < 10; i++) {}'
			},
            trueAnswer: 'a'
		},

        {
			id: 10, 
			title: 'Array elementlarini consoleda for loop yordamida chiqaring: const arr = [1,2,3,4,5] ?',
			answers: {
				'a': 'for(let i = 0; i++) {consol.log(arr[i])}',
				'b': 'for(let i = arr.length; i++) {consol.log(arr[i])}',
				'c': 'forLoop(i < 10; i++; let i = 0) {console.logged(arr[i])}',
				'd': 'for(let i = 0; i < arr.length; i++) {console.log(arr[i])}'
			},
            trueAnswer: 'd'
		},


	];
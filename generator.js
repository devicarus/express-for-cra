const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

const templates = fs.readdirSync('templates')

inquirer
	.prompt([{
		type: 'list',
		name: 'template',
		message: 'What would you like to generate?',
		choices: templates
	},
	{
		name: 'name',
		message: 'How would you like to name it?'
	}])
	.then(initAnswers => {
		const templateConfig = require(`./templates/${initAnswers.template}/template`)
		const files = fs.readdirSync(`templates/${initAnswers.template}`)

		files.map((file) => {
			if (file != 'template.json') {
				const source = path.join('templates', initAnswers.template, file)

				var target
				switch (templateConfig.type) {
					case 'folder':
						target = path.join(templateConfig.dir, initAnswers.name)
						break;
	
					case 'file':
						target = templateConfig.dir
						break;
				
					default:
						console.error('Unknown type')
						break;
				}	

				const original = fs.readFileSync(source, 'utf-8')
				const final = original.replace(/NAME/g, initAnswers.name)

				fs.mkdirSync(target, {recursive:true})
				fs.writeFileSync(path.join(target,file.replace('NAME', initAnswers.name)), final, 'utf-8')
			}
		})
	})
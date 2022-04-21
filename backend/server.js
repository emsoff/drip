const fs = require("fs")
const util = require("util")
const { containerMapping, ounce } = require("./config.js")
const fastify = require('fastify')({ logger: true })

fastify.register(require('fastify-cors'), {})

const readdir = util.promisify(fs.readdir)
const readFile = util.promisify(fs.readFile)

const getAllRecipes = async () => {
    const recipes_files = await readdir('./backend/recipes')
    return await Promise.all(recipes_files.map(async (file) => {
        return JSON.parse(await readFile(`./backend/recipes/${file}`, 'utf8'))
    }))
}

const pour = async (selection, recipes) => {
    let { 0: recipe } = recipes.filter(item => {
        return item.name == selection
    })
    await Promise.all(recipe.recipe.map(async ({ ingredient, ounces }) => {
        console.log(`turning on ${ingredient} which is container ${containerMapping[ingredient]}`)
        await new Promise(r => setTimeout(r, (ounces * ounce * 1000)))
        console.log(`turning off ${ingredient}`)
    }))
    return {};
}

fastify.get('/list', async (request, reply) => {
    return await getAllRecipes()
})

fastify.get('/pour/:selection', async (request, reply) => {
    const recipes = await getAllRecipes()
    const { selection } = request.params
    await pour(selection, recipes)
    return { hello: 'world' }
})

const m = async () => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
m()

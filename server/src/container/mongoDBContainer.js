const { default: mongoose } = require("mongoose")

class MongoDbContainer {
  constructor(url, model) {
    this.url = url
    this.mongoDb = mongoose.connect
    this.mongoDb(this.url)
    this.model = model
  }

  async getDocument(filter) {
    try {
      return (await this.model.findOne(filter)) ?? null
    } catch (e) {
      throw new Error(e)
    }
  }

  async getAll() {
    try {
      let result = await this.model.find()
      return result ?? null
    } catch (e) {
      throw new Error(e)
    }
  }

  async getById(id) {
    try {
      let result = await this.model.findById(id)
      return result ?? null
    } catch (e) {
      throw new Error(e)
    }
  }

  async deleteAll() {
    try {
      return await this.model.deleteMany({})
    } catch (e) {
      throw new Error(e)
    }
  }

  async deleteById(id) {
    try {
      let result = await this.model.findByIdAndDelete(id)
      return result ?? null
    } catch (e) {
      throw new Error(e)
    }
  }

  async save(newModel) {
    try {
      let result = await newModel.save()
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  async update(id, newObj) {
    try {
      let result = await this.model.findByIdAndUpdate(id, newObj)
      return result
    } catch (e) {
      throw new Error(e)
    }
  }

  async findOneAndUpdate(filter, newObj, options = null) {
    try {
      let result = await this.model.findOneAndUpdate(filter, newObj, options)
      return result
    } catch (e) {
      throw new Error(e)
    }
  }
}

module.exports = { MongoDbContainer }
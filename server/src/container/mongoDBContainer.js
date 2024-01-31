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
      return (await this.model.find()) ?? null
    } catch (e) {
      throw new Error(e)
    }
  }

  async getById(id) {
    try {
      return (await this.model.findById(id)) ?? null
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
      return (await this.model.findByIdAndDelete(id)) ?? null
    } catch (e) {
      throw new Error(e)
    }
  }

  async save(newModel) {
    try {
      return await newModel.save()
    } catch (e) {
      throw new Error(e)
    }
  }

  async update(id, newObj) {
    try {
      return await this.model.findByIdAndUpdate(id, newObj)
    } catch (e) {
      throw new Error(e)
    }
  }

  async findOneAndUpdate(filter, newObj, options = null) {
    try {
      return await this.model.findOneAndUpdate(filter, newObj, options)
    } catch (e) {
      throw new Error(e)
    }
  }
}

module.exports = { MongoDbContainer }
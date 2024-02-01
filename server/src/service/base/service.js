class Service {
  constructor(dao) {
    this.dao = dao
  }

  async getDocument(filter) {
    return await this.dao.getDocument(filter)
  }

  async save(obj) {
    return await this.dao.save(obj)
  }

  async getById(id) {
    return await this.dao.getById(id)
  }

  async getAll() {
    return await this.dao.getAll()
  }

  async update(id, obj) {
    return await this.dao.update(id, obj)
  }

  async deleteById(id) {
    return await this.dao.deleteById(id)
  }
}

module.exports = { Service }
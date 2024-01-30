class Service {
  constructor(dao) {
    this.dao = dao
  }

  async getDocument(filter, populateFields) {
    return await this.dao.getDocument(filter, populateFields)
  }

  async save(entity) {
    return await this.dao.save(entity)
  }

  async getById(id, populateFields) {
    return await this.dao.getById(id, populateFields)
  }

  async getAll(filter, populateFields) {
    return await this.dao.getAll(filter, populateFields)
  }

  async update(id, entity) {
    return await this.dao.update(id, entity)
  }

  async deleteById(id) {
    return await this.dao.deleteById(id)
  }

}

module.exports = { Service }
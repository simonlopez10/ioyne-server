

const createClient = async(req, res) => {
  res.send('Create a client')
}

const getAllClients = async(req, res) => {
  res.send('Get all clients')
}

module.exports = {
  createClient,
  getAllClients
}
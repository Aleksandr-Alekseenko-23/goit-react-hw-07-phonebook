import axios from 'axios';

axios.defaults.baseURL = 'https://63371634132b46ee0bdcf94e.mockapi.io';

export const UsersApi = {
  async getContact() {
    const { data } = await axios.get('/contacts/contacts');
    return data;
  },
  async addContact(contact) {
    const { data } = await axios.post('/contacts/contacts', contact);
    return data;
  },
  async deleteContact(id) {
    const { data } = await axios.delete(`/contacts/contacts/${id}`);
    return data;
  },
};

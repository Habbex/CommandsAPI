import axios from "axios"

const baseURL= "http://localhost:5000/api/";

export default {
    DCommands(url=baseURL + 'commands/'){
        return{
            fetchAll: ()=> axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord=> axios.post(url, newRecord),
            update: (id,updateRecord)=> axios.put(url+ id, updateRecord),
            partialUpdate: (id, updateRecord)=> axios.patch(url + id, updateRecord),
            delete: id=> axios.delete(url + id)
        }
    }
}
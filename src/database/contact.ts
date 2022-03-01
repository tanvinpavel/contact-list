class Contact{
    contacts: any[];

    constructor(){
        this.contacts = [];
    }

    getAllContacts(){
        return this.contacts;
    }

    getContactById(id: number){
        return this.contacts.find(d => d.id === id);
    }

    setContact(data: object){
        this.contacts.push(data);
        
        return this.contacts.length;
    }

    updateContact(id: number, payload: any){
        const data = this.contacts.find(item => item.id === id);

        data.name = payload.name;
        data.phone = payload.phone;
        data.email = payload.email;
    }

    deleteContact(id: number){
        this.contacts.forEach((item, index) => {
            if(item.id === id){
                this.contacts.splice(index, 1);
            }
        })
    }
};

const databases = new Contact();

export default databases;
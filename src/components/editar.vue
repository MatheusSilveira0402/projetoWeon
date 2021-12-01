<template>
    <b-card v-if="seen" class="container">
        <b-form-group label="Nome:">
            <b-form-input type="text" v-model="usuario.nome" size='lg' placeholder=""> </b-form-input>
        </b-form-group>
        <b-form-group label="Foto:">
            <b-form-file type="file" v-model="usuario.foto" size='lg'  ></b-form-file>
        </b-form-group> 
        
        <b-button @click="editar(ids, cpf_ou_cnpj)" size="lg" variant="warning" class="btnEditar ml-2">Alterar</b-button>       
    </b-card>
</template>

<script>
export default {
    data (){
        return {
            id: null,
            usuario: {
				nome: '',
                cpf_ou_cnpj: '',
				foto:''
			}
        }
    },
   props: ['ids','cpf_ou_cnpj', 'seen'],

   methods: {
       editar (id, cpf_ou_cnpj){
            this.id = id
            this.usuario.cpf_ou_cnpj = cpf_ou_cnpj
            this.usuario.foto = Date.now() + this.usuario.foto.name
            const headers =  { 'Content-Type':'application/json'}
            this.$http.put(`/${id}`, this.usuario, { headers }).then( () => { this.redirect() })
       },
       redirect() {
				this.$router.push('/')
		}
   }
 
}
</script>

<style>
.btnEditar {
    width: 400px;
    height: 40px;
    align-items: center;
    display: flex;
    float: right;
}


</style>
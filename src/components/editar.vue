<template>
    <b-card>
        <b-form-group label="Nome:">
            <b-form-input type="text" v-model="usuario.nome" size='lg' placeholder=""> </b-form-input>
            <p>{{ ids }}</p>
        </b-form-group>
        <b-form-group label="Foto:">
            <b-form-file type="file" v-model="usuario.foto" size='lg'  ></b-form-file>
        </b-form-group> 

        <b-button @click="editar" size="lg" variant="primary" class="btnLista ml-2">Cadastrar-se</b-button>       
    </b-card>
</template>

<script>
export default {
    data (){
        return {
            usuario: {
				nome: '',
				foto:''
			}
        }
    },
   props: ['ids'],

   methods: {
       editar (){
           this.$http.path('')
       }
   }
 
}
</script>

<style>

</style>
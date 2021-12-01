<template>
    <b-card>
        <hr>
        <b-button @click="obterUsuarios" size="lg" variant="primary" class="btnLista ml-2">Listar Usuarios</b-button>
		<b-button @click="cadastro" size="lg" variant="success" class="btnLista ml-2">Cadastrar-se</b-button>
		<b-list-group>
			<hr>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id" >
				<img class="img" src="./../image/img1.png" alt="image statica">
				<hr>
				<strong>Nome:</strong>{{ usuario.nome }} <br>
				<strong>CPF/CNPJ: </strong>{{ usuario.cpf_ou_cnpj }} <br>
				<b-button variant="warning" class="btnCarregar" v-on:click="seen = !seen">Alterar</b-button>
				<b-button variant="danger"  class="ml-2 btnExcluir" @click="excluir(usuario._id)">Excluir</b-button>
				<hr>
				<editar v-bind:ids="usuario._id" v-bind:cpf_ou_cnpj="usuario.cpf_ou_cnpj"  v-bind:seen="seen"/>
			</b-list-group-item>
		</b-list-group>
    </b-card>
</template>
<style>
.btnLista {	
	height: 47px;
}
.btnExcluir{
	width: 145px;
	height: 50px;
}
.btnCarregar{
	width: 145px;
	height: 50px;
}
.img {
	width: 100px;
	height:100px;
}
</style>

<script>
import editar from './editar.vue'
	export default {
		data(){
			return {
				usuarios: [],
				id: null,
				seen: false,
				offset: 0,
				limit: 2,
				total: 0,
			}
		},
		components: { editar },
		methods: {
			obterUsuarios(){
				this.$http.get(`usuario.json?page=${this.offset}&size=${this.limit}`).then( res => {
					this.usuarios = res.data
					console.log(res)	
				})
			},
			carregar(id){
				this.id = id
				this.usuario = { ...this.usuario[id]}
			},
			excluir(id) {
				this.$http.delete(`/${id}`).then(() => this.obterUsuarios())
			},
			cadastro() {
				this.$router.push('cadastro')
			},
		}
	}
</script>



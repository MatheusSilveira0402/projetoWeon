<template>
    <b-card>
        <hr>
        <b-button @click="obterUsuarios" size="lg" variant="success" class="btnLista ml-2">Listar Usuarios</b-button>
		<b-button @click="cadastro" size="lg" variant="primary" class="btnLista ml-2">Cadastrar-se</b-button>
		<b-list-group>
			<hr>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id" >
				<strong>id:</strong>{{ usuario._id }} <br>
				<strong>Nome:</strong>{{ usuario.nome }} <br>
				<strong>CPF/CNPJ: </strong>{{ usuario.cpf_ou_cnpj }} <br>
				<strong>Foto: </strong>{{ usuario.foto }}<br>
				<b-button variant="warning" class="btnCarregar" @click="editar">Carregar</b-button>
				<b-button variant="danger"  class="ml-2 btnExcluir" @click="excluir(usuario._id)">Excluir</b-button>
				<hr>
				<editar v-bind:ids="usuario._id" />
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
</style>

<script>
import editar from './editar.vue'
	export default {
		data(){
			return {
				usuarios: [],
				id: null
			}
		},
		components: { editar },
		methods: {
			obterUsuarios(){
				this.$http.get('usuario.json').then( res => {
					this.usuarios = res.data	
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
			editar() {
				this.$router.push('editar')
			}
		}
	}
</script>



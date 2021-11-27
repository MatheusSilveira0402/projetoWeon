<template>
    <b-card>
        <hr>
        <b-button @click="obterUsuarios" size="lg" variant="success" class="btnLista ml-2">Listar Usuarios</b-button>
		<b-button @click="cadastro" size="lg" variant="primary" class="btnLista ml-2">Cadastrar-se</b-button>
		<b-list-group>
			<hr>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id" >
				<strong>Nome:</strong>{{ usuario.nome }} <br>
				<strong>CPF: </strong>{{ usuario.cpf }} <br>
				<strong>CNPJ</strong>{{ usuario.cnpj}} <br>
				<strong>Foto: </strong>{{ usuario.foto }}<br>
				<b-button variant="warning" class="btnCarregar" @click="carregar(id)">Carregar</b-button>
				<b-button variant="danger"  class="ml-2 btnExcluir" @click="excluir(id)">Excluir</b-button>
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
	export default {
		data(){
			return {
				usuarios: [],
				id: null
			}
		}, 
		methods: {
			obterUsuarios(){
				this.$http.get('usuario.json').then( res => {
					this.usuarios = res.data	
				})
			},
			cadastro() {
				this.$router.push('cadastro')
			}
		}
	}
</script>



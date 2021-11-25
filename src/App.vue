<template>
	<div id="app" class="container">
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size='lg' v-model="usuario.nome" placeholder="Informe o Nome"></b-form-input>
			</b-form-group>
		</b-card>

		<b-card>
			<b-form-group label="CPF:">
				<b-form-input v-mask="'###.###.###-##'" size='lg' v-model="usuario.cpf" placeholder="Informe o CPF"></b-form-input>
			</b-form-group>
		</b-card>

		<b-card>
			<b-form-group label="CNPJ:">
				<b-form-input size='lg' v-mask="'##.###.###/####-##'" v-model="usuario.cnpj" placeholder="Informe o CNPJ"></b-form-input>
			</b-form-group>
		</b-card>

		<b-card>
			<b-form-group label="Foto:">
				<b-form-file type="file" size='lg' v-model="usuario.foto"></b-form-file>
			</b-form-group>
		</b-card>
		<hr>
		<b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
	</div>
</template>

<script>
export default {
	data(){
		return {
			usuario: {
				nome: '',
				cpf: '',
				cnpj:'',
				foto:''
			}
		}
	}, 
	methods: {
		salvar(){
			console.log(this.usuario.foto)
			this.$http.post('usuario.json', this.usuario)
			.then(resp => {
				this.usuario.nome = ''
				this.usuario.cpf = ''
				this.usuario.cnpj = ''
				this.usuario.foto = ''
			})
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>

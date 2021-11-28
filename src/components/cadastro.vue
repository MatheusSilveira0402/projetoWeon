<template>
    <b-card class="container">
			<b-card>
				<b-form-group label="Nome:">
					<b-form-input type="text" size='lg' v-model="usuario.nome" placeholder="Informe o Nome"></b-form-input>
				</b-form-group>
			</b-card>

			<b-card>
				<b-form-group class="mt-2" label="CPF/CNPJ">
					<b-form-input  type="text" size='lg' v-model="usuario.cpf_ou_cnpj" v-mask="dynamicMask" placeholder="Informe o CPF ou CNPJ"></b-form-input>
				</b-form-group>
			</b-card>

			<b-card>
					<b-form-group label="Foto:">
						<b-form-file type="file" size='lg' v-model="usuario.foto"></b-form-file>
					</b-form-group>

					<p v-if="errors.length">
						<b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
						<ul>
						<li v-for="(error, id) in errors" :key="id" style="color: red;">{{ error }}</li>
						</ul>
					</p>
			</b-card>

			<hr>
			<b-button @click="checkForm" size="lg" variant="primary" class="btnCadastrar ml-2">Cadastrar</b-button>
			<b-button @click="buttonobterusuario" size="lg" variant="success" class="btn ml-2"> Listar Usuario </b-button>
			<hr>	
		</b-card>		
</template>
<style>
.btn {
	width: 47%;
	height: 9%;
}

.container {
	width: 100%;
	height: 100%;
}

.btnCadastrar {
	width: 47%;
	height: 9%;
}
</style>
<script>


export default {
	
	data(){
		return {
			errors: [],
			usuario: {
				nome: '',
				cpf_ou_cnpj: '',
				foto:''
			}
		};
	},
	computed: {
         dynamicMask(){
             if(this.usuario.cpf_ou_cnpj.length > 14){
                 return '##.###.###/####-##'
             }else{
                 return '###.###.###-##'
             }
         }
     }, 

	methods: {
		limpar(){
			this.usuario.nome = ''
			this.usuario.cpf_ou_cnpj = ''
			this.usuario.foto = null
		},
		salvar(){
			this.usuario.foto = Date.now() + this.usuario.foto.name
			this.$http.post('usuario.json', this.usuario)
			.then( () => this.limpar())
		},
		buttonobterusuario() {
				this.$router.push('/')
		},
		checkForm: function (e) {
			if (this.usuario.nome && this.usuario.cpf_ou_cnpj && this.usuario.foto) {
				this.salvar()
				return true;
			}

			this.errors = [];

			if (!this.usuario.nome) {
				this.errors.push('O Nome é obrigatório.');
			}
			if (!this.usuario.cpf_ou_cnpj) {
				this.errors.push('O CPF ou CNPJ é obrigatória.');
			}
			if (!this.usuario.foto) {
				this.errors.push('A Foto é obrigatória.');
			}
			e.preventDefault()
		}	
	}
}
</script>


    
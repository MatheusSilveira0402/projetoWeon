<template>
        <b-card>
            <b-form-group label="Nome:">
                <b-form-input type="text" size='lg' v-model="usuario.nome" placeholder="Informe o Nome"></b-form-input>
            </b-form-group>
            <b-form-group label="Foto:">
                    <b-form-file type="file" size='lg' v-model="usuario.foto"></b-form-file>
            </b-form-group>
        </b-card>
</template>


<script>
	export default {
		data(){
			return {
				usuarios: [],
				id: null
			}
		}, 
		methods: {
			carregar(id){
				this.id = id
				this.usuario = { ...this.usuario[id]}
			},
		}
	}
</script>
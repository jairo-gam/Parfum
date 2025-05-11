const app = Vue.createApp({
    data() {
        return {
            brands: brandsData,
            showModal: false,
            selectedBrand: {},
            form: {
                name: '',
                email: '',
                message: ''
            },
            formSubmitted: false
        }
    },
    methods: {
        showBrandDetails(brand) {
            this.selectedBrand = brand;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        submitForm() {
            // Simulación de envío
            console.log('Formulario enviado:', this.form);
            this.formSubmitted = true;

            // Resetear formulario después de 3 segundos
            setTimeout(() => {
                this.form = {
                    name: '',
                    email: '',
                    message: ''
                };
                this.formSubmitted = false;
            }, 3000);
        }
    }
});

app.mount('#app');
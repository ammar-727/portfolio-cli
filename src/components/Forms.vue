<template>
    <div>
        <b-container class='my-5 main-conatiner'>
            <h3 class='display-4 text-center my-5'>Here for a project? Fill in the form below...</h3>
            <b-form @submit= "onSubmit" @reset= "onReset">
                
                <b-form class='names-form' inline>
                    <label id='input-group-1' for='input-1'>First Name:</label>
                    <b-input id='input-1' class='forms-input form-names' v-model='form.firstname' placeholder='e.g Ammar' required></b-input>

                    <label id='input-group-2' for='input-2'>Last Name:</label>
                    <b-input id='input-2' class='forms-input form-names' v-model='form.lastname' placeholder='e.g Syed' required></b-input>
                </b-form>

                <b-form-group id='input-group-3' class='forms-input' label='E-mail:' label-for='input-3'>
                    <b-form-input id='input-3' v-model='form.email' type='email' required placeholder='Enter Email'></b-form-input>
                </b-form-group>

                <b-form-group id='input-group-4' class='forms-input' label='Work:' label-for='input-4'>
                    <b-form-select id='input-4' v-model='form.work' :options='works' required></b-form-select>
                </b-form-group>

                <b-form-group id='input-group-5' class='forms-input' label='Budget:' label-for='input-5'>
                    <b-form-select id='input-5' v-model='form.budget' :options='budgets' required></b-form-select>
                </b-form-group>

                <b-form-group id='input-group-6' class='forms-input' label='Work Description:' label-for='input-6'>
                    <b-form-textarea id='input-6' v-model='form.description' rows='7' max-rows='7' placeholder='Enter some details of your project...'></b-form-textarea>
                </b-form-group>

                <div class='d-flex justify-content-center'>
                    <b-button type="submit" variant="dark" class='mx-3 my-5'>Submit</b-button>
                    <b-button type="reset" variant="dark" class='mx-3 my-5'>Reset</b-button>
                </div>

            </b-form>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                firstname: '',
                lastname: '',
                email: '',
                work: null,
                budget: null,
                description: '',
            },
            works: [{text: 'Select One', value: null}, 'Front-end', 'Backend', 'Full Stack'],
            budgets: [{text: 'Select One', value: null}, 'Below $1000', '$1000 - $3000', '$3000 - $5000', '$5000+'],
        }
    },

    methods: {
        onSubmit(event) {
            event.preventDefault()           
            this.onReset(event)
        },
        onReset(event) {
            event.preventDefault()
            this.form.firstname = ''
            this.form.lastname = ''
            this.form.email = ''
            this.form.work = null
            this.form.budget = null
            this.form.description = ''
        }
    }
}
</script>

<style>

.forms-input {
    margin-bottom: 20px;
}

.form-names {
    margin-right: 30px;
}

@media only screen and (min-width: 768px) {
    .form-names {
    margin-top: 20px;
    margin-left: 10px;
  }
}

</style>

<template>
    <div>
        <b-container fluid="lg" class="text-center">
            <h1 class="display-4 my-5"><mark>SKILLS</mark></h1>
            <b-row class="mx-auto ">
                <b-col lg="6" clas="my-4 justify-content-around">
                    <h3 class="bg-danger mb-0">Front End</h3>
                    <div class="bg-dark text-white-50 p-5 mt-0 skill-list d-flex justify-content-center align-items-center">
                        <ul class="bg-secondary">
                            <li v-for= "items in front" :key= "items" class="m-3">
                                {{ items | uppercase }}
                            </li>
                        </ul>
                    </div>    
                </b-col>
                <b-col lg="6" clas="my-4">
                    <h3 class="bg-danger mb-0">Back End</h3>
                    <div class="bg-dark text-white-50 p-5 mt-0 skill-list d-flex justify-content-center align-items-center">
                        <ul class="bg-secondary">
                            <li v-for= "items in back" :key= "items" class="m-3">
                                {{ items | uppercase }}
                            </li>
                        </ul>
                    </div>    
                </b-col> 
            </b-row>
        </b-container>
    </div>
</template>
    
<script>

export default {
    data() {
        return {
            front: ['html', 'css', 'javascript', 'bootstrap', 'bootstrap-vue', 'vuejs', 'vuecli'],
            back: ['python', 'django', 'mysql', 'web hosting']
        }
    },

    filters: {
        uppercase: function(value) {
            return value.toUpperCase();
        }
    }
}
</script>

<style>
.skill-list {
    height: 400px;
}

.skill-list ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
}
</style>

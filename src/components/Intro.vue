<template>
    <div>
        <b-container class="text-center">
            <b-row class="mx-auto my-5">
                <b-col lg=2>
                    <img src="../assets/pp.jpg" width="150px" height="150px" class="rounded-circle border border-dark"/>
                </b-col>
                <b-col lg=10>
                    <p class="lead my-5"><small><mark>{{ bio }}</mark></small></p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bio: "Hello there, to my portfolio. I am Ammar, a professional full stack web developer. Self taught programmer. Down below you can check out projects that i have worked on, skills that i possess. Looking for a project? just fill in the form down below. Thanks!",
        }
    }
}
</script>

<style>

</style>
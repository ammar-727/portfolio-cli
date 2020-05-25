<template>
    <div class="text-center">
        <h1 class="display-4 my-5"><mark>GIGS</mark></h1>
        <b-container fluid="lg">
            <b-row class="mx-auto">
                <b-col lg="4" class="my-4" v-for='gig in gigs' :key='gig'>
                    <a :href="gig.url" target="_blank"><img :src="require('../assets/' + gig.img)" width="250" height="250" class="border border-success rounded-circle"/></a>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gigs: [
                {
                    project: "Spotify",
                    url: "https://www.spotify.com/us/",
                    img: "spotify.png"
                },
                {
                    project: "Khan Academy",
                    url: "https://www.khanacademy.org/profile/kaid_385372636982405710465563/courses",
                    img: "khan.png"
                },
                {
                    project: "City International Co.",
                    url: "http://www.cityinternationalco.com/",
                    img: "hvac.jpg"
                },
            ],
        }
    }
}
</script>



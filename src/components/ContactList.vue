<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="(contact, index) in contacts" :key="contact._id"
            :class="{ active: index === activeIndex }" @click="updateActiveIndex(index)">
            {{ contact.name}}
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        contacts: { type: Array, default: [] },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            console.log(index);
            this.$emit("update:activeIndex", index);
        }
    },
}
</script>

<style>

</style>
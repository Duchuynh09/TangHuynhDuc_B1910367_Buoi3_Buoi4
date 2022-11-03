<template>
  <div class="page">
    <h4>Thêm Liên hệ</h4>
    <ContactForm 
    :contact="{}" 
    @submit:contact="addContact" />
    <p>{{ message }}</p>
  </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";
export default {
  components: {
    ContactForm
  },
  data() {
    return {
      message: ""
    };
  },
  methods: {
    async addContact(data) {
      try {
        await ContactService.create(data);
        this.message = "Liên hệ được thêm thành công.";
        await setTimeout(() => {
            this.$router.push({ path: "/" });
          }, 500);
      } catch (error) {
        console.log(error);
        // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
        this.$router.push({
          name: "notfound",
          params: {
            pathMatch: this.$route.path.split("/").slice(1),
          },
          query: this.$route.query,
          hash: this.$route.hash,
        });
      }
    }
  }
};
</script>

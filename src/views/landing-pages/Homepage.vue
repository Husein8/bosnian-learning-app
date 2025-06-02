<template>
  <div>
    <Navbar />
    <Hero />
    <FeaturesSection />
    <AppDescription />
    <TestimonialCarousel />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
import Hero from "../../components/Hero.vue";
import TestimonialCarousel from "../../components/TestimonialCarousel.vue";
import FeaturesSection from "../../components/FeaturesSection.vue";
import AppDescription from "../../components/AppDescription.vue";
</script>

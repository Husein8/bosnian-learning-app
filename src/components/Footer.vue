<template>
  <footer class="bg-gray-100 text-gray-800">
    <div class="py-12 relative overflow-hidden">
      <!-- Parallax icons can be added here if needed -->

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <!-- About -->
          <div>
            <h3 class="text-xl font-semibold mb-4">ABC Djeca</h3>
            <p class="text-sm leading-relaxed">
              ABC Djeca je aplikacija za učenje bosanskog jezika. Namijenjena je djeci od 1 do 10 godina i nudi bogat sadržaj za zabavno i interaktivno učenje.
            </p>
          </div>

          <!-- Linkovi -->
          <div>
            <h3 class="text-xl font-semibold mb-4">Linkovi</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="/aplikaciija-za-ucenje-bosanskog-jezika" class="hover:underline">Online Škola</a></li>
              <li><a href="/blog" class="hover:underline">Blog</a></li>
              <li><a href="/aktuelnosti" class="hover:underline">Aktuelnosti</a></li>
              <li><a href="/registracija" class="hover:underline">Registracija</a></li>
              <li><a href="/partners" class="hover:underline">Partneri</a></li>
              <li><a href="/privacy" class="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          <!-- Kontakt -->
          <div>
            <h3 class="text-xl font-semibold mb-4">Kontakt</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <i class="fas fa-home mr-1"></i>
                ABC Djeca<br />
                444 N. Michigan Avenue<br />
                Suite 1200, Chicago, IL 60611
              </li>
              <li>
                <i class="fas fa-envelope mr-1"></i>
                <a href="mailto:admin@abcdjeca.com" class="hover:underline">admin@abcdjeca.com</a>
              </li>
            </ul>
          </div>

          <!-- Socials & Logo -->
          <div>
            <h3 class="text-xl font-semibold mb-4">Pratite nas</h3>
            <div class="flex space-x-4 mb-4">
              <a href="https://www.facebook.com/abcdjeca/" target="_blank" title="Facebook" class="hover:text-blue-600"><i class="fab fa-facebook-f"></i></a>
              <a href="https://www.youtube.com/@ABCDjeca/videos" target="_blank" title="YouTube" class="hover:text-red-600"><i class="fab fa-youtube"></i></a>
              <a href="https://www.etsy.com/shop/ABCDjeca" target="_blank" title="Etsy" class="hover:text-orange-600"><i class="fab fa-etsy"></i></a>
              <a href="https://www.instagram.com/abc_djeca/" target="_blank" title="Instagram" class="hover:text-pink-600"><i class="fab fa-instagram"></i></a>
            </div>
            <img src="https://www.abcdjeca.com/images/footer-logo.svg" alt="ABC Djeca Logo" class="w-24" />
          </div>

        </div>
      </div>
    </div>

    <div class="bg-gray-200 py-4">
      <div class="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600">
        © 2025 ABC Djeca. Sva prava zadržana.
      </div>
    </div>
  </footer>
</template>

<script setup>
// No logic needed
</script>

<style scoped>
/* If you want to add parallax icons later, you can style them here */
</style>


<template>
  <div>
    <h1 class="bg-amber-700">this is a NAVBAR</h1>

    <!-- Footer section -->
    <footer class="bg-gray-900 text-white py-10 mt-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between">

          <!-- Left Section -->
          <div class="mb-6 md:mb-0">
            <h2 class="text-xl font-bold mb-4">ABCD JECA</h2>
            <p class="text-gray-400 max-w-sm">
              Bosnian learning platform helping kids connect with their heritage and language.
            </p>
          </div>

          <!-- Middle Section: Contact -->
          <div class="mb-6 md:mb-0">
            <h3 class="text-lg font-semibold mb-3">Contact Us</h3>
            <ul class="text-gray-400">
              <li>Email: <a href="mailto:info@abcdjeca.com" class="underline hover:text-amber-400">info@abcdjeca.com</a></li>
              <li>Phone: <a href="tel:+1234567890" class="underline hover:text-amber-400">+1 (234) 567-890</a></li>
              <li>Address: 123 Bosnian St, Sarajevo</li>
            </ul>
          </div>

          <!-- Right Section: Social Links -->
          <div>
            <h3 class="text-lg font-semibold mb-3">Follow Us</h3>
            <div class="flex space-x-4 text-gray-400">
              <!-- Facebook -->
              <a href="#" aria-label="Facebook" class="hover:text-amber-400">
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.03 3.66 9.2 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.22c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.89h2.77l-.44 2.9h-2.33v7.03C18.34 21.27 22 17.1 22 12.07z"/></svg>
              </a>
              <!-- Twitter -->
              <a href="#" aria-label="Twitter" class="hover:text-amber-400">
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48 4.48 0 0 0 1.96-2.48c-.88.52-1.85.9-2.88 1.1A4.52 4.52 0 0 0 16.68 2c-2.5 0-4.52 2.06-4.52 4.6 0 .36.04.7.12 1.03-3.76-.2-7.1-2-9.33-4.74a4.56 4.56 0 0 0-.61 2.32c0 1.6.82 3 2.07 3.83a4.4 4.4 0 0 1-2.05-.56v.06c0 2.23 1.58 4.07 3.67 4.5a4.47 4.47 0 0 1-2.04.07c.58 1.83 2.27 3.15 4.27 3.19a9 9 0 0 1-5.56 1.92c-.36 0-.72-.02-1.07-.06a12.73 12.73 0 0 0 6.92 2.02c8.3 0 12.85-7.03 12.85-13.14 0-.2 0-.42-.02-.62A9.22 9.22 0 0 0 23 3z"/></svg>
              </a>
              <!-- Instagram -->
              <a href="#" aria-label="Instagram" class="hover:text-amber-400">
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm5.5-.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div class="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          &copy; 2025 ABCD JECA. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "YourComponentName"
}
</script>

<style scoped>
/* your styles here */
</style>

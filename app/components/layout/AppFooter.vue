<script setup lang="ts">
import { assets } from "~/data/site"
</script>

<template>
  <footer class="border-t border-nav-border bg-bg-footer">
    <div class="container py-8">
      <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <img
          :src="assets.logo"
          alt="Rivoj 98"
          class="h-7 w-auto opacity-70"
          width="140"
          height="28"
          loading="lazy"
        />
        <p class="text-xs text-fg-dim">
          © {{ new Date().getFullYear() }} Rivoj 98
        </p>
      </div>
    </div>
  </footer>
</template>

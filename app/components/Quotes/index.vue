<script setup lang="ts">
const items = [
  {
    text: "I've had the pleasure of managing Viktor in the frontend team, and I can honestly say he's been one of the engineers I've trusted the most. Whenever we had key product initiatives — the dapp page, DappRadar PRO, multichain staking, quests — Viktor was always the person I felt completely comfortable handing them to. He delivers fast, with great attention to detail, and always with a level of quality you can rely on. What really stands out about Viktor is how easy he is to work with. He communicates openly, asks smart questions only when they truly add value, and never hesitates to dive into new frameworks or patterns. No matter the challenge, he approaches it with calmness, curiosity, and a genuinely positive attitude. On a personal level, Viktor is just a great teammate to have around — friendly, supportive, and someone who brings good energy to the team. Any product team would be lucky to have him, and I'm grateful I had the chance to work with him so closely.",
    author: "Giedrius V., Lead Frontend engineer @ DappRadar",
  },
  {
    text: "Viktor is a front-end genius. He zooms into the details, asks smart questions only when needed, and can deliver almost any feature without extra hand-holding. New frameworks or patterns don't faze him - he picks them up fast and keeps pace with the latest trends. His React skills are top-tier; he's a true expert in our UI stack. On top of that, he's easy to talk with, has outstanding soft skills, and uplifts everyone around him. Any product team would be lucky to have him.",
    author: "Tadas M., Technical Engineering Manager @ DappRadar",
  },
];
</script>

<template>
  <div class="w-full bg-neutral-50 p-4 rounded-lg">
    <UCarousel
      loop
      :autoplay="{ delay: 5000 }"
      v-slot="{ item }"
      :items="items"
      class="w-full"
      :ui="{ item: 'basis-full' }"
    >
      <UIcon name="ri:double-quotes-l" class="size-32" />
      <p class="mb-4 w-full">{{ item.text }}</p>
      <div class="text-sm font-semibold mt-1 text-center">
        - {{ item.author }}
      </div>
    </UCarousel>
  </div>
</template>

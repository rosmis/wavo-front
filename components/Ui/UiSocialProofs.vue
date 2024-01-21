<template>
    <UiLevel column class="relative mt-6">
        <UiAvatar
            v-for="(avatarUrl, index) in randomDiscordAvatarUrls"
            :key="`avatar-${index}`"
            :avatar-url="avatarUrl"
            :index="index"
        />

        <p class="text-white text-center">
            Ces revendeurs nous font confiance <br />
            pour vendre leurs paires
        </p>
    </UiLevel>
</template>

<script lang="ts" setup>
import discordAvatarUrls from "../../types/discord_avatars_url";

const randomDiscordAvatarUrls = ref<string[]>(
    discordAvatarUrls.sort(() => Math.random() - Math.random()).slice(0, 13)
);
</script>

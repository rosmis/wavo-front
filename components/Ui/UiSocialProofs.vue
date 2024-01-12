<template>
    <UiLevel column class="relative">
        <UiAvatar
            v-for="(avatarUrl, index) in randomDiscordAvatarUrls"
            :key="`avatar-${index}`"
            :avatar-url="avatarUrl"
            :index="index"
        />
        <p class="text-white mt-4">
            + 117 utilisateurs, + 550 ventes ce mois-ci
        </p>
    </UiLevel>
</template>

<script lang="ts" setup>
import discordAvatarUrls from "../../types/discord_avatars_url";

const randomDiscordAvatarUrls = ref<string[]>(
    discordAvatarUrls.sort(() => Math.random() - Math.random()).slice(0, 13)
);
</script>

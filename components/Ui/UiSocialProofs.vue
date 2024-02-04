<template>
    <UiLevel column class="relative mt-6">
        <UiLevel
            space="none"
            class="pt-8 pb-4 md:flex-row !flex-row"
            @mouseenter="playAnimation(true)"
            @mouseleave="playAnimation(false)"
        >
            <UiAvatar
                v-for="(avatarUrl, index) in randomDiscordAvatarUrls"
                :key="`avatar-${index}`"
                :avatar-url="avatarUrl"
                :index="index"
                class="avatar"
            />
        </UiLevel>

        <p class="text-white test text-center">
            Ces revendeurs nous font confiance <br />
            pour vendre leurs paires
        </p>
    </UiLevel>
</template>

<script lang="ts" setup>
import translateXAvatarValues from "~/types/translateXAvatarValues";
import discordAvatarUrls from "../../types/discord_avatars_url";

const props = defineProps<{
    isMobile: boolean;
}>();

const { $gsap: gsap, $Power3: Power3 } = useNuxtApp();

onMounted(() => (avatarRefs.value = document.querySelectorAll(".avatar")));

const randomDiscordAvatarUrls = ref<string[]>(
    discordAvatarUrls.sort(() => Math.random() - Math.random()).slice(0, 13)
);
const avatarRefs = ref<null | NodeListOf<Element>>(null);

function playAnimation(isMouseHovered: boolean) {
    if (!avatarRefs.value || props.isMobile) return;

    Array.from(avatarRefs.value).forEach((avatar, index) => {
        const updatedHoverTranslateValue =
            +translateXAvatarValues.value[index + 1].split("rem")[0] / 2;

        gsap.to(avatar, {
            x: isMouseHovered
                ? `${updatedHoverTranslateValue}rem`
                : translateXAvatarValues.value[index + 1],
            duration: 1,
            ease: Power3.easeInOut,
        });
    });
}
</script>

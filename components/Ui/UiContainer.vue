<template>
    <div
        class="custom-container-blog"
        :class="{
            'w-full': full,
            'fixed top-0 left-0 right-0': fixed,
        }"
    >
        <slot />
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    full?: boolean;
    fixed?: boolean;
}>();
</script>

<style scoped>
.custom-container-blog {
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
}
@media screen and (max-width: 992px) {
    .custom-container-blog {
        max-width: 993px;
        padding-right: 24px;
        padding-left: 24px;
    }
}
@media screen and (max-width: 768px) {
    .custom-container-blog {
        max-width: 767px;
    }
}
</style>

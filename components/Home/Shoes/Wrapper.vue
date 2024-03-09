<template>
    <HomeShoesBred :path="assetPathsDict[index]" />

    <TresMesh @click="() => index++" :position="[2, 5, 20]">
        <TresBoxGeometry :args="[40, 30, 11]" />
        <!-- <TresMeshBasicMaterial color="blue" /> -->
        <TresMeshBasicMaterial color="blue" :opacity="0" transparent />
    </TresMesh>
</template>

<script lang="ts" setup>
const index = ref(0);

const assetPathsDict = {
    0: "/img/shoes/Jordan4_FireRed.glb",
    1: "/img/shoes/Jordan4MilitaryBlack.glb",
};
</script>

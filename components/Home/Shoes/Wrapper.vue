<template>
    <TresCanvas v-bind="gl" class="w-full h-full">
        <TresPerspectiveCamera :position="[2, 25, 50]" :look-at="[0, 2, 0]" />

        <Suspense>
            <HomeShoesBred :path="assetPathsDict[index % 5]" />
        </Suspense>

        <TresMesh @click="() => index++" :position="[2, 5, 20]">
            <TresBoxGeometry :args="[40, 30, 11]" />
            <!-- <TresMeshBasicMaterial color="blue" /> -->
            <TresMeshBasicMaterial color="blue" :opacity="0" transparent />
        </TresMesh>

        <TresAmbientLight :color="'#ffffff'" :intensity="0.7" />

        <TresPointLight
            :color="'#ffffff'"
            :intensity="10"
            :position="[10, 10, 10]"
        />
        <TresPointLight
            :color="'#ffffff'"
            :intensity="100"
            :position="[-10, 10, -10]"
        />
    </TresCanvas>
</template>

<script lang="ts" setup>
import { BasicShadowMap, NoToneMapping, SRGBColorSpace, Vector3 } from "three";

const gl = {
    shadows: false,
    alpha: true,
    shadowMapType: BasicShadowMap,
    outputColorSpace: SRGBColorSpace,
    toneMapping: NoToneMapping,
};

const index = ref(0);

const assetPathsDict = {
    0: "/img/shoes/aj1.glb",
    1: "/img/shoes/aj4_firered.glb",
    2: "/img/shoes/dunk_blue.glb",
    3: "/img/shoes/aj4_military_black.glb",
    4: "/img/shoes/dunk_triple_pink.glb",
};
</script>

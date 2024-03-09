<template>
    <TresCanvas v-bind="gl">
        <TresPerspectiveCamera :position="[2, 25, 50]" :look-at="[0, 2, 0]" />
        <!-- <OrbitControls /> -->

        <Suspense>
            <HomeShoesWrapper />
        </Suspense>

        <TresDirectionalLight
            color="#F78B3D"
            :position="[3, 3, 3]"
            :intensity="1"
        />
        <TresAmbientLight :intensity="2" />
    </TresCanvas>
</template>

<script lang="ts" setup>
import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from "three";

const gl = {
    clearColor: "#05050a",
    shadows: true,
    alpha: false,
    shadowMapType: BasicShadowMap,
    outputColorSpace: SRGBColorSpace,
    toneMapping: NoToneMapping,
    windowSize: true,
};
</script>

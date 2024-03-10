<template>
    <TresCanvas v-bind="gl">
        <TresPerspectiveCamera :position="[2, 25, 50]" :look-at="[0, 2, 0]" />
        <!-- <OrbitControls /> -->

        <Suspense>
            <HomeShoesWrapper />
        </Suspense>

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
    clearColor: "#05050a",
    shadows: false,
    alpha: false,
    shadowMapType: BasicShadowMap,
    outputColorSpace: SRGBColorSpace,
    toneMapping: NoToneMapping,
    windowSize: true,
};
</script>

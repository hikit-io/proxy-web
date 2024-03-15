<script setup lang="ts">
import { useAppBar } from '@/composable/useAppBar'
import useEnv from '@/composable/useEnv'
import { useRouter } from 'vue-router'

const { showLeft, showLeftPop, toggleLeftPop } = useAppBar()

const { title } = useEnv()

const { push } = useRouter()
</script>

<template>
  <var-space class="app-bar-left" :align="'center'">
    <var-button class="menu-btn" v-if="showLeft" @click="toggleLeftPop(true)" size="small" outline text>
      <var-icon name="menu"></var-icon>
    </var-button>
    <router-link to="/" class="title">
      {{ title }}
    </router-link>
  </var-space>
  <var-popup class="app-bar-left-popup" v-model:show="showLeftPop" position="left">
    <div class="app-bar-left-popup__body">
      <div class="title">{{ title }}</div>
      <var-divider></var-divider>
      <div class="app-bar-left-popup__menu">
        <var-button class="menu-btn" @click="push('/')" text>
          <var-space>
            <var-icon name="home" />
            Home
          </var-space>
        </var-button>
      </div>
    </div>
  </var-popup>
</template>

<style scoped>
.app-bar-left {
  display: flex;
}

.app-bar-left .title {
  color: white;
  text-decoration: none;
}

.app-bar-left .menu-btn {
  width: 100%;
  height: 100%;
  padding: 0.2em;
}

.app-bar-left-popup__body {
  width: 300px;
  padding: 1.5em;
}

.app-bar-left-popup__menu {
  display: flex;
  flex-direction: column;
}

.app-bar-left-popup__menu .menu-btn {
  justify-content: flex-start;
  padding-left: 0.5em;
}

.app-bar-left-popup__menu .menu-btn .var-space {
  align-items: center;
}
</style>
